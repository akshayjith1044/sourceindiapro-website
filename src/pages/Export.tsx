import Layout from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { 
  Ship, 
  FileCheck, 
  Package, 
  Truck,
  Globe,
  Send,
  CheckCircle,
  MessageSquare
} from "lucide-react";

const Export = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="py-16 lg:py-24 bg-gradient-hero">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center animate-fade-in-up">
            <h1 className="text-4xl lg:text-5xl font-bold text-primary-foreground mb-6">
              Export Coordination
            </h1>
            <p className="text-lg text-primary-foreground/80 leading-relaxed">
              Documentation, logistics coordination, and clear communication from production to shipment
            </p>
          </div>
        </div>
      </section>

      {/* How We Handle Exports */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start max-w-6xl mx-auto">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
                How Mountwyn Manages Exports
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Once production is complete and quality-approved, we coordinate the export process — preparing documentation, liaising with freight forwarders, and ensuring goods reach the port of shipment.
                </p>
                <p>
                  We work under common trade terms (FOB, CIF, CFR) and can adapt to your preferred shipping arrangements. If you use your own logistics partners, we provide the documentation and coordination they need.
                </p>
                <p>
                  Throughout the process, you receive clear updates: production status, inspection results, shipment booking, and dispatch confirmation.
                </p>
              </div>
            </div>
            <div className="bg-gradient-subtle rounded-xl p-8 border border-border">
              <h3 className="text-xl font-semibold text-foreground mb-6">What We Handle</h3>
              <ul className="space-y-4">
                {[
                  "Commercial invoices and packing lists",
                  "Certificates of origin and export documents",
                  "Freight forwarder coordination",
                  "Shipment booking and container loading",
                  "Tracking updates until dispatch",
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-gold mt-0.5 flex-shrink-0" />
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Key Points */}
      <section className="py-16 lg:py-24 bg-gradient-subtle">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Export Capabilities
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {[
              { icon: Globe, title: "Trade Terms", description: "FOB, CIF, CFR — pricing and responsibility split discussed during order confirmation." },
              { icon: Package, title: "Export Packing", description: "Goods packed for international transit with carton specs and labeling per your requirements." },
              { icon: FileCheck, title: "Documentation", description: "Invoices, packing lists, certificates — prepared as required for destination country." },
              { icon: Truck, title: "Logistics Liaison", description: "Coordination with freight forwarders. You can also nominate your own logistics partners." },
            ].map((item, index) => (
              <div key={index} className="bg-card rounded-xl p-6 shadow-md border border-border text-center">
                <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <h4 className="font-semibold text-foreground mb-2">{item.title}</h4>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Transparency */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <div className="bg-gradient-subtle rounded-xl p-8 border border-border">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gold/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MessageSquare className="w-6 h-6 text-gold" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    Transparency & Updates
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    No surprises. You'll know where your order stands at every stage — production progress, inspection results, shipment booking, and dispatch confirmation. Questions are answered promptly. Delays are communicated upfront.
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
            Discuss Your Export Requirements
          </h2>
          <p className="text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            Share your destination, preferred trade terms, and volume. We'll provide shipping guidance and logistics coordination.
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
