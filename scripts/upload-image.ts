import { createClient } from '@supabase/supabase-js';
import { readFileSync } from 'fs';

const supabase = createClient(
  process.env.VITE_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

const [imagePath, formationSlug, fileName] = process.argv.slice(2);

if (!imagePath || !formationSlug || !fileName) {
  console.error('Usage: tsx upload-image.ts <chemin-image> <slug-formation> <nom-fichier>');
  process.exit(1);
}

async function main() {
  const { error: bucketError } = await supabase.storage.createBucket('formations', { public: true });
  if (bucketError && !bucketError.message.includes('already exists')) {
    console.error('❌ Erreur création bucket:', bucketError.message);
    process.exit(1);
  }

  const file = readFileSync(imagePath);
  const mimeType = imagePath.endsWith('.png') ? 'image/png' : 'image/jpeg';

  const { error: uploadError } = await supabase.storage
    .from('formations')
    .upload(`images/${fileName}`, file, { contentType: mimeType, upsert: true });

  if (uploadError) {
    console.error('❌ Erreur upload:', uploadError.message);
    process.exit(1);
  }

  const { data: { publicUrl } } = supabase.storage
    .from('formations')
    .getPublicUrl(`images/${fileName}`);

  console.log(`✅ Image uploadée: ${publicUrl}`);

  const { error: updateError } = await supabase
    .from('formations')
    .update({ image_url: publicUrl })
    .eq('slug', formationSlug);

  if (updateError) {
    console.error('❌ Erreur mise à jour:', updateError.message);
    process.exit(1);
  }

  console.log(`✅ Formation "${formationSlug}" mise à jour avec la nouvelle image`);
}

main();
