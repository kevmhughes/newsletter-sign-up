/* eslint-disable react/no-unknown-property */
/* eslint-disable no-unused-vars */
import React, { useContext } from "react";
import MainImage from "./assets/images/illustration-sign-up-desktop.svg";
import MobileImage from "./assets/images/illustration-sign-up-mobile.svg";
import Success from "./assets/images/icon-success.svg";
import { useNavigate } from "react-router-dom";
import { MyContext } from "./App.jsx";

const Card = () => {
  const { emailsend, setEmailsend } = useContext(MyContext);

  const navigate = useNavigate();

  const handleChange = (e) => {
    setEmailsend(e.target.value);
    console.log("stateChange", emailsend);
  };
  const handleSubmit = (e) => {
    console.log("stateSubmit", emailsend);
    navigate("signup");
  };

  return (
    <div className="main-outer-container">
      <div className="signup-container">
      <div className="mobile-view-container">
      <div>
          <img className="mobile-image" src={MobileImage} alt="colourful image on the sign-up page" />
        </div>
        <div className="stay-updated-container">
          <h1>Stay updated!</h1>
          <p className="stay-updated-text">
            Join 60,000+ product managers receiving monthly updates on:
          </p>
          <div className="check-points-container">
            <div className="check-points">
              <img
                className="success-tick"
                src={Success}
                alt="tick for success"
              />
              <div>Product discovery and building what matters</div>
            </div>
            <div className="check-points">
              <img
                className="success-tick"
                src={Success}
                alt="tick for success"
              />
              <div>Measuring to ensure updates are a success</div>
            </div>
            <div className="check-points">
              <img
                className="success-tick"
                src={Success}
                alt="tick for success"
              />
              <div>And much more!</div>
            </div>
          </div>
          <form
            className="form-container"
            onSubmit={handleSubmit}
            method="post"
          >
            <label className="email-label" htmlFor="email-subscription">
              Email address{" "}
            </label>
            <input
              className="email-input"
              type="text"
              id="email"
              pattern="^[^\W_]+\w*(?:[.-]\w*)*[^\W_]+@[^\W_]+(?:[.-]?\w*[^\W_]+)*(?:\.[^\W_]{2,})$"
              placeholder="email@company.com"
              value={emailsend}
              onChange={handleChange}
              required
            ></input>
            <button id="btn" className="subscribe-button" type="submit">
              Subscribe to monthly newsletter
            </button>
          </form>
        </div>
        </div>
        <div>
          <img className="main-image" src={MainImage} alt="colourful image on the sign-up page" />
        </div>
      </div>
    </div>
  );
};

export default Card;
