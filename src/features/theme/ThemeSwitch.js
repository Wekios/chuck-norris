import { Switch } from "components/Switch/Switch";
import { useDispatch, useSelector } from "react-redux";
import { setThemeMode } from "store/theme";

export const boolToTheme = {
  true: "dark",
  false: "white",
};

export const themeToBool = {
  dark: true,
  white: false,
};

export function ThemeSwitch() {
  const dispatch = useDispatch();
  const { theme } = useSelector((state) => state.theme);

  const handleThemeSwitch = (e) => {
    const theme = boolToTheme[e.target.checked];
    dispatch(setThemeMode(theme));
  };

  return <Switch onSwitch={handleThemeSwitch} defaultChecked={themeToBool[theme]} />;
}
