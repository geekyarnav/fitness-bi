import React from "react";
import HeroSection from "../../components/HeroSection";
import Navbar from "../../components/Navbar";
import About from "../../components/About";
import Videos from "../../components/Videos";
import "./Home.css";

const Home = () => {

  return (
    <>
      <Navbar/>
      <HeroSection />
      <main>
        <About />
        <Videos />
        <div className="callto">
          <section className="container callto__wrapper">
            <h3>Love for Social Boat</h3>
            <div className="btn secondary"> 
              Call -9582523067,
              Arnav Rastogi (BoardInfinity Student)
          </div>
          </section>
        </div>
      </main>
    </>
  );
};

export default Home;
