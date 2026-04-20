import { upsertFormation } from '../upsert-formation.ts';

await upsertFormation({
  title: "Améliorer l'efficacité de sa TPE à l'aide de l'IA",
  slug: "ameliorer-efficacite-tpe-ia",
  short_description: "Maîtrisez l'IA pour optimiser votre TPE : identifiez les opportunités, générez des contenus professionnels, analysez vos données et automatisez vos workflows.",
  description: "Formation de 28h pour les dirigeants de TPE souhaitant intégrer l'intelligence artificielle dans leurs processus métiers. Certification RS7311 délivrée par CréActifs.",
  domain_slug: "intelligence-artificielle",
  sector_slugs: ["tpe-pme"],
  duration: "28h",
  price: 1200,
  cpf_eligible: false,
  certification: "RS7311",
  level: "Intermédiaire",
  format: "Distanciel / Synchrone",
  image_url: "https://qrfpixhpjkqlhkvjgayp.supabase.co/storage/v1/object/public/formations/images/rs7311-ia-tpe.png",
  is_published: true,
  display_order: 2,
  participants_info: "Dirigeants de TPE (en activité ou en création) et leurs collaborateurs directs",
  objectives: [
    "Identifier les opportunités IA dans les processus de sa TPE",
    "Générer des contenus diversifiés par prompt engineering",
    "Synthétiser et analyser des données complexes avec l'IA",
    "Automatiser des tâches et workflows via des plateformes no-code/low-code",
  ],
  prerequisites: [
    "Aisance avec les outils numériques courants (navigateur, traitement de texte)",
  ],
  program: [
    {
      title: "Module 1 – Identifier les opportunités IA pour sa TPE (4h)",
      items: [
        "Panorama de l'IA pour les TPE (1h30)",
        "Cadre éthique, RGPD et IA Act (1h30)",
        "Accessibilité et handicap dans l'usage de l'IA (1h)",
      ],
    },
    {
      title: "Module 2 – Générer des contenus diversifiés par prompt engineering (6h)",
      items: [
        "Fondamentaux du prompt engineering (1h)",
        "Création de contenus rédactionnels avec l'IA (2h)",
        "Création de contenus visuels avec l'IA (1h30)",
        "Optimisation et raffinement des contenus IA (1h30)",
      ],
    },
    {
      title: "Module 3 – Synthétiser et analyser des données avec l'IA (4h)",
      items: [
        "Analyser des données avec l'IA (2h)",
        "Synthétiser et produire des livrables de décision (2h)",
      ],
    },
    {
      title: "Module 4 – Automatiser des tâches et workflows avec l'IA (6h)",
      items: [
        "Automatisation no-code/low-code avec l'IA (2h)",
        "Intégration aux outils métiers de la TPE (2h30)",
        "Plan d'action et consolidation du dossier de certification (1h30)",
      ],
    },
  ],
  modalities: [
    "Cours en visioconférence avec un expert",
    "Tableau de bord de suivi personnalisé",
    "Correction des travaux par des professionnels",
    "Accès web & mobile 24/7",
  ],
});
