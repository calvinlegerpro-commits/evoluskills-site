import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.VITE_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

export interface FormationData {
  title: string;
  slug: string;
  short_description: string;
  description?: string;
  domain_slug: string;
  sector_slugs?: string[];
  duration: string;
  price: number;
  cpf_eligible: boolean;
  cpf_url?: string;
  certification?: string;
  level?: string;
  format?: string;
  image_url?: string;
  is_published: boolean;
  display_order: number;
  participants_info?: string;
  objectives: string[];
  prerequisites: string[];
  program: { title: string; items: string[] }[];
  modalities: string[];
}

export async function upsertFormation(data: FormationData) {
  const { domain_slug, sector_slugs = [], ...formationFields } = data;

  const { data: domain, error: domainError } = await supabase
    .from('domains')
    .select('id')
    .eq('slug', domain_slug)
    .single();

  if (domainError || !domain) {
    console.error(`❌ Domaine introuvable: "${domain_slug}"`);
    process.exit(1);
  }

  const { data: upserted, error } = await supabase
    .from('formations')
    .upsert(
      { ...formationFields, domain_id: domain.id },
      { onConflict: 'slug' }
    )
    .select('id, title')
    .single();

  if (error) {
    console.error('❌ Erreur lors de l\'upsert:', error.message);
    process.exit(1);
  }

  console.log(`✅ Formation upsertée: "${upserted.title}" (${upserted.id})`);

  if (sector_slugs.length > 0) {
    await supabase.from('formation_sectors').delete().eq('formation_id', upserted.id);

    for (const sectorSlug of sector_slugs) {
      const { data: sector } = await supabase
        .from('sectors')
        .select('id')
        .eq('slug', sectorSlug)
        .single();

      if (sector) {
        await supabase.from('formation_sectors').insert({
          formation_id: upserted.id,
          sector_id: sector.id,
        });
        console.log(`  ↳ Secteur lié: ${sectorSlug}`);
      } else {
        console.warn(`  ⚠️  Secteur introuvable: "${sectorSlug}"`);
      }
    }
  }

  console.log('🎉 Terminé !');
}
