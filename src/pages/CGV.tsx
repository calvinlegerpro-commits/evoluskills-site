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
            Conditions générales de vente et d&apos;utilisation
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
          
          {/* Parties */}
          <Card className="border-0 shadow-md overflow-hidden bg-accent/5 animate-fade-in">
            <CardContent className="pt-6 space-y-4">
              <p className="font-medium">
                Entre la société <strong>EvoluSkills</strong>, organisme de formation professionnelle, dont le siège social est situé au 32 rue de Paris, 92100 Boulogne-Billancourt,
              </p>
              <p>
                Tél : <a href="tel:+33695027611" className="text-accent hover:underline">+33 6 95 02 76 11</a><br />
                Email : <a href="mailto:contact@evoluskills.fr" className="text-accent hover:underline">contact@evoluskills.fr</a>
              </p>
              <p className="font-medium">Ci-après désignée « le Prestataire » ou « EvoluSkills », d&apos;une part ;</p>
              <p className="font-medium">Et</p>
              <p>La personne physique ou morale procédant à l&apos;achat et à l&apos;utilisation des services de formation de EvoluSkills,</p>
              <p className="font-medium">Ci-après désignée « le Client » ou « le Stagiaire », d&apos;autre part ;</p>
              <p className="text-sm text-muted-foreground mt-4">
                EvoluSkills et le Client sont ci-après désignés collectivement « les Parties ».
              </p>
            </CardContent>
          </Card>

          {/* Préambule */}
          <Card className="border-0 shadow-md overflow-hidden animate-fade-in" style={{ animationDelay: '0.05s' }}>
            <CardHeader>
              <CardTitle>Préambule</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground">
              <p>
                EvoluSkills est un organisme de formation professionnelle spécialisé dans la communication digitale et la maîtrise des réseaux sociaux, proposant des formations en ligne et en présentiel destinées aux professionnels et aux entreprises.
              </p>
              <p>
                La liste et le descriptif des formations proposées par EvoluSkills peuvent être consultés sur le site <a href="https://evoluskills.fr" className="text-accent hover:underline">evoluskills.fr</a>.
              </p>
            </CardContent>
          </Card>

          {/* Article 1 */}
          <Card className="border-0 shadow-md overflow-hidden animate-fade-in" style={{ animationDelay: '0.1s' }}>
            <CardHeader>
              <CardTitle>Article 1 : Objet</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground">
              <p>
                Les présentes Conditions Générales de Vente et d&apos;Utilisation (CGV/CGU) déterminent les droits et obligations des Parties dans le cadre de la vente et de la fourniture des services de formation professionnelle proposés par EvoluSkills, ainsi que les modalités d&apos;accès et d&apos;utilisation par le Client à ces services.
              </p>
            </CardContent>
          </Card>

          {/* Article 2 */}
          <Card className="border-0 shadow-md overflow-hidden animate-fade-in" style={{ animationDelay: '0.15s' }}>
            <CardHeader>
              <CardTitle>Article 2 : Dispositions générales</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground">
              <p>
                Les présentes CGV/CGU s&apos;appliquent à toutes les ventes et prestations de services de formation effectuées par EvoluSkills, que ce soit en ligne ou en présentiel.
              </p>
              <p>
                EvoluSkills se réserve la possibilité de modifier les présentes à tout moment, par la publication d&apos;une nouvelle version sur son site Internet. Les CGV/CGU applicables sont celles en vigueur à la date de la commande ou de l&apos;inscription.
              </p>
              <p>
                Le Client déclare avoir pris connaissance de l&apos;ensemble des présentes Conditions Générales de Vente et d&apos;Utilisation, et les accepter sans restriction ni réserve.
              </p>
              <p>
                Le Client reconnaît qu&apos;il a bénéficié des conseils et informations nécessaires afin de s&apos;assurer de l&apos;adéquation de l&apos;offre à ses besoins.
              </p>
            </CardContent>
          </Card>

          {/* Article 3 */}
          <Card className="border-0 shadow-md overflow-hidden animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <CardHeader>
              <CardTitle>Article 3 : Description des services de formation</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground">
              <p className="font-semibold text-foreground">3.1 Nature des formations</p>
              <p>
                Les formations proposées par EvoluSkills consistent en des modules de formation professionnelle en communication digitale et réseaux sociaux, dispensés sous forme de :
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Sessions en présentiel ou distanciel (visioconférence)</li>
                <li>Contenus e-learning accessibles en ligne</li>
                <li>Accompagnement personnalisé</li>
                <li>Supports pédagogiques et ressources documentaires</li>
              </ul>
              
              <p className="font-semibold text-foreground mt-6">3.2 Caractéristiques des formations</p>
              <p>Chaque formation fait l&apos;objet d&apos;un descriptif mentionnant :</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>L&apos;intitulé et les objectifs pédagogiques</li>
                <li>La durée et le calendrier</li>
                <li>Les prérequis nécessaires</li>
                <li>Les modalités d&apos;évaluation</li>
                <li>Le tarif applicable</li>
                <li>Les modalités de certification le cas échéant</li>
              </ul>

              <p className="font-semibold text-foreground mt-6">3.3 Durée d&apos;accès</p>
              <p>
                Pour les formations en e-learning, sauf dispositions particulières, l&apos;accès aux contenus est concédé pour une durée de 12 mois à compter de la date d&apos;ouverture des accès, ou pour la durée mentionnée dans la convention de formation.
              </p>

              <p className="font-semibold text-foreground mt-6">3.4 Certification</p>
              <p>
                Une attestation de formation est délivrée à l&apos;issue de chaque formation suivie dans son intégralité. Pour les formations certifiantes (RS7200), un certificat est délivré après validation des compétences selon les modalités d&apos;évaluation prévues.
              </p>
            </CardContent>
          </Card>

          {/* Article 4 */}
          <Card className="border-0 shadow-md overflow-hidden animate-fade-in" style={{ animationDelay: '0.25s' }}>
            <CardHeader>
              <CardTitle>Article 4 : Tarifs et modalités de paiement</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground">
              <p>
                Les tarifs des formations sont indiqués en euros TTC et sont consultables sur le site evoluskills.fr ou communiqués sur devis.
              </p>
              <p>
                EvoluSkills se réserve le droit de modifier ses tarifs à tout moment. Les tarifs applicables sont ceux en vigueur au moment de l&apos;inscription.
              </p>
              <p className="font-semibold text-foreground">Modes de financement acceptés :</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Compte Personnel de Formation (CPF)</li>
                <li>Financement par les OPCO (Opérateurs de Compétences)</li>
                <li>Paiement direct (carte bancaire, virement, chèque)</li>
                <li>Prise en charge par l&apos;employeur</li>
              </ul>
              <p>
                Le règlement par carte bancaire est sécurisé. Les informations transmises sont chiffrées selon les standards de sécurité en vigueur.
              </p>
            </CardContent>
          </Card>

          {/* Article 5 */}
          <Card className="border-0 shadow-md overflow-hidden animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <CardHeader>
              <CardTitle>Article 5 : Inscription et conclusion du contrat</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground">
              <p>L&apos;inscription à une formation nécessite les étapes suivantes :</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Consultation du programme de formation</li>
                <li>Demande d&apos;inscription via le formulaire en ligne ou par contact direct</li>
                <li>Transmission des informations personnelles nécessaires</li>
                <li>Acceptation des présentes CGV/CGU</li>
                <li>Signature de la convention de formation</li>
                <li>Validation du financement et paiement</li>
              </ul>
              <p>
                L&apos;inscription devient définitive après réception de la convention de formation signée et validation du financement. EvoluSkills confirme l&apos;inscription par email.
              </p>
              <p>
                EvoluSkills se réserve le droit de refuser une inscription pour tout motif légitime, notamment en cas de prérequis non satisfaits ou de nombre de participants atteint.
              </p>
            </CardContent>
          </Card>

          {/* Article 6 */}
          <Card className="border-0 shadow-md overflow-hidden animate-fade-in" style={{ animationDelay: '0.35s' }}>
            <CardHeader>
              <CardTitle>Article 6 : Rétractation et annulation</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground">
              <p className="font-semibold text-foreground">6.1 Droit de rétractation</p>
              <p>
                Conformément à la législation en vigueur, le Client dispose d&apos;un délai de rétractation de 14 jours à compter de la signature de la convention de formation, sauf si la formation a débuté avec son accord exprès avant l&apos;expiration de ce délai.
              </p>
              
              <p className="font-semibold text-foreground mt-4">6.2 Annulation par le Client</p>
              <p>
                Toute annulation doit être notifiée par écrit (email ou courrier). En cas d&apos;annulation après le délai de rétractation et moins de 7 jours avant le début de la formation, des frais d&apos;annulation peuvent être appliqués selon les modalités suivantes :
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Plus de 30 jours avant : remboursement intégral ou report</li>
                <li>Entre 7 et 30 jours avant : 50% du montant dû</li>
                <li>Moins de 7 jours avant : 100% du montant dû</li>
              </ul>

              <p className="font-semibold text-foreground mt-4">6.3 Annulation par EvoluSkills</p>
              <p>
                EvoluSkills se réserve le droit d&apos;annuler ou de reporter une formation en cas de force majeure ou si le nombre minimum de participants n&apos;est pas atteint. Dans ce cas, le Client sera informé au plus tard 7 jours avant la date prévue et pourra choisir entre un remboursement intégral ou un report.
              </p>
            </CardContent>
          </Card>

          {/* Article 7 */}
          <Card className="border-0 shadow-md overflow-hidden animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <CardHeader>
              <CardTitle>Article 7 : Modalités d&apos;accès aux formations</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground">
              <p className="font-semibold text-foreground">7.1 Formations en présentiel ou distanciel</p>
              <p>
                Les coordonnées du lieu de formation ou le lien de connexion pour les formations en distanciel sont communiqués au Client au moins 48 heures avant le début de la formation.
              </p>
              
              <p className="font-semibold text-foreground mt-4">7.2 Formations e-learning</p>
              <p>
                L&apos;accès à la plateforme de formation en ligne est fourni par email après validation de l&apos;inscription. Le Client reçoit un identifiant et un mot de passe personnels et confidentiels.
              </p>
              <p>
                Ces identifiants sont strictement personnels et ne peuvent être cédés, partagés ou revendus. Toute utilisation frauduleuse engage la responsabilité du Client.
              </p>
              <p>
                En cas de perte ou vol des identifiants, le Client doit en informer immédiatement EvoluSkills.
              </p>
            </CardContent>
          </Card>

          {/* Article 8 */}
          <Card className="border-0 shadow-md overflow-hidden animate-fade-in" style={{ animationDelay: '0.45s' }}>
            <CardHeader>
              <CardTitle>Article 8 : Obligations du stagiaire</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground">
              <p>Le Client s&apos;engage à :</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Respecter le règlement intérieur de l&apos;organisme de formation</li>
                <li>Être assidu et ponctuel aux sessions programmées</li>
                <li>Participer activement aux formations et réaliser les travaux demandés</li>
                <li>Passer les évaluations prévues dans le cadre du parcours de formation</li>
                <li>Ne pas perturber le bon déroulement de la formation</li>
                <li>Respecter les autres participants et les formateurs</li>
                <li>Fournir des informations exactes lors de son inscription</li>
              </ul>
              <p>
                Tout manquement grave à ces obligations peut entraîner l&apos;exclusion du stagiaire sans remboursement.
              </p>
            </CardContent>
          </Card>

          {/* Article 9 */}
          <Card className="border-0 shadow-md overflow-hidden animate-fade-in" style={{ animationDelay: '0.5s' }}>
            <CardHeader>
              <CardTitle>Article 9 : Propriété intellectuelle</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground">
              <p>
                L&apos;ensemble des contenus de formation (supports pédagogiques, vidéos, documents, exercices, etc.) sont la propriété exclusive de EvoluSkills et sont protégés par le droit d&apos;auteur.
              </p>
              <p>
                Le Client s&apos;interdit de reproduire, modifier, traduire, adapter, distribuer ou exploiter commercialement tout ou partie des contenus sans autorisation écrite préalable de EvoluSkills.
              </p>
              <p>
                Les supports de formation sont fournis au Client à titre personnel dans le cadre exclusif de sa formation et ne peuvent être diffusés à des tiers.
              </p>
            </CardContent>
          </Card>

          {/* Article 10 */}
          <Card className="border-0 shadow-md overflow-hidden animate-fade-in" style={{ animationDelay: '0.55s' }}>
            <CardHeader>
              <CardTitle>Article 10 : Protection des données personnelles</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground">
              <p>
                Conformément au Règlement Général sur la Protection des Données (RGPD), EvoluSkills collecte et traite les données personnelles du Client dans le cadre de la gestion des formations.
              </p>
              <p>
                Les données collectées sont nécessaires à la gestion administrative et pédagogique des formations, ainsi qu&apos;au respect des obligations légales et réglementaires en matière de formation professionnelle.
              </p>
              <p>
                Le Client dispose d&apos;un droit d&apos;accès, de rectification, de suppression et de portabilité de ses données personnelles. Il peut exercer ces droits en contactant EvoluSkills à l&apos;adresse : contact@evoluskills.fr.
              </p>
              <p>
                Les données sont conservées pendant la durée nécessaire à l&apos;accomplissement des finalités pour lesquelles elles ont été collectées et conformément aux obligations légales de conservation.
              </p>
            </CardContent>
          </Card>

          {/* Article 11 */}
          <Card className="border-0 shadow-md overflow-hidden animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <CardHeader>
              <CardTitle>Article 11 : Responsabilités et garanties</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground">
              <p className="font-semibold text-foreground">11.1 Responsabilité de EvoluSkills</p>
              <p>
                EvoluSkills s&apos;engage à mettre en œuvre tous les moyens nécessaires pour assurer des formations de qualité conformes aux programmes communiqués.
              </p>
              <p>
                EvoluSkills ne saurait être tenu responsable des dommages indirects résultant de l&apos;utilisation ou de l&apos;impossibilité d&apos;utiliser les services de formation, notamment en cas de force majeure ou de défaillance technique indépendante de sa volonté.
              </p>

              <p className="font-semibold text-foreground mt-4">11.2 Disponibilité de la plateforme e-learning</p>
              <p>
                EvoluSkills s&apos;engage à faire ses meilleurs efforts pour assurer l&apos;accessibilité de la plateforme de formation en ligne 7j/7 et 24h/24. Toutefois, des interruptions peuvent survenir pour des raisons de maintenance ou de mise à jour.
              </p>
              <p>
                En cas d&apos;indisponibilité supérieure à 48 heures, la durée d&apos;accès sera prolongée d&apos;une période équivalente.
              </p>

              <p className="font-semibold text-foreground mt-4">11.3 Responsabilité du Client</p>
              <p>
                Le Client reconnaît que l&apos;obtention d&apos;une certification ou l&apos;atteinte des objectifs dépend de son investissement personnel et de son assiduité. EvoluSkills ne garantit pas l&apos;obtention d&apos;une certification mais s&apos;engage à fournir tous les moyens pédagogiques nécessaires.
              </p>
            </CardContent>
          </Card>

          {/* Article 12 */}
          <Card className="border-0 shadow-md overflow-hidden animate-fade-in" style={{ animationDelay: '0.65s' }}>
            <CardHeader>
              <CardTitle>Article 12 : Force majeure</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground">
              <p>
                EvoluSkills ne pourra être tenu responsable de tout retard ou inexécution résultant d&apos;un cas de force majeure tel que défini par la jurisprudence française, notamment en cas d&apos;épidémie, de catastrophe naturelle, de grève, ou de défaillance des réseaux de communication.
              </p>
              <p>
                En cas de force majeure, EvoluSkills s&apos;efforcera de trouver une solution alternative (report, formation à distance, etc.).
              </p>
            </CardContent>
          </Card>

          {/* Article 13 */}
          <Card className="border-0 shadow-md overflow-hidden animate-fade-in" style={{ animationDelay: '0.7s' }}>
            <CardHeader>
              <CardTitle>Article 13 : Réclamations et médiation</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground">
              <p>
                Pour toute réclamation, le Client peut contacter EvoluSkills par email à contact@evoluskills.fr ou par téléphone au +33 6 95 02 76 11.
              </p>
              <p>
                En cas de litige, les Parties s&apos;efforceront de trouver une solution amiable. À défaut d&apos;accord amiable, le Client peut recourir gratuitement à un médiateur de la consommation.
              </p>
            </CardContent>
          </Card>

          {/* Article 14 */}
          <Card className="border-0 shadow-md overflow-hidden animate-fade-in" style={{ animationDelay: '0.75s' }}>
            <CardHeader>
              <CardTitle>Article 14 : Droit applicable et juridiction</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground">
              <p>
                Les présentes CGV/CGU sont soumises au droit français.
              </p>
              <p>
                En cas de litige et à défaut de résolution amiable, les tribunaux français seront seuls compétents. Pour les litiges avec des consommateurs, le tribunal compétent sera celui du lieu de domicile du Client ou celui du siège social de EvoluSkills.
              </p>
            </CardContent>
          </Card>

          {/* Article 15 */}
          <Card className="border-0 shadow-md overflow-hidden animate-fade-in" style={{ animationDelay: '0.8s' }}>
            <CardHeader>
              <CardTitle>Article 15 : Dispositions finales</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground">
              <p>
                Si une ou plusieurs stipulations des présentes CGV/CGU sont tenues pour non valides ou déclarées comme telles en application d&apos;une loi, d&apos;un règlement ou à la suite d&apos;une décision définitive d&apos;une juridiction compétente, les autres stipulations garderont toute leur force et leur portée.
              </p>
              <p>
                Le fait pour EvoluSkills de ne pas se prévaloir à un moment donné de l&apos;une quelconque des clauses des présentes CGV/CGU ne peut être interprété comme valant renonciation à se prévaloir ultérieurement de l&apos;une quelconque desdites clauses.
              </p>
            </CardContent>
          </Card>

          {/* Footer */}
          <div className="text-center pt-8 space-y-4 animate-fade-in" style={{ animationDelay: '0.85s' }}>
            <div className="h-px bg-border"></div>
            <div className="text-sm text-muted-foreground space-y-2">
              <p className="font-semibold text-foreground">EvoluSkills</p>
              <p>Organisme de formation professionnelle</p>
              <p>32 rue de Paris, 92100 Boulogne-Billancourt</p>
              <p>SIREN 988 964 474 — RCS Nanterre</p>
              <p>
                Tél : <a href="tel:+33695027611" className="text-accent hover:underline">+33 6 95 02 76 11</a> | 
                Email : <a href="mailto:contact@evoluskills.fr" className="text-accent hover:underline">contact@evoluskills.fr</a>
              </p>
              <p className="mt-4">Dernière mise à jour : {new Date().toLocaleDateString('fr-FR')}</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CGV;
