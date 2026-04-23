import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Clock, Award, BookOpen, Monitor, Video,
  BarChart3, UserCheck, Download, Brain, Briefcase, ExternalLink,
  GraduationCap, ChevronDown, ChevronUp, CheckCircle, Heart, Headphones,
} from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import type { Formation } from "@/hooks/useFormations";

const iconMap: Record<string, React.ElementType> = {
  Monitor, Brain, Briefcase, BookOpen, Award,
};

const categoryIconMap: Record<string, React.ElementType> = {
  "Ressources pédagogiques": BookOpen,
  "Outils & Accès": Monitor,
  "Accompagnement formateur": UserCheck,
  "Suivi personnalisé": BarChart3,
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
      return data as unknown as Formation;
    },
    enabled: !!slug,
  });

  const [openModules, setOpenModules] = useState<Record<number, boolean>>({});
  const [allExpanded, setAllExpanded] = useState(false);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <div className="animate-pulse">
          <div className="min-h-[55vh] bg-muted" />
          <div className="max-w-7xl mx-auto px-4 py-16 space-y-6">
            <div className="h-8 bg-muted rounded w-2/3" />
            <div className="h-4 bg-muted rounded w-1/2" />
            <div className="h-48 bg-muted rounded" />
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

  const prerequisites = formation.prerequisites || [];
  const objectives = formation.objectives || [];
  const program = formation.program || [];
  const modalities = formation.modalities || [];
  const evaluationDetails = formation.evaluation_details || [];
  const keyStats = formation.key_stats || [];

  const DomainIcon = iconMap[formation.domains?.icon || "BookOpen"] || BookOpen;

  // Parse modalities: items starting with ## are category headers
  const modalityGroups: { title: string; items: string[] }[] = [];
  let currentGroup: { title: string; items: string[] } | null = null;
  for (const item of modalities) {
    if (item.startsWith("##")) {
      currentGroup = { title: item.slice(2), items: [] };
      modalityGroups.push(currentGroup);
    } else if (currentGroup) {
      currentGroup.items.push(item);
    }
  }
  const hasGroups = modalityGroups.length > 0;

  const toggleModule = (i: number) => {
    setOpenModules((prev) => ({ ...prev, [i]: !prev[i] }));
  };

  const toggleAll = () => {
    if (allExpanded) {
      setOpenModules({});
      setAllExpanded(false);
    } else {
      const all: Record<number, boolean> = {};
      program.forEach((_, i) => { all[i] = true; });
      setOpenModules(all);
      setAllExpanded(true);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="relative min-h-[55vh] flex flex-col justify-end overflow-hidden">
          {formation.image_url ? (
            <img
              src={formation.image_url}
              alt={formation.title}
              className="absolute inset-0 w-full h-full object-cover"
            />
          ) : (
            <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/90 to-secondary" />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/70 to-primary/15" />
          <div className="absolute inset-0 opacity-20 pointer-events-none">
            <div className="absolute top-10 right-16 w-72 h-72 bg-accent/40 rounded-full blur-3xl animate-blob" />
            <div className="absolute bottom-20 left-10 w-56 h-56 bg-secondary/40 rounded-full blur-3xl animate-blob" style={{ animationDelay: "2s" }} />
          </div>
          <div className="relative z-10 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 pb-12 pt-32 text-primary-foreground">
            <div className="flex flex-wrap gap-2 mb-5">
              {formation.domains?.name && (
                <Badge className="bg-white/20 text-white border-0 backdrop-blur-sm gap-1">
                  <DomainIcon size={12} />
                  {formation.domains.name}
                </Badge>
              )}
              {formation.certification_code && (
                <Badge className="bg-accent text-accent-foreground border-0 font-bold">
                  {formation.certification_code}
                </Badge>
              )}
              {formation.cpf_eligible && (
                <Badge className="bg-white/20 text-white border-0 backdrop-blur-sm">
                  Finançable CPF
                </Badge>
              )}
              {formation.format && (
                <Badge className="bg-white/20 text-white border-0 backdrop-blur-sm">
                  {formation.format}
                </Badge>
              )}
            </div>
            <h1 className="text-3xl md:text-5xl font-bold mb-4 max-w-3xl leading-tight">
              {formation.title}
            </h1>
            <p className="text-lg text-white/85 max-w-2xl leading-relaxed">
              {formation.short_description}
            </p>
          </div>
        </div>

        {keyStats.length > 0 && (
          <div className="bg-accent text-accent-foreground">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex flex-wrap">
                {keyStats.map((stat, i) => (
                  <div
                    key={i}
                    className="flex-1 min-w-[120px] px-6 py-5 text-center border-r border-accent-foreground/20 last:border-r-0"
                  >
                    <p className="text-2xl font-bold">{stat.value}</p>
                    <p className="text-sm opacity-75 mt-0.5">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </section>

      {/* Contenu principal */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">

            {/* Colonne principale */}
            <div className="lg:col-span-2 space-y-12">

              {/* Public visé */}
              {formation.participants_info && (
                <div>
                  <h2 className="text-2xl font-bold mb-4">Public visé</h2>
                  <p className="text-muted-foreground leading-relaxed">{formation.participants_info}</p>
                </div>
              )}

              {/* Prérequis */}
              {prerequisites.length > 0 && (
                <div>
                  <h2 className="text-2xl font-bold mb-6">Prérequis</h2>
                  <div className="space-y-3">
                    {prerequisites.map((item, i) => (
                      <div key={i} className="flex items-start gap-3 p-4 rounded-2xl bg-muted/40">
                        <div className="flex items-center justify-center w-6 h-6 rounded-full bg-accent/15 text-accent font-bold text-xs shrink-0 mt-0.5">
                          {i + 1}
                        </div>
                        <p className="text-muted-foreground text-sm leading-relaxed">{item}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Objectifs pédagogiques */}
              {objectives.length > 0 && (
                <div>
                  <h2 className="text-2xl font-bold mb-2">Objectifs pédagogiques</h2>
                  <p className="text-xs text-muted-foreground mb-6">
                    Source :{" "}
                    <a
                      href="https://online-sales-success.fr/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 underline hover:text-accent transition-colors"
                    >
                      <img src="/oss-logo.png" alt="Online Sales Success" className="h-4 w-auto inline-block" />
                      Online Sales Success
                    </a>
                    {formation.france_competences_url && (
                      <>
                        {" — "}
                        <a
                          href={formation.france_competences_url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="underline hover:text-accent transition-colors"
                        >
                          fiche France Compétences
                        </a>
                      </>
                    )}
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {objectives.map((item, i) => (
                      <div key={i} className="rounded-2xl overflow-hidden border border-primary/10 shadow-sm">
                        <div className="bg-primary px-5 py-3 flex items-center justify-between">
                          <span className="text-primary-foreground/60 text-[10px] font-bold tracking-widest uppercase">
                            Objectif
                          </span>
                          <span className="text-primary-foreground font-bold text-sm">
                            {String(i + 1).padStart(2, "0")}
                          </span>
                        </div>
                        <div className="p-5 bg-muted/20">
                          <p className="text-sm text-muted-foreground leading-relaxed">{item}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Programme — accordéon */}
              {program.length > 0 && (
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="text-2xl font-bold">Programme détaillé</h2>
                    <button
                      onClick={toggleAll}
                      className="text-sm text-accent hover:text-accent/80 font-medium flex items-center gap-1 transition-colors"
                    >
                      {allExpanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                      {allExpanded ? "Tout réduire" : "Tout dérouler"}
                    </button>
                  </div>
                  <div className="space-y-2">
                    {program.map((module, i) => {
                      const isOpen = !!openModules[i];
                      return (
                        <div key={i} className="border border-primary/10 rounded-2xl overflow-hidden">
                          <button
                            onClick={() => toggleModule(i)}
                            className="w-full flex items-center gap-4 p-5 text-left hover:bg-muted/30 transition-colors"
                          >
                            <div className="flex items-center justify-center w-9 h-9 rounded-xl bg-accent/10 text-accent font-bold text-sm shrink-0">
                              {i + 1}
                            </div>
                            <span className="flex-1 font-semibold">{module.title}</span>
                            <div className="flex items-center gap-2 shrink-0 text-muted-foreground">
                              <span className="text-xs">{module.items.length} points</span>
                              {isOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                            </div>
                          </button>
                          {isOpen && (
                            <div className="px-5 pb-5 border-t border-primary/10 pt-4">
                              <ul className="space-y-2">
                                {module.items.map((item, j) => (
                                  <li key={j} className="flex items-start gap-2 text-sm text-muted-foreground">
                                    <span className="text-accent mt-1 shrink-0">•</span>
                                    <span>{item}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                  <div className="mt-6">
                    <Button
                      variant="outline"
                      className="rounded-full gap-2"
                      onClick={() => {
                        const lines = [
                          formation.title,
                          `Durée totale : ${formation.duration ?? ""}`,
                          "",
                          ...program.flatMap((module) => [
                            module.title,
                            ...module.items.map((item) => `  • ${item}`),
                            "",
                          ]),
                        ];
                        const blob = new Blob([lines.join("\n")], { type: "text/plain;charset=utf-8" });
                        const url = URL.createObjectURL(blob);
                        const a = document.createElement("a");
                        a.href = url;
                        a.download = `programme-${formation.slug}.txt`;
                        a.click();
                        URL.revokeObjectURL(url);
                      }}
                    >
                      <Download size={16} />
                      Télécharger le programme
                    </Button>
                  </div>
                </div>
              )}

              {/* Modalités d'évaluation */}
              {evaluationDetails.length > 0 && (
                <div>
                  <h2 className="text-2xl font-bold mb-6">Modalités d'évaluation</h2>
                  <div className="space-y-4">
                    {evaluationDetails.map((ev, i) => (
                      <Card key={i} className="rounded-2xl border-primary/10">
                        <CardContent className="p-6">
                          <div className="flex items-start gap-4">
                            <div className="flex items-center justify-center w-10 h-10 rounded-full bg-secondary/10 text-secondary font-bold shrink-0">
                              {i + 1}
                            </div>
                            <div>
                              <h3 className="font-bold mb-1">{ev.type}</h3>
                              <p className="text-muted-foreground text-sm leading-relaxed">{ev.description}</p>
                              <p className="text-sm font-semibold mt-2 text-accent">Durée : {ev.duration}</p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              )}

              {/* Procédure de candidature */}
              {formation.candidacy_procedure && (
                <div>
                  <h2 className="text-2xl font-bold mb-6">Procédure de candidature</h2>
                  <p className="text-muted-foreground leading-relaxed">{formation.candidacy_procedure}</p>
                </div>
              )}

              {/* Modalités pédagogiques */}
              {modalities.length > 0 && (
                <div>
                  <h2 className="text-2xl font-bold mb-6">Moyens pédagogiques & techniques</h2>
                  {hasGroups ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      {modalityGroups.map((group, gi) => {
                        const Icon = categoryIconMap[group.title] || BookOpen;
                        return (
                          <div key={gi} className="rounded-2xl border border-primary/10 bg-muted/20 p-5">
                            <div className="flex items-center gap-3 mb-4">
                              <div className="w-9 h-9 rounded-xl bg-accent/10 flex items-center justify-center shrink-0">
                                <Icon size={18} className="text-accent" />
                              </div>
                              <h3 className="font-bold text-sm">{group.title}</h3>
                            </div>
                            <ul className="space-y-2">
                              {group.items.map((item, ii) => (
                                <li key={ii} className="flex items-start gap-2 text-sm text-muted-foreground">
                                  <CheckCircle size={14} className="text-accent shrink-0 mt-0.5" />
                                  <span>{item}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        );
                      })}
                    </div>
                  ) : (
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                      {modalities.map((item, i) => {
                        const Icon = BookOpen;
                        return (
                          <Card key={i} className="rounded-2xl border-primary/10 hover:border-accent/30 transition-colors">
                            <CardContent className="p-6 flex flex-col items-center text-center gap-3">
                              <div className="w-12 h-12 rounded-2xl bg-accent/10 flex items-center justify-center">
                                <Icon size={22} className="text-accent" />
                              </div>
                              <span className="text-sm font-medium leading-snug">{item}</span>
                            </CardContent>
                          </Card>
                        );
                      })}
                    </div>
                  )}
                </div>
              )}

              {/* Accessibilité — Handicap */}
              <div>
                <h2 className="text-2xl font-bold mb-6">Accessibilité — Personnes en situation de handicap</h2>
                <div className="bg-muted/30 border border-primary/10 rounded-2xl p-6 space-y-5">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center shrink-0">
                      <Heart size={18} className="text-accent" />
                    </div>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      Les personnes en situation de handicap peuvent bénéficier de notre formation. Nous étudions chaque situation individuellement afin de mettre en place les adaptations nécessaires, en lien avec notre référent handicap et celui du certificateur Online Sales Success.
                    </p>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center shrink-0">
                      <Headphones size={18} className="text-accent" />
                    </div>
                    <div>
                      <p className="font-semibold text-sm mb-1">Contact référent handicap</p>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        Contactez-nous pour toute demande d'aménagement ou pour discuter de vos besoins spécifiques. Nous vous accompagnons dans vos démarches.
                      </p>
                      <Button asChild size="sm" className="mt-4 rounded-full">
                        <Link to="/contact">Nous contacter</Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Informations légales */}
              <div className="space-y-4">
                <h2 className="text-2xl font-bold">Informations légales</h2>
                {formation.exam_mention && (
                  <div className="bg-secondary/8 border border-secondary/20 rounded-2xl p-5">
                    <p className="text-[11px] font-bold uppercase tracking-wider text-secondary mb-2">
                      Préparation à l'examen de certification
                    </p>
                    <p className="text-sm text-muted-foreground italic leading-relaxed">
                      {formation.exam_mention}
                    </p>
                  </div>
                )}
                {formation.cpf_eligible && (
                  <div className="bg-secondary/8 border border-secondary/20 rounded-2xl p-5">
                    <p className="text-[11px] font-bold uppercase tracking-wider text-secondary mb-2">
                      Financement CPF
                    </p>
                    <p className="text-sm text-muted-foreground italic leading-relaxed">
                      Cette formation professionnelle de par son caractère certifiant peut être prise en charge par le CPF. Toute action ne rentrant pas dans le cadre de l'article L6313-1 du code du travail ne rentre pas dans ce dispositif de prise en charge.
                    </p>
                  </div>
                )}
              </div>

            </div>

            {/* Sidebar */}
            <div>
              <Card className="rounded-3xl sticky top-24">
                <CardContent className="p-8 space-y-6">
                  <h3 className="text-xl font-bold">Informations pratiques</h3>

                  <div className="space-y-5">
                    {formation.duration && (
                      <div className="flex items-start gap-3">
                        <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center shrink-0">
                          <Clock size={18} className="text-muted-foreground" />
                        </div>
                        <div>
                          <p className="font-semibold text-sm">Durée</p>
                          <p className="text-muted-foreground text-sm">{formation.duration}</p>
                          {formation.sync_hours && (
                            <p className="text-muted-foreground text-xs mt-0.5">
                              dont {formation.sync_hours} en direct
                            </p>
                          )}
                        </div>
                      </div>
                    )}

                    {formation.certification && (
                      <div className="flex items-start gap-3">
                        <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center shrink-0">
                          <Award size={18} className="text-muted-foreground" />
                        </div>
                        <div>
                          <p className="font-semibold text-sm">Certification</p>
                          <p className="text-muted-foreground text-sm">{formation.certification}</p>
                          {formation.certification_code && (
                            <Badge className="mt-1.5 bg-accent/10 text-accent border-0 text-xs">
                              {formation.certification_code}
                            </Badge>
                          )}
                        </div>
                      </div>
                    )}

                    {formation.certifier && (
                      <div className="flex items-start gap-3">
                        <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center shrink-0">
                          <GraduationCap size={18} className="text-muted-foreground" />
                        </div>
                        <div>
                          <p className="font-semibold text-sm">Certificateur</p>
                          <a
                            href="https://online-sales-success.fr/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-1.5 mt-1.5 hover:opacity-75 transition-opacity"
                          >
                            <img src="/oss-logo.png" alt={formation.certifier} className="h-5 w-auto" />
                          </a>
                        </div>
                      </div>
                    )}
                  </div>

                  {formation.price && (
                    <div className="bg-muted/50 rounded-2xl p-5">
                      <p className="text-3xl font-bold text-accent">
                        {formation.price.toLocaleString("fr-FR")}€
                      </p>
                      {formation.cpf_eligible && (
                        <p className="text-sm text-muted-foreground mt-1">100% Finançable CPF</p>
                      )}
                    </div>
                  )}

                  {formation.france_competences_url && (
                    <a
                      href={formation.france_competences_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-xs text-muted-foreground hover:text-accent transition-colors"
                    >
                      <ExternalLink size={12} />
                      Voir le référentiel France Compétences
                    </a>
                  )}

                  {formation.cpf_eligible && formation.cpf_url && (
                    <Button asChild className="w-full rounded-full bg-accent hover:bg-accent/90 text-accent-foreground">
                      <a href={formation.cpf_url} target="_blank" rel="noopener noreferrer">
                        S'inscrire avec le CPF
                      </a>
                    </Button>
                  )}

                  <Button asChild className="w-full rounded-full">
                    <Link to="/contact">S'inscrire</Link>
                  </Button>

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
