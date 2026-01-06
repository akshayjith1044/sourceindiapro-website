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
  CheckCircle
} from "lucide-react";

const Export = () => {
  const exportCapabilities = [
    { icon: Globe, title: "Trade Terms", description: "Support for FOB, CIF, and CFR terms. Pricing and responsibility split discussed during order confirmation based on buyer preference." },
    { icon: Package, title: "Export Packing", description: "Goods packed for international transit with appropriate carton specifications, poly-bagging, and labeling as per buyer requirements." },
    { icon: FileCheck, title: "Documentation", description: "Commercial invoices, packing lists, certificates of origin, and other export documents prepared as required for the destination country." },
    { icon: Truck, title: "Freight Coordination", description: "Liaison with freight forwarders for shipment booking, container loading, and port handling. Buyers may also nominate their own forwarders." },
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
              Coordination support for international shipments with documentation handling and freight forwarder liaison
            </p>
          </div>
        </div>
      </section>

      {/* Export Support */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start max-w-6xl mx-auto">
            <div>
              <div className="w-20 h-20 bg-gold/10 rounded-full flex items-center justify-center mb-6">
                <Ship className="w-10 h-10 text-gold" />
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
                Export Coordination Support
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  As an India-based exporter, we handle the coordination required to move goods from the manufacturing facility to the port of shipment. This includes preparing export documentation, coordinating with freight forwarders, and ensuring compliance with shipping requirements.
                </p>
                <p>
                  We work with established freight forwarders and can coordinate shipments under common trade terms. Buyers who prefer to use their own logistics partners are fully supported — we provide the documentation and factory coordination they need.
                </p>
                <p>
                  Our role is to ensure smooth handoff from production to shipment, not to operate as a logistics company. We coordinate, document, and communicate — leaving specialized logistics handling to qualified freight partners.
                </p>
              </div>
            </div>
            <div className="bg-gradient-subtle rounded-xl p-8 border border-border">
              <h3 className="text-xl font-semibold text-foreground mb-6">What We Handle</h3>
              <ul className="space-y-4">
                {[
                  "Export documentation preparation (packing lists, invoices, certificates)",
                  "Coordination with freight forwarders for shipment booking",
                  "Factory-to-port logistics coordination",
                  "Shipment tracking updates until dispatch",
                  "Documentation handoff to buyer or buyer's agent",
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

      {/* Export Capabilities */}
      <section className="py-16 lg:py-24 bg-gradient-subtle">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Export Terms & Capabilities
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We support common international trade terms and can adapt to buyer preferences for shipping arrangements
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
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
      </section>

      {/* Clarification */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <div className="bg-gradient-subtle rounded-xl p-8 border border-border">
              <h3 className="text-xl font-semibold text-foreground mb-4">
                A Note on Our Role
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Mountwyn coordinates export logistics but does not operate as a freight or shipping company. We prepare documentation, coordinate with logistics partners, and ensure goods are ready for shipment — but actual freight handling, customs clearance at destination, and final delivery are managed by qualified logistics providers.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                This approach ensures each part of the supply chain is handled by specialists, with Mountwyn serving as the coordinating point between manufacturing and logistics.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-24 bg-primary">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-primary-foreground mb-6">
            Discuss Your Shipping Requirements
          </h2>
          <p className="text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            Share your destination, preferred trade terms, and volume expectations. We will provide shipping guidance and logistics coordination support.
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
