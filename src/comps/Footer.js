import React from "react";
import logo from "../images/logo.svg";
import iconLocation from "../images/icon-location.svg";
import iconPhone from "../images/icon-phone.svg";
import iconEmail from "../images/icon-email.svg";

function Footer() {
  return (
    <footer>
      <div className='container'>
        <div className='footer-container grid'>
          <img src={logo} alt='logo' className='logo' />
          <ul className='address'>
            <li className='flex'>
              <img src={iconLocation} alt='address' />
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua
            </li>
          </ul>
          <ul className='contact'>
            <li className='flex'>
              <img src={iconPhone} alt='phone' /> +1-543-123-4567
            </li>
            <li className='flex'>
              <img src={iconEmail} alt='email' />
              example@fylo.com
            </li>
          </ul>
          <ul className='other-nav-1'>
            <li>
              <a href='/' aria-label='about us'>
                About Us
              </a>
            </li>
            <li>
              <a href='/' aria-label='jobs'>
                Jobs
              </a>
            </li>
            <li>
              <a href='/' aria-label='press'>
                Press
              </a>
            </li>
            <li>
              <a href='/' aria-label='blog'>
                Blog
              </a>
            </li>
          </ul>
          <ul className='other-nav-2'>
            <li>
              <a href='/' aria-label='contact'>
                Contact Us
              </a>
            </li>
            <li>
              <a href='/' aria-label='terms'>
                Terms
              </a>
            </li>
            <li>
              <a href='/' aria-label='privacy'>
                Privacy
              </a>
            </li>
          </ul>
          <ul className='social flex'>
            <li className='fb'>
              <a href='/' aria-label='facebook'>
                <i class='fa-brands fa-facebook-f'></i>
              </a>
            </li>
            <li className='twitter'>
              <a href='/' aria-label='twitter'>
                <i class='fa-brands fa-twitter'></i>
              </a>
            </li>
            <li className='insta'>
              <a href='/' aria-label='instagram'>
                <i class='fa-brands fa-instagram'></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
