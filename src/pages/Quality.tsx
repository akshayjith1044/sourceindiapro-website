import Layout from "@/components/layout/Layout";
import { 
  UserCheck, 
  Search,
  Settings, 
  PackageCheck,
  CheckCircle,
  FileText
} from "lucide-react";

const Quality = () => {
  const qualitySteps = [
    { 
      icon: Search, 
      title: "Supplier Verification", 
      description: "Manufacturing partners are vetted for production capability, quality standards, and export track record before orders are placed." 
    },
    { 
      icon: UserCheck, 
      title: "Sampling & Approvals", 
      description: "Pre-production samples are sent for buyer approval. Production begins only after written confirmation on quality and specifications." 
    },
    { 
      icon: Settings, 
      title: "In-Process Quality Checks", 
      description: "Inspections during production — fabric quality, stitching, sizing, and workmanship verified against approved samples." 
    },
    { 
      icon: PackageCheck, 
      title: "Pre-Shipment Inspection", 
      description: "Final inspection covering quantity, labeling, packing quality, and overall compliance before goods are released." 
    },
    { 
      icon: FileText, 
      title: "Export-Ready Documentation", 
      description: "Inspection reports, product photos, and packing details shared with buyer. Shipment proceeds only after approval." 
    },
  ];

  return (
    <Layout>
      {/* Hero */}
      <section className="py-16 lg:py-24 bg-gradient-hero">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center animate-fade-in-up">
            <h1 className="text-4xl lg:text-5xl font-bold text-primary-foreground mb-6">
              Quality Process
            </h1>
            <p className="text-lg text-primary-foreground/80 leading-relaxed">
              Structured quality control with defined checkpoints and buyer approval before dispatch
            </p>
          </div>
        </div>
      </section>

      {/* Quality Steps */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              How Quality Is Managed
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Each order follows a five-step process — from supplier selection to final dispatch.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto space-y-6">
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

      {/* Commitment */}
      <section className="py-16 lg:py-24 bg-gradient-subtle">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
              Buyer Approval Before Dispatch
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              No shipment is released without explicit buyer approval. Pre-dispatch inspection reports, product photos, and packing details are shared for review. You have full visibility and control before goods leave the facility.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                "Inspection reports shared",
                "Product photos provided",
                "Approval required to ship"
              ].map((item, index) => (
                <div key={index} className="flex items-center justify-center gap-2 bg-card rounded-lg p-4 border border-border">
                  <CheckCircle className="h-5 w-5 text-gold flex-shrink-0" />
                  <span className="text-sm text-foreground">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Note */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <div className="bg-primary/5 border border-primary/20 rounded-xl p-8 text-center">
              <h3 className="text-xl font-semibold text-foreground mb-4">
                No Exaggerated Claims
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                We don't claim certifications we don't hold. Our role is practical: define clear specs, verify compliance at each stage, and ensure final output matches expectations. Straightforward quality control, not marketing.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Quality;
