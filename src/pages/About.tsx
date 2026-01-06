import Layout from "@/components/layout/Layout";
import { Shield, Users, Eye, Building2, CheckCircle } from "lucide-react";

const About = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="py-16 lg:py-24 bg-gradient-hero">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center animate-fade-in-up">
            <h1 className="text-4xl lg:text-5xl font-bold text-primary-foreground mb-6">
              About Mountwyn
            </h1>
            <p className="text-lg text-primary-foreground/80 leading-relaxed">
              An India-based export-focused trading and sourcing company serving international B2B buyers
            </p>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start max-w-6xl mx-auto">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <Building2 className="h-8 w-8 text-gold" />
                <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                  Mountwyn Private Limited
                </h2>
              </div>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Mountwyn is an export-focused trading and sourcing company based in India. We work with international buyers — importers, distributors, hospital groups, and B2B wholesalers — who require reliable supply of healthcare apparel, uniforms, and custom textile products.
                </p>
                <p>
                  We do not operate our own manufacturing facility. Instead, we coordinate with a network of verified manufacturing partners, managing the sourcing process from product development through quality checks to final export shipment.
                </p>
                <p>
                  Our role is to serve as a single, accountable point of contact — handling supplier coordination, production oversight, quality control, and export logistics — so that buyers can work with one trusted partner rather than managing multiple vendors directly.
                </p>
              </div>
            </div>
            <div className="bg-gradient-subtle rounded-xl p-8 border border-border">
              <h3 className="text-xl font-semibold text-foreground mb-6">How We Work</h3>
              <ul className="space-y-4">
                {[
                  "Identify and vet manufacturing partners based on buyer requirements",
                  "Coordinate sampling, pricing, and production timelines",
                  "Conduct quality checks at production and pre-dispatch stages",
                  "Manage export documentation and freight forwarder coordination",
                  "Maintain clear communication throughout the order cycle",
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="h-6 w-6 rounded-full bg-primary text-primary-foreground text-sm flex items-center justify-center flex-shrink-0 mt-0.5">
                      {index + 1}
                    </span>
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 lg:py-24 bg-gradient-subtle">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              What We Stand For
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our approach is built on accountability, transparency, and long-term partnership rather than transactional dealings.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-card rounded-xl p-8 shadow-md border border-border text-center">
              <div className="w-14 h-14 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="w-7 h-7 text-gold" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Accountability</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                We take ownership of the sourcing process. When issues arise, we address them directly rather than passing responsibility to suppliers.
              </p>
            </div>

            <div className="bg-card rounded-xl p-8 shadow-md border border-border text-center">
              <div className="w-14 h-14 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="w-7 h-7 text-gold" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Long-Term Partnership</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                We prioritize repeat business and ongoing relationships over one-time transactions. Our success depends on buyer satisfaction over time.
              </p>
            </div>

            <div className="bg-card rounded-xl p-8 shadow-md border border-border text-center">
              <div className="w-14 h-14 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Eye className="w-7 h-7 text-gold" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Transparency</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                We communicate clearly about timelines, pricing, and any production challenges. Buyers receive honest updates, not optimistic projections.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Position Statement */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <div className="bg-primary/5 border border-primary/20 rounded-xl p-8 text-center">
              <h3 className="text-xl font-semibold text-foreground mb-4">
                Our Position
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Mountwyn is not a manufacturer, and we do not position ourselves as one. We are a sourcing and trading company that adds value through supplier verification, quality oversight, and export coordination.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                For buyers who need a dependable partner to manage India-based sourcing — with clear accountability and consistent communication — Mountwyn offers a practical, low-risk approach to international procurement.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
