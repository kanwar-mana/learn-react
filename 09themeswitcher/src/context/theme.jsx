import { createContext, useContext } from "react";

export const ThemeContext = createContext({
  themeMod: "light",
  lightTheme: () => {},
  darkTheme: () => {},
});

export const ThemeProvider = ThemeContext.Provider;

export const useTheme = () => {
  return useContext(ThemeContext);
};
