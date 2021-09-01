import React, { useEffect, useState } from "react";
import "./Nav.css";

function Nav() {
  const [show, handleShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else handleShow(false);
    });
    return () => {
      window.removeEventListener("scroll");
    };
  }, []);

  return (
    <div className={`nav ${show && "nav__black"}`}>
      <section className="nav__left">
        <img
          className="nav__logo"
          src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
          alt="Netflix logo"
        />
        <div className="nav__list">
          <span className="nav__button button__active">Home</span>
          <span className="nav__button">TV Shows</span>
          <span className="nav__button">Movies</span>
          <span className="nav__button">New & Popular</span>
          <span className="nav__button">My List</span>
        </div>
      </section>

      <img
        className="nav__avatar"
        src="https://pbs.twimg.com/profile_images/1398399796667244549/oZeQQEzC_400x400.png"
        alt="Netflix avatar"
      />
    </div>
  );
}

export default Nav;
