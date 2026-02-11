import Layout from "@/components/layout/Layout";
import InquiryForm from "@/components/InquiryForm";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, MessageCircle, Building, Mail } from "lucide-react";

const whatsappUrl = "https://wa.me/916366933962?text=Hello%2C%20I%20would%20like%20to%20discuss%20sourcing%20requirements%20with%20Mountwyn.";

const Contact = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="py-16 lg:py-24 bg-gradient-hero">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center animate-fade-in-up">
            <h1 className="text-4xl lg:text-5xl font-bold text-primary-foreground mb-6">
              Start a Conversation
            </h1>
            <p className="text-lg text-primary-foreground/80 leading-relaxed">
              For sourcing discussions, bulk orders, and B2B supply inquiries
            </p>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Info */}
            <div>
              <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-8">
                Contact Information
              </h2>

              <div className="space-y-6 mb-10">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gold/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Building className="w-6 h-6 text-gold" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Company</h3>
                    <p className="text-muted-foreground">Mountwyn Private Limited</p>
                    <p className="text-sm text-muted-foreground">B2B Export & Sourcing</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gold/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-gold" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Location</h3>
                    <p className="text-muted-foreground">Kerala, India</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gold/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-gold" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">WhatsApp</h3>
                    <p className="text-muted-foreground">+91 6366933962</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gold/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-gold" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Email</h3>
                    <a href="mailto:sales@mountwyn.com" className="text-muted-foreground hover:text-gold transition-colors">
                      sales@mountwyn.com
                    </a>
                  </div>
                </div>
              </div>

              <Button variant="whatsapp" size="lg" asChild>
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="w-5 h-5" />
                  Message on WhatsApp
                </a>
              </Button>

              {/* What to Include */}
              <div className="mt-10 bg-gradient-subtle rounded-xl p-6 border border-border">
                <h3 className="font-semibold text-foreground mb-3">What to Include in Your Inquiry</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  Help us respond faster by sharing:
                </p>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-gold mt-2 flex-shrink-0" />
                    Product type and specifications
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-gold mt-2 flex-shrink-0" />
                    Estimated order quantities
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-gold mt-2 flex-shrink-0" />
                    Destination country
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-gold mt-2 flex-shrink-0" />
                    Timeline or urgency
                  </li>
                </ul>
              </div>
            </div>

            {/* Inquiry Form */}
            <div className="bg-card rounded-2xl p-6 lg:p-10 shadow-lg border border-border">
              <h2 className="text-2xl font-bold text-foreground mb-6">
                Submit Inquiry
              </h2>
              <InquiryForm />
            </div>
          </div>
        </div>
      </section>

      {/* Response Note */}
      <section className="py-12 bg-gradient-subtle">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-2xl mx-auto">
            <p className="text-muted-foreground">
              We respond to business inquiries within 24–48 hours. For urgent requirements, reach out via WhatsApp.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
