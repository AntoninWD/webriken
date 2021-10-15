import React, { useState, useEffect } from "react";

type mainContext = {
  theme: string;
  toggleTheme: () => void;
};

export const themeContext = React.createContext<mainContext>({
  theme: "light-theme",
  toggleTheme: () => {},
});

const getStorageTheme = () => {
  let theme: string | null = "light-theme";
  if (localStorage.getItem("theme")) {
    theme = localStorage.getItem("theme");
  }
  return theme;
};

const ThemeContextProvider: React.FC = ({ children }) => {
  const [theme, setTheme] = useState<any>(getStorageTheme());

  useEffect(() => {
    document.documentElement.className = theme;
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    if (theme === "light-theme") {
      setTheme("dark-theme");
    } else {
      setTheme("light-theme");
    }
  };

  const contextValue: mainContext = {
    theme: theme,
    toggleTheme: toggleTheme,
  };

  return (
    <themeContext.Provider value={contextValue}>
      {children}
    </themeContext.Provider>
  );
};

export default ThemeContextProvider;
