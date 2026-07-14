export default function PricingCard({ tier, tierPrice, features}) {
  return (
    <article className="pricing-card">
      <h2 className="price-tier">{tier}</h2>

      <p className="price">
        $<span>{tierPrice}</span>
      </p>

      <ul className="card-features">
        {
          features.map(feature => (
            <li key={feature}>{feature}</li>
          ))
        }
      </ul>

      <a href="#" className="btn text-uppercase bg-gradient">Learn More</a>
    </article>
  );
}