import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { 
  MessageCircle, 
  Send, 
  Stethoscope, 
  Shirt, 
  Box,
  CheckCircle,
  UserCheck,
  Shield,
  Eye
} from "lucide-react";
import Layout from "@/components/layout/Layout";
import InquiryForm from "@/components/InquiryForm";

const whatsappUrl = "https://wa.me/917012089560?text=Hello%2C%20I%20would%20like%20to%20discuss%20sourcing%20requirements%20with%20Mountwyn.";

const Index = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center bg-gradient-hero">
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="max-w-3xl animate-fade-in-up">
            <p className="text-sm md:text-base text-primary-foreground/70 uppercase tracking-wider mb-4 font-medium">
              B2B Export & Sourcing from India
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-6">
              Your Sourcing Partner for Healthcare Apparel & Uniforms
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/80 mb-8 leading-relaxed">
              Healthcare apparel, uniforms, and OEM/ODM textile products. Single-point accountability for sourcing, quality, and export — through verified Indian manufacturers.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="xl" asChild>
                <Link to="/contact">
                  <Send className="w-5 h-5" />
                  Start a Sourcing Discussion
                </Link>
              </Button>
              <Button variant="hero-outline" size="xl" asChild>
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="w-5 h-5" />
                  WhatsApp
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Why Mountwyn - 3 Strong Points */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Why Mountwyn
            </h2>
            <p className="text-muted-foreground">
              One point of contact. Verified suppliers. Quality you can rely on.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-card rounded-xl p-8 shadow-md border border-border text-center">
              <div className="w-14 h-14 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <UserCheck className="w-7 h-7 text-gold" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Single-Point Accountability</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                One partner manages your entire order — from sourcing to shipment. No chasing multiple vendors.
              </p>
            </div>

            <div className="bg-card rounded-xl p-8 shadow-md border border-border text-center">
              <div className="w-14 h-14 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="w-7 h-7 text-gold" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Verified Manufacturers</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                We work only with production partners vetted for export-grade quality and reliability.
              </p>
            </div>

            <div className="bg-card rounded-xl p-8 shadow-md border border-border text-center">
              <div className="w-14 h-14 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Eye className="w-7 h-7 text-gold" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Quality Control</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                In-process checks, pre-shipment inspection, and buyer approval before dispatch.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="py-16 lg:py-24 bg-gradient-subtle">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              What We Source
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Current focus areas — with flexibility to develop new categories on request
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-card rounded-xl p-8 shadow-md hover:shadow-lg transition-shadow border border-border">
              <div className="w-14 h-14 bg-gold/10 rounded-lg flex items-center justify-center mb-6">
                <Stethoscope className="w-7 h-7 text-gold" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Healthcare Apparel</h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                Medical scrubs, lab coats, surgical gowns, patient wear, and hospital linen.
              </p>
              <p className="text-xs text-muted-foreground">
                Bulk supply • Private labeling • Custom specs
              </p>
            </div>

            <div className="bg-card rounded-xl p-8 shadow-md hover:shadow-lg transition-shadow border border-border">
              <div className="w-14 h-14 bg-gold/10 rounded-lg flex items-center justify-center mb-6">
                <Shirt className="w-7 h-7 text-gold" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Uniforms & Workwear</h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                Industrial workwear, corporate uniforms, hospitality, and institutional wear.
              </p>
              <p className="text-xs text-muted-foreground">
                Bulk supply • Private labeling • Custom specs
              </p>
            </div>

            <div className="bg-card rounded-xl p-8 shadow-md hover:shadow-lg transition-shadow border border-border">
              <div className="w-14 h-14 bg-gold/10 rounded-lg flex items-center justify-center mb-6">
                <Box className="w-7 h-7 text-gold" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">OEM/ODM Products</h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                Custom textile products developed to your specifications with full branding support.
              </p>
              <p className="text-xs text-muted-foreground">
                Product development • MOQ flexibility • Export-ready
              </p>
            </div>
          </div>

          <div className="text-center mt-10">
            <Link to="/products" className="text-sm text-gold hover:underline font-medium">
              View all sourcing capabilities →
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                Start a Conversation
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Tell us what you're looking for: product type, estimated quantities, and destination. We'll respond with sourcing options and next steps.
              </p>
            </div>

            <div className="bg-card rounded-2xl p-6 lg:p-10 shadow-lg border border-border">
              <InquiryForm />
              
              <div className="mt-6 pt-6 border-t border-border text-center">
                <p className="text-sm text-muted-foreground mb-4">Prefer a quick chat?</p>
                <Button variant="whatsapp" size="lg" asChild>
                  <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="w-5 h-5" />
                    Message on WhatsApp
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
