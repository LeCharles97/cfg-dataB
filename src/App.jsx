import React from "react";
import "./styles/styles.css";
import "./styles/carousel.css";
import {
  HomeImage,
  Navbar,
  Tools,
  FooterHome,
  About,
  Form,
  Services,
} from "./Components/index";

function App() { 

  return (
    
    <section className="bg-services bg-center bg-no-repeat bg-scroll bg-cover flex flex-col md:w-full">
      <Navbar />

      <HomeImage />
      <About />
      <Services />
      <Tools />

      <FooterHome />
      
    </section>
  );
}

export default App;
