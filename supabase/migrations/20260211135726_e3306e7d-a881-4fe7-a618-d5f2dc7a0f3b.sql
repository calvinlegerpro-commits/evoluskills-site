
-- Table des domaines de formation
CREATE TABLE public.domains (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  slug TEXT NOT NULL UNIQUE,
  description TEXT,
  icon TEXT NOT NULL DEFAULT 'BookOpen',
  color TEXT DEFAULT 'accent',
  display_order INT NOT NULL DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Table des secteurs d'activité
CREATE TABLE public.sectors (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  slug TEXT NOT NULL UNIQUE,
  description TEXT,
  icon TEXT NOT NULL DEFAULT 'Building2',
  display_order INT NOT NULL DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Table des formations
CREATE TABLE public.formations (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  slug TEXT NOT NULL UNIQUE,
  short_description TEXT NOT NULL,
  description TEXT,
  domain_id UUID NOT NULL REFERENCES public.domains(id),
  duration TEXT,
  price NUMERIC,
  cpf_eligible BOOLEAN NOT NULL DEFAULT true,
  certification TEXT,
  level TEXT DEFAULT 'Tous niveaux',
  format TEXT DEFAULT 'En ligne',
  image_url TEXT,
  is_published BOOLEAN NOT NULL DEFAULT false,
  display_order INT NOT NULL DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Table de liaison formations <-> secteurs (many-to-many)
CREATE TABLE public.formation_sectors (
  formation_id UUID NOT NULL REFERENCES public.formations(id) ON DELETE CASCADE,
  sector_id UUID NOT NULL REFERENCES public.sectors(id) ON DELETE CASCADE,
  PRIMARY KEY (formation_id, sector_id)
);

-- Enable RLS on all tables
ALTER TABLE public.domains ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.sectors ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.formations ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.formation_sectors ENABLE ROW LEVEL SECURITY;

-- Public read access for all tables (public-facing site)
CREATE POLICY "Public read domains" ON public.domains FOR SELECT USING (true);
CREATE POLICY "Public read sectors" ON public.sectors FOR SELECT USING (true);
CREATE POLICY "Public read published formations" ON public.formations FOR SELECT USING (is_published = true);
CREATE POLICY "Public read formation_sectors" ON public.formation_sectors FOR SELECT USING (true);

-- Block all writes from client
CREATE POLICY "Deny anon insert domains" ON public.domains FOR INSERT WITH CHECK (false);
CREATE POLICY "Deny anon update domains" ON public.domains FOR UPDATE USING (false);
CREATE POLICY "Deny anon delete domains" ON public.domains FOR DELETE USING (false);

CREATE POLICY "Deny anon insert sectors" ON public.sectors FOR INSERT WITH CHECK (false);
CREATE POLICY "Deny anon update sectors" ON public.sectors FOR UPDATE USING (false);
CREATE POLICY "Deny anon delete sectors" ON public.sectors FOR DELETE USING (false);

CREATE POLICY "Deny anon insert formations" ON public.formations FOR INSERT WITH CHECK (false);
CREATE POLICY "Deny anon update formations" ON public.formations FOR UPDATE USING (false);
CREATE POLICY "Deny anon delete formations" ON public.formations FOR DELETE USING (false);

CREATE POLICY "Deny anon insert formation_sectors" ON public.formation_sectors FOR INSERT WITH CHECK (false);
CREATE POLICY "Deny anon update formation_sectors" ON public.formation_sectors FOR UPDATE USING (false);
CREATE POLICY "Deny anon delete formation_sectors" ON public.formation_sectors FOR DELETE USING (false);

-- Trigger for updated_at on formations
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SET search_path = public;

CREATE TRIGGER update_formations_updated_at
  BEFORE UPDATE ON public.formations
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at_column();
