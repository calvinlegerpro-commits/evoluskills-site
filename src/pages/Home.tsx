import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Check, Award, Users, Clock } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

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
      <section className="relative min-h-[700px] flex items-center justify-center overflow-hidden border-b-0">
        {/* Background avec mesh gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-background via-muted/30 to-background">
          <div className="absolute inset-0 opacity-50" style={{ background: 'var(--gradient-mesh)' }} />
        </div>
        
        {/* Blobs animés */}
        <div className="absolute top-20 right-10 w-72 h-72 rounded-full opacity-30 animate-blob" 
             style={{ background: 'var(--blob-gradient)' }} />
        <div className="absolute bottom-20 left-10 w-96 h-96 rounded-full opacity-20 animate-blob" 
             style={{ background: 'var(--blob-gradient)', animationDelay: '2s' }} />
        <div className="absolute top-40 left-1/3 w-64 h-64 rounded-full opacity-25 animate-blob" 
             style={{ background: 'var(--blob-gradient)', animationDelay: '4s' }} />
        
        {/* Contenu */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-20">
          <div className="animate-slide-up">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary via-accent to-secondary bg-200 animate-gradient-shift">
              Maîtrisez l'art de<br />la Communication
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto font-light">
              Formations premium 100% finançables CPF<br />
              <span className="text-accent font-medium">Certifiantes · Innovantes · Créatives</span>
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground shadow-lg hover:shadow-xl transition-all hover:scale-105 rounded-full px-8">
                <Link to="/formations">Découvrir nos formations</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-2 border-primary/30 hover:border-accent hover:bg-accent/10 rounded-full px-8 transition-all">
                <Link to="/contact">Nous contacter</Link>
              </Button>
            </div>
          </div>
        </div>
        
        {/* Vague décorative en bas */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
            <path d="M0,64L48,69.3C96,75,192,85,288,80C384,75,480,53,576,48C672,43,768,53,864,58.7C960,64,1056,64,1152,58.7C1248,53,1344,43,1392,37.3L1440,32L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z" fill="hsl(var(--card))" fillOpacity="0.9"/>
          </svg>
        </div>
      </section>

      {/* CPF Section */}
      <section className="py-20 bg-card relative overflow-hidden">
        <div className="absolute inset-0 opacity-30" style={{ background: 'var(--gradient-mesh)' }} />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16 animate-slide-up">
            <div className="inline-block mb-4 px-6 py-2 rounded-full bg-accent/10 text-accent font-medium text-sm">
              💰 Financement CPF
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              100% Financé par votre CPF
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Transformez vos droits à la formation en compétences concrètes
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {cpfAdvantages.map((advantage, index) => (
              <Card key={index} className="border-accent/20 hover:border-accent/50 transition-all hover:shadow-lg hover:-translate-y-1 backdrop-blur-sm bg-card/80 rounded-3xl animate-scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardContent className="p-6">
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center mt-1">
                      <Check className="text-accent" size={16} />
                    </div>
                    <p className="font-medium">{advantage}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Button size="lg" className="bg-gradient-to-r from-secondary via-accent to-secondary bg-200 animate-gradient-shift hover:shadow-xl text-secondary-foreground rounded-full px-8 hover:scale-105 transition-all">
              Vérifier mes droits CPF
            </Button>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full opacity-20 blur-3xl" 
             style={{ background: 'var(--gradient-glow)' }} />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              L'excellence en formation
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Une approche unique qui allie expertise, créativité et innovation
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <Card key={index} className="border-primary/10 hover:border-accent/50 transition-all group hover:shadow-2xl backdrop-blur-sm bg-card/50 rounded-3xl animate-scale-in overflow-hidden" style={{ animationDelay: `${index * 0.15}s` }}>
                  <CardContent className="p-8 text-center relative">
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity" 
                         style={{ background: 'var(--gradient-glow)' }} />
                    <div className="relative z-10">
                      <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-accent/20 to-secondary/20 mb-6 group-hover:scale-110 transition-transform animate-float" style={{ animationDelay: `${index * 0.5}s` }}>
                        <Icon className="text-accent" size={36} />
                      </div>
                      <h3 className="text-xl font-bold mb-3 group-hover:text-accent transition-colors">{benefit.title}</h3>
                      <p className="text-muted-foreground">{benefit.description}</p>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-foreground to-secondary opacity-95" />
        <div className="absolute inset-0" style={{ background: 'var(--gradient-mesh)' }} />
        
        {/* Vague décorative en haut */}
        <div className="absolute top-0 left-0 right-0 rotate-180">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
            <path d="M0,64L48,69.3C96,75,192,85,288,80C384,75,480,53,576,48C672,43,768,53,864,58.7C960,64,1056,64,1152,58.7C1248,53,1344,43,1392,37.3L1440,32L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z" fill="hsl(var(--background))" fillOpacity="1"/>
          </svg>
        </div>
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="animate-slide-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-primary-foreground">
              Prêt à transformer<br />votre carrière ?
            </h2>
            <p className="text-xl mb-10 text-primary-foreground/90 font-light">
              Rejoignez des centaines de professionnels qui ont<br />déjà boosté leurs compétences avec FormSkills
            </p>
            <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground shadow-2xl hover:shadow-accent/50 rounded-full px-10 hover:scale-110 transition-all animate-float">
              <Link to="/formations">Voir toutes les formations</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
