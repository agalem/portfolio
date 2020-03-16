import React from 'react';
import './App.css';
import Header from "./components/header/Header";
import Projects from "./components/projects/Projects";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";

function App() {
  return (
    <div className="App">
      <Header/>
      <Projects/>
      <About/>
      <Contact/>

    </div>
  );
}

export default App;
