import React from "react";
import icon1 from "../images/icon-access-anywhere.svg";
import icon2 from "../images/icon-any-file.svg";
import icon3 from "../images/icon-collaboration.svg";
import icon4 from "../images/icon-security.svg";

function SectionOne() {
  return (
    <section className='category'>
      <div className='container'>
        <div className='sectionOne-container grid'>
          <div className='grid'>
            <img src={icon1} alt='access anywhere' />
            <h2> Access your files, anywhere</h2>
            <p>
              The ability to use a smartphone, tablet, or computer to access
              your account means your files follow you everywhere.
            </p>
          </div>
          <div className='grid'>
            <img src={icon4} alt='security' />
            <h2>Security you can trust</h2>
            <p>
              2-factor authentication and user-controlled encryption are just a
              couple of the security features we allow to help secure your
              files.
            </p>
          </div>
          <div className='grid'>
            <img src={icon3} alt='collaboration' />
            <h2>Real-time collaboration</h2>
            <p>
              Securely share files and folders with friends, family and
              colleagues for live collaboration. No email attachments required.
            </p>
          </div>
          <div className='grid'>
            <img src={icon2} alt='any file' />
            <h2>Store any type of file</h2>
            <p>
              {" "}
              Whether you're sharing holidays photos or work documents, Fylo has
              you covered allowing for all file types to be securely stored and
              shared.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SectionOne;
