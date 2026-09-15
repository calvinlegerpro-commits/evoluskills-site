import { upsertFormation } from '../upsert-formation.ts';

await upsertFormation({
  title: "Structurer et piloter la relation client avec un CRM",
  slug: "structurer-piloter-relation-client-crm",
  short_description: "Structurez, organisez et pilotez la relation client sur votre CRM (HubSpot ou équivalent) : modèle de données, propriétés, pipelines — une logique transférable à tout outil CRM.",
  description: "Formation de 21h pour les collaborateurs utilisateurs d'un CRM souhaitant structurer et fiabiliser leurs données clients et modéliser leurs parcours. Formation réalisée avec HubSpot comme support de démonstration.",
  domain_slug: "digital",
  duration: "21h",
  price: 2100,
  cpf_eligible: false,
  level: "Débutant à intermédiaire",
  format: "Présentiel / Distanciel - Intra-entreprise",
  image_url: "https://qrfpixhpjkqlhkvjgayp.supabase.co/storage/v1/object/public/formations/images/structurer-piloter-relation-client-crm.jpeg",
  is_published: true,
  display_order: 3,
  participants_info: "Collaborateurs utilisateurs d'un CRM au sein d'une même entreprise (commercial, marketing, recrutement, direction, support...)",
  objectives: [
    "Expliquer le modèle de données d'un CRM (contacts, entreprises, transactions, propriétés, objets) et situer sa pratique au regard de ce modèle",
    "Créer et paramétrer des propriétés pour rendre les données filtrables et exploitables",
    "Formaliser et appliquer une règle de nommage commune pour garantir la cohérence des données",
    "Construire un pipeline reflétant un parcours client réel et y associer les enregistrements concernés",
  ],
  prerequisites: [
    "Utiliser un poste informatique et naviguer dans une interface web au quotidien",
    "Disposer d'un accès actif au CRM de l'entreprise",
    "Exercer une activité impliquant la saisie ou le suivi de données clients",
  ],
  program: [
    {
      title: "Module 1 – Comprendre la logique d'un CRM et structurer ses données (7h)",
      items: [
        "Comprendre la logique d'un CRM et son organisation de l'information : contacts, entreprises, transactions, propriétés (2h)",
        "Comparer sa façon de travailler actuelle à cette logique pour repérer les points à améliorer (1h)",
        "Découvrir l'instance CRM réelle de l'entreprise, guidée par le formateur (30min)",
        "Identifier les propriétés déjà présentes et celles qui manquent (1h)",
        "Prioriser les propriétés à créer ou à corriger (1h)",
        "Créer ses premières propriétés sur l'instance (1h30)",
      ],
    },
    {
      title: "Module 2 – Organiser et fiabiliser les propriétés (7h)",
      items: [
        "Créer et paramétrer les propriétés sur les contacts, entreprises et transactions (1h30)",
        "Choisir le bon type de propriété selon l'usage : texte, date, liste déroulante (1h)",
        "Mettre en pratique directement sur l'instance (1h)",
        "Mettre en place des listes déroulantes pour trier et filtrer les données facilement (1h30)",
        "Définir une règle de nommage commune (1h)",
        "Appliquer cette règle aux propriétés créées (1h)",
      ],
    },
    {
      title: "Module 3 – Modéliser les parcours : objets et pipelines (7h)",
      items: [
        "Distinguer clairement un contact, une entreprise et une transaction (1h)",
        "Cartographier un parcours client réel de l'entreprise, du premier contact à la conversion (2h30)",
        "Construire le pipeline qui reflète ce parcours (1h30)",
        "Associer les enregistrements concernés entre eux (ex : clients et entreprises) (1h)",
        "Faire le point sur les acquis et leur mise en pratique au quotidien — bilan de fin de formation (1h)",
      ],
    },
  ],
  modalities: [
    "##Moyens pédagogiques",
    "Formation réalisée directement sur l'instance CRM réelle de l'entreprise",
    "Alternance d'apports conceptuels courts et de mise en pratique immédiate",
    "Pédagogie active : l'apprenant manipule, décide et produit chaque livrable",
    "Support de formation remis aux apprenants",
    "##Outils & Accès",
    "Poste informatique connecté",
    "Accès à l'instance CRM de l'entreprise",
  ],
});
