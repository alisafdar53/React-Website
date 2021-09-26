import React from "react";
import "../css/App.css";
import { Button } from "../Components/Button";
import "../css/HeroSection.css";
import "../css/Button.css";

function HeroSection() {
  return (
    <div className="hero__container">

      <h1>Website Creation</h1>
      <p>Lets do it, What are you waiting for?</p>

      <div className="hero__btns">
        <Button
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
        >
          Get Started
        </Button>
        <Button
          className="btns"
          buttonStyle="btn--primary"
          buttonSize="btn--large"
        >
          Click to Watch it <i className="far fa-play-circle" />
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
