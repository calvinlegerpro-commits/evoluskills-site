-- Activer RLS sur la table rate_limits pour sécuriser l'accès
ALTER TABLE public.rate_limits ENABLE ROW LEVEL SECURITY;

-- Pas de politique nécessaire car cette table est uniquement utilisée 
-- par les edge functions (côté serveur) et ne doit jamais être accessible depuis le client
-- Le fait d'activer RLS sans ajouter de politique la rend complètement inaccessible depuis le client