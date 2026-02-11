import { Link } from "react-router-dom";
import { MapPin, Phone, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-gold rounded-lg flex items-center justify-center">
                <span className="text-accent-foreground font-bold text-lg">M</span>
              </div>
              <span className="font-semibold text-lg">Mountwyn Private Limited</span>
            </Link>
            <p className="text-primary-foreground/80 text-sm leading-relaxed max-w-md mb-6">
              An India-based export and sourcing company working with international buyers across healthcare apparel, uniforms, and customized B2B product categories.
            </p>
            <div className="flex flex-col gap-3 text-sm">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 mt-0.5 text-gold" />
                <span className="text-primary-foreground/80">Wayanad, Kerala, India</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-gold" />
                <span className="text-primary-foreground/80">+91 6366933962</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link to="/about" className="text-primary-foreground/80 hover:text-gold transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-primary-foreground/80 hover:text-gold transition-colors">
                  Products
                </Link>
              </li>
              <li>
                <Link to="/quality" className="text-primary-foreground/80 hover:text-gold transition-colors">
                  Quality & Process
                </Link>
              </li>
              <li>
                <Link to="/export" className="text-primary-foreground/80 hover:text-gold transition-colors">
                  Export & Logistics
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-primary-foreground/80 hover:text-gold transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="font-semibold mb-4">Products</h3>
            <ul className="space-y-3 text-sm">
              <li className="text-primary-foreground/80">Medical Scrubs</li>
              <li className="text-primary-foreground/80">Lab Coats</li>
              <li className="text-primary-foreground/80">Hospital Uniforms</li>
              <li className="text-primary-foreground/80">Corporate Uniforms</li>
              <li className="text-primary-foreground/80">Industrial Workwear</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-12 pt-8 text-center text-sm text-primary-foreground/60">
          <p>© {new Date().getFullYear()} Mountwyn Private Limited. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;