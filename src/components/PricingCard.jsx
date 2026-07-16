export default function PricingCard({ tier, tierPrice, features}) {
  const cardClasses = "professional" === tier.toLowerCase()
    ? "pricing-card bg-gradient"
    : "pricing-card";
  const buttonClasses = "professional" === tier.toLowerCase()
    ? "btn text-uppercase bg-light"
    : "btn text-uppercase bg-gradient"

  return (
    <article className={cardClasses}>
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

      <a href="#" className={buttonClasses}>Learn More</a>
    </article>
  );
}