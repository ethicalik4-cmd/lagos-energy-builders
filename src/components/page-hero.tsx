import { Reveal } from "@/components/reveal";
import { SiteHeader } from "@/components/site-header";

interface PageHeroProps {
  eyebrow: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
}

export function PageHero({ eyebrow, title, description, image, imageAlt }: PageHeroProps) {
  return (
    <section className="page-hero">
      <img className="page-hero__image" src={image} alt={imageAlt} />
      <div className="page-hero__scrim" aria-hidden="true" />
      <SiteHeader overHero />
      <div className="site-container page-hero__content">
        <Reveal className="page-hero__copy">
          <p className="eyebrow">{eyebrow}</p>
          <h1>{title}</h1>
          <p className="page-hero__description">{description}</p>
        </Reveal>
      </div>
    </section>
  );
}