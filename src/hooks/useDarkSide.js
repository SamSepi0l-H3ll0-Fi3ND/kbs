import { useEffect, useContext } from "react";
import UserContext from "../UserContext";

export default function useDarkSide() {
  const ctx = useContext(UserContext);
  const { theme, setTheme } = ctx;
  const colorTheme = theme === "dark" ? "light" : "dark";

  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme, colorTheme]);
  return [colorTheme, setTheme];
}
