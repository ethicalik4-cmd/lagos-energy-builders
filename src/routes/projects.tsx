import { createFileRoute } from "@tanstack/react-router";

import { InquirySection } from "@/components/inquiry-section";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { SiteFooter } from "@/components/site-footer";
import { WorkCard } from "@/components/work-card";
import constructionSite from "@/assets/construction-site.jpg.asset.json";
import constructionTeam from "@/assets/construction-team.jpg.asset.json";
import engineeringWork from "@/assets/engineering-work.jpg.asset.json";
import fieldWelding from "@/assets/field-welding.jpg.asset.json";
import industrialFacility from "@/assets/industrial-facility.jpg.asset.json";

export const Route = createFileRoute("/projects")({
  component: ProjectsPage,
  head: () => ({
    meta: [
      { title: "Projects & Capabilities | ELATEV Engineering" },
      { name: "description", content: "Explore the project environments and delivery scopes supported by ELATEV's oil and gas EPC and industrial services team." },
      { property: "og:title", content: "Projects & Capabilities | ELATEV Engineering" },
      { property: "og:description", content: "Representative industrial, site, fabrication, and engineering capabilities from ELATEV." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
});

function ProjectsPage() {
  return (
    <div>
      <PageHero
        eyebrow="Projects & capabilities"
        title="Built around the demands of industry."
        description="Representative delivery scopes across industrial facilities, field construction, mechanical systems, and engineering support."
        image={constructionTeam.url}
        imageAlt="Construction worker carrying out steel and site work"
      />
      <main>
        <section className="site-container work-section">
          <Reveal>
            <p className="eyebrow">Representative scopes</p>
            <h2 className="section-heading">Project work shaped to the asset and operating environment.</h2>
            <p className="project-intro-note">
              These examples describe capabilities rather than named client projects. Project-specific case studies can be added when company details are available.
            </p>
          </Reveal>
          <div className="scope-grid">
            <WorkCard
              image={industrialFacility.url}
              imageAlt="Industrial process facility with towers, steel structures, and pipework"
              category="Facilities"
              title="Industrial facility works"
              description="Engineering, construction, and upgrade scopes for process and operating facilities."
              order={0}
            />
            <WorkCard
              image={constructionSite.url}
              imageAlt="Active construction site with workers reviewing concrete and structural work"
              category="Site delivery"
              title="Civil & structural works"
              description="Site preparation, foundations, structural installation, and supporting infrastructure."
              order={1}
            />
            <WorkCard
              image={fieldWelding.url}
              imageAlt="Field welding sparks during steel fabrication work"
              category="Mechanical"
              title="Welding & fabrication"
              description="Fabrication and installation support for mechanical systems and industrial equipment."
              order={2}
            />
            <WorkCard
              image={constructionTeam.url}
              imageAlt="Worker coordinating steel installation at a construction site"
              category="Construction"
              title="Field construction support"
              description="On-site coordination and execution support across multidisciplinary project scopes."
              order={3}
            />
            <WorkCard
              image={engineeringWork.url}
              imageAlt="Engineering drawing being reviewed at a design workbench"
              category="Engineering"
              title="Engineering & project planning"
              description="Technical planning and engineering support that connects project requirements to site realities."
              order={0}
            />
            <Reveal order={1}>
              <article className="scope-card scope-card--statement">
                <div className="scope-card__body">
                  <span className="scope-card__type">Project approach</span>
                  <h3>Clear scope. Coordinated delivery.</h3>
                  <p>Each engagement begins with the work to be done, the operating context, and the people responsible for delivery.</p>
                </div>
              </article>
            </Reveal>
          </div>
        </section>
        <InquirySection />
      </main>
      <SiteFooter />
    </div>
  );
}