import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const MentionsLegales = () => {
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
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">Mentions Légales</h1>
          <p className="text-xl md:text-2xl text-primary-foreground/90 max-w-3xl animate-fade-in" style={{ animationDelay: '0.1s' }}>
            Informations légales et réglementaires
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
              <CardTitle>1. Éditeur du site</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground">
              <p>
                <strong>Raison sociale :</strong> FormSkills
              </p>
              <p>
                <strong>Forme juridique :</strong> [À compléter - SARL, SAS, etc.]
              </p>
              <p>
                <strong>Siège social :</strong> Paris, France
              </p>
              <p>
                <strong>Numéro de SIRET :</strong> [À compléter]
              </p>
              <p>
                <strong>Numéro de déclaration d'activité :</strong> [À compléter]
              </p>
              <p>
                <strong>Email :</strong> contact@formaskills.pro
              </p>
              <p>
                <strong>Téléphone :</strong> +33 6 95 02 76 11
              </p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-md overflow-hidden animate-fade-in" style={{ animationDelay: '0.1s' }}>
            <CardHeader>
              <CardTitle>2. Directeur de publication</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground">
              <p>
                Le directeur de la publication du site est [Nom du dirigeant], en sa qualité de représentant légal de FormSkills.
              </p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-md overflow-hidden animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <CardHeader>
              <CardTitle>3. Hébergement</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground">
              <p>
                Le site est hébergé par :
              </p>
              <p>
                <strong>Lovable</strong><br />
                [Adresse de l'hébergeur]
              </p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-md overflow-hidden animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <CardHeader>
              <CardTitle>4. Propriété intellectuelle</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground">
              <p>
                L'ensemble de ce site relève de la législation française et internationale sur le droit d'auteur 
                et la propriété intellectuelle. Tous les droits de reproduction sont réservés, y compris pour 
                les documents téléchargeables et les représentations iconographiques et photographiques.
              </p>
              <p>
                La reproduction de tout ou partie de ce site sur un support électronique quel qu'il soit est 
                formellement interdite sauf autorisation expresse du directeur de la publication.
              </p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-md overflow-hidden animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <CardHeader>
              <CardTitle>5. Protection des données personnelles</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground">
              <p>
                Conformément au Règlement Général sur la Protection des Données (RGPD) et à la loi Informatique 
                et Libertés, vous disposez d'un droit d'accès, de rectification, de suppression et d'opposition 
                aux données personnelles vous concernant.
              </p>
              <p>
                Pour exercer ces droits, vous pouvez nous contacter :
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Par email : contact@formaskills.pro</li>
                <li>Par téléphone : +33 6 95 02 76 11</li>
                <li>Par courrier : FormSkills, Paris, France</li>
              </ul>
              <p>
                Les données collectées sur ce site sont utilisées uniquement dans le cadre de la gestion des 
                formations et ne sont jamais communiquées à des tiers sans votre consentement.
              </p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-md overflow-hidden animate-fade-in" style={{ animationDelay: '0.5s' }}>
            <CardHeader>
              <CardTitle>6. Cookies</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground">
              <p>
                Ce site peut utiliser des cookies pour améliorer l'expérience utilisateur. Vous pouvez 
                configurer votre navigateur pour refuser les cookies, mais certaines fonctionnalités du site 
                pourraient ne pas être disponibles.
              </p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-md overflow-hidden animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <CardHeader>
              <CardTitle>7. Certification Qualiopi</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground">
              <p>
                FormSkills est certifié Qualiopi, certification qualité des organismes de formation professionnelle.
              </p>
              <p>
                <strong>Numéro de certification :</strong> [À compléter]
              </p>
              <p>
                Cette certification atteste de la qualité du processus mis en œuvre par les organismes de formation 
                et permet la prise en charge des formations par les financeurs publics et mutualisés.
              </p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-md overflow-hidden animate-fade-in" style={{ animationDelay: '0.7s' }}>
            <CardHeader>
              <CardTitle>8. Liens hypertextes</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground">
              <p>
                Le site peut contenir des liens hypertextes vers d'autres sites. FormSkills ne saurait être 
                tenu responsable du contenu de ces sites externes.
              </p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-md overflow-hidden animate-fade-in" style={{ animationDelay: '0.8s' }}>
            <CardHeader>
              <CardTitle>9. Droit applicable</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground">
              <p>
                Le présent site et les présentes mentions légales sont soumis au droit français. 
                En cas de litige, les tribunaux français seront seuls compétents.
              </p>
            </CardContent>
          </Card>

          <div className="text-sm text-muted-foreground text-center pt-8 animate-fade-in" style={{ animationDelay: '0.9s' }}>
            <p>Dernière mise à jour : {new Date().toLocaleDateString('fr-FR')}</p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default MentionsLegales;
