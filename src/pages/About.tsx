import Layout from "@/components/layout/Layout";
import { Target, Users, Award } from "lucide-react";

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
              Your trusted export and sourcing partner from India
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                Mountwyn Private Limited is an export-focused trading and sourcing company based in India. We collaborate with verified manufacturing partners to supply quality-controlled products to international buyers.
              </p>
              
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                Our role is to manage sourcing, sampling, quality checks, and shipment coordination—allowing buyers to work with a single, accountable partner.
              </p>

              <p className="text-lg text-muted-foreground leading-relaxed">
                We prioritize long-term relationships, consistent quality, and transparent communication over short-term transactions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 lg:py-24 bg-gradient-subtle">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Our Core Values
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-card rounded-xl p-8 shadow-md border border-border text-center">
              <div className="w-14 h-14 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Target className="w-7 h-7 text-gold" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Quality Focus</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Rigorous quality control at every stage ensures products meet international standards.
              </p>
            </div>

            <div className="bg-card rounded-xl p-8 shadow-md border border-border text-center">
              <div className="w-14 h-14 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="w-7 h-7 text-gold" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Partnership</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                We build long-term relationships with buyers based on trust and reliable service.
              </p>
            </div>

            <div className="bg-card rounded-xl p-8 shadow-md border border-border text-center">
              <div className="w-14 h-14 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Award className="w-7 h-7 text-gold" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Transparency</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Clear communication and honest business practices in every interaction.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;