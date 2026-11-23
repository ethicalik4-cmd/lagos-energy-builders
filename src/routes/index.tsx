import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight, Building2, Cog, HardHat, Wrench } from "lucide-react";

import { InquirySection } from "@/components/inquiry-section";
import { Reveal } from "@/components/reveal";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { SITE_NAME } from "@/lib/site-content";
import constructionSite from "@/assets/construction-site.jpg.asset.json";
import constructionTeam from "@/assets/construction-team.jpg.asset.json";
import fieldWelding from "@/assets/field-welding.jpg.asset.json";
import industrialFacility from "@/assets/industrial-facility.jpg.asset.json";
import engineeringWork from "@/assets/engineering-work.jpg.asset.json";

const heroSlides = [
  {
    src: industrialFacility.url,
    alt: "Industrial processing facility with steel structures and pipework",
    label: "Industrial facilities",
  },
  {
    src: constructionSite.url,
    alt: "Construction team reviewing work at a large active site",
    label: "Site delivery",
  },
  {
    src: fieldWelding.url,
    alt: "Field welder joining steel during industrial fabrication work",
    label: "Field fabrication",
  },
] as const;

const capabilityCards = [
  {
    icon: Cog,
    title: "Engineering & design",
    description: "Practical engineering support shaped around the asset, site conditions, and operating needs.",
  },
  {
    icon: Building2,
    title: "Procurement",
    description: "Coordinated sourcing and supply support to keep project requirements moving clearly.",
  },
  {
    icon: HardHat,
    title: "Construction",
    description: "Site execution across civil, structural, mechanical, and installation scopes.",
  },
  {
    icon: Wrench,
    title: "Industrial services",
    description: "Field services, maintenance, and technical support for working facilities.",
  },
];

const workCards = [
  {
    image: industrialFacility.url,
    alt: "Industrial process facility with towers and pipework",
    category: "Facilities",
    title: "Industrial facility works",
    summary: "Engineering, construction, and upgrade scopes for operating environments.",
  },
  {
    image: constructionTeam.url,
    alt: "Construction worker carrying out steel and site work",
    category: "Site delivery",
    title: "Civil & structural works",
    summary: "Site preparation, foundations, structural installation, and associated works.",
  },
  {
    image: fieldWelding.url,
    alt: "Close view of a worker welding steel",
    category: "Fabrication",
    title: "Welding & fabrication",
    summary: "Fabrication and installation support for industrial systems and equipment.",
  },
];

