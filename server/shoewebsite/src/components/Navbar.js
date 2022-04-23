import { useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "./img/logo.jpeg";
import avatar from "./img/people/avatar.jpg";
import "./style.css";

export default function Navbar() {
  const navbarRef = useRef();
  const { pathname } = useLocation();

  function openNavbar() {
    navbarRef.current?.classList.add("active");
  }
  function closeNavbar() {
    navbarRef.current?.classList.remove("active");
  }

  useEffect(() => {
    closeNavbar();
  }, [pathname]);

  return (
    <section id="header">
      <div>
        <img
          src={logo}
          className="logo"
          alt="logo"
          height="80px"
          width="150px"
        />
      </div>

      <div>
        <ul id="navbar" ref={navbarRef}>
          <li>
            <Link className={pathname === "/" ? "active" : ""} to="/">
              Home
            </Link>
          </li>
          <li>
            <Link className={pathname === "/shop" ? "active" : ""} to="/shop">
              Shop
            </Link>
          </li>
          <li>
            <Link className={pathname === "/blog" ? "active" : ""} to="/blog">
              Blog
            </Link>
          </li>
          <li>
            <Link className={pathname === "/about" ? "active" : ""} to="/about">
              About
            </Link>
          </li>
          <li>
            <Link
              className={pathname === "/contact" ? "active" : ""}
              to="/contact"
            >
              Contact
            </Link>
          </li>
          <li id="lg-bag">
            <Link to="/cart" className={pathname === "/cart" ? "active" : ""}>
              <i className="far fa-shopping-bag"></i>
            </Link>
          </li>

          <Link to="/login">
            <img src={avatar} alt="Avatar" className="avatar" />
          </Link>

          <Link to="#" id="close" onClick={closeNavbar}>
            <i className="far fa-times"></i>
          </Link>
        </ul>
      </div>
      <div id="mobile">
        <Link to="/cart">
          <i className="far fa-shopping-bag"></i>
        </Link>
        <i id="bar" className="fas fa-outdent" onClick={openNavbar}></i>
      </div>
    </section>
  );
}
