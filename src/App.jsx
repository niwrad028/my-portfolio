import React from "react";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Project from "./components/Project";
/* import Hireme from "./components/Hireme"; */
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Bot from "./components/Bot";
import { Toaster } from "react-hot-toast";

const App = () => {
  return (
    <div>
      <Toaster position="top-right"
        reverseOrder={false} />
      <Navbar />
      {/* <Bot /> */}
      <Hero />
      <About />
      <Skills />
      {/*       <Hireme /> */}
      <Project />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
