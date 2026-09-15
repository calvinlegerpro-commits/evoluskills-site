# Formation CRM — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Ajouter au catalogue public EvoluSkills la formation "Structurer et piloter la relation client avec un CRM" (21h), sans CPF ni certification, rattachée au domaine `digital`, avec son image.

**Architecture:** Le site est piloté à 100% par Supabase. On suit le pattern existant : un fichier `scripts/formations/<slug>.ts` appelle `upsertFormation()` (défini dans `scripts/upsert-formation.ts`, inchangé) pour upserter la ligne dans la table `formations` ; l'image est ensuite uploadée séparément via `scripts/upload-image.ts` qui met à jour `image_url`. Aucun composant React n'est modifié : `Formations.tsx` et `FormationDetail.tsx` affichent déjà dynamiquement toute formation publiée en base.

**Tech Stack:** TypeScript, tsx (exécution de scripts Node), Supabase JS client (`@supabase/supabase-js`), Vite/React (site).

## Global Constraints

- `domain_slug` doit être `"digital"` (domaine existant, pas de création de nouveau domaine) — cf. spec, décision "Domaine".
- `cpf_eligible: false`, `certification` absent/undefined (pas de RS/RNCP) — cf. spec, décisions "CPF" et "Certification".
- `price: 2100`, `duration: "21h"`, `format: "Présentiel / Distanciel - Intra-entreprise"`, `level: "Débutant à intermédiaire"` — valeurs exactes de la spec.
- Le contenu texte (`short_description`, `description`, `participants_info`, `objectives`, `prerequisites`, `program`, `modalities`) doit être copié verbatim depuis `docs/superpowers/specs/2026-09-15-formation-crm-design.md`, section "Données de la formation".
- Image source : `/Users/calvinleger/Downloads/Gemini_Generated_Image_z7ct8mz7ct8mz7ct.jpeg`.
- Les commandes `tsx` doivent être lancées avec `--env-file=.env.local` (déjà présent à la racine du repo) pour disposer de `VITE_SUPABASE_URL` et `SUPABASE_SERVICE_ROLE_KEY`.

---

### Task 1: Déterminer le `display_order` disponible

**Files:**
- Create (temporaire, supprimé en fin de tâche) : `scripts/formations/_tmp-list-display-order.ts`

