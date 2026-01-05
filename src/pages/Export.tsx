import Layout from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { 
  Ship, 
  FileCheck, 
  Package, 
  Truck,
  Globe,
  Send
} from "lucide-react";

const Export = () => {
  const exportCapabilities = [
    { icon: Globe, title: "FOB / CIF / CFR Terms", description: "Flexible shipping terms to suit your requirements" },
    { icon: Package, title: "Export Packing & Labeling", description: "Professional packaging meeting international standards" },
    { icon: FileCheck, title: "Documentation Coordination", description: "Complete export documentation support" },
    { icon: Truck, title: "Freight Forwarder Support", description: "Coordination with reliable logistics partners" },
  ];

  return (
    <Layout>
      {/* Hero */}
      <section className="py-16 lg:py-24 bg-gradient-hero">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center animate-fade-in-up">
            <h1 className="text-4xl lg:text-5xl font-bold text-primary-foreground mb-6">
              Export & Logistics
            </h1>
            <p className="text-lg text-primary-foreground/80 leading-relaxed">
              Comprehensive export support for seamless international shipments
            </p>
          </div>
        </div>
      </section>

      {/* Export Support */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <div className="w-20 h-20 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <Ship className="w-10 h-10 text-gold" />
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
              Export Support
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We assist buyers with export documentation and shipment coordination. We work closely with logistics partners to ensure timely and compliant deliveries.
            </p>
          </div>

          {/* Export Capabilities */}
          <div className="max-w-5xl mx-auto">
            <h3 className="text-2xl font-semibold text-foreground text-center mb-10">
              Export Capabilities
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {exportCapabilities.map((item, index) => (
                <div key={index} className="bg-card rounded-xl p-6 shadow-md border border-border">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-foreground mb-2">{item.title}</h4>
                      <p className="text-muted-foreground text-sm">{item.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-24 bg-primary">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-primary-foreground mb-6">
            Ready to Start Sourcing?
          </h2>
          <p className="text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            Let us handle the export logistics while you focus on your business.
          </p>
          <Button variant="gold" size="xl" asChild>
            <Link to="/contact">
              <Send className="w-5 h-5" />
              Get in Touch
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Export;