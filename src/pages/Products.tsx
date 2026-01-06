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
  FileCheck
} from "lucide-react";

const Products = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="py-16 lg:py-24 bg-gradient-hero">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center animate-fade-in-up">
            <h1 className="text-4xl lg:text-5xl font-bold text-primary-foreground mb-6">
              Products & Sourcing Capabilities
            </h1>
            <p className="text-lg text-primary-foreground/80 leading-relaxed">
              Bulk supply of healthcare apparel, uniforms, and custom textile products for international B2B buyers. Export-oriented production through verified manufacturing partners.
            </p>
          </div>
        </div>
      </section>

      {/* Standard Product Categories */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Standard Product Categories
            </h2>
            <p className="text-muted-foreground max-w-2xl">
              Our core categories are sourced regularly for international buyers. These products are available in standard specifications or can be customized based on buyer requirements.
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
                  <p className="text-sm text-muted-foreground">Medical-grade apparel for healthcare institutions</p>
                </div>
              </div>
              <ul className="space-y-3">
                {[
                  "Medical Scrubs (V-neck, Mock-wrap, Jogger styles)",
                  "Surgical Gowns (Reusable & Disposable options)",
                  "Lab Coats (Short & Full-length)",
                  "Patient Gowns",
                  "Nurse Uniforms",
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3 text-muted-foreground">
                    <span className="w-2 h-2 bg-gold rounded-full flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Uniforms & Workwear */}
            <div className="bg-card rounded-xl p-8 shadow-md border border-border">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 bg-gold/10 rounded-lg flex items-center justify-center">
                  <Shirt className="w-7 h-7 text-gold" />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-foreground">Uniforms & Workwear</h3>
                  <p className="text-sm text-muted-foreground">Professional uniforms for various industries</p>
                </div>
              </div>
              <ul className="space-y-3">
                {[
                  "Industrial Workwear & Coveralls",
                  "Corporate Uniforms",
                  "Hospitality Staff Uniforms",
                  "Security & Facility Uniforms",
                  "School & Institutional Uniforms",
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3 text-muted-foreground">
                    <span className="w-2 h-2 bg-gold rounded-full flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Custom Sourcing */}
      <section className="py-16 lg:py-24 bg-gradient-subtle">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Custom & Buyer-Specific Sourcing
            </h2>
            <p className="text-muted-foreground max-w-2xl">
              Beyond standard categories, we support custom sourcing requests based on buyer specifications. If you have specific product requirements, we can identify suitable manufacturing partners and manage the development process.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl">
            {[
              { icon: Package, title: "Bulk Supply", description: "Order quantities suitable for wholesale distribution, institutional procurement, and recurring supply contracts." },
              { icon: Palette, title: "Fabric & Color Customization", description: "Custom fabric selection, color matching to buyer specifications, and material sourcing based on end-use requirements." },
              { icon: Tag, title: "Private Labeling", description: "Branding, labeling, and packaging as per buyer guidelines. Support for private label and white-label requirements." },
              { icon: Ruler, title: "Size Grading", description: "Size specifications based on regional standards. Custom size charts and grading for specific markets." },
              { icon: Box, title: "Export Packaging", description: "Packaging configured for international shipment. Carton specifications, poly-bagging, and labeling per buyer requirements." },
              { icon: FileCheck, title: "Product Development", description: "Sampling and development support for new products. Pre-production samples for buyer approval before bulk production." },
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

      {/* Order Information */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6 text-center">
              Order & Supply Information
            </h2>
            <div className="bg-gradient-subtle rounded-xl p-8 border border-border">
              <div className="space-y-4 text-muted-foreground">
                <p>
                  <strong className="text-foreground">Minimum Order Quantities:</strong> MOQs vary by product category and customization level. Standard products typically start at lower quantities; fully custom orders may require higher minimums.
                </p>
                <p>
                  <strong className="text-foreground">Sampling:</strong> Pre-production samples are provided for buyer approval before bulk production begins. Sample costs and timelines are discussed during the inquiry stage.
                </p>
                <p>
                  <strong className="text-foreground">Lead Times:</strong> Production timelines depend on order complexity, quantity, and current manufacturing schedules. Realistic timelines are communicated upfront.
                </p>
                <p>
                  <strong className="text-foreground">Pricing:</strong> Pricing is provided on inquiry basis and depends on specifications, quantities, and delivery terms.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-24 bg-primary">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-primary-foreground mb-6">
            Share Your Product Requirements
          </h2>
          <p className="text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            Submit your product specifications, target quantities, and delivery timeline. We will respond with sourcing feasibility and preliminary pricing.
          </p>
          <Button variant="gold" size="xl" asChild>
            <Link to="/contact">
              <Send className="w-5 h-5" />
              Submit Product Inquiry
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Products;
