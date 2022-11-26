import "./Sidebar.css";

import {
  FaHamburger,
  FaTwitter,
  FaGithub,
  FaAngleDoubleLeft,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import { useRef } from "react";

export default function Sidebar() {
  const sidebarRef = useRef();
  const backdropRef = useRef();
  const toggleSidebar = () => {
    const sidebar = sidebarRef.current;
    const backdrop = backdropRef.current;
    sidebar.classList.toggle("sidebar--open");
    backdrop.classList.toggle("backdrop--visible");
  };

  return (
    <>
      <div className="backdrop" ref={backdropRef} onClick={toggleSidebar} />

      <div
        className="hamburger-menu"
        id="hamburger-menu"
        data-testid="hamburger-menu"
      >
        <FaHamburger onClick={toggleSidebar} />
      </div>
      <div className="sidebar" ref={sidebarRef}>
        <button className="close-sidebar">
          <FaAngleDoubleLeft onClick={toggleSidebar} />
        </button>
        <nav className="modules">
          <Link to={"/introduction"} onClick={toggleSidebar}>
            Introduction
          </Link>
          <Link to={"/introduction2"} onClick={toggleSidebar}>
            Intro 2
          </Link>
        </nav>
        <div className="socials">
          <a href="https://github.com/kurekszymon/" target="_blank">
            <FaGithub />
          </a>
          <a href="https://twitter.com/knooreck/" target="_blank">
            <FaTwitter />
          </a>
        </div>
      </div>
    </>
  );
}
