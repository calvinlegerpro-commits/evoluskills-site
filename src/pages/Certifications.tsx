import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Award, CheckCircle2, Calendar, Building2, GraduationCap, Target, FileText, Users } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Certifications = () => {
  const certification = {
    title: "Maîtriser les réseaux sociaux et en faire un levier de développement et de visibilité de son entreprise",
    code: "RS7200",
    status: "Active",
    registrationDate: "08-02-2025",
    expiryDate: "08-02-2028",
    certifier: "ELYSEES CONSULTANTS FORMATION",
    level: "Sans niveau spécifique",
    category: "Formation continue",
    
    summary: "Cette certification professionnelle valide les compétences nécessaires pour développer et optimiser la présence digitale d'une entreprise sur les réseaux sociaux, en élaborant une stratégie efficace et mesurable.",
    
    objectives: [
      "Élaborer une stratégie de communication digitale adaptée aux objectifs business",
      "Créer et gérer du contenu engageant sur les différentes plateformes sociales",
      "Analyser les performances et optimiser le ROI des actions social media",
      "Développer une communauté active et fidèle autour de la marque",
    ],
    
    competenceBlocks: [
      {
        title: "Bloc 1 : Stratégie Social Media",
        description: "Définir et mettre en œuvre une stratégie de communication digitale",
        competences: [
          "Analyser l'écosystème digital de l'entreprise",
          "Définir les objectifs et KPIs de la présence social media",
          "Choisir les plateformes adaptées à la cible et aux objectifs",
          "Élaborer un planning éditorial cohérent",
        ]
      },
      {
        title: "Bloc 2 : Création de Contenu",
        description: "Produire des contenus adaptés à chaque plateforme",
        competences: [
          "Créer des visuels attractifs et optimisés",
          "Rédiger des publications engageantes",
          "Adapter le ton et le format selon la plateforme",
          "Utiliser les outils de création de contenu",
        ]
      },
      {
        title: "Bloc 3 : Community Management",
        description: "Animer et gérer la communauté en ligne",
        competences: [
          "Modérer les interactions et gérer les commentaires",
          "Créer de l'engagement avec la communauté",
          "Gérer les situations de crise en ligne",
          "Développer la notoriété de la marque",
        ]
      },
      {
        title: "Bloc 4 : Analyse et Optimisation",
        description: "Mesurer et optimiser les performances",
        competences: [
          "Analyser les statistiques des réseaux sociaux",
          "Calculer le ROI des actions menées",
          "Optimiser les campagnes en fonction des résultats",
          "Produire des rapports d'activité et recommandations",
        ]
      },
    ],
    
    evaluationMethods: [
      "Étude de cas pratique : Élaboration d'une stratégie social media complète",
      "Projet professionnel : Création et gestion d'un compte social media",
      "Analyse de performance : Présentation des résultats obtenus",
      "Soutenance orale devant un jury de professionnels",
    ],
    
    targetAudience: [
      "Entrepreneurs et dirigeants de TPE/PME",
      "Responsables marketing et communication",
      "Community managers",
      "Professionnels en reconversion",
      "Indépendants et consultants",
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
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
            <path d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="hsl(var(--background))" />
          </svg>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header Info Card */}
          <Card className="border-0 shadow-lg overflow-hidden mb-8 animate-fade-in">
            <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-primary via-accent to-secondary"></div>
            <CardHeader className="bg-gradient-to-br from-accent/5 to-transparent pb-6">
              <div className="flex items-start justify-between gap-4 flex-wrap">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-4">
                    <Badge className="bg-gradient-to-r from-primary to-accent text-primary-foreground text-base px-4 py-1">
                      Code RS {certification.code}
                    </Badge>
                    <Badge variant="outline" className="border-green-500 text-green-700 dark:text-green-400">
                      {certification.status}
                    </Badge>
                  </div>
                  <CardTitle className="text-2xl md:text-3xl mb-4 leading-tight">
                    {certification.title}
                  </CardTitle>
                  <CardDescription className="text-base">
                    {certification.summary}
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
            
            <CardContent className="pt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="flex items-start gap-3 p-4 rounded-xl bg-accent/5 hover:bg-accent/10 transition-colors">
                  <Building2 className="text-accent flex-shrink-0 mt-1" size={20} />
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Certificateur</p>
                    <p className="font-semibold text-sm">{certification.certifier}</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3 p-4 rounded-xl bg-accent/5 hover:bg-accent/10 transition-colors">
                  <GraduationCap className="text-accent flex-shrink-0 mt-1" size={20} />
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Niveau</p>
                    <p className="font-semibold text-sm">{certification.level}</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3 p-4 rounded-xl bg-accent/5 hover:bg-accent/10 transition-colors">
                  <Calendar className="text-accent flex-shrink-0 mt-1" size={20} />
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Enregistrement</p>
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

          {/* Objectifs */}
          <Card className="border-0 shadow-md mb-8 overflow-hidden group hover:shadow-xl hover:shadow-accent/10 transition-all duration-500 animate-fade-in" style={{ animationDelay: '0.1s' }}>
            <CardHeader className="relative">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-accent/20 to-secondary/10 flex items-center justify-center">
                  <Target className="text-accent" size={20} />
                </div>
                <CardTitle className="text-xl">Objectifs de la certification</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {certification.objectives.map((objective, index) => (
                  <div key={index} className="flex items-start gap-3 p-3 rounded-lg hover:bg-accent/5 transition-colors">
                    <CheckCircle2 className="text-accent flex-shrink-0 mt-0.5" size={20} />
                    <p className="text-sm">{objective}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Blocs de compétences */}
          <Card className="border-0 shadow-md mb-8 overflow-hidden group hover:shadow-xl hover:shadow-accent/10 transition-all duration-500 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <CardHeader className="relative">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-accent/20 to-secondary/10 flex items-center justify-center">
                  <FileText className="text-accent" size={20} />
                </div>
                <CardTitle className="text-xl">Blocs de compétences</CardTitle>
              </div>
              <CardDescription>
                Ensemble des compétences certifiées organisées par domaine
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {certification.competenceBlocks.map((block, index) => (
                <div key={index} className="relative">
                  {index > 0 && <Separator className="mb-6" />}
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-lg mb-1 text-accent">{block.title}</h4>
                      <p className="text-sm text-muted-foreground mb-4">{block.description}</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {block.competences.map((comp, compIndex) => (
                        <div key={compIndex} className="flex items-start gap-2 p-2 rounded-lg hover:bg-accent/5 transition-colors">
                          <CheckCircle2 className="text-accent/60 flex-shrink-0 mt-0.5" size={16} />
                          <span className="text-sm">{comp}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Modalités d'évaluation */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            <Card className="border-0 shadow-md overflow-hidden group hover:shadow-xl hover:shadow-accent/10 transition-all duration-500 animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <CardHeader className="relative">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-accent/20 to-secondary/10 flex items-center justify-center">
                    <Award className="text-accent" size={20} />
                  </div>
                  <CardTitle className="text-xl">Modalités d&apos;évaluation</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {certification.evaluationMethods.map((method, index) => (
                    <div key={index} className="flex items-start gap-3 p-3 rounded-lg hover:bg-accent/5 transition-colors">
                      <CheckCircle2 className="text-accent flex-shrink-0 mt-0.5" size={18} />
                      <p className="text-sm">{method}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-md overflow-hidden group hover:shadow-xl hover:shadow-accent/10 transition-all duration-500 animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <CardHeader className="relative">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-accent/20 to-secondary/10 flex items-center justify-center">
                    <Users className="text-accent" size={20} />
                  </div>
                  <CardTitle className="text-xl">Public visé</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {certification.targetAudience.map((audience, index) => (
                    <div key={index} className="flex items-start gap-3 p-3 rounded-lg hover:bg-accent/5 transition-colors">
                      <CheckCircle2 className="text-accent flex-shrink-0 mt-0.5" size={18} />
                      <p className="text-sm">{audience}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Financement */}
          <Card className="border-0 shadow-md overflow-hidden bg-gradient-to-br from-accent/5 to-transparent animate-fade-in" style={{ animationDelay: '0.5s' }}>
            <CardContent className="p-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent/20 to-secondary/10 flex items-center justify-center flex-shrink-0">
                  <CheckCircle2 className="text-accent" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Financement CPF disponible</h3>
                  <p className="text-muted-foreground mb-4">
                    Cette certification est éligible au financement par le Compte Personnel de Formation (CPF). 
                    Vous pouvez utiliser vos droits formation pour financer tout ou partie de votre parcours certifiant.
                  </p>
                  <Badge className="bg-gradient-to-r from-primary to-accent text-primary-foreground">
                    Certification inscrite au Répertoire Spécifique
                  </Badge>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-accent/5 to-secondary/5"></div>
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-blob"></div>
          <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-blob animation-delay-2000"></div>
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 animate-fade-in">
            Prêt à obtenir votre certification ?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 animate-fade-in" style={{ animationDelay: '0.1s' }}>
            Nos certifications sont reconnues par l'État et finançables via le CPF
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Certifications;
