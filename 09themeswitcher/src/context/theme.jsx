import { createContext, useContext } from "react";

export const ThemeContext = createContext({
  themeMod: "light",
  lightTheme: () => {},
  darkTheme: () => {},
});

export const ThemeProvider = ThemeContext.Provider; // create provider wraper to give global variable to all child element

export const useTheme = () => {
  return useContext(ThemeContext);
};
