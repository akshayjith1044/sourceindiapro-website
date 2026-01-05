import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { 
  MessageCircle, 
  Send, 
  Stethoscope, 
  Shirt, 
  Box,
  CheckCircle,
  MessageSquare,
  Search,
  FileCheck,
  Shield,
  Package
} from "lucide-react";
import Layout from "@/components/layout/Layout";
import InquiryForm from "@/components/InquiryForm";
const whatsappUrl = "https://wa.me/917012089560?text=Hello%2C%20I%20would%20like%20to%20inquire%20about%20your%20products.";

const Index = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center bg-gradient-hero">
        
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="max-w-3xl animate-fade-in-up">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-6">
              Reliable Export & Sourcing Partner from India
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/80 mb-8 leading-relaxed">
              Supplying healthcare apparel, uniforms, and customized B2B products through verified manufacturing partners.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="xl" asChild>
                <Link to="/contact">
                  <Send className="w-5 h-5" />
                  Send Inquiry
                </Link>
              </Button>
              <Button variant="hero-outline" size="xl" asChild>
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="w-5 h-5" />
                  Contact via WhatsApp
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Who We Are */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
              Who We Are
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Mountwyn Private Limited is an India-based export and sourcing company working with international buyers across healthcare apparel, uniforms, and customized B2B product categories. We focus on quality control, transparent communication, and reliable delivery to support long-term supply partnerships.
            </p>
          </div>
        </div>
      </section>

      {/* What We Supply */}
      <section className="py-16 lg:py-24 bg-gradient-subtle">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              What We Supply
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Quality products sourced through our verified manufacturing network
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Healthcare Apparel */}
            <div className="bg-card rounded-xl p-8 shadow-md hover:shadow-lg transition-shadow border border-border">
              <div className="w-14 h-14 bg-gold/10 rounded-lg flex items-center justify-center mb-6">
                <Stethoscope className="w-7 h-7 text-gold" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Healthcare Apparel</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Medical scrubs, lab coats, nurse and hospital uniforms designed for comfort and durability.
              </p>
            </div>

            {/* Uniforms & Workwear */}
            <div className="bg-card rounded-xl p-8 shadow-md hover:shadow-lg transition-shadow border border-border">
              <div className="w-14 h-14 bg-gold/10 rounded-lg flex items-center justify-center mb-6">
                <Shirt className="w-7 h-7 text-gold" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Uniforms & Workwear</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Corporate, industrial, and hospitality uniforms tailored to your specifications.
              </p>
            </div>

            {/* Customized B2B Products */}
            <div className="bg-card rounded-xl p-8 shadow-md hover:shadow-lg transition-shadow border border-border">
              <div className="w-14 h-14 bg-gold/10 rounded-lg flex items-center justify-center mb-6">
                <Box className="w-7 h-7 text-gold" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Customized B2B Products</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Buyer-specific sourcing through our extensive manufacturing partner network.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How We Work */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              How We Work
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our streamlined process ensures quality and transparency at every step
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
              {[
                { icon: MessageSquare, label: "Buyer requirement discussion" },
                { icon: Search, label: "Sourcing & cost evaluation" },
                { icon: FileCheck, label: "Sampling & approvals" },
                { icon: Shield, label: "Quality control & inspections" },
                { icon: Package, label: "Export packing & shipment" },
              ].map((step, index) => (
                <div key={index} className="relative">
                  <div className="flex flex-col items-center text-center">
                    <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mb-4 relative z-10">
                      <step.icon className="w-7 h-7 text-primary-foreground" />
                    </div>
                    <span className="text-xs font-medium text-gold mb-2">Step {index + 1}</span>
                    <p className="text-sm text-foreground font-medium">{step.label}</p>
                  </div>
                  {index < 4 && (
                    <div className="hidden md:block absolute top-8 left-1/2 w-full h-0.5 bg-border" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Mountwyn */}
      <section className="py-16 lg:py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Why Mountwyn
            </h2>
            <p className="text-primary-foreground/80 max-w-2xl mx-auto">
              Partner with us for reliable, quality-focused export solutions
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 max-w-5xl mx-auto">
            {[
              "Verified manufacturing partners",
              "Flexible order quantities",
              "Quality inspection support",
              "Clear and timely communication",
              "Export documentation assistance",
            ].map((benefit, index) => (
              <div key={index} className="flex items-start gap-3 bg-primary-foreground/5 rounded-lg p-4">
                <CheckCircle className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                <span className="text-sm font-medium">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                Interested in Sourcing from India?
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Send us your requirement and our team will respond promptly.
              </p>
            </div>

            <div className="bg-card rounded-2xl p-6 lg:p-10 shadow-lg border border-border">
              <InquiryForm />
              
              <div className="mt-6 pt-6 border-t border-border text-center">
                <p className="text-sm text-muted-foreground mb-4">Or reach us directly via WhatsApp</p>
                <Button variant="whatsapp" size="lg" asChild>
                  <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="w-5 h-5" />
                    Chat on WhatsApp
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