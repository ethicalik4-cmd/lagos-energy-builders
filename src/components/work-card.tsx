import type { ReactNode } from "react";

import { Reveal } from "@/components/reveal";

interface WorkCardProps {
  image: string;
  imageAlt: string;
  category: string;
  title: string;
  description: string;
  order?: 0 | 1 | 2 | 3;
  children?: ReactNode;
}

export function WorkCard({ image, imageAlt, category, title, description, order = 0, children }: WorkCardProps) {
  return (
    <Reveal order={order}>
      <article className="scope-card">
        <div className="image-frame scope-card__image">
          <img src={image} alt={imageAlt} loading="lazy" />
        </div>
        <div className="scope-card__body">
          <span className="scope-card__type">{category}</span>
          <h3>{title}</h3>
          <p>{description}</p>
          {children}
        </div>
      </article>
    </Reveal>
  );
}