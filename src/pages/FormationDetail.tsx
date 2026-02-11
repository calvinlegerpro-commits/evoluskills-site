import { Link, useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Clock, Award, Users, CheckCircle, BookOpen, Monitor, Video, MessageSquare, BarChart3, UserCheck } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const modalityIcons: Record<string, React.ElementType> = {
  "Vidéos pédagogiques interactives": Video,
  "Cours en visioconférence avec un expert": Monitor,
  "Tableau de bord de suivi personnalisé": BarChart3,
  "Correction des travaux par des professionnels": CheckCircle,
  "Accès web & mobile 24/7": BookOpen,
  "Coach personnel dédié": UserCheck,
};

const FormationDetail = () => {
  const { slug } = useParams<{ slug: string }>();

  const { data: formation, isLoading } = useQuery({
    queryKey: ["formation", slug],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("formations")
        .select("*, domains(*)")
        .eq("slug", slug!)
        .single();
      if (error) throw error;
      return data;
    },
    enabled: !!slug,
  });

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <div className="max-w-7xl mx-auto px-4 py-32">
          <div className="animate-pulse space-y-6">
            <div className="h-10 bg-muted rounded w-2/3" />
            <div className="h-6 bg-muted rounded w-1/2" />
            <div className="h-64 bg-muted rounded" />
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  if (!formation) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <div className="max-w-7xl mx-auto px-4 py-32 text-center">
          <h1 className="text-3xl font-bold mb-4">Formation introuvable</h1>
          <Button asChild className="rounded-full">
            <Link to="/formations">Retour aux formations</Link>
          </Button>
        </div>
        <Footer />
      </div>
    );
  }

  const prerequisites = (formation.prerequisites as string[]) || [];
  const objectives = (formation.objectives as string[]) || [];
  const program = (formation.program as { title: string; items: string[] }[]) || [];
  const modalities = (formation.modalities as string[]) || [];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero */}
      <section className="relative bg-gradient-to-br from-primary via-primary/95 to-secondary text-primary-foreground py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 right-0 w-96 h-96 bg-accent/30 rounded-full blur-3xl animate-blob" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-secondary/30 rounded-full blur-3xl animate-blob" style={{ animationDelay: "2s" }} />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Nos formations</h1>
          <p className="text-xl md:text-2xl text-primary-foreground/90 max-w-3xl">
            Développez vos compétences en marketing digital avec nos formations certifiantes et finançables CPF
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
            <path d="M0 120L60 114C120 108 240 96 360 90C480 84 600 84 720 87C840 90 960 96 1080 99C1200 102 1320 102 1380 102L1440 102V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="hsl(var(--background))" />
          </svg>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">

            {/* Main content */}
            <div className="lg:col-span-2 space-y-10">
              {/* Badges + Title */}
              <Card className="rounded-3xl overflow-hidden">
                <CardContent className="p-8">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {formation.level && <Badge className="bg-accent/10 text-accent border-0">{formation.level}</Badge>}
                    {formation.certification && <Badge variant="outline">{formation.certification ? "Certification" : ""}</Badge>}
                    {formation.format && <Badge variant="outline">{formation.format}</Badge>}
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold mb-4">{formation.title}</h2>
                  <p className="text-muted-foreground text-lg leading-relaxed">{formation.short_description}</p>

                  {formation.image_url && (
                    <div className="mt-8 rounded-2xl overflow-hidden">
                      <img src={formation.image_url} alt={formation.title} className="w-full h-auto object-cover" />
                    </div>
                  )}
                </CardContent>
              </Card>

              {/* Prérequis */}
              {prerequisites.length > 0 && (
                <div>
                  <h3 className="text-2xl font-bold mb-6">Prérequis</h3>
                  <div className="space-y-3">
                    {prerequisites.map((item, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <CheckCircle size={20} className="text-accent mt-0.5 shrink-0" />
                        <p className="text-muted-foreground">{item}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Objectifs */}
              {objectives.length > 0 && (
                <div>
                  <h3 className="text-2xl font-bold mb-6">Objectifs de la formation</h3>
                  <div className="space-y-3">
                    {objectives.map((item, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <CheckCircle size={20} className="text-secondary mt-0.5 shrink-0" />
                        <p className="text-muted-foreground">{item}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Programme */}
              {program.length > 0 && (
                <div>
                  <h3 className="text-2xl font-bold mb-6">Programme détaillé</h3>
                  <div className="space-y-6">
                    {program.map((module, i) => (
                      <Card key={i} className="rounded-2xl border-primary/10">
                        <CardContent className="p-6">
                          <div className="flex items-start gap-4">
                            <div className="flex items-center justify-center w-10 h-10 rounded-full bg-accent/10 text-accent font-bold shrink-0">
                              {i + 1}
                            </div>
                            <div className="flex-1">
                              <h4 className="font-bold text-lg mb-3">{module.title}</h4>
                              <ul className="space-y-2">
                                {module.items.map((item, j) => (
                                  <li key={j} className="flex items-start gap-2 text-muted-foreground">
                                    <span className="text-accent mt-1">•</span>
                                    <span>{item}</span>
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
              )}

              {/* Modalités */}
              {modalities.length > 0 && (
                <div>
                  <h3 className="text-2xl font-bold mb-6">Modalités pédagogiques</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                    {modalities.map((item, i) => {
                      const Icon = modalityIcons[item] || BookOpen;
                      return (
                        <Card key={i} className="rounded-2xl border-primary/10">
                          <CardContent className="p-5 flex items-center gap-3">
                            <Icon size={24} className="text-accent shrink-0" />
                            <span className="text-sm font-medium">{item}</span>
                          </CardContent>
                        </Card>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <Card className="rounded-3xl sticky top-24">
                <CardContent className="p-8 space-y-6">
                  <h3 className="text-xl font-bold">Informations pratiques</h3>

                  <div className="space-y-5">
                    {formation.duration && (
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center">
                          <Clock size={18} className="text-muted-foreground" />
                        </div>
                        <div>
                          <p className="font-semibold text-sm">Durée</p>
                          <p className="text-muted-foreground text-sm">{formation.duration}</p>
                        </div>
                      </div>
                    )}

                    {formation.participants_info && (
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center">
                          <Users size={18} className="text-muted-foreground" />
                        </div>
                        <div>
                          <p className="font-semibold text-sm">Participants</p>
                          <p className="text-muted-foreground text-sm">{formation.participants_info}</p>
                        </div>
                      </div>
                    )}

                    {formation.certification && (
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center">
                          <Award size={18} className="text-muted-foreground" />
                        </div>
                        <div>
                          <p className="font-semibold text-sm">Certification</p>
                          <p className="text-muted-foreground text-sm">{formation.certification}</p>
                        </div>
                      </div>
                    )}
                  </div>

                  {formation.price && (
                    <div className="bg-muted/50 rounded-2xl p-5">
                      <p className="text-3xl font-bold text-accent">{formation.price.toLocaleString("fr-FR")}€</p>
                      {formation.cpf_eligible && (
                        <p className="text-sm text-muted-foreground mt-1">100% Finançable CPF</p>
                      )}
                    </div>
                  )}

                  {formation.cpf_eligible && formation.cpf_url && (
                    <Button asChild className="w-full rounded-full bg-accent hover:bg-accent/90 text-accent-foreground">
                      <a href={formation.cpf_url} target="_blank" rel="noopener noreferrer">S'inscrire avec le CPF</a>
                    </Button>
                  )}

                  <Button asChild variant="outline" className="w-full rounded-full">
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

export default FormationDetail;
