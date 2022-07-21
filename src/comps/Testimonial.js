import React from "react";
import profileOne from "../images/profile-1.jpg";
import profileTwo from "../images/profile-2.jpg";
import profileThree from "../images/profile-3.jpg";
import bgquotes from "../images/bg-quotes.png";
function Testimonial() {
  return (
    <section>
      <div className='testimonial-container container grid'>
        <img src={bgquotes} alt='quotes' className='qoutes' />
        <article>
          <p>
            Fylo has improved our team productivity by an order of magnitude.
            Since making the switch our team has become a well-oiled
            collaboration machine.
          </p>
          <header>
            <img src={profileOne} alt='Satish' />
            <div>
              <h2> Satish Patel</h2>
              <h3>Founder & CEO, Huddle</h3>
            </div>
          </header>
        </article>
        <article>
          <p>
            Fylo has improved our team productivity by an order of magnitude.
            Since making the switch our team has become a well-oiled
            collaboration machine.
          </p>
          <header>
            <img src={profileTwo} alt='Bruce' />
            <div>
              <h2>Bruce McKenzie</h2>
              <h3>Founder & CEO, Huddle</h3>
            </div>
          </header>
        </article>
        <article>
          <p>
            Fylo has improved our team productivity by an order of magnitude.
            Since making the switch our team has become a well-oiled
            collaboration machine.
          </p>
          <header>
            <img src={profileThree} alt='Iva' />
            <div>
              <h2> Iva Boyd</h2>
              <h3>Founder & CEO, Huddle</h3>
            </div>
          </header>
        </article>
      </div>
    </section>
  );
}

export default Testimonial;
