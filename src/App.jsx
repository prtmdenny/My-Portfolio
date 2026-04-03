import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header.jsx";
// Pages 
import Hero from "./Pages/Hero.jsx";
import Skills from "./Pages/Skills.jsx";
import Project from "./Pages/Project.jsx";
import Contact from "./Pages/Contact.jsx";

import "./index.css";

function App() {
  return (
    <Router>
      <Header />
      
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Project />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
