-- Créer la table pour le rate limiting
CREATE TABLE IF NOT EXISTS public.rate_limits (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  ip_address TEXT NOT NULL,
  endpoint TEXT NOT NULL DEFAULT 'contact-form',
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Index pour améliorer les performances des requêtes
CREATE INDEX IF NOT EXISTS idx_rate_limits_ip_created ON public.rate_limits(ip_address, created_at DESC);

-- Fonction pour nettoyer automatiquement les anciennes entrées (plus de 1 heure)
CREATE OR REPLACE FUNCTION public.cleanup_old_rate_limits()
RETURNS void
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
BEGIN
  DELETE FROM public.rate_limits 
  WHERE created_at < now() - interval '1 hour';
END;
$$;

-- Commentaires pour documentation
COMMENT ON TABLE public.rate_limits IS 'Table de rate limiting pour les endpoints publics';
COMMENT ON COLUMN public.rate_limits.ip_address IS 'Adresse IP du client';
COMMENT ON COLUMN public.rate_limits.endpoint IS 'Nom de l''endpoint protégé';
COMMENT ON COLUMN public.rate_limits.created_at IS 'Timestamp de la dernière requête';