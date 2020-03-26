import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import './App.css';
import Header from "./components/header/Header";
import Projects from "./components/projects/Projects";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Footer from './components/footer/Footer';
import ScrollHandler from "./components/scrollHandler/ScrollHandler";
import {LanguageProvider} from "./contexts/LanguageContext";


function App() {
  return (
      <BrowserRouter>
          <LanguageProvider>
          <div className="App">
              <ScrollHandler/>
              <Header/>
              <Projects/>
              <About/>
              <Contact/>
              <Footer/>
          </div>
          </LanguageProvider>
      </BrowserRouter>
  );
}

export default App;