export const Route = createFileRoute("/")({
  component: HomePage,
  head: () => ({
    meta: [
      { title: "ELATEV | Engineering Excellence Across Nigeria" },
      {
        name: "description",
        content: "Explore ELATEV's oil and gas EPC, engineering, construction, and industrial services from Lagos, Nigeria.",
      },
      { property: "og:title", content: "ELATEV | Engineering Excellence Across Nigeria" },
      {
        property: "og:description",
        content: "Oil and gas EPC, engineering, construction, and industrial services from Lagos, Nigeria.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
});

function HomePage() {
  const [activeSlide, setActiveSlide] = useState<0 | 1 | 2>(0);
  const currentSlide = heroSlides[activeSlide];

  return (
    <div>
      <section className="home-hero" aria-label="ELATEV engineering company">
        <img key={currentSlide.src} className="home-hero__image" src={currentSlide.src} alt={currentSlide.alt} />
        <div className="home-hero__scrim" aria-hidden="true" />
        <SiteHeader overHero />
        <div className="site-container home-hero__content">
          <Reveal className="home-hero__inner">
            <p className="hero-kicker">{SITE_NAME} · Lagos, Nigeria</p>
            <h1>
              <span>Engineering Excellence</span>
              <span>Across Nigeria</span>
            </h1>
            <p className="home-hero__summary">
              Engineering, procurement, construction, and industrial services for the energy and infrastructure that move business forward.
            </p>
            <div className="home-hero__actions">
              <Link to="/projects" className="button-brand inline-flex items-center gap-2">
                Our Projects <ArrowUpRight aria-hidden="true" />
              </Link>
              <Link to="/services" className="hero-secondary inline-flex items-center gap-2">
                Explore our services <ArrowRight aria-hidden="true" />
              </Link>
            </div>
          </Reveal>
        </div>
        <div className="hero-controls" aria-label="Featured work images">
          <span className="hero-controls__label">{currentSlide.label}</span>
          {heroSlides.map((slide, index) => (
            <button
              key={slide.label}
              type="button"
              className="hero-dot"
              aria-label={`Show ${slide.label} image`}
              aria-pressed={activeSlide === index}
              onClick={() => setActiveSlide(index as 0 | 1 | 2)}
            />
          ))}
        </div>
      </section>

      <main>
        <section className="site-container intro-band">
          <Reveal>
            <p className="eyebrow">A clear line from plan to handover</p>
            <h2 className="section-heading">Complex work demands a partner who understands the field.</h2>
          </Reveal>
          <Reveal order={1} className="section-copy">
            <p>
              ELATEV is a Lagos-based oil and gas engineering, procurement, construction, and industrial services company.
            </p>
            <p>
              We bring project thinking and practical site delivery together—supporting clients through the work, from early engineering to construction and ongoing facility needs.
            </p>
          </Reveal>
        </section>

        <section className="capabilities-section">
          <div className="site-container">
            <div className="section-topline">
              <Reveal>
                <p className="eyebrow">What we do</p>
                <h2 className="section-heading">One connected team for demanding scopes.</h2>
                <p className="section-topline__copy">
                  Joined-up support helps keep decisions clear from the drawing board to the worksite.
                </p>
              </Reveal>
              <Link to="/services" className="text-link">
                View all services <ArrowRight aria-hidden="true" />
              </Link>
            </div>
            <div className="capabilities-grid">
              {capabilityCards.map(({ icon: Icon, title, description }, index) => (
                <Reveal key={title} order={(index % 3) as 0 | 1 | 2}>
                  <article className="capability-card">
                    <span className="capability-card__icon"><Icon aria-hidden="true" size={21} /></span>
                    <h3>{title}</h3>
                    <p>{description}</p>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="site-container feature-band">
          <Reveal className="image-frame feature-band__image">
            <img src={engineeringWork.url} alt="Engineer reviewing a technical drawing at a workbench" loading="lazy" />
          </Reveal>
          <Reveal order={1} className="feature-band__copy">
            <p className="eyebrow">Grounded in local understanding</p>
            <h2 className="section-heading">Engineering that starts with the realities of the site.</h2>
            <div className="section-copy">
              <p>
                Every project has its own constraints. Our approach brings people, planning, and technical detail into the same conversation—so the solution fits the work ahead.
              </p>
            </div>
            <Link to="/about" className="text-link">
              About ELATEV <ArrowRight aria-hidden="true" />
            </Link>
          </Reveal>
        </section>

        <section className="work-section">
          <div className="site-container">
            <div className="section-topline">
              <Reveal>
                <p className="eyebrow">Representative capabilities</p>
                <h2 className="section-heading">Work shaped around real operating environments.</h2>
              </Reveal>
              <Link to="/projects" className="text-link">
                Explore project scopes <ArrowRight aria-hidden="true" />
              </Link>
            </div>
            <div className="work-grid">
              {workCards.map((work, index) => (
                <Reveal key={work.title} order={(index % 3) as 0 | 1 | 2}>
                  <article className="work-card">
                    <div className="image-frame work-card__image">
                      <img src={work.image} alt={work.alt} loading="lazy" />
                    </div>
                    <div className="work-card__content">
                      <p className="work-card__category">{work.category}</p>
                      <h3>{work.title}</h3>
                      <p>{work.summary}</p>
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <InquirySection />
      </main>
      <SiteFooter />
    </div>
  );
}
