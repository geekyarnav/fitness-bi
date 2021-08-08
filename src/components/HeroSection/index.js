import React from "react";
import "./HeroComponents.css";

const HeroSection = () => {
  return (
    <header className="hero">
      <div className="container hero__wrapper">
        <div className="hero__grid">
          <h1 className="hero__text animate-pop-in">
            JOIN THE BEST
            <span> FITNESS CLUB</span>
          </h1>
          <h3 class="animate-pop-in">
            <span>I am Arnav Rastogi from Board Infinity </span> this the assingment made for Social Boat.....
          </h3>
          <p class="animate-pop-in">
          I am a Workaholic and inquisitive learner. I love to code, I am passionate about what I do, perform my work with full sincerity.
          </p>
         
        </div>
      </div>
    </header>
  );
};

export default HeroSection;
