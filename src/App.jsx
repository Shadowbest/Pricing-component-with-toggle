import PricingCard from "./components/PricingCard.jsx";
import ToggleSwitch from "./components/ToggleSwitch.jsx";
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
          <PricingCard />
          <PricingCard />
          <PricingCard />
        </div>
      </main>
    </>
  );
}
