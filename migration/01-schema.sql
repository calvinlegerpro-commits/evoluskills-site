-- =============================================
-- EVOLUSKILLS — Schéma complet Supabase
-- À exécuter dans : SQL Editor de ton nouveau projet
-- =============================================

-- Extensions
create extension if not exists "uuid-ossp";

-- =============================================
-- TABLES
-- =============================================

create table public.domains (
  id uuid primary key default uuid_generate_v4(),
  name text not null,
  slug text not null unique,
  description text,
  icon text not null default 'BookOpen',
  color text,
  display_order integer not null default 0,
  created_at timestamptz not null default now()
);

create table public.sectors (
  id uuid primary key default uuid_generate_v4(),
  name text not null,
  slug text not null unique,
  description text,
  icon text not null default 'BookOpen',
  display_order integer not null default 0,
  created_at timestamptz not null default now()
);

create table public.formations (
  id uuid primary key default uuid_generate_v4(),
  title text not null,
  slug text not null unique,
  short_description text not null,
  description text,
  domain_id uuid not null references public.domains(id),
  duration text,
  price numeric,
  cpf_eligible boolean not null default false,
  cpf_url text,
  certification text,
  level text,
  format text,
  image_url text,
  objectives jsonb,
  prerequisites jsonb,
  program jsonb,
  modalities jsonb,
  participants_info text,
  is_published boolean not null default true,
  display_order integer not null default 0,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table public.formation_sectors (
  formation_id uuid not null references public.formations(id) on delete cascade,
  sector_id uuid not null references public.sectors(id) on delete cascade,
  primary key (formation_id, sector_id)
);

create table public.rate_limits (
  id uuid primary key default uuid_generate_v4(),
  ip_address text not null,
  endpoint text not null default 'contact-form',
  created_at timestamptz not null default now()
);

-- =============================================
-- FONCTIONS & TRIGGERS
-- =============================================

create or replace function public.update_updated_at_column()
returns trigger as $$
begin
  new.updated_at = now();
  return new;
end;
$$ language plpgsql;

create trigger formations_updated_at
  before update on public.formations
  for each row execute function public.update_updated_at_column();

create or replace function public.cleanup_old_rate_limits()
returns void as $$
begin
  delete from public.rate_limits
  where created_at < now() - interval '1 hour';
end;
$$ language plpgsql;

-- =============================================
-- RLS (Row Level Security)
-- =============================================

alter table public.domains enable row level security;
alter table public.sectors enable row level security;
alter table public.formations enable row level security;
alter table public.formation_sectors enable row level security;
alter table public.rate_limits enable row level security;

-- Lecture publique sur domains, sectors, formations, formation_sectors
create policy "Lecture publique domains" on public.domains
  for select using (true);

create policy "Lecture publique sectors" on public.sectors
  for select using (true);

create policy "Lecture publique formations" on public.formations
  for select using (is_published = true);

create policy "Lecture publique formation_sectors" on public.formation_sectors
  for select using (true);

-- rate_limits : accès service_role uniquement (bloqué pour anon)
create policy "Service role uniquement rate_limits" on public.rate_limits
  for all using (auth.role() = 'service_role');
