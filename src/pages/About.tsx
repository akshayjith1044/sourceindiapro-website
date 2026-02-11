import Layout from "@/components/layout/Layout";
import { Shield, Users, Eye, Building2, CheckCircle } from "lucide-react";
import directorPhoto from "@/assets/director-akshayjith.jpeg";

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
              An India-based B2B export and sourcing company
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
                  Mountwyn is an export-focused sourcing company based in India. We work with international buyers who need a single, accountable partner to manage product sourcing, quality control, and export coordination.
                </p>
                <p>
                  We are not a manufacturer. We coordinate with verified production partners, taking responsibility for supplier selection, quality oversight, and shipment — so buyers deal with one point of contact instead of multiple vendors.
                </p>
                <p>
                  Our current focus is healthcare apparel and uniforms, with the flexibility to source additional product categories based on buyer requirements.
                </p>
              </div>
            </div>
            <div className="bg-gradient-subtle rounded-xl p-8 border border-border">
              <h3 className="text-xl font-semibold text-foreground mb-6">What We Do</h3>
              <ul className="space-y-4">
                {[
                  "Identify and vet manufacturing partners",
                  "Manage sampling, pricing, and timelines",
                  "Conduct quality checks at production and pre-dispatch stages",
                  "Prepare export documentation",
                  "Coordinate logistics to port of shipment",
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
              How We Work
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-card rounded-xl p-8 shadow-md border border-border text-center">
              <div className="w-14 h-14 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="w-7 h-7 text-gold" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Accountability</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                We own the process. When issues arise, we address them — not pass them to suppliers.
              </p>
            </div>

            <div className="bg-card rounded-xl p-8 shadow-md border border-border text-center">
              <div className="w-14 h-14 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="w-7 h-7 text-gold" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Long-Term Focus</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                We build for repeat business. Relationships matter more than one-time transactions.
              </p>
            </div>

            <div className="bg-card rounded-xl p-8 shadow-md border border-border text-center">
              <div className="w-14 h-14 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Eye className="w-7 h-7 text-gold" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Transparency</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Honest timelines, clear pricing, upfront communication about challenges.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Director */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-10">
              Leadership
            </h2>
            <div className="flex flex-col items-center">
              <img
                src={directorPhoto}
                alt="Akshayjith – Director, Mountwyn Private Limited"
                className="w-40 h-40 rounded-full object-cover object-top border-4 border-gold/30 shadow-lg mb-6"
              />
              <h3 className="text-xl font-semibold text-foreground">Akshayjith</h3>
              <p className="text-gold font-medium mb-3">Director</p>
              <p className="text-muted-foreground text-sm leading-relaxed max-w-lg">
                Leading Mountwyn's sourcing operations, supplier partnerships, and export coordination to deliver reliable, quality-driven outcomes for international buyers.
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
                Clear Positioning
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                We don't claim to be a factory. We're a sourcing and trading company that adds value through supplier verification, quality oversight, and reliable coordination. For buyers who want a dependable partner — not just a supplier list — Mountwyn provides a practical, low-risk approach to sourcing from India.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
