import { useEffect } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { CalendarDays, Clock, Video, MessageSquare } from "lucide-react";

const features = [
  {
    icon: CalendarDays,
    title: "Choisissez votre créneau",
    description: "Sélectionnez le jour et l'heure qui vous conviennent parmi les disponibilités.",
  },
  {
    icon: Video,
    title: "Rendez-vous en visioconférence",
    description: "La session se déroule en ligne, depuis chez vous, sans déplacement.",
  },
  {
    icon: Clock,
    title: "30 minutes offertes",
    description: "Un échange gratuit pour comprendre vos besoins et vous orienter vers la bonne formation.",
  },
  {
    icon: MessageSquare,
    title: "Confirmation automatique",
    description: "Vous recevez un email de confirmation avec le lien de connexion dès la réservation.",
  },
];

const Rdv = () => {
  useEffect(() => {
    if (document.getElementById("cal-embed-script")) return;

    const script = document.createElement("script");
    script.id = "cal-embed-script";
    script.type = "text/javascript";
    script.innerHTML = `
      (function (C, A, L) {
        let p = function (a, ar) { a.q.push(ar); };
        let d = C.document;
        C.Cal = C.Cal || function () {
          let cal = C.Cal; let ar = arguments;
          if (!cal.loaded) { cal.ns = {}; cal.q = cal.q || []; d.head.appendChild(d.createElement("script")).src = A; cal.loaded = true; }
          if (ar[0] === L) { const api = function () { p(api, arguments); }; const namespace = ar[1]; api.q = api.q || []; if(typeof namespace === "string"){cal.ns[namespace] = cal.ns[namespace] || api;p(cal.ns[namespace], ar);p(cal, ["initNamespace", namespace]);} else p(cal, ar); return; }
          p(cal, ar);
        };
      })(window, "https://app.cal.eu/embed/embed.js", "init");

      Cal("init", "30min", { origin: "https://app.cal.eu" });

      Cal.ns["30min"]("inline", {
        elementOrSelector: "#my-cal-inline-30min",
        config: { layout: "month_view", useSlotsViewOnSmallScreen: "true" },
        calLink: "calvin-leger-9pqgmt/30min",
      });

      Cal.ns["30min"]("ui", { hideEventTypeDetails: false, layout: "month_view" });
    `;
    document.head.appendChild(script);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero */}
      <section className="relative bg-gradient-to-br from-primary via-primary/95 to-secondary text-primary-foreground py-24 overflow-hidden border-b-0">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 right-0 w-96 h-96 bg-accent/30 rounded-full blur-3xl animate-blob" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-secondary/30 rounded-full blur-3xl animate-blob" style={{ animationDelay: "2s" }} />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Prendre rendez-vous</h1>
          <p className="text-xl md:text-2xl text-primary-foreground/90 max-w-2xl">
            Échangeons 30 minutes pour identifier la formation qui correspond à votre projet professionnel.
          </p>
        </div>
        <div className="absolute -bottom-px left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full block">
            <path d="M0 120L60 114C120 108 240 96 360 90C480 84 600 84 720 87C840 90 960 96 1080 99C1200 102 1320 102 1380 102L1440 102V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="hsl(var(--background))" />
          </svg>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Points clés */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {features.map((f, i) => {
              const Icon = f.icon;
              return (
                <div key={i} className="rounded-2xl border border-border bg-card p-6 flex flex-col gap-3">
                  <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center shrink-0">
                    <Icon size={20} className="text-accent" />
                  </div>
                  <p className="font-semibold text-sm">{f.title}</p>
                  <p className="text-muted-foreground text-sm leading-relaxed">{f.description}</p>
                </div>
              );
            })}
          </div>

          {/* Embed Cal.eu */}
          <div className="rounded-3xl border border-border overflow-hidden">
            <div
              id="my-cal-inline-30min"
              style={{ width: "100%", height: "100%", minHeight: "700px", overflow: "scroll" }}
            />
          </div>

        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Rdv;
