import Layout from "@/components/layout/Layout";
import InquiryForm from "@/components/InquiryForm";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, MessageCircle, Building } from "lucide-react";

const whatsappUrl = "https://wa.me/917012089560?text=Hello%2C%20I%20would%20like%20to%20inquire%20about%20your%20products.";

const Contact = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="py-16 lg:py-24 bg-gradient-hero">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center animate-fade-in-up">
            <h1 className="text-4xl lg:text-5xl font-bold text-primary-foreground mb-6">
              Get in Touch
            </h1>
            <p className="text-lg text-primary-foreground/80 leading-relaxed">
              For product inquiries or sourcing requirements, contact us using the details below.
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
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gold/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-gold" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Location</h3>
                    <p className="text-muted-foreground">Wayanad, Kerala, India</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gold/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-gold" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">WhatsApp</h3>
                    <p className="text-muted-foreground">+91 7012089560</p>
                  </div>
                </div>
              </div>

              <Button variant="whatsapp" size="lg" asChild>
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="w-5 h-5" />
                  Chat on WhatsApp
                </a>
              </Button>
            </div>

            {/* Inquiry Form */}
            <div className="bg-card rounded-2xl p-6 lg:p-10 shadow-lg border border-border">
              <h2 className="text-2xl font-bold text-foreground mb-6">
                Send an Inquiry
              </h2>
              <InquiryForm />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;