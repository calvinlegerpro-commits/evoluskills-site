import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Award, CheckCircle2, Calendar, GraduationCap, Target, FileText, Users } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Certifications = () => {
  const certification = {
    title: "Certification Qualiopi",
    code: "Qualiopi",
    status: "Active",
    registrationDate: "07/01/2026",
    expiryDate: "06/01/2029",
    level: "Organisme de formation certifié",
    certifier: "Evolve",
    category: "Qualité des prestataires de formation",

    summary: "Qualiopi est la certification qualité obligatoire pour les organismes de formation souhaitant accéder aux financements publics et mutualisés (CPF, OPCO, Pôle emploi…). Elle atteste de la qualité des processus mis en œuvre par EvoluSkills dans la conception et la délivrance de ses formations.",

    objectives: [
      "Garantir la qualité et la transparence des informations communiquées aux apprenants",
      "Assurer l'adéquation des formations aux besoins et objectifs des bénéficiaires",
      "Mettre en œuvre des modalités pédagogiques et d'évaluation adaptées",
      "Engager une démarche d'amélioration continue des prestations de formation",
    ],

    competenceBlocks: [
      {
        title: "Critère 1 : Information et communication",
        description: "Conditions d'information du public sur les prestations proposées et les résultats obtenus",
        competences: [
          "Diffusion d'informations claires sur les formations proposées",
          "Communication sur les délais d'accès et les prérequis",
          "Publication des indicateurs de résultats (taux de satisfaction, insertion…)",
          "Accessibilité et transparence des informations tarifaires",
        ]
      },
      {
        title: "Critère 2 : Objectifs et adaptation aux publics",
        description: "Identification précise des objectifs et adaptation aux bénéficiaires",
        competences: [
          "Définition claire des objectifs pédagogiques de chaque formation",
          "Analyse des besoins des apprenants en amont",
          "Adaptation des contenus aux profils et niveaux des bénéficiaires",
          "Prise en compte des situations de handicap",
        ]
      },
      {
        title: "Critère 3 : Accompagnement et suivi",
        description: "Modalités d'accueil, d'accompagnement, de suivi et d'évaluation",
        competences: [
          "Suivi individualisé des apprenants tout au long de la formation",
          "Évaluation des acquis en cours et en fin de parcours",
          "Accompagnement dans la mise en pratique des compétences",
          "Recueil de la satisfaction des apprenants",
        ]
      },
      {
        title: "Critères 4 à 7 : Moyens, personnel et amélioration continue",
        description: "Adéquation des moyens, qualification des formateurs et démarche qualité",
        competences: [
          "Moyens pédagogiques et techniques adaptés aux formations délivrées",
          "Qualification et développement continu des formateurs",
          "Veille pédagogique et inscription dans l'environnement professionnel",
          "Traitement des appréciations et réclamations des parties prenantes",
        ]
      },
    ],

    evaluationMethods: [
      "Audit initial par un organisme certificateur accrédité COFRAC",
      "Audit de surveillance à 18 mois pour vérifier le maintien des critères",
      "Audit de renouvellement tous les 3 ans",
      "Contrôle sur pièces et sur site de l'ensemble des 7 critères et 32 indicateurs du Référentiel National Qualité",
    ],

    targetAudience: [
      "Salariés en formation professionnelle continue",
      "Demandeurs d'emploi financés par Pôle emploi",
      "Particuliers utilisant leur Compte Personnel de Formation (CPF)",
      "Entreprises et OPCO finançant des parcours de formation",
      "Indépendants et dirigeants de TPE/PME",
    ],
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Header */}
      <section className="relative bg-gradient-to-br from-primary via-primary/95 to-secondary text-primary-foreground py-24 overflow-hidden border-b-0">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 right-0 w-96 h-96 bg-accent/30 rounded-full blur-3xl animate-blob"></div>
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-secondary/30 rounded-full blur-3xl animate-blob animation-delay-2000"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex items-center gap-4 mb-6 animate-fade-in">
            <div className="w-16 h-16 rounded-2xl bg-accent/20 backdrop-blur-sm flex items-center justify-center">
              <Award size={36} />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold">Nos certifications</h1>
          </div>
          <p className="text-xl md:text-2xl text-primary-foreground/90 max-w-3xl animate-fade-in" style={{ animationDelay: '0.1s' }}>
            Des certifications professionnelles reconnues par l'État pour valoriser vos compétences
          </p>
        </div>
        
        {/* Decorative wave */}
        <div className="absolute -bottom-px left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full block">
            <path d="M0 120L60 114C120 108 240 96 360 90C480 84 600 84 720 87C840 90 960 96 1080 99C1200 102 1320 102 1380 102L1440 102V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="hsl(var(--background))" />
          </svg>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

          <Card className="border-0 shadow-lg overflow-hidden animate-fade-in">
            <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-primary via-accent to-secondary"></div>
            <CardHeader className="bg-gradient-to-br from-accent/5 to-transparent pb-4">
              <div className="flex items-center gap-3 mb-3">
                <Badge className="bg-gradient-to-r from-primary to-accent text-primary-foreground text-base px-4 py-1">
                  {certification.code}
                </Badge>
                <Badge variant="outline" className="border-green-500 text-green-700 dark:text-green-400">
                  {certification.status}
                </Badge>
              </div>
              <CardTitle className="text-2xl md:text-3xl leading-tight">
                {certification.title}
              </CardTitle>
            </CardHeader>

            <CardContent className="pt-4 pb-6">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="flex items-start gap-3 p-4 rounded-xl bg-accent/5 hover:bg-accent/10 transition-colors">
                  <GraduationCap className="text-accent flex-shrink-0 mt-1" size={20} />
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Statut</p>
                    <p className="font-semibold text-sm">{certification.level}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-4 rounded-xl bg-accent/5 hover:bg-accent/10 transition-colors">
                  <Award className="text-accent flex-shrink-0 mt-1" size={20} />
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Certificateur</p>
                    <p className="font-semibold text-sm">{certification.certifier}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-4 rounded-xl bg-accent/5 hover:bg-accent/10 transition-colors">
                  <Calendar className="text-accent flex-shrink-0 mt-1" size={20} />
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Délivrance</p>
                    <p className="font-semibold text-sm">{certification.registrationDate}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-4 rounded-xl bg-accent/5 hover:bg-accent/10 transition-colors">
                  <Calendar className="text-accent flex-shrink-0 mt-1" size={20} />
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Échéance</p>
                    <p className="font-semibold text-sm">{certification.expiryDate}</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Certifications;
