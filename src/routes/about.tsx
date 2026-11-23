import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

import { InquirySection } from "@/components/inquiry-section";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { SiteFooter } from "@/components/site-footer";
import { SITE_NAME } from "@/lib/site-content";
import constructionTeam from "@/assets/construction-team.jpg.asset.json";
import engineeringWork from "@/assets/engineering-work.jpg.asset.json";

const principles = [
  {
    number: "01",
    title: "Safety in every decision",
    description: "A disciplined approach to planning and execution helps protect people, assets, and operations.",
  },
  {
    number: "02",
    title: "Clear ownership",
    description: "Defined responsibilities and direct communication keep work aligned from one phase to the next.",
  },
  {
    number: "03",
    title: "Local understanding",
    description: "Lagos-based insight brings practical context to the realities of project delivery in Nigeria.",
  },
];

export const Route = createFileRoute("/about")({
  component: AboutPage,
  head: () => ({
    meta: [
      { title: "About ELATEV | Lagos Engineering & Industrial Services" },
      { name: "description", content: "Learn about ELATEV, a Lagos-based oil and gas EPC and industrial services company focused on practical project delivery." },
      { property: "og:title", content: "About ELATEV | Lagos Engineering & Industrial Services" },
      { property: "og:description", content: "A Lagos-based engineering and industrial services partner for oil, gas, and infrastructure work." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
});

function AboutPage() {
  return (
    <div>
      <PageHero
        eyebrow="About ELATEV"
        title="Engineering for the systems that keep industry moving."
        description="A Lagos-based engineering, procurement, construction, and industrial services company, built around the realities of project delivery."
        image={constructionTeam.url}
        imageAlt="Construction team carrying out steel and site work"
      />
      <main>
        <section className="site-container story-section">
          <Reveal className="story-section__lead">
            <p className="eyebrow">Our company</p>
            <h2 className="section-heading">Local insight. Connected project support.</h2>
            <div className="section-copy">
              <p>
                {SITE_NAME} brings engineering, procurement, construction, and industrial services together for clients working across energy and infrastructure.
              </p>
              <p>
                We believe good delivery starts with listening, clear scope, and an honest understanding of site conditions. From early planning through field execution, we focus on coordinated work and communication that keeps people aligned.
              </p>
              <p>
                Our goal is to help clients move complex work forward with practical technical support and a steady, accountable approach.
              </p>
            </div>
          </Reveal>
          <Reveal order={1} className="image-frame story-section__image">
            <img src={engineeringWork.url} alt="Engineer reviewing technical drawings at a workbench" loading="lazy" />
          </Reveal>
        </section>

        <section className="approach-section">
          <div className="site-container">
            <Reveal>
              <p className="eyebrow">How we work</p>
              <h2 className="section-heading">A thoughtful approach at every stage.</h2>
            </Reveal>
            <div className="principles-grid">
              {principles.map((principle, index) => (
                <Reveal key={principle.number} order={(index % 3) as 0 | 1 | 2}>
                  <article className="principle-card">
                    <span className="principle-card__number">{principle.number}</span>
                    <h3>{principle.title}</h3>
                    <p>{principle.description}</p>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="services-image-band">
          <Reveal className="image-frame services-image-band__image">
            <img src={constructionTeam.url} alt="Workers coordinating activity at an active construction site" loading="lazy" />
          </Reveal>
          <Reveal order={1} className="services-image-band__copy">
            <p className="eyebrow">Connected delivery</p>
            <h2>From the first scope conversation to work on site.</h2>
            <p>Our integrated perspective helps keep technical decisions and field requirements connected.</p>
            <a className="text-link" href="mailto:ethicalik4@gmail.com?subject=Project%20inquiry">
              Contact our team <ArrowRight aria-hidden="true" />
            </a>
          </Reveal>
        </section>
        <InquirySection />
      </main>
      <SiteFooter />
    </div>
  );
}