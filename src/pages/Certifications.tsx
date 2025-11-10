import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award, CheckCircle2, FileCheck } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Certifications = () => {
  const certifications = [
    {
      title: "Certification en Communication Digitale",
      code: "RS5565",
      description: "Certification professionnelle reconnue par France Compétences",
      skills: [
        "Stratégie de communication digitale",
        "Gestion des réseaux sociaux professionnels",
        "Création de contenu engageant",
        "Analyse de performance et ROI",
      ],
      level: "Niveau 5 (Bac+2)",
    },
  ];

  const processSteps = [
    {
      title: "1. Formation",
      description: "Suivez la formation complète avec nos experts",
    },
    {
      title: "2. Évaluation",
      description: "Projet pratique et évaluation des compétences acquises",
    },
    {
      title: "3. Certification",
      description: "Obtenez votre certification reconnue par l'État",
    },
  ];

  const advantages = [
    "Reconnaissance professionnelle",
    "Valorisation de votre CV",
    "Évolution de carrière",
    "Crédibilité accrue",
    "Certification inscrite au RNCP",
    "Financement CPF possible",
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Header */}
      <section className="relative bg-gradient-to-br from-primary via-primary/95 to-secondary text-primary-foreground py-24 overflow-hidden">
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

      {/* Certifications List */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 mb-16">
            {certifications.map((cert, index) => (
              <Card key={index} className="border-accent/20 overflow-hidden group hover:shadow-2xl hover:shadow-accent/10 transition-all duration-500 animate-fade-in">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-accent/10 to-transparent rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700"></div>
                <CardHeader className="relative">
                  <div className="flex items-start justify-between gap-4 flex-wrap mb-4">
                    <div>
                      <CardTitle className="text-2xl mb-2 group-hover:text-accent transition-colors">{cert.title}</CardTitle>
                      <Badge className="bg-gradient-to-r from-accent to-secondary text-primary-foreground">Code {cert.code}</Badge>
                    </div>
                    <Badge variant="outline" className="text-base px-4 py-2 border-accent/30">
                      {cert.level}
                    </Badge>
                  </div>
                  <CardDescription className="text-base">{cert.description}</CardDescription>
                </CardHeader>
                <CardContent className="relative">
                  <h4 className="font-semibold mb-4 text-lg">Compétences certifiées :</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {cert.skills.map((skill, skillIndex) => (
                      <div key={skillIndex} className="flex items-start gap-2 p-2 rounded-lg hover:bg-accent/5 transition-colors">
                        <CheckCircle2 className="text-accent flex-shrink-0 mt-0.5" size={20} />
                        <span>{skill}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Process */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">Processus de certification</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {processSteps.map((step, index) => (
                <Card key={index} className="text-center border-accent/20 group hover:shadow-xl hover:shadow-accent/10 transition-all duration-500 hover:-translate-y-2 animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                  <CardContent className="pt-8 pb-8 relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-accent to-secondary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                    <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-accent/20 to-secondary/10 mb-4 group-hover:scale-110 transition-transform duration-300">
                      <FileCheck className="text-accent" size={36} />
                    </div>
                    <h3 className="text-xl font-semibold mb-3 group-hover:text-accent transition-colors">{step.title}</h3>
                    <p className="text-muted-foreground">{step.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Advantages */}
          <div>
            <h2 className="text-3xl font-bold text-center mb-12">
              Avantages d'une certification professionnelle
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {advantages.map((advantage, index) => (
                <Card key={index} className="border-accent/20 group hover:border-accent/40 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 animate-fade-in" style={{ animationDelay: `${index * 0.05}s` }}>
                  <CardContent className="p-6 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-accent/10 to-transparent rounded-full blur-xl group-hover:scale-150 transition-transform duration-500"></div>
                    <div className="flex items-start gap-3 relative">
                      <CheckCircle2 className="text-accent flex-shrink-0 mt-1 group-hover:scale-110 transition-transform" size={20} />
                      <p className="font-medium">{advantage}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
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
