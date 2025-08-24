import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Linkedin,
  Link,
  LinkIcon,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="bg-black text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-accent" />
                <span>worket.india@gmail.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-accent" />
                <span>020 24263850</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-accent flex-shrink-0" />
                <span>
                  1<sup>st</sup> floor above Dr. oza clinic, Station Chauk,
                  Maval, Pune, Maharashtra
                </span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div style={{ visibility: "hidden" }}>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <div className="space-y-2">
              <Button
                variant="ghost"
                className="text-primary-foreground hover:text-accent p-0 h-auto justify-start"
              >
                About Us
              </Button>
              <Button
                variant="ghost"
                className="text-primary-foreground hover:text-accent p-0 h-auto justify-start"
              >
                Academic Programs
              </Button>
              <Button
                variant="ghost"
                className="text-primary-foreground hover:text-accent p-0 h-auto justify-start"
              >
                Student Services
              </Button>
              <Button
                variant="ghost"
                className="text-primary-foreground hover:text-accent p-0 h-auto justify-start"
              >
                Admissions
              </Button>
            </div>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Connect With Us</h3>
            <div className="flex space-x-4">
              <a
                href="http://www.worket.tech/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  size="icon"
                  variant="ghost"
                  className="text-primary-foreground hover:text-accent"
                >
                  <LinkIcon className="h-5 w-5" />
                </Button>
              </a>
              <a
                href="https://twitter.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  size="icon"
                  variant="ghost"
                  className="text-primary-foreground hover:text-accent"
                >
                  <Twitter className="h-5 w-5" />
                </Button>
              </a>
              <a
                href="https://www.linkedin.com/company/worket-inc/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  size="icon"
                  variant="ghost"
                  className="text-primary-foreground hover:text-accent"
                >
                  <Linkedin className="h-5 w-5" />
                </Button>
              </a>
            </div>

            <p className="text-sm text-primary-foreground/80 mt-4">
              Follow us for updates on programs, events, and opportunities.
            </p>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center">
          <p className="text-primary-foreground/80">
            ©2025 Worket India Private Ltd. All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
