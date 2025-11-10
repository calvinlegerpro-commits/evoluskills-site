import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Mail, Phone, MapPin } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message envoyé !",
      description: "Nous vous répondrons dans les plus brefs délais.",
    });
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      content: "contact@formaskill.fr",
      link: "mailto:contact@formaskill.fr",
    },
    {
      icon: Phone,
      title: "Téléphone",
      content: "01 23 45 67 89",
      link: "tel:+33123456789",
    },
    {
      icon: MapPin,
      title: "Adresse",
      content: "Paris, France",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Header */}
      <section className="bg-primary text-primary-foreground py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Contactez-nous</h1>
          <p className="text-xl text-primary-foreground/90 max-w-3xl">
            Une question sur nos formations ? Notre équipe est là pour vous accompagner
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Contact Info */}
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Informations de contact</CardTitle>
                  <CardDescription>
                    Plusieurs moyens de nous joindre
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  {contactInfo.map((info, index) => {
                    const Icon = info.icon;
                    return (
                      <div key={index} className="flex items-start gap-4">
                        <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-accent/10 flex-shrink-0">
                          <Icon className="text-accent" size={24} />
                        </div>
                        <div>
                          <h3 className="font-semibold mb-1">{info.title}</h3>
                          {info.link ? (
                            <a 
                              href={info.link}
                              className="text-muted-foreground hover:text-accent transition-colors"
                            >
                              {info.content}
                            </a>
                          ) : (
                            <p className="text-muted-foreground">{info.content}</p>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </CardContent>
              </Card>

              <Card className="bg-muted">
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-3">Horaires d'ouverture</h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Lundi - Vendredi</span>
                      <span className="font-medium">9h - 18h</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Samedi - Dimanche</span>
                      <span className="font-medium">Fermé</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle>Envoyez-nous un message</CardTitle>
                  <CardDescription>
                    Remplissez le formulaire ci-dessous et nous vous répondrons rapidement
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="name">Nom complet *</Label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          placeholder="Jean Dupont"
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="email">Email *</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          placeholder="jean.dupont@email.com"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="phone">Téléphone</Label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="01 23 45 67 89"
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="subject">Sujet *</Label>
                        <Input
                          id="subject"
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          required
                          placeholder="Demande d'information"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Message *</Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={6}
                        placeholder="Décrivez votre demande..."
                        className="resize-none"
                      />
                    </div>

                    <Button 
                      type="submit" 
                      size="lg"
                      className="w-full md:w-auto bg-primary hover:bg-primary/90 text-primary-foreground"
                    >
                      Envoyer le message
                    </Button>
                  </form>
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

export default Contact;
