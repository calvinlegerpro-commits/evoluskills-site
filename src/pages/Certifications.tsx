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
      <section className="bg-primary text-primary-foreground py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-4">
            <Award size={48} />
            <h1 className="text-4xl md:text-5xl font-bold">Nos certifications</h1>
          </div>
          <p className="text-xl text-primary-foreground/90 max-w-3xl">
            Des certifications professionnelles reconnues par l'État pour valoriser vos compétences
          </p>
        </div>
      </section>

      {/* Certifications List */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 mb-16">
            {certifications.map((cert, index) => (
              <Card key={index} className="border-accent/20">
                <CardHeader>
                  <div className="flex items-start justify-between gap-4 flex-wrap mb-4">
                    <div>
                      <CardTitle className="text-2xl mb-2">{cert.title}</CardTitle>
                      <Badge className="bg-accent text-accent-foreground">Code {cert.code}</Badge>
                    </div>
                    <Badge variant="outline" className="text-base px-4 py-2">
                      {cert.level}
                    </Badge>
                  </div>
                  <CardDescription className="text-base">{cert.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <h4 className="font-semibold mb-4 text-lg">Compétences certifiées :</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {cert.skills.map((skill, skillIndex) => (
                      <div key={skillIndex} className="flex items-start gap-2">
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
                <Card key={index} className="text-center">
                  <CardContent className="pt-8 pb-8">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/10 mb-4">
                      <FileCheck className="text-accent" size={32} />
                    </div>
                    <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
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
                <Card key={index} className="border-primary/10">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="text-accent flex-shrink-0 mt-1" size={20} />
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
      <section className="py-16 bg-muted">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Prêt à obtenir votre certification ?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Nos certifications sont reconnues par l'État et finançables via le CPF
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Certifications;
