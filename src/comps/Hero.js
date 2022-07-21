import React from "react";
import introill from "../images/illustration-intro.png";
import { BgDesktopCurve } from "../images/bg-curvy-desktop.jsx";
function Hero() {
  return (
    <section>
      <div className='container'>
        <div className='hero-container grid'>
          <img src={introill} alt='intro' />
          <h2> All your files in one secure location, accessible anywhere.</h2>
          <p>
            Fylo stores all your most important files in one secure location.
            Access them wherever you need, share and collaborate with friends
            family, and co-workers.
          </p>
          <a href='page' className='btn'>
            Get Started
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
