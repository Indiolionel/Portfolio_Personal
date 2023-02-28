import logo from './logo.svg';
import './App.css';
import About from "./components/About";
import Contact from "./components/Contact";
import Navbar from "./components/NavBar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Testimonials from "./components/Testimonials";
import Footer from './components/Footer';
import { useState } from 'react';

export default function App() {
  const [infoTestimonial, setInfoTestimonial] = useState(false)

  return (
    <main>
      <Navbar />
      <About />
      <Projects />
      <Skills />
      <Testimonials info={infoTestimonial} setInfo={setInfoTestimonial}/>
      <Contact />
      <Footer />
    </main>
  );
}


