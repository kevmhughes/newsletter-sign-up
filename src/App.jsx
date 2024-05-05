/* eslint-disable no-unused-vars */
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Card from "./Card";
import CardTwo from "./CardTwo";
import React, { createContext, useState } from "react";

export const MyContext = createContext("");

function App() {
 const [emailsend, setEmailsend] = useState("");

  return (
    <>
      <MyContext.Provider value={{emailsend, setEmailsend}}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Card/>} />
            <Route path="signup" element={<CardTwo />} />
          </Routes>
        </BrowserRouter>
      </MyContext.Provider>
    </>
  );
}

export default App;
