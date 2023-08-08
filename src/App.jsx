import React from "react";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About"
import DisplayImages from './components/displayImages/DisplayImages';
import Companies from './components/Companies/Companies';
import Booknow from './components/Booknow/Booknow';
// import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="innerWidth App">
      <div>
        <Hero />
        <DisplayImages />
        <About />
        <Companies />
        <Booknow />
        {/* <Footer /> */}
      </div>
    </div>
  );
}

export default App;




