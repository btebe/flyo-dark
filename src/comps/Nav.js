import React from "react";
import flyologo from "../images/logo.svg";
function Nav() {
  return (
    <header>
      <div className='container'>
        <div className='primary-header flex'>
          <div>
            <img src={flyologo} alt='flyo-logo' className='logo' />
          </div>
          <nav>
            <ul className='primary-navigation flex underline-indicators'>
              <li>
                <a href='features' aria-label='features'>
                  Features
                </a>
              </li>
              <li>
                <a href='team' aria-label='Team'>
                  Team
                </a>
              </li>
              <li>
                <a href='signin' aria-label='signin'>
                  Sign In
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Nav;
