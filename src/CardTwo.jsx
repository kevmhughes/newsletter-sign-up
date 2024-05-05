/* eslint-disable no-unused-vars */
import React, { useContext } from "react";
import Success from "./assets/images/icon-success.svg";
import { useNavigate } from "react-router-dom";
import { MyContext } from "./App.jsx";

const CardTwo = () => {
  const { emailsend, setEmailsend } = useContext(MyContext);

  const navigate = useNavigate();
  const handleClick = (e) => {
    navigate("/");
    setEmailsend("");
  };

  return (
    <div>
      <div className="success-container">
        <div className="inner-success-container">
          <img
            className="success-page-tick"
            src={Success}
            alt="a tick for success"
          />
          <div className="thanks-text">Thanks for subscribing!</div>
          <div className="confirmation-message">
            A confirmation message has been sent to <b>{emailsend}</b>. Please
            open it and click the button inside to confirm your subscription.
          </div>
        </div>
        <button className="dismiss-button" onClick={handleClick}>
          Dismiss message
        </button>
      </div>
    </div>
  );
};

export default CardTwo;
