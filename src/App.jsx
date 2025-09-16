import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Hero from "./components/Hero/Hero";
import Footer from "./components/Footer/Footer";
import Services from "./components/Service/service";
import Portfolio from "./components/Portfolio/Portfolio";
import Contact from "./components/Contact/Contact";
import Skills from "./components/skills/skills";

function App() {
  return (
    <Router>
      <div className="App">
        

        <Routes>
          {/* Homepage */}
          <Route
            path="/"
            element={
              <div>
                
                <Hero />
                <Services/>
                <Portfolio/>
                <Skills/>
                <Contact/>

                
               
                <Footer />
              </div>
            }
          />

          
        </Routes>
      </div>
    </Router>
  );
}

export default App;
