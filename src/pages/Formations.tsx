import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, Users, Award, CheckCircle2 } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import socialMediaImage from "@/assets/social-media-training.jpg";

const Formations = () => {
  const formation = {
    title: "Communiquer sur les réseaux sociaux pour promouvoir sa TPE",
    description: "Développez les compétences essentielles pour gérer efficacement la communication de votre TPE sur les réseaux sociaux : stratégie, création de contenu, et promotion de vos activités",
    duration: "30 heures",
    level: "Débutant",
    participants: "Groupes réduits",
    price: "1 600€",
    certification: "RS 7200",
    prerequisites: [
      "Maîtrise des outils bureautiques (traitement de texte, images, navigation web)",
      "Aisance rédactionnelle et traitement de données chiffrées",
      "Ordinateur (PC ou Mac) et connexion Internet haut-débit",
      "Destiné aux créateurs, dirigeants de TPE ou collaborateurs en charge de la communication",
    ],
    objectives: [
      "Définir une stratégie réseaux sociaux adaptée aux ressources de votre TPE et à vos objectifs commerciaux",
      "Identifier les plateformes pertinentes en analysant leur positionnement et votre public cible",
      "Créer une page professionnelle intégrant votre identité visuelle pour ancrer votre présence digitale",
      "Élaborer une stratégie éditoriale structurée avec un planning d'actions pour assurer la régularité",
      "Animer votre page en publiant du contenu commercial, informatif et multimédia adapté et accessible",
      "Cultiver votre e-réputation via la publicité, la gestion des avis et le suivi des performances",
    ],
    program: [
      {
        title: "Unité 1 : Stratégie réseaux sociaux",
        modules: [
          "Comprendre les fondamentaux et le fonctionnement des réseaux sociaux",
          "Définir vos objectifs commerciaux et indicateurs de performance (KPIs)",
          "Identifier les réseaux pertinents pour votre public cible",
          "Élaborer un plan d'action adapté à vos capacités financières et temporelles",
        ],
      },
      {
        title: "Unité 2 : Plateformes de réseaux sociaux",
        modules: [
          "Analyser les différentes plateformes et leur positionnement",
          "Étudier votre public cible et ses comportements en ligne",
          "Analyser les pratiques de vos concurrents",
          "Comparer et identifier les bonnes communautés pour votre entreprise",
        ],
      },
      {
        title: "Unité 3 : Création de page entreprise",
        modules: [
          "Analyser votre présence actuelle sur les réseaux sociaux",
          "Définir votre identité visuelle (couleurs, polices, logo)",
          "Créer votre page de présentation avec photos et description",
          "Planifier une publication régulière et favoriser l'engagement",
          "Évaluer les résultats et ajuster votre stratégie",
        ],
      },
      {
        title: "Unité 4 : Stratégie éditoriale",
        modules: [
          "Introduction et importance de la stratégie éditoriale pour les TPE",
          "Analyse de situation : objectifs, forces, faiblesses, opportunités",
          "Définir votre ligne éditoriale : ton, sujets clés, formats de contenu",
          "Établir un calendrier éditorial et identifier les moments clés",
        ],
      },
      {
        title: "Unité 5 : Animation de pages",
        modules: [
          "Importance de l'animation et prise en compte de l'accessibilité",
          "Adaptations pour différentes situations de handicap",
          "Types de contenus : commercial, informatif, multimédia",
          "Générer des interactions et répondre à votre communauté",
          "Créer des contenus engageants avec l'IA (ChatGPT) et Canva",
        ],
      },
      {
        title: "Unité 6 : E-réputation",
        modules: [
          "Enjeux, bénéfices et risques de la e-réputation",
          "Actions publicitaires : types d'annonces, ciblage, mesure d'efficacité",
          "Gestion des avis, commentaires et situations de crise",
          "Collaboration avec des e-influenceurs et mesure d'impact",
          "Analyse des données pour optimiser vos publications",
        ],
      },
    ],
    methods: [
      "Vidéos pédagogiques interactives",
      "Cours en visioconférence avec un expert",
      "Tableau de bord de suivi personnalisé",
      "Correction des travaux par des professionnels",
      "Accès web & mobile 24/7",
      "Coach personnel dédié",
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
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">Nos formations</h1>
          <p className="text-xl md:text-2xl text-primary-foreground/90 max-w-3xl animate-fade-in" style={{ animationDelay: '0.1s' }}>
            Développez vos compétences en marketing digital avec nos formations certifiantes et finançables CPF
          </p>
        </div>
        
        {/* Decorative wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
            <path d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="hsl(var(--background))" />
          </svg>
        </div>
      </section>

      {/* Main Formation */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              <Card className="border-0 shadow-md">
                <CardHeader>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <Badge className="bg-accent text-accent-foreground">{formation.level}</Badge>
                    <Badge variant="outline">Certification</Badge>
                    <Badge variant="outline">100% en ligne</Badge>
                  </div>
                  <CardTitle className="text-3xl mb-2">{formation.title}</CardTitle>
                  <CardDescription className="text-lg">{formation.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="aspect-video mb-6 rounded-lg overflow-hidden">
                    <img 
                      src={socialMediaImage} 
                      alt="Formation réseaux sociaux" 
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Prerequisites */}
                  <div className="mb-8 bg-muted/30 p-6 rounded-2xl border border-accent/20">
                    <h3 className="text-2xl font-semibold mb-4 flex items-center gap-2">
                      <Award className="text-accent" size={24} />
                      Prérequis
                    </h3>
                    <div className="space-y-3">
                      {formation.prerequisites.map((prerequisite, index) => (
                        <div key={index} className="flex items-start gap-3">
                          <CheckCircle2 className="text-accent flex-shrink-0 mt-1" size={18} />
                          <p className="text-sm">{prerequisite}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Objectives */}
                  <div className="mb-8">
                    <h3 className="text-2xl font-semibold mb-4">Objectifs de la formation</h3>
                    <div className="space-y-3">
                      {formation.objectives.map((objective, index) => (
                        <div key={index} className="flex items-start gap-3 p-3 rounded-xl bg-gradient-to-r from-accent/5 to-transparent hover:from-accent/10 transition-all">
                          <CheckCircle2 className="text-accent flex-shrink-0 mt-1" size={20} />
                          <p>{objective}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Program */}
                  <div>
                    <h3 className="text-2xl font-semibold mb-4">Programme détaillé</h3>
                    <div className="space-y-4">
                      {formation.program.map((unit, index) => (
                        <Card key={index} className="border-accent/20 overflow-hidden group hover:shadow-lg transition-all">
                          <CardContent className="p-6">
                            <div className="flex items-start gap-4 mb-4">
                              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-accent to-secondary flex items-center justify-center text-primary-foreground font-bold text-lg">
                                {index + 1}
                              </div>
                              <div className="flex-1">
                                <h4 className="font-semibold text-xl mb-3 group-hover:text-accent transition-colors">{unit.title}</h4>
                                <ul className="space-y-2">
                                  {unit.modules.map((module, idx) => (
                                    <li key={idx} className="flex items-start gap-2 text-muted-foreground">
                                      <span className="text-accent mt-1">•</span>
                                      <span className="text-sm">{module}</span>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </div>

                  {/* Methods */}
                  <div className="mt-8">
                    <h3 className="text-2xl font-semibold mb-4">Modalités pédagogiques</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {formation.methods.map((method, index) => (
                        <div key={index} className="flex items-center gap-3 p-3 rounded-xl bg-gradient-to-r from-primary/5 to-transparent">
                          <CheckCircle2 className="text-primary flex-shrink-0" size={18} />
                          <p className="text-sm">{method}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <Card className="sticky top-24 overflow-hidden border-accent/20">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-accent/20 to-transparent rounded-full blur-2xl"></div>
                <CardHeader className="relative">
                  <CardTitle>Informations pratiques</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 relative">
                  <div className="flex items-center gap-3 p-3 rounded-xl bg-gradient-to-r from-primary/5 to-transparent">
                    <Clock className="text-accent flex-shrink-0" size={22} />
                    <div>
                      <p className="font-semibold">Durée</p>
                      <p className="text-sm text-muted-foreground">{formation.duration}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3 p-3 rounded-xl bg-gradient-to-r from-accent/5 to-transparent">
                    <Users className="text-accent flex-shrink-0" size={22} />
                    <div>
                      <p className="font-semibold">Participants</p>
                      <p className="text-sm text-muted-foreground">{formation.participants}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3 p-3 rounded-xl bg-gradient-to-r from-secondary/5 to-transparent">
                    <Award className="text-secondary flex-shrink-0" size={22} />
                    <div>
                      <p className="font-semibold">Certification</p>
                      <p className="text-sm text-muted-foreground">{formation.certification}</p>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-border">
                    <div className="bg-gradient-to-r from-accent/10 to-secondary/10 p-4 rounded-2xl mb-4">
                      <p className="text-3xl font-bold bg-gradient-to-r from-accent to-secondary bg-clip-text text-transparent mb-1">
                        {formation.price}
                      </p>
                      <p className="text-sm font-medium">100% Finançable CPF</p>
                    </div>
                  </div>

                  <Button className="w-full bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary text-primary-foreground shadow-lg hover:shadow-xl transition-all" size="lg">
                    S'inscrire avec le CPF
                  </Button>
                  
                  <Button asChild variant="outline" className="w-full border-accent/30 hover:bg-accent/5" size="lg">
                    <Link to="/contact">Demander un devis</Link>
                  </Button>

                  <p className="text-xs text-center text-muted-foreground mt-4">
                    Délai d'accès : 1 à 14 jours
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Formations;
