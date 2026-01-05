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
  Send 
} from "lucide-react";

const Products = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="py-16 lg:py-24 bg-gradient-hero">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center animate-fade-in-up">
            <h1 className="text-4xl lg:text-5xl font-bold text-primary-foreground mb-6">
              Products & Capabilities
            </h1>
            <p className="text-lg text-primary-foreground/80 leading-relaxed">
              Quality products sourced through our verified manufacturing network
            </p>
          </div>
        </div>
      </section>

      {/* Core Product Categories */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Core Product Categories
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Healthcare Apparel */}
            <div className="bg-card rounded-xl p-8 shadow-md border border-border">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 bg-gold/10 rounded-lg flex items-center justify-center">
                  <Stethoscope className="w-7 h-7 text-gold" />
                </div>
                <h3 className="text-2xl font-semibold text-foreground">Healthcare Apparel</h3>
              </div>
              <ul className="space-y-3">
                <li className="flex items-center gap-3 text-muted-foreground">
                  <span className="w-2 h-2 bg-gold rounded-full" />
                  Medical scrubs
                </li>
                <li className="flex items-center gap-3 text-muted-foreground">
                  <span className="w-2 h-2 bg-gold rounded-full" />
                  Lab coats
                </li>
                <li className="flex items-center gap-3 text-muted-foreground">
                  <span className="w-2 h-2 bg-gold rounded-full" />
                  Nurse & hospital uniforms
                </li>
              </ul>
            </div>

            {/* Uniforms & Workwear */}
            <div className="bg-card rounded-xl p-8 shadow-md border border-border">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 bg-gold/10 rounded-lg flex items-center justify-center">
                  <Shirt className="w-7 h-7 text-gold" />
                </div>
                <h3 className="text-2xl font-semibold text-foreground">Uniforms & Workwear</h3>
              </div>
              <ul className="space-y-3">
                <li className="flex items-center gap-3 text-muted-foreground">
                  <span className="w-2 h-2 bg-gold rounded-full" />
                  Corporate uniforms
                </li>
                <li className="flex items-center gap-3 text-muted-foreground">
                  <span className="w-2 h-2 bg-gold rounded-full" />
                  Industrial workwear
                </li>
                <li className="flex items-center gap-3 text-muted-foreground">
                  <span className="w-2 h-2 bg-gold rounded-full" />
                  Hospitality uniforms
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Customization Capabilities */}
      <section className="py-16 lg:py-24 bg-gradient-subtle">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Customization Capabilities
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Products are supplied through verified manufacturing partners based on buyer specifications
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 max-w-5xl mx-auto">
            {[
              { icon: Palette, label: "Fabric selection and sourcing" },
              { icon: Palette, label: "Color matching" },
              { icon: Tag, label: "Private labeling" },
              { icon: Ruler, label: "Size grading" },
              { icon: Package, label: "Packaging customization" },
            ].map((item, index) => (
              <div key={index} className="bg-card rounded-xl p-6 shadow-md border border-border text-center">
                <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <p className="text-sm font-medium text-foreground">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-24 bg-primary">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-primary-foreground mb-6">
            Have a Product Requirement?
          </h2>
          <p className="text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            Share your specifications and we'll work with our manufacturing partners to deliver quality products.
          </p>
          <Button variant="gold" size="xl" asChild>
            <Link to="/contact">
              <Send className="w-5 h-5" />
              Send Your Requirement
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Products;