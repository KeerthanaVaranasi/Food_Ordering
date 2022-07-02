import React from "react";
import '../styles/About.css';
import Multiplepizzas from '../images/multiplePizzas.jpeg'
const About = () => {
  return (
    <div className="about">
      <div className="aboutTop" style={{backgroundImage:`url(${Multiplepizzas})`}}></div>
      <div className="aboutBottom">
        <h1>ABOUT US</h1><br />
        <p><h4>Happy Time Pizza is best place for pizza.we believe that hygenic ingredients and healthy food should be a priority for everyone not just during this pandemic but all the time which is what we practice, that and a bit of love as the special ingredient makes for the best food in town which is served here at our Pizza Engineer.Heavenly delicacies served here. The food is not just mouth-watering but also eye-feasting. Generous management.</h4></p>
      </div>
    </div>
  );
};

export default About;
