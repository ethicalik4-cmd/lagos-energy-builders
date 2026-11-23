import { createFileRoute } from "@tanstack/react-router";
import { Building2, Cable, Cog, DraftingCompass, HardHat, PackageCheck, Wrench } from "lucide-react";

import { InquirySection } from "@/components/inquiry-section";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { SiteFooter } from "@/components/site-footer";
import { SITE_EMAIL_HREF } from "@/lib/site-content";
import fieldWelding from "@/assets/field-welding.jpg.asset.json";
import industrialFacility from "@/assets/industrial-facility.jpg.asset.json";

const serviceItems = [
  {
    icon: DraftingCompass,
    title: "Engineering & design",
    description: "Engineering studies, technical documentation, and design support aligned with project scope and site requirements.",
  },
  {
    icon: PackageCheck,
    title: "Procurement & supply",
    description: "Material sourcing and procurement coordination to support planned work and project schedules.",
  },
  {
    icon: HardHat,
    title: "Construction & installation",
    description: "Construction management and installation support across civil, structural, mechanical, and field scopes.",
  },
  {
    icon: Cable,
    title: "Electrical & instrumentation",
    description: "Installation and support for electrical, controls, and instrumentation systems within industrial facilities.",
  },
  {
    icon: Wrench,
    title: "Maintenance & industrial services",
    description: "Technical and maintenance support for facilities, equipment, and industrial operations.",
  },
  {
    icon: Cog,
    title: "Fabrication & mechanical works",
    description: "Mechanical, welding, and fabrication support for equipment, pipework, and facility requirements.",
  },
  {
    icon: Building2,
    title: "Project coordination",
    description: "Planning, site coordination, and interface management across project teams and delivery stages.",
  },
];

export const Route = createFileRoute("/services")({
  component: ServicesPage,
  head: () => ({
    meta: [
      { title: "Services | ELATEV Engineering & EPC" },
      { name: "description", content: "Explore ELATEV's engineering, procurement, construction, fabrication, maintenance, and industrial services." },
      { property: "og:title", content: "Services | ELATEV Engineering & EPC" },
      { property: "og:description", content: "Integrated oil and gas EPC and industrial services from engineering through field delivery." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
});

function ServicesPage() {
  return (
    <div>
      <PageHero
        eyebrow="Our services"
        title="One partner. From design to delivery."
        description="Connected EPC and industrial services for the needs of energy, process, and infrastructure projects."
        image={industrialFacility.url}
        imageAlt="Industrial process facility with steel structures and pipework"
      />
      <main>
        <section className="site-container capabilities-section">
          <Reveal>
            <p className="eyebrow">Integrated capabilities</p>
            <h2 className="section-heading">The right support for each stage of the work.</h2>
            <p className="section-topline__copy">
              Services can be delivered as a connected scope or tailored to a specific project requirement.
            </p>
          </Reveal>
          <div className="services-grid">
            {serviceItems.map(({ icon: Icon, title, description }, index) => (
              <Reveal key={title} order={(index % 3) as 0 | 1 | 2}>
                <article className="service-row">
                  <span className="service-row__icon"><Icon aria-hidden="true" size={22} /></span>
                  <div>
                    <h3>{title}</h3>
                    <p>{description}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </section>

        <section className="services-image-band">
          <Reveal className="image-frame services-image-band__image">
            <img src={fieldWelding.url} alt="Welder joining steel during industrial fabrication work" loading="lazy" />
          </Reveal>
          <Reveal order={1} className="services-image-band__copy">
            <p className="eyebrow">Built around the field</p>
            <h2>Practical support for active facilities and project sites.</h2>
            <p>Talk with our team about the scope, schedule, and technical requirements behind your next project.</p>
            <a className="text-link" href={SITE_EMAIL_HREF}>Discuss a project <span aria-hidden="true">↗</span></a>
          </Reveal>
        </section>
        <InquirySection />
      </main>
      <SiteFooter />
    </div>
  );
}