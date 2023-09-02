import React from "react";
import { Element } from 'react-scroll';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landingpage from "./components/Landingpage/Landingpage";
import Gallery from "./pages/Gallery/Gallery";

function App() {
  return (
    <div className="innerWidth App">
      <Router>
        <Routes>
          <Route path="/" element={
            <>
              <Element name="home">
                <Landingpage />
              </Element>
              {/* Add more Elements for other sections... */}
            </>
          } />


          <Route path="/home" element={<Landingpage />} />
          <Route path="/gallery" element={<Gallery />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;



























// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import Hero from "./components/Hero/Hero";
// import About from "./components/About/About";
// import DisplayImages from "./components/displayImages/DisplayImages";
// import Companies from "./components/Companies/Companies";
// import Booknow from "./components/Booknow/Booknow";
// import Gallery from "./pages/Gallery/Gallery";



// function App() {
//   return (
//     <div className="innerWidth App">
//       <div>
//         <Hero />
//         <DisplayImages />
//         <About />
//         <Companies />
//         <Booknow />
//       </div>
//     </div>
//   );
// }


// function App() {
//   return (
//     <div className="innerWidth App">
//       <Router>
//         <Routes>
//           <Route path="/" element={<Home />}>
//             <Route index element={<Hero />} />
//             <Route path="gallery" element={<Gallery />} />
//           </Route>
//         </Routes>
//       </Router>
//     </div>
//   );
// }

// function Home() {
//   return (
//     <div>
//       <DisplayImages />
//       <About />
//       <Companies />
//       <Booknow />
//     </div>
//   );
// }






