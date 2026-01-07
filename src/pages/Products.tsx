import Layout from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { 
  Stethoscope, 
  Shirt, 
  Palette, 
  Tag, 
  Ruler, 
  Package,
  Send,
  Box,
  FileCheck,
  Plus
} from "lucide-react";

const Products = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="py-16 lg:py-24 bg-gradient-hero">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center animate-fade-in-up">
            <h1 className="text-4xl lg:text-5xl font-bold text-primary-foreground mb-6">
              Product Categories & Sourcing Capabilities
            </h1>
            <p className="text-lg text-primary-foreground/80 leading-relaxed">
              Healthcare apparel, uniforms, and custom B2B products — with flexibility to develop new categories based on buyer requirements.
            </p>
          </div>
        </div>
      </section>

      {/* Current Focus Areas */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Current Focus Areas
            </h2>
            <p className="text-muted-foreground max-w-2xl">
              Our core categories, sourced through verified manufacturing partners. Available in standard specs or customized to your requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl">
            {/* Healthcare Apparel */}
            <div className="bg-card rounded-xl p-8 shadow-md border border-border">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 bg-gold/10 rounded-lg flex items-center justify-center">
                  <Stethoscope className="w-7 h-7 text-gold" />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-foreground">Healthcare Apparel</h3>
                  <p className="text-sm text-muted-foreground">Medical-grade products for healthcare institutions</p>
                </div>
              </div>
              <ul className="space-y-3 mb-6">
                {[
                  "Medical Scrubs (V-neck, Mock-wrap, Jogger styles)",
                  "Surgical Gowns (Reusable & Disposable)",
                  "Lab Coats (Short & Full-length)",
                  "Patient Gowns & Hospital Linen",
                  "Nurse Uniforms",
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3 text-muted-foreground">
                    <span className="w-2 h-2 bg-gold rounded-full flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <p className="text-xs text-muted-foreground bg-muted/50 rounded-lg p-3">
                Bulk supply • Private labeling • Custom fabric & sizing
              </p>
            </div>

            {/* Uniforms & Workwear */}
            <div className="bg-card rounded-xl p-8 shadow-md border border-border">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 bg-gold/10 rounded-lg flex items-center justify-center">
                  <Shirt className="w-7 h-7 text-gold" />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-foreground">Uniforms & Workwear</h3>
                  <p className="text-sm text-muted-foreground">Professional wear for various industries</p>
                </div>
              </div>
              <ul className="space-y-3 mb-6">
                {[
                  "Industrial Workwear & Coveralls",
                  "Corporate Uniforms",
                  "Hospitality Staff Uniforms",
                  "Security & Facility Wear",
                  "Institutional Uniforms",
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3 text-muted-foreground">
                    <span className="w-2 h-2 bg-gold rounded-full flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <p className="text-xs text-muted-foreground bg-muted/50 rounded-lg p-3">
                Bulk supply • Private labeling • Custom fabric & sizing
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Customization & Capabilities */}
      <section className="py-16 lg:py-24 bg-gradient-subtle">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Customization & OEM/ODM
            </h2>
            <p className="text-muted-foreground max-w-2xl">
              Beyond standard products — we support custom development, private labeling, and buyer-specific specifications.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl">
            {[
              { icon: Package, title: "Bulk Supply", description: "Order quantities for wholesale, institutional, and recurring supply needs." },
              { icon: Palette, title: "Fabric & Color Matching", description: "Custom fabric selection and color matching to your specifications." },
              { icon: Tag, title: "Private Labeling", description: "Your branding, labels, and packaging. White-label ready." },
              { icon: Ruler, title: "Size Grading", description: "Custom size charts and grading for specific regional markets." },
              { icon: Box, title: "Export Packaging", description: "Carton specs, poly-bagging, and labeling per your requirements." },
              { icon: FileCheck, title: "Sampling & Development", description: "Pre-production samples for approval before bulk production." },
            ].map((item, index) => (
              <div key={index} className="bg-card rounded-xl p-6 shadow-md border border-border">
                <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mb-4">
                  <item.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* New Categories */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <div className="bg-gradient-subtle rounded-xl p-8 border border-border">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gold/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Plus className="w-6 h-6 text-gold" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    Looking for Something Else?
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    We can develop new product categories based on buyer requirements. If you have specific sourcing needs outside our current focus areas, share your requirements — we'll assess manufacturing feasibility and provide sourcing options.
                  </p>
                  <p className="text-sm text-muted-foreground">
                    <strong className="text-foreground">MOQ flexibility</strong> — Minimums vary by product and customization level. We work with you to find practical solutions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-24 bg-primary">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-primary-foreground mb-6">
            Share Your Requirements
          </h2>
          <p className="text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            Tell us what you need: product type, specifications, estimated quantities, and destination. We'll respond with sourcing options and pricing.
          </p>
          <Button variant="gold" size="xl" asChild>
            <Link to="/contact">
              <Send className="w-5 h-5" />
              Submit Inquiry
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Products;
