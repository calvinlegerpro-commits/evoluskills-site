import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold mb-4">FormSkills</h3>
            <p className="text-lg font-semibold text-primary-foreground/90 mb-2">
              Se former pour l'avenir
            </p>
            <p className="text-primary-foreground/80 mb-4">
              Organisme de formation professionnelle en marketing et communication.
              Formations finançables CPF.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Liens rapides</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/formations" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Nos formations
                </Link>
              </li>
              <li>
                <Link to="/certifications" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Certifications
                </Link>
              </li>
              <li>
                <Link to="/a-propos" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  À propos
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-primary-foreground/80">
                <Mail size={18} />
                <a href="mailto:contact@formaskills.pro" className="hover:text-primary-foreground transition-colors">
                  contact@formaskills.pro
                </a>
              </li>
              <li className="flex items-center gap-2 text-primary-foreground/80">
                <Phone size={18} />
                <a href="tel:+33695027611" className="hover:text-primary-foreground transition-colors">
                  +33 6 95 02 76 11
                </a>
              </li>
              <li className="flex items-center gap-2 text-primary-foreground/80">
                <MapPin size={18} />
                <span>Paris, France</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-primary-foreground/60">
          <p>&copy; {new Date().getFullYear()} FormSkills. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
