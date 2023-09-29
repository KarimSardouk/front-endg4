import React from "react";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Header from "./components/header";
import TextImageSection from "./components/image-header";
import Skills from "./components/skills";
import Footer from "./components/footer";
import "./App.css";
import  "./components/experience.css";
import  "./components/projects.css";
import  "./components/header.css";
import  "./components/skills.css";
import  "./components/footer.css";
import  "./components/DownloadButton.css";

import GitHubLink from './components/GitHubLink';
import LinkedInImage from './components/LinkedInImage';
import DownloadButton from './components/DownloadButton';


function App() {
  return (
    <div>
      <Header/>
      <TextImageSection/>
      <Skills />
      <Experience />
      <Projects />
      <DownloadButton />
      <GitHubLink />
      <LinkedInImage />
      <Footer />
    </div>
  );
}

export default App;