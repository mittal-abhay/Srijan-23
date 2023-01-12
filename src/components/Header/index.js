import React, { Component } from "react";
import { NavLink } from "react-router-dom";

import iit from "../../assets/Srijan'23_Logo_White1.png";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isMenuOpen: false,
    };
    this.toggleMenu = this.toggleMenu.bind(this);
  }
  toggleMenu() {
    const { isMenuOpen } = this.state;
    this.setState({ isMenuOpen: !isMenuOpen });
    if (!isMenuOpen) {
      document.body.style.overflow = "hidden";
      // document.body.style.position = "fixed";
      document.body.style.touchAction = "none";
    } else {
      document.body.style.overflowY = "scroll";
      // document.body.style.position = "relative";
      document.body.style.touchAction = "auto";
    }
  }
  render() {
    const { isMenuOpen } = this.state;
    return (
      <div
        style={{ backgroundColor: "rgba(0, 0, 0, 0.0)" }}
        className="header fixed-top"
      >
        <nav className="navbar navbar-expand-md navbar-dark">
          <NavLink to="home" exact strict>
            <a className="navbar-brand">
              <span className="helper"></span>
              <img
                src={iit}
                alt="iitism"
                style={{ width: "100px", objectFit: "contain" }}
              />
            </a>
          </NavLink>
          <div id="menuToggle">
            <input
              type="checkbox"
              checked={isMenuOpen}
              onClick={this.toggleMenu}
            />
            <span style={{ backgroundColor: "goldenrod" }}></span>
            <span style={{ backgroundColor: "goldenrod" }}></span>
            <span style={{ backgroundColor: "goldenrod" }}></span>
            <ul id="menu">
              <br />
              <li>
                <NavLink
                  className="nav-link header-link"
                  to="/home"
                  onClick={this.toggleMenu}
                >
                  HOME
                </NavLink>
              </li>
              <li>
                <NavLink
                  className="nav-link header-link"
                  to="/about-us"
                  onClick={this.toggleMenu}
                >
                  ABOUT US
                </NavLink>
              </li>
              {/* <li>
                <NavLink
                  className="nav-link header-link "
                  to="/exhibitions"
                  onClick={this.toggleMenu}
                >
                  EXHIBITIONS
                </NavLink>
              </li> */}
              {/* <li>
                <NavLink
                  className="nav-link header-link "
                  to="/workshops"
                  onClick={this.toggleMenu}
                >
                  WORKSHOPS
                </NavLink>
              </li> */}
              {/* <li>
                <NavLink
                  className="nav-link header-link "
                  to="/informal-events"
                  onClick={this.toggleMenu}
                >
                  INFORMAL EVENTS
                </NavLink>
              </li> */}
              <li>
                <NavLink
                  className="nav-link header-link "
                  to="/club-events"
                  onClick={this.toggleMenu}
                >
                  EVENTS
                </NavLink>
              </li>
              <li>
                <NavLink
                  className="nav-link header-link "
                  to="/sponsors"
                  onClick={this.toggleMenu}
                >
                  SPONSORS
                </NavLink>
              </li>
              {/* <li>
                <NavLink
                  className="nav-link header-link "
                  to="/department-events"
                  onClick={this.toggleMenu}
                >
                  DEPARTMENTAL EVENTS
                </NavLink>
              </li> */}
              {/* <li>
                <NavLink
                  className="nav-link header-link "
                  to="/login"
                  onClick={this.toggleMenu}
                >
                  LOGIN
                </NavLink>
              </li> */}
              {/* <li>
                <NavLink
                  className="nav-link header-link "
                  to="/coming-soon"
                  onClick={this.toggleMenu}
                >
                  CAP
                </NavLink>
              </li> */}
              <li>
                <NavLink
                  className="nav-link header-link "
                  to="/our-team"
                  onClick={this.toggleMenu}
                >
                  OUR TEAM
                </NavLink>
              </li>
              <li>
                <NavLink
                  className="nav-link header-link "
                  to="/Social-links"
                  onClick={this.toggleMenu}
                >
                  SOCIAL LINKS
                </NavLink>
              </li>
              {/* <li>
                <NavLink
                  className="nav-link header-link "
                  to="/guest-talks"
                  onClick={this.toggleMenu}
                >
                  GUEST TALKS
                </NavLink>
              </li> */}
              <li>
                <a
                  className="nav-link header-link "
                  href="#"
                  onClick={this.toggleMenu}
                >
                  REGISTER
                </a>
              </li>
            </ul>
          </div>
        </nav>
        <nav role="navigation"></nav>
      </div>
    );
  }
}

export default Header;
