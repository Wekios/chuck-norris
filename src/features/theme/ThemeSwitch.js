import { Switch } from "components/Switch/Switch";

export function ThemeSwitch() {
  return <Switch onSwitch={(e) => console.log(e.target.checked)} />;
}
