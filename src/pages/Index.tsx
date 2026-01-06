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
  Package,
  Globe,
  Building2,
  Users
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
              India-Based Export Partner
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-6">
              Export-Grade Healthcare Apparel & Uniforms from India
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/80 mb-8 leading-relaxed">
              Mountwyn supplies healthcare apparel, uniforms, and custom B2B textile products to international buyers. Single-point coordination for sourcing, quality control, and export shipment through verified manufacturing partners.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="xl" asChild>
                <Link to="/contact">
                  <Send className="w-5 h-5" />
                  Submit Business Inquiry
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

      {/* Who We Work With */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Who We Work With
            </h2>
            <p className="text-muted-foreground">
              Mountwyn serves international buyers seeking reliable, accountable sourcing from India for bulk and recurring supply requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {[
              { icon: Globe, title: "International Importers", desc: "Buyers sourcing healthcare apparel and uniforms from India" },
              { icon: Building2, title: "Distributors & Wholesalers", desc: "B2B partners requiring consistent bulk supply" },
              { icon: Users, title: "Hospital Groups", desc: "Healthcare institutions procuring staff uniforms" },
              { icon: Package, title: "Private Label Buyers", desc: "Brands requiring custom manufacturing and labeling" },
            ].map((item, index) => (
              <div key={index} className="bg-card rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow border border-border">
                <div className="w-12 h-12 bg-gold/10 rounded-lg flex items-center justify-center mb-4">
                  <item.icon className="w-6 h-6 text-gold" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Supply */}
      <section className="py-16 lg:py-24 bg-gradient-subtle">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Core Product Categories
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Export-oriented production through verified manufacturing partners
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-card rounded-xl p-8 shadow-md hover:shadow-lg transition-shadow border border-border">
              <div className="w-14 h-14 bg-gold/10 rounded-lg flex items-center justify-center mb-6">
                <Stethoscope className="w-7 h-7 text-gold" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Healthcare Apparel</h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                Medical-grade apparel for hospitals, clinics, and healthcare institutions.
              </p>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Medical scrubs & surgical apparel</li>
                <li>• Lab coats & clinical wear</li>
                <li>• Patient gowns & hospital linen</li>
              </ul>
            </div>

            <div className="bg-card rounded-xl p-8 shadow-md hover:shadow-lg transition-shadow border border-border">
              <div className="w-14 h-14 bg-gold/10 rounded-lg flex items-center justify-center mb-6">
                <Shirt className="w-7 h-7 text-gold" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Uniforms & Workwear</h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                Professional uniforms for industrial, corporate, and institutional use.
              </p>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Industrial workwear & coveralls</li>
                <li>• Corporate & hospitality uniforms</li>
                <li>• Institutional uniforms</li>
              </ul>
            </div>

            <div className="bg-card rounded-xl p-8 shadow-md hover:shadow-lg transition-shadow border border-border">
              <div className="w-14 h-14 bg-gold/10 rounded-lg flex items-center justify-center mb-6">
                <Box className="w-7 h-7 text-gold" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Custom B2B Sourcing</h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                Buyer-specific sourcing with private labeling and packaging support.
              </p>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Private label manufacturing</li>
                <li>• Custom fabric & color matching</li>
                <li>• Export-ready packaging</li>
              </ul>
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
              Single-point coordination from requirement discussion to export shipment
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
              {[
                { icon: MessageSquare, label: "Requirement discussion" },
                { icon: Search, label: "Sourcing & pricing" },
                { icon: FileCheck, label: "Sampling & approval" },
                { icon: Shield, label: "Production & QC" },
                { icon: Package, label: "Export shipment" },
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
              Why Work With Mountwyn
            </h2>
            <p className="text-primary-foreground/80 max-w-2xl mx-auto">
              Accountable coordination, verified partners, and transparent communication
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 max-w-5xl mx-auto">
            {[
              "Verified manufacturing partners",
              "Flexible order quantities",
              "In-process quality checks",
              "Buyer approval before dispatch",
              "Export documentation support",
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
                Discuss Your Requirements
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                For bulk orders, recurring supply, or custom sourcing requirements. We respond to qualified business inquiries within 24–48 hours.
              </p>
            </div>

            <div className="bg-card rounded-2xl p-6 lg:p-10 shadow-lg border border-border">
              <InquiryForm />
              
              <div className="mt-6 pt-6 border-t border-border text-center">
                <p className="text-sm text-muted-foreground mb-4">Or connect directly via WhatsApp</p>
                <Button variant="whatsapp" size="lg" asChild>
                  <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="w-5 h-5" />
                    Start Conversation
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
