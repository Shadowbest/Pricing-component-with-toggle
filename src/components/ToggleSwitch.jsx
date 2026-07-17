export default function ToggleSwitch({ toggled, onToggle }) {
  return (
    <button
      className="toggle-switch"
      role="switch"
      aria-checked={toggled}
      aria-label={ !toggled ? "Toggle billing to monthly, currently annual" : "Toggle billing to annual, currently monthly"}
      onClick={onToggle}
      type="button"
    >
      <span className="thumb" aria-hidden="true"></span>
    </button>
  );
}