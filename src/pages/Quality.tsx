import Layout from "@/components/layout/Layout";
import { 
  UserCheck, 
  FileText, 
  Settings, 
  Ruler, 
  PackageCheck,
  Shield
} from "lucide-react";

const Quality = () => {
  const qualitySteps = [
    { icon: UserCheck, title: "Vendor Verification", description: "Thorough assessment of manufacturing partners for capability and reliability" },
    { icon: FileText, title: "Pre-production Sampling", description: "Detailed samples created and approved before production begins" },
    { icon: Settings, title: "In-process Quality Checks", description: "Regular inspections during the manufacturing process" },
    { icon: Ruler, title: "Measurement & Stitching Inspection", description: "Precise checking of dimensions and construction quality" },
    { icon: PackageCheck, title: "Pre-shipment Inspection", description: "Final quality verification before dispatch" },
  ];

  return (
    <Layout>
      {/* Hero */}
      <section className="py-16 lg:py-24 bg-gradient-hero">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center animate-fade-in-up">
            <h1 className="text-4xl lg:text-5xl font-bold text-primary-foreground mb-6">
              Quality & Process
            </h1>
            <p className="text-lg text-primary-foreground/80 leading-relaxed">
              Quality control integrated at every stage of our supply process
            </p>
          </div>
        </div>
      </section>

      {/* Quality Approach */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <div className="w-20 h-20 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <Shield className="w-10 h-10 text-gold" />
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
              Our Quality Approach
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Quality control is integrated at every stage of our supply process. Final dispatch is coordinated only after buyer approval.
            </p>
          </div>

          {/* Quality Process Steps */}
          <div className="max-w-5xl mx-auto">
            <h3 className="text-2xl font-semibold text-foreground text-center mb-10">
              Quality Process Includes
            </h3>
            
            <div className="space-y-6">
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
        </div>
      </section>

      {/* Final Note */}
      <section className="py-16 bg-gradient-subtle">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-lg text-foreground font-medium">
              Final dispatch is coordinated only after buyer approval.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Quality;