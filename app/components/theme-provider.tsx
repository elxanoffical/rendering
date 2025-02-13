"use client";

import { createContext, useContext } from "react";

type Theme = {
  colors: {
    primary: string;
    secondry: string;
  };
};

const defaultTheme: Theme = {
  colors: {
    primary: "#007bff",
    secondry: "#6c757d",
  },
};

const ThemeContext = createContext<Theme>(defaultTheme);

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <ThemeContext.Provider value={defaultTheme}>
        {children}
      </ThemeContext.Provider>
    </html>
  );
};

export const useTheme = () => useContext(ThemeContext);
