export default function PricingCard() {
  return (
    <article className="pricing-card">
      <h2 className="price-tier">Basic</h2>

      <p className="price">
        $<span>199.99</span>
      </p>

      <ul className="card-features">
        <li>
          500 GB Storage
        </li>
        <li>
          2 Users Allowed
        </li>
        <li>
          Send up to 3 GB
        </li>
      </ul>

      <a href="#" className="btn text-uppercase bg-gradient">Learn More</a>
    </article>
  );
}