-- Add structured content columns for formation detail page
ALTER TABLE public.formations
ADD COLUMN IF NOT EXISTS prerequisites jsonb DEFAULT '[]'::jsonb,
ADD COLUMN IF NOT EXISTS objectives jsonb DEFAULT '[]'::jsonb,
ADD COLUMN IF NOT EXISTS program jsonb DEFAULT '[]'::jsonb,
ADD COLUMN IF NOT EXISTS modalities jsonb DEFAULT '[]'::jsonb,
ADD COLUMN IF NOT EXISTS participants_info text DEFAULT NULL,
ADD COLUMN IF NOT EXISTS cpf_url text DEFAULT NULL;