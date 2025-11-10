import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Check, Award, Users, Clock } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import heroImage from "@/assets/hero-training.jpg";

const Home = () => {
  const benefits = [
    { icon: Award, title: "Certifications reconnues", description: "Des formations certifiantes de qualité" },
    { icon: Users, title: "Formateurs experts", description: "Des professionnels du marketing digital" },
    { icon: Clock, title: "Apprentissage flexible", description: "À votre rythme, 100% en ligne" },
  ];

  const cpfAdvantages = [
    "Formation 100% financée par le CPF",
    "Aucun frais à avancer",
    "Certification à la clé",
    "Accompagnement personnalisé",
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={heroImage} 
            alt="Formation marketing digital" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-foreground/80" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6">
            Développez vos compétences en<br />Marketing & Communication
          </h1>
          <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8 max-w-3xl mx-auto">
            Formations professionnelles 100% finançables CPF<br />
            Certifiantes et reconnues par l'État
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
              <Link to="/formations">Découvrir nos formations</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="bg-card hover:bg-card/90 text-foreground border-primary-foreground">
              <Link to="/contact">Nous contacter</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CPF Section */}
      <section className="py-16 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Financez votre formation avec le CPF
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Utilisez vos droits à la formation pour développer vos compétences sans débourser un euro
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {cpfAdvantages.map((advantage, index) => (
              <Card key={index} className="border-accent/20">
                <CardContent className="p-6">
                  <div className="flex items-start gap-3">
                    <Check className="text-accent flex-shrink-0 mt-1" size={20} />
                    <p className="font-medium">{advantage}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-secondary-foreground">
              Vérifier mes droits CPF
            </Button>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Pourquoi choisir Formaskill ?
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <Card key={index} className="border-primary/10 hover:border-accent/50 transition-colors">
                  <CardContent className="p-8 text-center">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/10 mb-4">
                      <Icon className="text-accent" size={32} />
                    </div>
                    <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
                    <p className="text-muted-foreground">{benefit.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Prêt à booster votre carrière ?
          </h2>
          <p className="text-xl mb-8 text-primary-foreground/90">
            Découvrez nos formations et commencez votre parcours dès aujourd'hui
          </p>
          <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
            <Link to="/formations">Voir toutes les formations</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
