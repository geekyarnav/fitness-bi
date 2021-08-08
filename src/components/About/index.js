import React from "react";
import aboutImg from "../../images/aboutus.jpg";
import "./About.css";

const About = () => {
  return (
    <div>   
    <section className="container p-3 about">
      <figure className="about__img">
        <img
          loading="lazy"
          src={aboutImg}
          alt="my picture"
          
        />
      </figure>
      <header className="about__header">
        <h2>
         Social  <span>Links</span>
        </h2>
        <p className="txt-justify">
        Linkedin : https://www.linkedin.com/in/arnavrastogi/ <br/>
        Github :<br/> https://github.com/geekyarnav<br/>
        Gmail :<br/> arastogi721@gmail.com<br/>
        
          <span>I am Not on facebook and instagram.</span>
                 </p>
            </header>
      </section>
    <div className="callto">
          <section className="container callto__wrapper">
          <div className="newsection">
          <center>
      <h4><strong>Make Your Own Playlist by Drag and Drop Videos Tag</strong></h4>
        </center>
          </div>
          </section>
    </div>
  </div>
  );
};

export default About;
