import React, { useState } from "react";
import { scroller } from "react-scroll";
import { useNavigate } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link as RouterLink } from "react-router-dom";
import logo from "/logo.png";

const Navbar = () => {
  const [show, setShow] = useState(false);
  const navigate = useNavigate();

  const handleNavigation = (section) => {
    console.log({ section });
    if (window.location.pathname === "/register" || "/login") {
      navigate("/home");
      setTimeout(() => {
        scrollToSection(section);
      }, 500); // delay to ensure page load
    } else {
      scrollToSection(section);
    }
  };
  const scrollToSection = (section) => {
    scroller.scrollTo(section, {
      duration: 500,
      delay: 0,
      smooth: "easeInOutQuart",
    });
  };
  return (
    <nav>
      <div className="flex items-center">
      <img src="/logo.png" alt="Logo" className="w-[100px] h-[100px] " />
      <div className="font-alexBrush text-[#da5e9c] text-3xl">Glamour</div>
      </div>
      <div className={show ? "navLinks showmenu" : "navLinks"}>
        <div className="links">
          <a onClick={() => handleNavigation("hero")}>HOME</a>
          <a onClick={() => handleNavigation("services")}>SERVICES</a>
          <a onClick={() => handleNavigation("about")}>ABOUT</a>
          <a onClick={() => handleNavigation("contact")}>CONTACT</a>
          {JSON.parse(localStorage.getItem("user"))?.isAdmin ? (
            <RouterLink style={{ color: "black" }} to="/admin">
              DASHBOARD
            </RouterLink>
          ) : null}
          {!localStorage.getItem("token") ? (
            <RouterLink style={{ color: "black" }} to="/login">
              LOGIN
            </RouterLink>
          ) : (
            <button
              onClick={() => {
                localStorage.removeItem("user");
                localStorage.removeItem("token");
                navigate("/login");
              }}
            >
              LOGOUT
            </button>
          )}
        </div>
      </div>
      <div className="hamburger" onClick={() => setShow(!show)}>
        <GiHamburgerMenu />
      </div>
    </nav>
  );
};

export default Navbar;
