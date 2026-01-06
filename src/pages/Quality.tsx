import Layout from "@/components/layout/Layout";
import { 
  UserCheck, 
  FileText, 
  Settings, 
  Ruler, 
  PackageCheck,
  Shield,
  CheckCircle,
  ClipboardCheck
} from "lucide-react";

const Quality = () => {
  const qualitySteps = [
    { icon: ClipboardCheck, title: "Specification Review", description: "Product specifications, quality requirements, and acceptance criteria are documented and confirmed with the buyer before production begins." },
    { icon: UserCheck, title: "Pre-Production Sample", description: "Samples are produced for buyer approval. Production proceeds only after written confirmation on sample quality and specifications." },
    { icon: Settings, title: "In-Process Inspection", description: "Quality checks during production to verify fabric quality, stitching, sizing, and workmanship against approved specifications." },
    { icon: PackageCheck, title: "Pre-Dispatch Inspection", description: "Final inspection of packed goods covering quantity verification, labeling accuracy, packing quality, and overall compliance." },
    { icon: CheckCircle, title: "Buyer Approval", description: "Inspection reports and photos shared with buyer. Shipment proceeds only after buyer confirmation and approval." },
  ];

  return (
    <Layout>
      {/* Hero */}
      <section className="py-16 lg:py-24 bg-gradient-hero">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center animate-fade-in-up">
            <h1 className="text-4xl lg:text-5xl font-bold text-primary-foreground mb-6">
              Quality Control & Process
            </h1>
            <p className="text-lg text-primary-foreground/80 leading-relaxed">
              Export-grade quality standards with buyer-approved checkpoints throughout the production cycle
            </p>
          </div>
        </div>
      </section>

      {/* Quality Approach */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start max-w-6xl mx-auto">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
                Our Quality Approach
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Quality control is integrated into every stage of the order process — not treated as a final checkpoint before shipment. We work with manufacturing partners who meet export-grade production standards, and we maintain oversight throughout the production cycle.
                </p>
                <p>
                  Our approach is practical: define clear specifications upfront, verify compliance at key production stages, and ensure final output matches buyer expectations before dispatch. Shipments move only after explicit buyer approval.
                </p>
                <p>
                  We do not make exaggerated claims about certifications or testing capabilities. Our role is to coordinate quality checks, document findings, and ensure accountability at each stage.
                </p>
              </div>
            </div>
            <div className="bg-gradient-subtle rounded-xl p-8 border border-border">
              <h3 className="text-xl font-semibold text-foreground mb-6 flex items-center gap-2">
                <Shield className="h-5 w-5 text-gold" />
                Quality Principles
              </h3>
              <ul className="space-y-4">
                {[
                  "Clear specifications documented before production begins",
                  "Verified manufacturing partners with proven export track record",
                  "In-process checks at critical production stages",
                  "Pre-dispatch inspection before shipment release",
                  "Buyer approval required before final dispatch",
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

      {/* Quality Process Steps */}
      <section className="py-16 lg:py-24 bg-gradient-subtle">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Quality Process
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Each order follows a structured quality process with defined checkpoints and buyer communication
            </p>
          </div>
          
          <div className="max-w-5xl mx-auto space-y-6">
            {qualitySteps.map((step, index) => (
              <div key={index} className="flex items-start gap-6 bg-card rounded-xl p-6 shadow-md border border-border">
                <div className="flex-shrink-0">
                  <div className="w-14 h-14 bg-primary rounded-lg flex items-center justify-center">
                    <step.icon className="w-7 h-7 text-primary-foreground" />
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-xs font-semibold text-gold bg-gold/10 px-2 py-1 rounded">
                      Step {index + 1}
                    </span>
                    <h4 className="text-lg font-semibold text-foreground">{step.title}</h4>
                  </div>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Important Note */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <div className="bg-primary/5 border border-primary/20 rounded-xl p-8 text-center">
              <h3 className="text-xl font-semibold text-foreground mb-4">
                Buyer Approval Before Dispatch
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                No shipment is released without explicit buyer approval. Pre-dispatch inspection reports, product photos, and packing details are shared for review. This ensures buyers have full visibility and control before goods leave the manufacturing facility.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Quality;
