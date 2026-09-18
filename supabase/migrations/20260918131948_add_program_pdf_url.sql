-- Optional per-formation official program PDF, used by the "Télécharger le programme"
-- button on FormationDetail. When null, the button falls back to a client-generated
-- .txt built from the `program` field.
alter table public.formations
  add column if not exists program_pdf_url text;
