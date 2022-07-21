import React from "react";
import illus from "../images/illustration-stay-productive.png";
import arrowIcon from "../images/icon-arrow.svg";
import arrowIcon2 from "../images/icon-arrow-white.svg";
function SectionTwo() {
  return (
    <section>
      <div className='container'>
        <div className='sectionTwo-container grid'>
          <img src={illus} alt='stay productive illustration' />
          <article>
            <div className='flex'>
              <header>
                <h2> Stay productive, wherever you are</h2>
              </header>
              <p className='sectionTwo-p1'>
                Never let location be an issue when accessing your files. Fylo
                has you covered for all of your file storage needs.
              </p>
              <p className='sectionTwo-p2'>
                Securely share files and folders with friends, family and
                colleagues for live collaboration. No email attachments
                required.
              </p>

              <a href='page'>
                <span>
                  See how Fylo works <img src={arrowIcon} alt='arrow' />
                </span>
              </a>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}

export default SectionTwo;
