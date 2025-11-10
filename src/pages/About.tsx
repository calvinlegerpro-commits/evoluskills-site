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
      <section className="bg-primary text-primary-foreground py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">À propos de Formaskill</h1>
          <p className="text-xl text-primary-foreground/90 max-w-3xl">
            Votre partenaire de confiance pour la formation professionnelle en marketing digital
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-6 text-center">Notre mission</h2>
          <Card className="border-accent/20">
            <CardContent className="p-8">
              <p className="text-lg leading-relaxed mb-4">
                Formaskill est né de la conviction que la formation professionnelle doit être accessible à tous. 
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
      <section className="py-16 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <p className="text-4xl md:text-5xl font-bold text-accent mb-2">{stat.number}</p>
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
                <Card key={index} className="border-primary/10">
                  <CardContent className="p-8">
                    <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-accent/10 mb-4">
                      <Icon className="text-accent" size={28} />
                    </div>
                    <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-card">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-6 text-center">Notre équipe</h2>
          <Card>
            <CardContent className="p-8">
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
          <h2 className="text-3xl font-bold mb-6">Organisme certifié</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Formaskill est un organisme de formation certifié Qualiopi et nos formations sont éligibles au CPF. 
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
