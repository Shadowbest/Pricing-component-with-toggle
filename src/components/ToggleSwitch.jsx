export default function ToggleSwitch() {
  return (
    <button
      className="toggle-switch bg-gradient"
      role="switch"
      aria-checked="false"
      aria-label="Toggle billing, currently annual"
    >
      <span className="thumb" aria-hidden="true"></span>
    </button>
  );
}