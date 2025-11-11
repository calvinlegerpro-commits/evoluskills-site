import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const CGV = () => {
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
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">Conditions Générales de Vente</h1>
          <p className="text-xl md:text-2xl text-primary-foreground/90 max-w-3xl animate-fade-in" style={{ animationDelay: '0.1s' }}>
            Nos conditions générales de vente pour nos formations professionnelles
          </p>
        </div>
        
        {/* Decorative wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
            <path d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="hsl(var(--background))" />
          </svg>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <Card className="border-0 shadow-md overflow-hidden animate-fade-in">
            <CardHeader>
              <CardTitle>1. Objet</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground">
              <p>
                Les présentes Conditions Générales de Vente (CGV) régissent les relations contractuelles entre FormSkills, 
                organisme de formation professionnelle, et toute personne physique ou morale souhaitant bénéficier des 
                formations proposées.
              </p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-md overflow-hidden animate-fade-in" style={{ animationDelay: '0.1s' }}>
            <CardHeader>
              <CardTitle>2. Inscription et modalités</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground">
              <p>
                L'inscription à une formation devient définitive après :
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Réception du bulletin d'inscription dûment complété et signé</li>
                <li>Validation du dossier de financement (CPF, OPCO, ou autre)</li>
                <li>Confirmation écrite de FormSkills</li>
              </ul>
              <p>
                FormSkills se réserve le droit d'annuler ou de reporter une formation si le nombre minimum 
                de participants n'est pas atteint.
              </p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-md overflow-hidden animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <CardHeader>
              <CardTitle>3. Tarifs et modalités de paiement</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground">
              <p>
                Les tarifs des formations sont indiqués en euros TTC. Ils incluent la documentation pédagogique 
                et l'accès à la plateforme de formation en ligne le cas échéant.
              </p>
              <p>
                Les formations peuvent être financées par :
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Le Compte Personnel de Formation (CPF)</li>
                <li>Les OPCO (Opérateurs de Compétences)</li>
                <li>Le financement personnel</li>
                <li>Le financement par l'employeur</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-md overflow-hidden animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <CardHeader>
              <CardTitle>4. Annulation et report</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground">
              <p>
                <strong>Par le stagiaire :</strong> Toute annulation doit être notifiée par écrit. 
                En cas d'annulation moins de 7 jours avant le début de la formation, des frais d'annulation 
                peuvent être appliqués selon les modalités de financement.
              </p>
              <p>
                <strong>Par FormSkills :</strong> En cas d'annulation du fait de FormSkills, le stagiaire 
                sera intégralement remboursé des sommes versées ou un report sera proposé.
              </p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-md overflow-hidden animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <CardHeader>
              <CardTitle>5. Obligations du stagiaire</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground">
              <p>
                Le stagiaire s'engage à :
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Respecter le règlement intérieur de l'organisme de formation</li>
                <li>Être assidu et ponctuel aux sessions de formation</li>
                <li>Effectuer les travaux demandés par le formateur</li>
                <li>Passer les évaluations prévues dans le cadre de la formation</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-md overflow-hidden animate-fade-in" style={{ animationDelay: '0.5s' }}>
            <CardHeader>
              <CardTitle>6. Propriété intellectuelle</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground">
              <p>
                Tous les supports de formation restent la propriété exclusive de FormSkills. Toute reproduction, 
                diffusion ou utilisation commerciale sans autorisation préalable est interdite.
              </p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-md overflow-hidden animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <CardHeader>
              <CardTitle>7. Protection des données personnelles</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground">
              <p>
                Conformément au RGPD, les données personnelles collectées sont utilisées uniquement dans le cadre 
                de la gestion des formations. Le stagiaire dispose d'un droit d'accès, de rectification et de 
                suppression de ses données en contactant FormSkills.
              </p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-md overflow-hidden animate-fade-in" style={{ animationDelay: '0.7s' }}>
            <CardHeader>
              <CardTitle>8. Litiges</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground">
              <p>
                En cas de litige, une solution amiable sera recherchée avant toute action judiciaire. 
                À défaut, le tribunal compétent sera celui du siège social de FormSkills.
              </p>
            </CardContent>
          </Card>

          <div className="text-sm text-muted-foreground text-center pt-8 animate-fade-in" style={{ animationDelay: '0.8s' }}>
            <p>Dernière mise à jour : {new Date().toLocaleDateString('fr-FR')}</p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CGV;
