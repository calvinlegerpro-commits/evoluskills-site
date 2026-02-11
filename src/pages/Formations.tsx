import { useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, Award, Users, Brain, Monitor, Globe, Briefcase, BookOpen } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { useDomains, useFormations } from "@/hooks/useFormations";

const iconMap: Record<string, React.ElementType> = {
  Users, Monitor, Brain, Globe, Briefcase, BookOpen, Award,
};

const Formations = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const activeDomain = searchParams.get("domaine") || "";

  const { data: domains } = useDomains();
  const { data: formations, isLoading } = useFormations(activeDomain || undefined);

  const handleDomainFilter = (slug: string) => {
    if (slug === activeDomain) {
      searchParams.delete("domaine");
    } else {
      searchParams.set("domaine", slug);
    }
    setSearchParams(searchParams);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Header */}
      <section className="relative bg-gradient-to-br from-primary via-primary/95 to-secondary text-primary-foreground py-24 overflow-hidden border-b-0">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 right-0 w-96 h-96 bg-accent/30 rounded-full blur-3xl animate-blob" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-secondary/30 rounded-full blur-3xl animate-blob" style={{ animationDelay: '2s' }} />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Nos formations</h1>
          <p className="text-xl md:text-2xl text-primary-foreground/90 max-w-3xl">
            Développez vos compétences avec nos formations certifiantes et finançables CPF
          </p>
        </div>
        
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
            <path d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="hsl(var(--background))" />
          </svg>
        </div>
      </section>

      {/* Filters + Formations */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Domain Filters */}
          <div className="flex flex-wrap gap-3 mb-12">
            <Button
              variant={activeDomain === "" ? "default" : "outline"}
              className="rounded-full"
              onClick={() => { searchParams.delete("domaine"); setSearchParams(searchParams); }}
            >
              Tous les domaines
            </Button>
            {(domains || []).map((domain) => {
              const Icon = iconMap[domain.icon] || BookOpen;
              return (
                <Button
                  key={domain.id}
                  variant={activeDomain === domain.slug ? "default" : "outline"}
                  className="rounded-full gap-2"
                  onClick={() => handleDomainFilter(domain.slug)}
                >
                  <Icon size={16} />
                  {domain.name}
                </Button>
              );
            })}
          </div>

          {/* Formations Grid */}
          {isLoading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[1, 2, 3].map((i) => (
                <Card key={i} className="rounded-3xl animate-pulse">
                  <CardContent className="p-8">
                    <div className="h-6 bg-muted rounded w-3/4 mb-4" />
                    <div className="h-4 bg-muted rounded w-full mb-2" />
                    <div className="h-4 bg-muted rounded w-2/3" />
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : formations && formations.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {formations.map((formation, index) => {
                const DomainIcon = iconMap[formation.domains?.icon || "BookOpen"] || BookOpen;
                return (
                  <Link to={`/formations/${formation.slug}`} key={formation.id} className="block">
                    <Card
                      className="border-primary/10 hover:border-accent/50 transition-all group hover:shadow-2xl backdrop-blur-sm bg-card/80 rounded-3xl animate-scale-in overflow-hidden"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      {formation.image_url && (
                        <div className="aspect-video overflow-hidden">
                          <img src={formation.image_url} alt={formation.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                        </div>
                      )}
                      <CardHeader>
                        <div className="flex flex-wrap gap-2 mb-2">
                          <Badge className="bg-accent/10 text-accent border-0 gap-1">
                            <DomainIcon size={12} />
                            {formation.domains?.name}
                          </Badge>
                          {formation.cpf_eligible && (
                            <Badge variant="outline" className="border-secondary/30 text-secondary">CPF</Badge>
                          )}
                          {formation.level && (
                            <Badge variant="outline">{formation.level}</Badge>
                          )}
                        </div>
                        <CardTitle className="text-xl group-hover:text-accent transition-colors">{formation.title}</CardTitle>
                        <CardDescription>{formation.short_description}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="flex items-center justify-between text-sm text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <Clock size={14} />
                            <span>{formation.duration || "À définir"}</span>
                          </div>
                          {formation.price && (
                            <span className="font-bold text-accent text-lg">{formation.price}€</span>
                          )}
                        </div>
                        {formation.certification && (
                          <div className="flex items-center gap-1 mt-3 text-sm text-muted-foreground">
                            <Award size={14} className="text-secondary" />
                            <span>{formation.certification}</span>
                          </div>
                        )}
                      </CardContent>
                    </Card>
                  </Link>
                );
              })}
            </div>
          ) : (
            <div className="text-center py-20">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-muted mb-6">
                <BookOpen className="text-muted-foreground" size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-3">Formations à venir</h3>
              <p className="text-muted-foreground max-w-md mx-auto mb-8">
                De nouvelles formations arrivent bientôt dans ce domaine. Contactez-nous pour être informé dès leur disponibilité.
              </p>
              <Button asChild className="rounded-full bg-accent hover:bg-accent/90 text-accent-foreground">
                <Link to="/contact">Être tenu informé</Link>
              </Button>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Formations;
