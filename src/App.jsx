import { useState } from "react";
import PricingCard from "./components/PricingCard.jsx";
import ToggleSwitch from "./components/ToggleSwitch.jsx";
import data from "./data.json";
import "./stylesheets/index.css";

export default function App() {
  const [isToggled, setIsToggled] = useState(false);

  function onToggle() {
    console.log("toggling switch");
    setIsToggled(to => !to);
  }

  return (
    <>
      <header>
        <h1>Our Pricing</h1>
        <div className="switch-area">
          <span>Annually</span>
          <ToggleSwitch toggled={isToggled} onToggle={onToggle} />
          <span>Monthly</span>
        </div>
      </header>

      <main>
        <div className="cards-wrapper" aria-live="polite">
          {data.map(plan => (
            <PricingCard
              key={plan.id}
              tier={plan.tier}
              tierPrice={!isToggled ? plan.price.annual : plan.price.monthly}
              features={plan.features}
            />
          ))}
        </div>
      </main>
    </>
  );
}
