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

const App = () => {
  const darkPref = window.matchMedia("(prefers-color-scheme: light)");
  const [isDark, setIsDark] = useLocalStorage("isDark", darkPref.matches);

  const changeTheme = () => {
    setIsDark(!isDark);
  };

  return (
    <div className={isDark ? "dark-mode" : null}>
      <StyleProvider value={{ isDark: isDark, changeTheme: changeTheme }}>
        <main className="text-gray-400 bg-gray-900 body-font">
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
