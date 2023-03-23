import React, { useState, useEffect } from "react";
import "./ReNavbar.css";
import { motion } from "framer-motion";
// import { Avatar } from "@mui/material";

const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

function ResNavbar() {
  const [visit, setVisit] = useState(false);
  const visited = () => {
    setVisit(true);
  };
  const [navbar, setNavbar] = useState(false);
  const changeBackgroundColor = () => {
    if (window.scrollY >= 54) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };
  window.addEventListener("scroll", changeBackgroundColor);

  return (
    <>
      <div>
        <nav className={navbar ? "navbar active" : "navbar"}>
          {/* <!-- LOGO --> */}
          <a href="/">
            <div className="logo">Codify Website</div>
          </a>
          {/* <!-- NAVIGATION MENU --> */}
          <ul className="nav-as">
            {/* <!-- USING CHECKBOX HACK --> */}
            <input type="checkbox" id="checkbox_toggle" />
            <label for="checkbox_toggle" className="hamburger">
              &#9776;
            </label>
            {/* <!-- NAVIGATION MENUS --> */}
            <motion.div
              className="menu"
              variants={container}
              initial="hidden"
              animate="visible"
            >
              <motion.li variants={item}>
                <a href="/">Home</a>
              </motion.li>
              <motion.li className="services" variants={item}>
                <a className={visit ? "visited-1" : "random"}>Application</a>
                <ul className="dropdown">
                  <a style={{ color: "white" }} href="/engineering">
                    <li>Engineering</li>
                  </a>
                  <a style={{ color: "white" }} href="/medical">
                    <li>Medical</li>
                  </a>
                </ul>
              </motion.li>
              <motion.li className="services" variants={item}>
                <a className="visited-2">Admit Card</a>
                <ul className="dropdown">
                  <a style={{ color: "white" }} href="/engineeringadmitcard">
                    <li>Engineering</li>
                  </a>
                  <a style={{ color: "white" }} href="/medicaladmitcard">
                    <li>Medical</li>
                  </a>
                </ul>
              </motion.li>
              <motion.li className="services" variants={item}>
                <a className="visited-3">Result</a>
                {/* <!-- DROPDOWN MENU --> */}
                <ul className="dropdown">
                  <a style={{ color: "white" }} href="/engineeringresult">
                    <li>Engineering</li>
                  </a>
                  <a style={{ color: "white" }} href="/medicalresult">
                    <li>Medical</li>
                  </a>
                </ul>
              </motion.li>
              <motion.li className="services" variants={item}>
                <a className="visited-4">Counselling</a>
                <ul className="dropdown">
                  <li>
                    <a style={{ color: "white", cursor: "pointer" }}>
                      Engineering
                    </a>
                  </li>
                  <li>
                    <a style={{ color: "white", cursor: "pointer" }}>Medical</a>
                  </li>
                </ul>
              </motion.li>
              <motion.li variants={item}>
                <a href="/" className="visited-5">
                  Contact
                </a>
              </motion.li>
              <div className="login_signup">
                {/* <Avatar className="user-img" alt="user" /> */}
                <button style={{ marginLeft: "1rem" }}>Login</button>
              </div>
            </motion.div>
          </ul>
        </nav>
      </div>
    </>
  );
}

export default ResNavbar;
