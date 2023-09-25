import React from "react";
import Experience from "./components/experience";
import Projects from "./components/projects";
import Header from "./components/header";
import TextImageSection from "./components/image-header";
import Skills from "./components/skills";
import Footer from "./components/footer";
import "./App.css";
function App() {
  return (
    <div>
      <Header />
      <TextImageSection />
      <Projects />
      <Experience />
      <Skills />
      <Footer />


    </div>
  );
}

export default App;