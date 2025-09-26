import type { FC, ReactNode } from 'react';
import '../styles/section-card.css';

type SectionCardProps = {
  id?: string;
  title: string;
  description?: string;
  extra?: ReactNode;
  children: ReactNode;
};

const SectionCard: FC<SectionCardProps> = ({ id, title, description, extra, children }) => (
  <section id={id} className="section-card">
    <header className="section-card__header">
      <div>
        <h2>{title}</h2>
        {description && <p className="section-card__description">{description}</p>}
      </div>
      {extra && <div className="section-card__extra">{extra}</div>}
    </header>
    <div className="section-card__body">{children}</div>
  </section>
);

export default SectionCard;
