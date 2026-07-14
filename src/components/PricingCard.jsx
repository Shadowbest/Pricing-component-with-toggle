export default function PricingCard() {
  return (
    <article className="pricing-card">
      <h2 className="price-tier">Basic</h2>

      <p className="price">
        $<span>199.99</span>
      </p>

      <ul className="card-features">
        <li>
          <strong>500 GB Storage</strong>
        </li>
        <li>
          <strong>2 Users Allowed</strong>
        </li>
        <li>
          <strong>Send up to 3 GB</strong>
        </li>
      </ul>

      <a href="#" className="btn">Learn More</a>
    </article>
  );
}