**Interfaces:**
- Consumes: rien (script autonome)
- Produces: une valeur entière `nextDisplayOrder` (notée à la main pour la Task 2 — ce script n'écrit rien en base)

- [ ] **Step 1: Écrire le script de lecture**

Créer `scripts/formations/_tmp-list-display-order.ts` :

```ts
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.VITE_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

const { data, error } = await supabase
  .from('formations')
  .select('slug, display_order')
  .order('display_order', { ascending: true });

if (error) {
  console.error('❌ Erreur:', error.message);
  process.exit(1);
}

console.table(data);
const maxOrder = Math.max(0, ...data.map((f) => f.display_order ?? 0));
console.log(`\nProchain display_order disponible: ${maxOrder + 1}`);
```

- [ ] **Step 2: Exécuter le script**

Run: `tsx --env-file=.env.local scripts/formations/_tmp-list-display-order.ts`
Expected: un tableau des formations existantes avec leur `display_order`, suivi de la ligne `Prochain display_order disponible: N`. Noter cette valeur `N` — elle sera utilisée en Task 2.

- [ ] **Step 3: Supprimer le script temporaire**

```bash
trash scripts/formations/_tmp-list-display-order.ts
```

(Utiliser `trash`, pas `rm`, conformément aux règles de sécurité fichiers du poste.)

---

### Task 2: Créer et exécuter le script d'insertion de la formation

**Files:**
- Create: `scripts/formations/structurer-piloter-relation-client-crm.ts`

**Interfaces:**
- Consumes: `upsertFormation(data: FormationData)` exporté par `scripts/upsert-formation.ts` (signature inchangée, cf. `FormationData` dans ce fichier) ; `nextDisplayOrder` déterminé en Task 1.
- Produces: une ligne dans la table `formations` avec `slug: "structurer-piloter-relation-client-crm"`, consommée par la Task 3 (upload image) et la Task 4 (vérification UI).

- [ ] **Step 1: Écrire le fichier de données**

Créer `scripts/formations/structurer-piloter-relation-client-crm.ts` :

```ts
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
  is_published: true,
  display_order: 999, // TODO: remplacer par la valeur N notée en Task 1 avant d'exécuter
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
});
```

- [ ] **Step 2: Remplacer le `display_order` placeholder**

Éditer la ligne `display_order: 999,` pour y mettre la valeur `N` notée à la Task 1, Step 2 (ex. `display_order: 3,`).

- [ ] **Step 3: Exécuter le script**

Run: `tsx --env-file=.env.local scripts/formations/structurer-piloter-relation-client-crm.ts`
Expected: sortie `✅ Formation upsertée: "Structurer et piloter la relation client avec un CRM" (<uuid>)` suivie de `🎉 Terminé !`, sans ligne `❌`.

- [ ] **Step 4: Vérifier l'insertion en base**

Run: `tsx --env-file=.env.local scripts/formations/_tmp-list-display-order.ts` (si supprimé à la Task 1, le recréer temporairement avec le même contenu, ou interroger directement via `supabase.from('formations').select('*').eq('slug', 'structurer-piloter-relation-client-crm').single()` dans un script one-shot).
Expected: la ligne `structurer-piloter-relation-client-crm` apparaît dans le tableau avec le `display_order` attendu et sans doublon.

- [ ] **Step 5: Commit**

```bash
git add scripts/formations/structurer-piloter-relation-client-crm.ts
git commit -m "Ajout formation CRM (structurer-piloter-relation-client-crm)"
```

---

### Task 3: Uploader l'image de la formation

**Files:**
- Modify (via script, pas d'édition manuelle) : ligne `image_url` de la formation `structurer-piloter-relation-client-crm` en base.

**Interfaces:**
- Consumes: `scripts/upload-image.ts` (inchangé), formation déjà présente en base (produite par Task 2).
- Produces: `image_url` renseignée sur la formation, publique via le bucket Supabase Storage `formations`.

- [ ] **Step 1: Exécuter l'upload**

Run:
```bash
npm run image:upload -- "/Users/calvinleger/Downloads/Gemini_Generated_Image_z7ct8mz7ct8mz7ct.jpeg" structurer-piloter-relation-client-crm structurer-piloter-relation-client-crm.jpeg
```
Expected: deux lignes de succès :
```
✅ Image uploadée: https://qrfpixhpjkqlhkvjgayp.supabase.co/storage/v1/object/public/formations/images/structurer-piloter-relation-client-crm.jpeg
✅ Formation "structurer-piloter-relation-client-crm" mise à jour avec la nouvelle image
```

- [ ] **Step 2: Vérifier l'URL publique**

Ouvrir l'URL affichée (`https://.../formations/images/structurer-piloter-relation-client-crm.jpeg`) dans un navigateur ou via `curl -sI <url> | head -1` — attendre `HTTP/2 200`.

Aucun commit requis pour cette tâche (aucun fichier du repo n'est modifié, uniquement l'état Supabase).

---

### Task 4: Vérification visuelle sur le site en local

**Files:** aucun fichier modifié — vérification uniquement.

**Interfaces:**
- Consumes: formation complète (Task 2) + image (Task 3), lue dynamiquement par `src/pages/Formations.tsx` et `src/pages/FormationDetail.tsx` via `useFormations()` (`src/hooks/useFormations.ts`).
- Produces: confirmation que la formation s'affiche correctement — rien de plus, aucune tâche ultérieure n'en dépend.

- [ ] **Step 1: Lancer le serveur de dev**

Run: `npm run dev` (laisser tourner en arrière-plan)

- [ ] **Step 2: Vérifier la page liste**

Ouvrir `http://localhost:5173/formations` (adapter le port si différent dans la sortie de la commande précédente), filtrer sur le domaine "Digital".
Expected: une carte "Structurer et piloter la relation client avec un CRM" apparaît, avec l'image uploadée, la durée "21h" et le prix "2100 €" (ou équivalent formaté par le composant).

- [ ] **Step 3: Vérifier la page détail**

Ouvrir `http://localhost:5173/formations/structurer-piloter-relation-client-crm`.
Expected:
- Hero avec titre, image, badge domaine "Digital", pas de badge certification (champ `certification` vide → bloc conditionnel absent).
- Section "Public visé" = texte `participants_info`.
- Section "Prérequis" = les 3 puces définies.
- Section "Objectifs" = les 4 puces définies.
- Accordéon "Programme" = 3 modules, chacun listant ses items avec durées.
- Section "Moyens pédagogiques" affichant les modalités, avec le sous-groupe "Moyens techniques" séparé (convention `##Titre`).
- Sidebar : durée 21h, prix 2100 €, pas de bloc certification/France Compétences (champs vides), CTA "Demander un devis"/"S'inscrire" visible.

- [ ] **Step 4: Arrêter le serveur de dev**

Interrompre le process `npm run dev` (Ctrl+C dans le terminal où il tourne).

Aucun commit requis pour cette tâche.

---

## Self-Review Notes

- **Couverture spec** : tous les champs listés dans la spec (`docs/superpowers/specs/2026-09-15-formation-crm-design.md`, section "Données de la formation") sont repris verbatim en Task 2. Le `display_order` est déterminé dynamiquement en Task 1 plutôt que codé en dur, car il dépend de l'état actuel de la base (non connu à l'écriture du plan).
- **Pas de nouveau domaine** ni de modification de `scripts/upsert-formation.ts` — conforme à la section "Hors périmètre" de la spec.
- **Pas de tests unitaires classiques** : ce plan ajoute des données, pas de logique métier. La "boucle de test" est remplacée par une vérification directe en base (Task 2, Step 4) et une vérification visuelle du rendu réel (Task 4), ce qui est le pattern déjà utilisé pour les formations existantes du repo (aucun test automatisé n'existe pour `scripts/formations/*.ts`).
