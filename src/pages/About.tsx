import { Card, CardContent } from "@/components/ui/card";
import { Target, Users, Award, Heart } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const About = () => {
  const values = [
    {
      icon: Target,
      title: "Excellence pédagogique",
      description: "Des formations de qualité, constamment mises à jour avec les dernières tendances du marketing digital",
    },
    {
      icon: Users,
      title: "Accompagnement personnalisé",
      description: "Un suivi individuel pour garantir la réussite de chaque apprenant",
    },
    {
      icon: Award,
      title: "Certifications reconnues",
      description: "Des certifications professionnelles inscrites au RNCP et reconnues par l'État",
    },
    {
      icon: Heart,
      title: "Passion du digital",
      description: "Une équipe passionnée, experte du marketing et de la communication digitale",
    },
  ];

  const stats = [
    { number: "500+", label: "Apprenants formés" },
    { number: "95%", label: "Taux de satisfaction" },
    { number: "10+", label: "Formateurs experts" },
    { number: "100%", label: "Finançable CPF" },
  ];

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
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">À propos de FormSkills</h1>
          <p className="text-xl md:text-2xl text-primary-foreground/90 max-w-3xl animate-fade-in" style={{ animationDelay: '0.1s' }}>
            Votre partenaire de confiance pour la formation professionnelle en marketing digital
          </p>
        </div>
        
        {/* Decorative wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
            <path d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="hsl(var(--background))" />
          </svg>
        </div>
      </section>

      {/* Mission */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-6 text-center">Notre mission</h2>
          <Card className="border-0 shadow-md overflow-hidden group hover:shadow-2xl hover:shadow-accent/10 transition-all duration-500 animate-fade-in">
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-accent/10 to-transparent rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700"></div>
            <CardContent className="p-8 relative">
              <p className="text-lg leading-relaxed mb-4">
                FormSkills est né de la conviction que la formation professionnelle doit être accessible à tous. 
                Notre mission est d'accompagner les professionnels et entrepreneurs dans leur montée en compétences 
                sur les thématiques du marketing digital et de la communication.
              </p>
              <p className="text-lg leading-relaxed">
                Nous croyons que la maîtrise des outils digitaux est aujourd'hui indispensable pour développer 
                son activité. C'est pourquoi nous proposons des formations pratiques, certifiantes et 100% 
                finançables par le CPF, pour rendre la formation accessible à tous.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Stats */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-accent/5 to-secondary/5"></div>
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-blob"></div>
          <div className="absolute top-1/2 right-1/4 w-80 h-80 bg-primary/20 rounded-full blur-3xl animate-blob animation-delay-2000"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <p className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-accent via-secondary to-primary bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">
                  {stat.number}
                </p>
                <p className="text-muted-foreground font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12 text-center">Nos valeurs</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <Card key={index} className="border-accent/20 group hover:shadow-xl hover:shadow-accent/10 transition-all duration-500 hover:-translate-y-2 animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                  <CardContent className="p-8 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-accent/10 to-transparent rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700"></div>
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-accent/20 to-secondary/10 mb-4 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 relative">
                      <Icon className="text-accent" size={28} />
                    </div>
                    <h3 className="text-xl font-semibold mb-3 group-hover:text-accent transition-colors relative">{value.title}</h3>
                    <p className="text-muted-foreground leading-relaxed relative">{value.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-secondary/5 via-accent/5 to-primary/5"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h2 className="text-3xl font-bold mb-6 text-center">Notre équipe</h2>
          <Card className="border-accent/20 overflow-hidden group hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 animate-fade-in">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-accent to-secondary"></div>
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-gradient-to-br from-primary/10 to-transparent rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700"></div>
            <CardContent className="p-8 relative">
              <p className="text-lg leading-relaxed text-center">
                Notre équipe est composée de professionnels expérimentés du marketing digital et de la communication. 
                Formateurs passionnés, ils mettent leur expertise au service de votre réussite et vous accompagnent 
                tout au long de votre parcours de formation.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6 animate-fade-in">Organisme certifié</h2>
          <p className="text-lg text-muted-foreground mb-8 animate-fade-in" style={{ animationDelay: '0.1s' }}>
            FormSkills est un organisme de formation certifié Qualiopi et nos formations sont éligibles au CPF. 
            Nos certifications sont inscrites au RNCP et reconnues par l'État, garantissant la qualité et la 
            reconnaissance professionnelle de nos formations.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
