import React from "react";
import introill from "../images/illustration-intro.png";
function Hero() {
  return (
    <section>
      <div className='container'>
        <div className='hero-container grid'>
          <img src={introill} alt='intro' />
          <h1> All your files in one secure location, accessible anywhere.</h1>
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
