import React from 'react';
import { useEffect, useState } from "react";
import "../App.css";

export const LightDarkMode = () => {
    const [isDarkMode, setIsDarkMode] = useState(() => {
    const storedTheme = localStorage.getItem("theme");
    return storedTheme ? storedTheme === "dark" : true;
  });

  const toggleTheme = () => {
    const newTheme = isDarkMode ? "light" : "dark";
    setIsDarkMode(!isDarkMode);
    localStorage.setItem("theme", newTheme);
  };

  useEffect(() => {
    document.body.className = isDarkMode ? "dark-mode" : "light-mode";
  }, [isDarkMode]);

  return (
      <button className="theme-toggle" onClick={toggleTheme}>
        {isDarkMode ? "Jasny motyw" : "Ciemny motyw"}
      </button>
  );
};