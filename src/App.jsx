import PricingCard from "./components/PricingCard.jsx";
import ToggleSwitch from "./components/ToggleSwitch.jsx";
import data from "./data.json";
import "./stylesheets/index.css";

export default function App() {
  return (
    <>
      <header>
        <h1>Our Pricing</h1>
        <div className="switch-area">
          <span>Annually</span>
          <ToggleSwitch />
          <span>Monthly</span>
        </div>
      </header>

      <main>
        <div className="cards-wrapper">
          {data.map(plan => (
            <PricingCard
              key={plan.id}
              tier={plan.tier}
              tierPrice={plan.price.annual}
              features={plan.features}
            />
          ))}
        </div>
      </main>
    </>
  );
}
