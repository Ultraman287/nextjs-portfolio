"use client";

import * as React from "react";
import { useEffect, useState } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import Navbar from "@/components/Navbar";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Skills from "@/components/skillsCard/Skills";
import Contact from "@/components/Contact";
import EducationCard from "@/components/educationCard/EducationCard";
import WorkExperience from "@/components/experienceCard/WorkExperience";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { schools } from "@/data/education";
import { StyleProvider } from "@/contexts/StyleContext";
import { useLocalStorage } from "@/hooks/useLocalStorage";
import icon from "@/public/favicon-32x32.png";

const App = () => {
  const [isDark, setIsDark] = useLocalStorage("isDark", false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const darkPref = window.matchMedia("(prefers-color-scheme: light)");
      setIsDark(darkPref.matches);
    }
  }, []);

  const changeTheme = () => {
    setIsDark(!isDark);
  };

  return (
    <div className={isDark ? "dark-mode" : undefined}>
      <link rel="icon" href="../public/favicon-32x32.png" sizes="any" />
      <StyleProvider value={{ isDark: isDark, changeTheme: changeTheme }}>
        <main className="text-gray-400 bg-gray-900 body-font mulish">
          <Navbar />
          <About />
          <EducationCard school={schools[0]} />
          <WorkExperience />
          <Projects />
          <Skills />
          <Contact />
        </main>
      </StyleProvider>
    </div>
  );
};

export default App;
