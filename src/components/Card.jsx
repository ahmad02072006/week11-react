// Demonstrates children props and reusable semantic card composition.
import { useId } from 'react';

function Card({ id, number, title, description, children }) {
  const titleId = useId();

  return (
    <section className="demo-card" id={id} aria-labelledby={titleId}>
      <div className="card-heading">
        <span className="card-number">{number}</span>
        <div>
          <h3 id={titleId}>{title}</h3>
          <p>{description}</p>
        </div>
      </div>
      <div className="card-content">{children}</div>
    </section>
  );
}

export default Card;
