// import React from "react";
import Hero from "./components/Hero/Hero";
import DisplayImages from './components/displayImages/DisplayImages';
import Companies from './components/Companies/Companies';
import Footer from './components/Footer/Footer';





function App() {
  return (
    <div className="App">
      <div>
        <Hero />
        <DisplayImages />
        <Companies />
        <Footer />
      </div>
    </div>
  );
}

export default App;
