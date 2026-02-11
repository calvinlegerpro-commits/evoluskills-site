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
        <div className="absolute -bottom-px left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full block">
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
                <strong>Raison sociale :</strong> FORMASKILLS
              </p>
              <p>
                <strong>Forme juridique :</strong> SASU (Société par Actions Simplifiée Unipersonnelle)
              </p>
              <p>
                <strong>Capital social :</strong> [À compléter]
              </p>
              <p>
                <strong>Siège social :</strong> 32 rue de Paris, 92100 Boulogne-Billancourt
              </p>
              <p>
                <strong>SIREN :</strong> 941 048 019
              </p>
              <p>
                <strong>SIRET :</strong> 941 048 019 00017
              </p>
              <p>
                <strong>RCS :</strong> Nanterre
              </p>
              <p>
                <strong>Numéro de TVA intracommunautaire :</strong> FR03941048019
              </p>
              <p>
                <strong>Numéro de déclaration d&apos;activité de formation :</strong> [À compléter auprès de la DREETS]
              </p>
              <p>
                <strong>Code APE/NAF :</strong> 8559A - Formation continue d&apos;adultes
              </p>
              <p>
                <strong>Email :</strong> <a href="mailto:contact@formaskills.pro" className="text-accent hover:underline">contact@formaskills.pro</a>
              </p>
              <p>
                <strong>Téléphone :</strong> <a href="tel:+33695027611" className="text-accent hover:underline">+33 6 95 02 76 11</a>
              </p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-md overflow-hidden animate-fade-in" style={{ animationDelay: '0.1s' }}>
            <CardHeader>
              <CardTitle>2. Directeur de publication</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground">
              <p>
                Le directeur de la publication du site est le représentant légal de FORMASKILLS, en sa qualité de Président de la société.
              </p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-md overflow-hidden animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <CardHeader>
              <CardTitle>3. Hébergement</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground">
              <p>
                Le site formaskills.pro est hébergé par :
              </p>
              <p>
                <strong>Lovable</strong><br />
                Plateforme de développement et d&apos;hébergement web<br />
                <a href="https://lovable.dev" className="text-accent hover:underline" target="_blank" rel="noopener noreferrer">https://lovable.dev</a>
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
                <li>Par courrier : FormaSkills, Paris, France</li>
              </ul>
              <p>
                Les données collectées sur ce site sont utilisées uniquement dans le cadre de la gestion des 
                formations et ne sont jamais communiquées à des tiers sans votre consentement.
              </p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-md overflow-hidden animate-fade-in" style={{ animationDelay: '0.5s' }}>
            <CardHeader>
              <CardTitle>6. Cookies et traceurs</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground">
              <p>
                Ce site peut utiliser des cookies et autres traceurs pour améliorer l&apos;expérience utilisateur, établir des statistiques de fréquentation et garantir le bon fonctionnement du site.
              </p>
              <p>
                Conformément à la réglementation en vigueur, vous êtes informé de l&apos;utilisation de ces cookies lors de votre première visite et pouvez paramétrer leur utilisation.
              </p>
              <p>
                Vous pouvez à tout moment configurer votre navigateur pour refuser les cookies, mais certaines fonctionnalités du site pourraient ne pas être disponibles.
              </p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-md overflow-hidden animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <CardHeader>
              <CardTitle>7. Certification et agrément de formation</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground">
              <p>
                FORMASKILLS est un organisme de formation professionnelle déclaré auprès de la Direction Régionale de l&apos;Économie, de l&apos;Emploi, du Travail et des Solidarités (DREETS).
              </p>
              <p>
                <strong>Numéro de déclaration d&apos;activité :</strong> [En cours d&apos;obtention - numéro attribué par la DREETS après premier bilan pédagogique et financier]
              </p>
              <p>
                Cette déclaration ne vaut pas agrément de l&apos;État, conformément à l&apos;article L.6352-12 du Code du travail.
              </p>
              <p className="mt-4">
                <strong>Certification Qualiopi :</strong> [En cours d&apos;obtention]
              </p>
              <p>
                La certification Qualiopi atteste de la qualité du processus mis en œuvre par les organismes de formation et permet la prise en charge des formations par les financeurs publics et mutualisés (CPF, OPCO, etc.).
              </p>
              <p className="mt-4">
                <strong>Certification inscrite au Répertoire Spécifique :</strong>
              </p>
              <p>
                Code RS7200 - "Maîtriser les réseaux sociaux et en faire un levier de développement et de visibilité de son entreprise"
              </p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-md overflow-hidden animate-fade-in" style={{ animationDelay: '0.7s' }}>
            <CardHeader>
              <CardTitle>8. Liens hypertextes</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground">
              <p>
                Le site formaskills.pro peut contenir des liens hypertextes vers d&apos;autres sites Internet. FORMASKILLS ne saurait être tenu responsable du contenu de ces sites externes ni des éventuels dommages résultant de leur consultation.
              </p>
              <p>
                La mise en place de liens hypertextes vers le site formaskills.pro nécessite une autorisation préalable écrite.
              </p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-md overflow-hidden animate-fade-in" style={{ animationDelay: '0.8s' }}>
            <CardHeader>
              <CardTitle>9. Responsabilité et garanties</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground">
              <p>
                FORMASKILLS s&apos;efforce d&apos;assurer l&apos;exactitude et la mise à jour des informations diffusées sur ce site. Toutefois, FORMASKILLS ne peut garantir l&apos;exactitude, la précision ou l&apos;exhaustivité des informations mises à disposition sur ce site.
              </p>
              <p>
                FORMASKILLS ne saurait être tenu responsable des erreurs, d&apos;omissions ou des résultats qui pourraient être obtenus par un mauvais usage de ces informations.
              </p>
              <p>
                L&apos;accès au site peut être interrompu pour des raisons de maintenance ou de mise à jour, ou pour toute autre raison technique. FORMASKILLS ne saurait être tenu responsable des interruptions et des conséquences qui peuvent en découler pour l&apos;utilisateur.
              </p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-md overflow-hidden animate-fade-in" style={{ animationDelay: '0.9s' }}>
            <CardHeader>
              <CardTitle>10. Droit applicable et juridiction compétente</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground">
              <p>
                Les présentes mentions légales sont soumises au droit français.
              </p>
              <p>
                En cas de litige relatif à l&apos;interprétation ou à l&apos;exécution des présentes, et à défaut d&apos;accord amiable, les tribunaux français seront seuls compétents pour en connaître.
              </p>
              <p>
                Pour les litiges avec des consommateurs, le tribunal compétent sera celui du lieu de domicile du consommateur ou celui du siège social de FORMASKILLS.
              </p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-md overflow-hidden bg-accent/5 animate-fade-in" style={{ animationDelay: '1s' }}>
            <CardHeader>
              <CardTitle>11. Contact</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground">
              <p>
                Pour toute question concernant les présentes mentions légales ou pour exercer vos droits, vous pouvez nous contacter :
              </p>
              <div className="space-y-2 pl-4">
                <p>
                  <strong>Par email :</strong> <a href="mailto:contact@formaskills.pro" className="text-accent hover:underline">contact@formaskills.pro</a>
                </p>
                <p>
                  <strong>Par téléphone :</strong> <a href="tel:+33695027611" className="text-accent hover:underline">+33 6 95 02 76 11</a>
                </p>
                <p>
                  <strong>Par courrier :</strong><br />
                  FORMASKILLS<br />
                  32 rue de Paris<br />
                  92100 Boulogne-Billancourt
                </p>
              </div>
            </CardContent>
          </Card>

          <div className="text-center pt-8 space-y-4 animate-fade-in" style={{ animationDelay: '1.1s' }}>
            <div className="h-px bg-border"></div>
            <p className="text-sm text-muted-foreground">
              Dernière mise à jour : {new Date().toLocaleDateString('fr-FR')}
            </p>
            <p className="text-xs text-muted-foreground">
              FORMASKILLS - SIREN 941 048 019 - RCS Nanterre
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default MentionsLegales;
