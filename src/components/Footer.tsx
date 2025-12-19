import { Sun, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-16 bg-card border-t border-border">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 mb-12">
          {/* Brand */}
          <div>
            <a href="#" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center shadow-soft">
                <Sun className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="font-display text-xl font-semibold text-foreground">
                Newslight
              </span>
            </a>
            <p className="font-display text-lg italic text-muted-foreground">
              The timeless truth of geography.
            </p>
          </div>
          
          {/* Contact */}
          <div className="text-center md:text-left">
            <h3 className="font-display text-lg font-semibold text-foreground mb-4">
              Get In Touch
            </h3>
            <div className="space-y-3 font-body">
              <a
                href="mailto:info@newslight.com"
                className="flex items-center justify-center md:justify-start gap-3 text-muted-foreground hover:text-primary transition-colors"
              >
                <Mail className="w-4 h-4" />
                <span>info@newslight.com</span>
              </a>
              <div className="flex items-center justify-center md:justify-start gap-3 text-muted-foreground">
                <MapPin className="w-4 h-4" />
                <span>Metro Vancouver, BC</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="pt-8 border-t border-border text-center">
          <p className="font-body text-sm text-muted-foreground">
            © 2025 Newslight Media. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
