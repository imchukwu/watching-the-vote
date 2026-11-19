import { Link } from "@tanstack/react-router";
import { Shield, Globe, Award, ExternalLink, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export const globalPartners = [
  { name: "European Union", category: "Democratic Governance" },
  { name: "USAID", category: "Electoral Integrity" },
  { name: "FCDO (UK Aid)", category: "Civic Participation" },
  { name: "Ford Foundation", category: "Social Justice & Voice" },
  { name: "MacArthur Foundation", category: "Accountability & Rule of Law" },
  { name: "Open Society Foundations", category: "Democratic Resilience" },
  { name: "National Endowment for Democracy", category: "Citizen Oversight" },
  { name: "Konrad Adenauer Stiftung", category: "Civic Education" },
];

export function PartnerCivicAlliance() {
  return (
    <section className="relative py-20 bg-background border-b border-border">
      <div className="container-wtv">
        
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-3.5 py-1 text-xs font-semibold text-primary uppercase font-mono">
            <Globe className="h-3.5 w-3.5 text-primary" />
            <span>Global Civic Alliance</span>
          </div>
          <h2 className="mt-3 font-display text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground">
            Backed by Leading Global Institutions
          </h2>
          <p className="mt-4 text-base text-muted-foreground leading-relaxed">
            Yiaga Africa's Watching The Vote operates in partnership with international and domestic democracy institutions committed to credible elections, peace, and democratic governance in Africa.
          </p>
        </div>

        {/* Partners Grid */}
        <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-4">
          {globalPartners.map((partner) => (
            <div
              key={partner.name}
              className="flex flex-col items-center justify-center p-6 rounded-xl border border-border bg-card text-center hover:border-primary/40 hover:shadow-sm transition-all"
            >
              <div className="grid h-10 w-10 place-items-center rounded-full bg-primary-soft text-primary font-bold text-sm">
                <Shield className="h-5 w-5" />
              </div>
              <h4 className="font-display text-sm font-bold text-foreground mt-3">
                {partner.name}
              </h4>
              <span className="font-mono text-[10px] text-muted-foreground uppercase tracking-wider mt-1">
                {partner.category}
              </span>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <Button variant="ghost" asChild className="text-xs text-muted-foreground hover:text-foreground">
            <Link to="/partners">
              Explore All Partners & Institutional Collaborations <ArrowRight className="ml-1.5 h-3.5 w-3.5" />
            </Link>
          </Button>
        </div>

      </div>
    </section>
  );
}
