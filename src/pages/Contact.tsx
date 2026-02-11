import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Mail, Phone, MapPin } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { useState } from "react";

// Liste des pays avec indicatifs
const countries = [
  { code: "+33", name: "France", flag: "🇫🇷" },
  { code: "+32", name: "Belgique", flag: "🇧🇪" },
  { code: "+41", name: "Suisse", flag: "🇨🇭" },
  { code: "+352", name: "Luxembourg", flag: "🇱🇺" },
  { code: "+1", name: "États-Unis / Canada", flag: "🇺🇸" },
  { code: "+44", name: "Royaume-Uni", flag: "🇬🇧" },
  { code: "+49", name: "Allemagne", flag: "🇩🇪" },
  { code: "+34", name: "Espagne", flag: "🇪🇸" },
  { code: "+39", name: "Italie", flag: "🇮🇹" },
  { code: "+351", name: "Portugal", flag: "🇵🇹" },
];

// Schéma de validation Zod sécurisé
const contactFormSchema = z.object({
  name: z.string()
    .trim()
    .min(2, "Le nom doit contenir au moins 2 caractères")
    .max(100, "Le nom ne peut pas dépasser 100 caractères")
    .regex(/^[a-zA-ZÀ-ÿ\s'-]+$/, "Le nom contient des caractères invalides"),
  
  email: z.string()
    .trim()
    .email("Email invalide")
    .max(255, "L'email est trop long"),
  
  countryCode: z.string().default("+33"),
  
  phone: z.string()
    .trim()
    .regex(/^0?[1-9](\d{2}){4}$/, "Numéro de téléphone invalide (format: 0612345678 ou 612345678)")
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
  
  gdprConsent: z.boolean().refine((val) => val === true, {
    message: "Vous devez accepter la politique de confidentialité",
  }),
  
  // Honeypot anti-spam (champ invisible)
  website: z.string().max(0, "Spam détecté"),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      countryCode: "+33",
      phone: "",
      subject: "",
      message: "",
      gdprConsent: false,
      website: "", // Honeypot
    },
  });

  const onSubmit = async (data: ContactFormValues) => {
    // Vérification honeypot côté client
    if (data.website) {
      console.warn("Spam attempt blocked");
      return;
    }

    setIsSubmitting(true);

    try {
      // Combiner l'indicatif et le numéro
      const fullPhone = data.phone ? `${data.countryCode}${data.phone.replace(/^0/, '')}` : "";
      
      const { data: response, error } = await supabase.functions.invoke('send-contact-email', {
        body: {
          name: data.name,
          email: data.email,
          phone: fullPhone,
          subject: data.subject,
          message: data.message,
          website: data.website,
        }
      });

      if (error) {
        console.error("Erreur lors de l'envoi:", error);
        toast({
          title: "Erreur d'envoi",
          description: "Une erreur est survenue lors de l'envoi du message. Veuillez réessayer.",
          variant: "destructive",
        });
        return;
      }

      toast({
        title: "Message envoyé !",
        description: "Nous vous répondrons dans les plus brefs délais. Un email de confirmation vous a été envoyé.",
      });
      
      form.reset();
    } catch (error) {
      console.error("Erreur:", error);
      toast({
        title: "Erreur d'envoi",
        description: "Une erreur est survenue lors de l'envoi du message. Veuillez réessayer.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      content: "contact@formaskills.pro",
      link: "mailto:contact@formaskills.pro",
    },
    {
      icon: Phone,
      title: "Téléphone",
      content: "+33 6 95 02 76 11",
      link: "tel:+33695027611",
    },
    {
      icon: MapPin,
      title: "Adresse",
      content: "Paris, France",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Header */}
      <section className="relative bg-gradient-to-br from-primary via-primary/95 to-secondary text-primary-foreground py-24 overflow-hidden border-b-0">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 right-0 w-96 h-96 bg-accent/30 rounded-full blur-3xl animate-blob"></div>
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-secondary/30 rounded-full blur-3xl animate-blob animation-delay-2000"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">Contactez-nous</h1>
          <p className="text-xl md:text-2xl text-primary-foreground/90 max-w-3xl animate-fade-in" style={{ animationDelay: '0.1s' }}>
            Une question sur nos formations ? Notre équipe est là pour vous accompagner
          </p>
        </div>
        
        {/* Decorative wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
            <path d="M0 120L60 114C120 108 240 96 360 90C480 84 600 84 720 87C840 90 960 96 1080 99C1200 102 1320 102 1380 102L1440 102V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="hsl(var(--background))" />
          </svg>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Contact Info */}
            <div className="space-y-6">
              <Card className="border-0 shadow-md overflow-hidden group hover:shadow-xl hover:shadow-accent/10 transition-all duration-500 animate-fade-in">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-accent/10 to-transparent rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700"></div>
                <CardHeader className="relative">
                  <CardTitle>Informations de contact</CardTitle>
                  <CardDescription>
                    Plusieurs moyens de nous joindre
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6 relative">
                  {contactInfo.map((info, index) => {
                    const Icon = info.icon;
                    return (
                      <div key={index} className="flex items-start gap-4 p-3 rounded-xl hover:bg-accent/5 transition-colors">
                        <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-accent/20 to-secondary/10 flex-shrink-0">
                          <Icon className="text-accent" size={24} />
                        </div>
                        <div>
                          <h3 className="font-semibold mb-1">{info.title}</h3>
                          {info.link ? (
                            <a 
                              href={info.link}
                              className="text-muted-foreground hover:text-accent transition-colors"
                            >
                              {info.content}
                            </a>
                          ) : (
                            <p className="text-muted-foreground">{info.content}</p>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </CardContent>
              </Card>

              <Card className="border-0 shadow-md overflow-hidden group hover:shadow-2xl hover:shadow-accent/10 transition-all duration-500 animate-fade-in" style={{ animationDelay: '0.1s' }}>
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-accent to-secondary"></div>
                <CardContent className="p-6 relative">
                  <div className="absolute bottom-0 right-0 w-24 h-24 bg-gradient-to-br from-primary/10 to-transparent rounded-full blur-xl"></div>
                  <h3 className="font-semibold mb-3 relative">Horaires d'ouverture</h3>
                  <div className="space-y-2 text-sm relative">
                    <div className="flex justify-between p-2 rounded-lg hover:bg-accent/5 transition-colors">
                      <span className="text-muted-foreground">Lundi - Vendredi</span>
                      <span className="font-medium">9h - 18h</span>
                    </div>
                    <div className="flex justify-between p-2 rounded-lg hover:bg-accent/5 transition-colors">
                      <span className="text-muted-foreground">Samedi - Dimanche</span>
                      <span className="font-medium">Fermé</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card className="border-0 shadow-md overflow-hidden group hover:shadow-2xl hover:shadow-accent/10 transition-all duration-500 animate-fade-in" style={{ animationDelay: '0.1s' }}>
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-accent to-secondary"></div>
                <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-accent/10 to-transparent rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700"></div>
                <CardHeader className="relative">
                  <CardTitle>Envoyez-nous un message</CardTitle>
                  <CardDescription>
                    Remplissez le formulaire ci-dessous et nous vous répondrons rapidement
                  </CardDescription>
                </CardHeader>
                <CardContent className="relative">
                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                      {/* Honeypot anti-spam - invisible pour les humains */}
                      <div className="hidden" aria-hidden="true">
                        <FormField
                          control={form.control}
                          name="website"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Website</FormLabel>
                              <FormControl>
                                <Input {...field} tabIndex={-1} autoComplete="off" />
                              </FormControl>
                            </FormItem>
                          )}
                        />
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <FormField
                          control={form.control}
                          name="name"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Nom complet *</FormLabel>
                              <FormControl>
                                <Input
                                  placeholder="Jean Dupont"
                                  className="border-accent/20 focus:border-accent transition-colors"
                                  {...field}
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        
                        <FormField
                          control={form.control}
                          name="email"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Email *</FormLabel>
                              <FormControl>
                                <Input
                                  type="email"
                                  placeholder="jean.dupont@email.com"
                                  className="border-accent/20 focus:border-accent transition-colors"
                                  {...field}
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>

                      <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Téléphone</FormLabel>
                            <div className="flex gap-2">
                              <FormField
                                control={form.control}
                                name="countryCode"
                                render={({ field: countryField }) => (
                                  <FormItem className="w-[140px]">
                                    <Select
                                      onValueChange={countryField.onChange}
                                      defaultValue={countryField.value}
                                    >
                                      <FormControl>
                                        <SelectTrigger className="border-accent/20 focus:border-accent transition-colors">
                                          <SelectValue />
                                        </SelectTrigger>
                                      </FormControl>
                                      <SelectContent className="bg-popover z-50">
                                        {countries.map((country) => (
                                          <SelectItem key={country.code} value={country.code}>
                                            {country.flag} {country.code}
                                          </SelectItem>
                                        ))}
                                      </SelectContent>
                                    </Select>
                                  </FormItem>
                                )}
                              />
                              <FormControl>
                                <Input
                                  type="tel"
                                  placeholder="Saisir votre numéro"
                                  className="border-accent/20 focus:border-accent transition-colors flex-1"
                                  {...field}
                                />
                              </FormControl>
                            </div>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="subject"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Sujet *</FormLabel>
                            <FormControl>
                              <Input
                                placeholder="Demande d'information"
                                className="border-accent/20 focus:border-accent transition-colors"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="message"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Message *</FormLabel>
                            <FormControl>
                              <Textarea
                                rows={6}
                                placeholder="Décrivez votre demande..."
                                className="resize-none border-accent/20 focus:border-accent transition-colors"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="gdprConsent"
                        render={({ field }) => (
                          <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-lg border border-accent/20 p-4 bg-accent/5">
                            <FormControl>
                              <Checkbox
                                checked={field.value}
                                onCheckedChange={field.onChange}
                              />
                            </FormControl>
                            <div className="space-y-1 leading-none">
                              <FormLabel className="text-sm font-normal cursor-pointer">
                                J'accepte que mes données personnelles soient utilisées pour traiter ma demande. 
                                Conformément au RGPD, vous disposez d'un droit d'accès, de rectification et de suppression de vos données.{" "}
                                <Link 
                                  to="/mentions-legales" 
                                  className="text-accent hover:underline font-medium"
                                >
                                  En savoir plus
                                </Link>
                              </FormLabel>
                              <FormMessage />
                            </div>
                          </FormItem>
                        )}
                      />

                      <Button 
                        type="submit" 
                        size="lg"
                        disabled={isSubmitting}
                        className="w-full md:w-auto bg-gradient-to-r from-primary via-accent to-secondary hover:shadow-xl hover:shadow-accent/20 hover:-translate-y-1 transition-all duration-300 text-primary-foreground disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        {isSubmitting ? "Envoi en cours..." : "Envoyer le message"}
                      </Button>
                    </form>
                  </Form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
