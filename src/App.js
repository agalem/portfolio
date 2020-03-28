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
import {ScrollPositionProvider} from "./contexts/ScrollContext";
import SectionChanger from "./components/sectionChanger/SectionChanger";

function App() {
  return (
      <BrowserRouter>
          <LanguageProvider>
              <div className="App">
                  <ScrollHandler/>
                  <ScrollPositionProvider>
                      <SectionChanger componentName={''}>
                        <Header/>
                      </SectionChanger>
                      <SectionChanger componentName={'projects'}>
                         <Projects/>
                      </SectionChanger>
                      <SectionChanger componentName={'about'}>
                        <About/>
                      </SectionChanger>
                      <SectionChanger componentName={'contact'}>
                        <Contact/>
                      </SectionChanger>
                  </ScrollPositionProvider>
                  <Footer/>
              </div>
          </LanguageProvider>
      </BrowserRouter>
  );
}

export default App;
