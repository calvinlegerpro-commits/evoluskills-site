# Design — Nouvelle formation « Structurer et piloter la relation client avec un CRM »

## Contexte

Calvin a dispensé une formation CRM (HubSpot) de 21h/3 jours pour ESMP dans le cadre d'un plan de développement des compétences (programme source : `Programme_formation_CRM_ESMP_PDC (1).pdf`). Il souhaite reprendre cette formation, la généraliser, et l'ajouter au catalogue public EvoluSkills en suivant exactement le modèle des formations existantes sur le site (ex. formation "Améliorer l'efficacité de sa TPE à l'aide de l'IA", `scripts/formations/rs7311-ia-tpe.ts`).

Contrairement aux formations existantes :
- **Pas de CPF** (`cpf_eligible: false`)
- **Pas de certification RS/RNCP** — c'est une formation propre à EvoluSkills, sans code de certification, sans certificateur externe, sans lien France Compétences. Tous les champs de certification restent `null`.

## Modèle de données (rappel)

Le site est piloté à 100% par Supabase (table `formations`, cf. `src/hooks/useFormations.ts` pour l'interface TypeScript de référence). Le workflow existant pour ajouter une formation :
1. Le domaine (`domains`) doit déjà exister — ici on réutilise `digital`.
2. Un fichier `scripts/formations/<slug>.ts` appelle `upsertFormation({...})` (défini dans `scripts/upsert-formation.ts`).
3. Exécution : `tsx --env-file=.env.local scripts/formations/<slug>.ts`.
4. Upload image : `npm run image:upload -- <chemin> <slug> <nom-fichier>.png`.

Les sections liées à la certification dans `FormationDetail.tsx` sont conditionnelles (`{formation.certification && (...)}`) : laisser ces champs à `null` masque proprement ces blocs sans code additionnel.

## Décisions validées avec Calvin

| Point | Décision |
|---|---|
| Spécificité HubSpot | Conservée comme outil de référence (formation positionnée "spécialiste HubSpot"), mais la logique reste transférable à tout CRM |
| Domaine | Rattachée au domaine existant `digital` (pas de nouveau domaine créé) |
| Prix | 2100 € |
| Format / Public | Présentiel ou distanciel, intra-entreprise ; public élargi (pas de mention ESMP ni des 5 apprenants nommés) |
| Image | `/Users/calvinleger/Downloads/Gemini_Generated_Image_z7ct8mz7ct8mz7ct.jpeg` (à uploader) |
| Certification | Aucune (champs `certification*` à `null`) |
| CPF | Non éligible (`cpf_eligible: false`) |

## Données de la formation

```ts
{
  title: "Structurer et piloter la relation client avec un CRM",
  slug: "structurer-piloter-relation-client-crm",
  short_description: "Structurez, organisez et pilotez la relation client sur votre CRM (HubSpot ou équivalent) : modèle de données, propriétés, pipelines — une logique transférable à tout outil CRM.",
  description: "Formation de 21h pour les collaborateurs utilisateurs d'un CRM souhaitant structurer et fiabiliser leurs données clients et modéliser leurs parcours. Formation réalisée avec HubSpot comme support de démonstration.",
  domain_slug: "digital",
  duration: "21h",
  price: 2100,
  cpf_eligible: false,
  certification: null,
  level: "Débutant à intermédiaire",
  format: "Présentiel / Distanciel - Intra-entreprise",
  image_url: "<url après upload>",
  is_published: true,
  display_order: <à définir après le dernier display_order existant>,
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
    "Formation réalisée directement sur l'instance CRM réelle de l'entreprise",
    "Alternance d'apports conceptuels courts et de mise en pratique immédiate",
    "Pédagogie active : l'apprenant manipule, décide et produit chaque livrable",
    "Support de formation remis aux apprenants",
    "##Moyens techniques",
    "Poste informatique connecté",
    "Accès à l'instance CRM de l'entreprise",
  ],
}
```

Note : la somme des durées de chaque module (Module 1 = 2h+1h+0h30+1h+1h+1h30 = 7h ; Module 2 = 1h30+1h+1h+1h30+1h+1h = 7h ; Module 3 = 1h+2h30+1h30+1h+1h = 7h) est cohérente avec `duration: "21h"`, sur le même pattern que la formation IA/TPE existante.

## Hors périmètre

- Pas de nouveau domaine créé (réutilisation de `digital`).
- Pas d'extension des champs "avancés" non versionnés (`key_stats`, `evaluation_details`, `candidacy_procedure`, `sync_hours`, `competences`, `exam_mention`) — ces champs sont utilisés pour les formations certifiantes ; cette formation n'en a pas besoin puisqu'elle n'a pas de certification.
- Pas de modification du script `scripts/upsert-formation.ts` ni de son interface `FormationData` (les champs utilisés ici sont déjà tous supportés).

## Implémentation attendue

1. Créer `scripts/formations/structurer-piloter-relation-client-crm.ts` sur le modèle de `scripts/formations/rs7311-ia-tpe.ts`, avec les données ci-dessus.
2. Déterminer le `display_order` correct (vérifier les formations existantes en base pour ne pas entrer en collision).
3. Exécuter le script (`tsx --env-file=.env.local scripts/formations/structurer-piloter-relation-client-crm.ts`).
4. Uploader l'image fournie via `npm run image:upload -- "/Users/calvinleger/Downloads/Gemini_Generated_Image_z7ct8mz7ct8mz7ct.jpeg" structurer-piloter-relation-client-crm <nom-fichier>.png`.
5. Vérifier visuellement le rendu sur `/formations` et `/formations/structurer-piloter-relation-client-crm` (dev server local).
