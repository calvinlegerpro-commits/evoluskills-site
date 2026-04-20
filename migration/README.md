# Migration EvoluSkills → Nouveau Supabase

## Étape 1 — Schéma (01-schema.sql)
1. Va dans ton dashboard Supabase → **SQL Editor**
2. Colle le contenu de `01-schema.sql`
3. Clique **Run**

## Étape 2 — Données (02-data.sql)
À générer après export depuis Lovable (Cloud → Database → Export CSV par table).
Ou : on le génère via l'API Supabase avec l'ancienne anon key.

## Étape 3 — Edge Function (send-contact-email)
1. Dashboard Supabase → **Edge Functions** → **New Function**
2. Nom : `send-contact-email`
3. Colle le contenu de `supabase/functions/send-contact-email/index.ts`
4. Dashboard → **Project Settings** → **Edge Functions** → ajoute les secrets :
   - `SMTP_HOST` (ex: smtp.hostinger.com)
   - `SMTP_PORT` (ex: 465)
   - `SMTP_USER` (ex: contact@evoluskills.fr)
   - `SMTP_PASSWORD` (ton mot de passe email Hostinger)

## Étape 4 — Mettre à jour le .env
Remplace dans `.env` :
```
VITE_SUPABASE_URL=https://TON_NOUVEAU_PROJET.supabase.co
VITE_SUPABASE_PUBLISHABLE_KEY=ta_nouvelle_anon_key
```

## Étape 5 — Rebuilder et uploader
```bash
npm run build
```
Puis upload le `dist/` sur Hostinger.
