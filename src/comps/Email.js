import React, { useState } from "react";

function Email() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState(null);

  const emailValidation = () => {
    const emailRegex = RegExp(
      /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)*$/
    );
    if (emailRegex.test(email)) {
      setMessage(null);
    } else {
      setMessage("Please enter a valid email address");
    }
  };

  const handleOnChange = (e) => {
    setEmail(e.target.value);
  };
  return (
    <section className='email'>
      <div className='container'>
        <div className='email-container grid'>
          <div className='grid'>
            <h2>Get early access today</h2>
            <p>
              It only takes a minute to sign up and our free starter tier is
              extremely generous. If you have any questions, our support team
              would be happy to help you.
            </p>
            <div className='grid'>
              <input
                type='email'
                name='email'
                id='1'
                onChange={handleOnChange}
              />
              <button className='btn' onClick={emailValidation}>
                Get Started For Free
              </button>
              {message && <p className='errMsg'>{message}</p>}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Email;
