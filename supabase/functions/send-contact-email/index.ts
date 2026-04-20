import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { SMTPClient } from "https://deno.land/x/denomailer@1.6.0/mod.ts";
import { z } from "https://deno.land/x/zod@v3.22.4/mod.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.81.1";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

// Schéma de validation Zod identique au frontend
const contactFormSchema = z.object({
  name: z.string()
    .trim()
    .min(2, "Le nom doit contenir au moins 2 caractères")
    .max(100, "Le nom ne peut pas dépasser 100 caractères"),
  
  email: z.string()
    .trim()
    .email("Email invalide")
    .max(255, "L'email est trop long"),
  
  phone: z.string()
    .trim()
    .optional()
    .or(z.literal("")),
  
  subject: z.string()
    .trim()
    .min(3, "Le sujet doit contenir au moins 3 caractères")
    .max(200, "Le sujet ne peut pas dépasser 200 caractères"),
  
  message: z.string()
    .trim()
    .min(10, "Le message doit contenir au moins 10 caractères")
    .max(2000, "Le message ne peut pas dépasser 2000 caractères"),
  
  website: z.string().max(0, "Spam détecté"),
});

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    console.log("📧 Début du traitement de l'envoi d'email");
    
    // Extraire l'adresse IP du client pour le rate limiting
    const clientIP = req.headers.get('x-forwarded-for')?.split(',')[0].trim() || 
                     req.headers.get('x-real-ip') || 
                     'unknown';
    
    console.log(`🔍 Vérification rate limiting pour IP: ${clientIP}`);
    
    // Initialiser le client Supabase pour le rate limiting
    const supabaseUrl = Deno.env.get('SUPABASE_URL')!;
    const supabaseKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!;
    const supabase = createClient(supabaseUrl, supabaseKey);
    
    // Vérifier si cette IP a déjà soumis récemment (dans les 5 dernières minutes)
    const fiveMinutesAgo = new Date(Date.now() - 5 * 60 * 1000).toISOString();
    const { data: recentSubmit, error: rateLimitError } = await supabase
      .from('rate_limits')
      .select('created_at')
      .eq('ip_address', clientIP)
      .eq('endpoint', 'contact-form')
      .gte('created_at', fiveMinutesAgo)
      .maybeSingle();
    
    if (rateLimitError) {
      console.error("❌ Erreur lors de la vérification du rate limit:", rateLimitError);
    }
    
    if (recentSubmit) {
      const waitTime = Math.ceil((new Date(recentSubmit.created_at).getTime() + 5 * 60 * 1000 - Date.now()) / 1000 / 60);
      console.warn(`⚠️ Rate limit dépassé pour IP: ${clientIP}`);
      return new Response(
        JSON.stringify({ 
          error: "Trop de requêtes. Veuillez patienter avant de soumettre un nouveau message.",
          retryAfter: waitTime
        }),
        { 
          status: 429,
          headers: { 
            'Content-Type': 'application/json',
            'Retry-After': (waitTime * 60).toString(),
            ...corsHeaders 
          } 
        }
      );
    }
    
    console.log("✅ Rate limit OK, traitement de la requête");
    
    // Parse et valide les données
    const body = await req.json();
    console.log("📥 Données reçues:", { ...body, website: '[HIDDEN]' });
    
    const validatedData = contactFormSchema.parse(body);
    
    // Vérification honeypot
    if (validatedData.website && validatedData.website.length > 0) {
      console.warn("🚫 Tentative de spam détectée via honeypot");
      return new Response(
        JSON.stringify({ error: "Invalid submission" }),
        { 
          status: 400, 
          headers: { 'Content-Type': 'application/json', ...corsHeaders } 
        }
      );
    }

    // Configuration SMTP depuis les secrets
    const smtpHost = Deno.env.get('SMTP_HOST');
    const smtpPort = parseInt(Deno.env.get('SMTP_PORT') || '465');
    const smtpUser = Deno.env.get('SMTP_USER');
    const smtpPassword = Deno.env.get('SMTP_PASSWORD');

    if (!smtpHost || !smtpUser || !smtpPassword) {
      console.error("❌ Configuration SMTP manquante");
      throw new Error("Configuration SMTP manquante");
    }

    console.log(`📮 Connexion au serveur SMTP: ${smtpHost}:${smtpPort}`);

    // Créer le client SMTP
    const client = new SMTPClient({
      connection: {
        hostname: smtpHost,
        port: smtpPort,
        tls: true,
        auth: {
          username: smtpUser,
          password: smtpPassword,
        },
      },
    });

    // Adresse email d'affichage (alias professionnel)
    const fromEmail = "EvolusKills <contact@evoluskills.fr>";

    // Template email de notification (pour vous)
    const notificationEmailHTML = `<!DOCTYPE html><html><head><meta charset="utf-8"><style>body{font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,'Helvetica Neue',Arial,sans-serif;line-height:1.6;color:#333}.container{max-width:600px;margin:0 auto;padding:20px}.header{background:linear-gradient(135deg,#3b82f6 0%,#8b5cf6 100%);color:white;padding:30px;border-radius:10px 10px 0 0}.header h1{margin:0;font-size:24px}.content{background:#ffffff;padding:30px;border:1px solid #e5e7eb;border-top:none}.field{margin-bottom:20px}.label{font-weight:600;color:#4b5563;margin-bottom:5px;display:block}.value{background:#f9fafb;padding:12px;border-radius:6px;border-left:3px solid #3b82f6}.footer{background:#f9fafb;padding:20px;text-align:center;color:#6b7280;font-size:14px;border-radius:0 0 10px 10px}</style></head><body><div class="container"><div class="header"><h1>📬 Nouveau message de contact</h1><p style="margin:5px 0 0 0;opacity:0.9">EvolusKills</p></div><div class="content"><div class="field"><span class="label">👤 Nom</span><div class="value">${validatedData.name}</div></div><div class="field"><span class="label">📧 Email</span><div class="value"><a href="mailto:${validatedData.email}" style="color:#3b82f6">${validatedData.email}</a></div></div>${validatedData.phone ? `<div class="field"><span class="label">📞 Téléphone</span><div class="value"><a href="tel:${validatedData.phone}" style="color:#3b82f6">${validatedData.phone}</a></div></div>` : ''}<div class="field"><span class="label">📝 Sujet</span><div class="value">${validatedData.subject}</div></div><div class="field"><span class="label">💬 Message</span><div class="value" style="white-space:pre-wrap">${validatedData.message}</div></div></div><div class="footer"><p>Ce message a été envoyé depuis le formulaire de contact EvolusKills</p><p style="margin:5px 0 0 0">🕒 ${new Date().toLocaleString('fr-FR')}</p></div></div></body></html>`;

    // Template email de confirmation (pour le client)
    const confirmationEmailHTML = `<!DOCTYPE html><html><head><meta charset="utf-8"><style>body{font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,'Helvetica Neue',Arial,sans-serif;line-height:1.6;color:#333}.container{max-width:600px;margin:0 auto;padding:20px}.header{background:linear-gradient(135deg,#3b82f6 0%,#8b5cf6 100%);color:white;padding:30px;border-radius:10px 10px 0 0;text-align:center}.header h1{margin:0;font-size:26px}.content{background:#ffffff;padding:30px;border:1px solid #e5e7eb;border-top:none}.highlight{background:#eff6ff;padding:20px;border-radius:8px;border-left:4px solid #3b82f6;margin:20px 0}.footer{background:#f9fafb;padding:20px;text-align:center;color:#6b7280;font-size:14px;border-radius:0 0 10px 10px}.button{display:inline-block;background:linear-gradient(135deg,#3b82f6 0%,#8b5cf6 100%);color:white;padding:12px 24px;text-decoration:none;border-radius:6px;margin:10px 0}</style></head><body><div class="container"><div class="header"><h1>✅ Message bien reçu !</h1><p style="margin:10px 0 0 0;opacity:0.9">EvolusKills</p></div><div class="content"><p>Bonjour <strong>${validatedData.name}</strong>,</p><p>Nous avons bien reçu votre message concernant : <strong>"${validatedData.subject}"</strong></p><div class="highlight"><p style="margin:0"><strong>📋 Récapitulatif de votre demande :</strong></p><p style="margin:10px 0 0 0;white-space:pre-wrap">${validatedData.message}</p></div><p>Notre équipe va étudier votre demande et vous apportera une réponse personnalisée dans les <strong>48 heures</strong>.</p><p>Si vous avez une question urgente, n'hésitez pas à nous contacter directement :</p><ul style="list-style:none;padding:0"><li>📧 <a href="mailto:contact@evoluskills.fr" style="color:#3b82f6">contact@evoluskills.fr</a></li><li>📞 <a href="tel:+33695027611" style="color:#3b82f6">+33 6 95 02 76 11</a></li></ul><p style="margin-top:30px">Merci de votre confiance,<br><strong>L'équipe EvolusKills</strong></p></div><div class="footer"><p>EvolusKills - Formation professionnelle</p><p style="margin:5px 0">Paris, France</p></div></div></body></html>`;

    console.log("📤 Envoi de l'email de notification...");
    
    // Envoyer l'email de notification
    await client.send({
      from: fromEmail,
      to: "contact@evoluskills.fr",
      subject: `Nouveau contact EvolusKills : ${validatedData.subject}`,
      content: "Version texte brut non disponible",
      html: notificationEmailHTML
    });

    console.log("✅ Email de notification envoyé avec succès");

    console.log("📤 Envoi de l'email de confirmation au client...");
    
    // Envoyer l'email de confirmation au client
    await client.send({
      from: fromEmail,
      to: validatedData.email,
      subject: "Confirmation de votre message - EvolusKills",
      content: "Version texte brut non disponible",
      html: confirmationEmailHTML
    });

    console.log("✅ Email de confirmation envoyé avec succès");

    await client.close();
    console.log("🔌 Connexion SMTP fermée");
    
    // Enregistrer la soumission dans la table rate_limits
    const { error: insertError } = await supabase
      .from('rate_limits')
      .insert({
        ip_address: clientIP,
        endpoint: 'contact-form'
      });
    
    if (insertError) {
      console.error("❌ Erreur lors de l'enregistrement du rate limit:", insertError);
      // On ne bloque pas le succès si l'enregistrement échoue
    } else {
      console.log("✅ Rate limit enregistré pour IP:", clientIP);
    }

    return new Response(
      JSON.stringify({ 
        success: true, 
        message: "Emails envoyés avec succès" 
      }),
      {
        status: 200,
        headers: { 'Content-Type': 'application/json', ...corsHeaders },
      }
    );

  } catch (error: any) {
    console.error("❌ Erreur lors de l'envoi de l'email:", error);
    
    // Gestion des erreurs de validation Zod
    if (error.name === 'ZodError') {
      return new Response(
        JSON.stringify({ 
          error: "Données invalides", 
          details: error.errors 
        }),
        {
          status: 400,
          headers: { 'Content-Type': 'application/json', ...corsHeaders },
        }
      );
    }
    
    return new Response(
      JSON.stringify({ 
        error: "Erreur lors de l'envoi de l'email",
        message: error.message 
      }),
      {
        status: 500,
        headers: { 'Content-Type': 'application/json', ...corsHeaders },
      }
    );
  }
};

serve(handler);
