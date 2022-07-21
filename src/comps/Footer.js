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
              <a href='/'>About Us</a>
            </li>
            <li>
              <a href='/'>Jobs</a>
            </li>
            <li>
              <a href='/'>Press</a>
            </li>
            <li>
              <a href='/'>Blog</a>
            </li>
          </ul>
          <ul className='other-nav-2'>
            <li>
              <a href='/'>Contact Us</a>
            </li>
            <li>
              <a href='/'>Terms</a>
            </li>
            <li>
              <a href='/'>Privacy</a>
            </li>
          </ul>
          <ul className='social flex'>
            <li className='fb'>
              <a href='/'>
                <i class='fa-brands fa-facebook-f'></i>
              </a>
            </li>
            <li className='twitter'>
              <a href='/'>
                <i class='fa-brands fa-twitter'></i>
              </a>
            </li>
            <li className='insta'>
              <a href='/'>
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
