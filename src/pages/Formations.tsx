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
    description: "Maîtrisez les réseaux sociaux pour développer la visibilité et l'engagement de votre TPE/PME",
    duration: "35 heures",
    level: "Débutant à Intermédiaire",
    participants: "15 max",
    price: "Finançable CPF",
    objectives: [
      "Élaborer une stratégie de communication digitale efficace",
      "Créer et gérer des profils professionnels sur les réseaux sociaux",
      "Produire du contenu engageant et attractif",
      "Analyser les performances et optimiser sa présence en ligne",
      "Gérer la relation client sur les réseaux sociaux",
    ],
    program: [
      {
        title: "Module 1 : Fondamentaux des réseaux sociaux",
        content: "Panorama des plateformes, choix stratégiques, création de profils professionnels",
        duration: "7h",
      },
      {
        title: "Module 2 : Création de contenu",
        content: "Stratégie éditoriale, visuels impactants, rédaction engageante, planning de publication",
        duration: "10h",
      },
      {
        title: "Module 3 : Community management",
        content: "Animation de communauté, gestion des interactions, modération, service client",
        duration: "8h",
      },
      {
        title: "Module 4 : Analyse et optimisation",
        content: "KPIs et métriques, outils d'analyse, ROI, ajustements stratégiques",
        duration: "7h",
      },
      {
        title: "Module 5 : Projet final",
        content: "Mise en pratique complète sur un projet réel",
        duration: "3h",
      },
    ],
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Header */}
      <section className="bg-primary text-primary-foreground py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Nos formations</h1>
          <p className="text-xl text-primary-foreground/90 max-w-3xl">
            Développez vos compétences en marketing digital avec nos formations certifiantes
          </p>
        </div>
      </section>

      {/* Main Formation */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              <Card>
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

                  {/* Objectives */}
                  <div className="mb-8">
                    <h3 className="text-2xl font-semibold mb-4">Objectifs de la formation</h3>
                    <div className="space-y-3">
                      {formation.objectives.map((objective, index) => (
                        <div key={index} className="flex items-start gap-3">
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
                      {formation.program.map((module, index) => (
                        <Card key={index} className="border-accent/20">
                          <CardContent className="p-6">
                            <div className="flex items-start justify-between gap-4 mb-2">
                              <h4 className="font-semibold text-lg">{module.title}</h4>
                              <Badge variant="outline">{module.duration}</Badge>
                            </div>
                            <p className="text-muted-foreground">{module.content}</p>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <Card className="sticky top-24">
                <CardHeader>
                  <CardTitle>Informations pratiques</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Clock className="text-accent" size={20} />
                    <div>
                      <p className="font-semibold">Durée</p>
                      <p className="text-sm text-muted-foreground">{formation.duration}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <Users className="text-accent" size={20} />
                    <div>
                      <p className="font-semibold">Participants</p>
                      <p className="text-sm text-muted-foreground">{formation.participants}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <Award className="text-accent" size={20} />
                    <div>
                      <p className="font-semibold">Certification</p>
                      <p className="text-sm text-muted-foreground">Incluse</p>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-border">
                    <p className="text-2xl font-bold text-accent mb-1">{formation.price}</p>
                    <p className="text-sm text-muted-foreground mb-4">Formation éligible CPF</p>
                  </div>

                  <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground" size="lg">
                    S'inscrire avec le CPF
                  </Button>
                  
                  <Button asChild variant="outline" className="w-full" size="lg">
                    <Link to="/contact">Demander un devis</Link>
                  </Button>
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
