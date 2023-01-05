import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Footer from "../Footer";
import HomeHeader from "../HomeHeader";
import Parallax from "../parallax";
import Parallax2 from "../parallax2";
import ParallaxM from "../parallaxM";
import { HomeContent } from "../../data/Content";
import bg from "../../assets/bg.jpg";
import * as THREE from "three";
import "./styles.css";

import { Helmet } from "react-helmet";
// import Safe from "react-safe"

let max_offset, initial_offset;

const styles = (theme) => ({
  logo: {
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  logoImg: {
    transition: "all 3s ease",
    position: "fixed",
    transform: "translate(-50 %, -50 %)",
  },
  parallax: {
    marginTop: "20px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    [theme.breakpoints.down("sm")]: {
      marginTop: "0px",
    },
  },
  moon: {
    display: "flex",
    zIndex: 999,
    height: "300px",
    width: "600px",
    bottom: 20,
    position: "fixed",
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
  },
});
class Home extends Component {
  constructor(props) {
    super(props);
    this.vantaRef = React.createRef();
    if (window.innerHeight < 450) {
      initial_offset = 110;
      max_offset = 130;
    } else if (window.innerHeight < 600) {
      initial_offset = 80;
      max_offset = 90;
    } else if (window.innerHeight < 670) {
      initial_offset = 58;
      max_offset = 68;
    } else if (window.innerHeight < 745) {
      initial_offset = 54;
      max_offset = 64;
    } else if (window.innerHeight < 850) {
      initial_offset = 50;
      max_offset = 56;
    } else if (window.innerHeight < 910) {
      initial_offset = 47;
      max_offset = 52;
    } else {
      initial_offset = 38;
      max_offset = 43;
    }
    this.state = {
      offset: initial_offset,
      header: false,
      x: 0,
      previous_scroll: 0,
    };
    // console.log(window.innerHeight);
    this.homeRef = React.createRef();
  }
  componentDidMount() {
    this.props.hideLogo();
    window.scrollTo(0, 0);
    console.log(window.innerWidth);

    window.addEventListener("scroll", this.handleScroll);
    if (window.innerHeight < 670) document.body.style.paddingBottom = "38vh";
    else document.body.style.paddingBottom = "30vh";
  }
  componentWillUnmount() {
    document.body.style.paddingBottom = "0";
    if (this.vantaEffect) this.vantaEffect.destroy();
    window.scrollTo(0, 0);
    window.removeEventListener("scroll", this.handleScroll);
  }

  handleScroll = (event) => {
    let scrollTop = window.pageYOffset;
    const { offset, header, previous_scroll } = this.state;
    if (window.innerWidth > 800) this.setState({ x: window.scrollY });
    if (scrollTop > window.innerHeight / 10) {
      if (!header) {
        this.setState({
          header: true,
        });
        if (this.homeRef.current) {
          this.homeRef.current.classList.toggle("logo-home");
          this.homeRef.current.classList.toggle("logo-header");
        }
      }
      if (offset <= max_offset) {
        this.setState({
          offset: max_offset,
        });
      }
    } else {
      if (header) {
        this.setState({
          header: false,
        });
        if (this.homeRef.current) {
          this.homeRef.current.classList.toggle("logo-header");
          this.homeRef.current.classList.toggle("logo-home");
        }
      }
      if (scrollTop <= previous_scroll) {
        this.setState({
          offset:
            max_offset -
            ((max_offset - initial_offset) *
              (window.innerHeight / 10 - scrollTop)) /
              (window.innerHeight / 10),
        });
      } else {
        this.setState({
          offset:
            initial_offset +
            ((max_offset - initial_offset) * scrollTop) /
              (window.innerHeight / 10),
        });
      }
    }
    if (previous_scroll < window.innerHeight / 10 + 5)
      this.setState({ previous_scroll: scrollTop });
  };

  scrollDown() {
    window.scrollTo(0, window.innerHeight);
  }

  render() {
    const { classes } = this.props;
    const { offset, x } = this.state;
    return (
      <div>
        <Helmet>
          <title>Srijan</title>
          <link rel="shortcut icon" href="./favicon.ico" />
          <meta
            name="description"
            content="srijan is one of the largest Techno-management fest of IIT (ISM) Dhanbad in Eastern India with a massive participation of more than 2000 participants from 300 different colleges and institutes, who stalk the grounds of ISM to prove their technical expertise."
          />
          <meta
            name="keywords"
            content="srijan,srijan 22,srijan 2022,srijan 2k22,srijan iit,srijan iit (ism) dhanbad,srijan iit ism,srijan techfest,srijan tecnical fest, srijan 2022-2020, srijan tech fest 22,srijan tech fest 2022,iit ism, iit (ism) DHANBAD, events, exhibition, Workshops,Techno-management fest, iit ism dhanbad techfest, iit dhanbad techfest,"
          />
          <meta property="og:url" content="https://www.srijan.in/" />
        </Helmet>
        {/* <Safe.script async src="https://www.googletagmanager.com/gtag/js?id=G-6WVX154NPV"></Safe.script>
        <Safe.script>
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments)};
          gtag('js', new Date());

          gtag('config', 'G-6WVX154NPV');
        </Safe.script> */}
        {}
        {/* <section id="scroll_down" className="demo">
          <a
            onClick={() => {
              this.scrollDown();
            }}
          >
            <span></span>
            <span></span>
            <span></span>
          </a>
        </section> */}
        <HomeHeader />
        {/* <div className={classes.logo} ref={this.vantaRef}> */}
        {/* <img
            src="../images/srijanLogo.jpeg"
            className={`logo logo-home`}
            ref={this.homeRef}
            alt={" "}
          /> */}
        {/* <div className={`logo logo-home`} ref={this.homeRef}> */}
        {/* <canvas id="graphics" />
        <div className="herosection">
          <h1>SRIJAN</h1>
        </div> */}
        {/* <canvas id="graphics" /> */}

        <div id="stars"></div>
        <div id="stars2"></div>
        <div id="stars3"></div>

        <div className="patterns">
          <svg width="100%" height="100%">
            <text x="50%" y="50%" text-anchor="middle">
              SRIJAN'23
            </text>
          </svg>
        </div>
        <div className="glow">
          <h2>The Carnival of Reminiscence......</h2>
        </div>

        {/* </div> */}
        {/* {
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "100vw",
            }}
          >
            <img
              src="../images/landing.png"
              // src={window.location.origin + "/images/moon-fin.png"}
              className={classes.moon}
              alt=" "
              style={{ transform: "translateY(" + offset + "px" }}
            />
          </div>
        } */}

        <div className={classes.parallax + " gradientBg mt-0"}>
          {HomeContent.map((content, id) => {
            if (window.innerWidth < 992)
              return <ParallaxM key={id.toString()} content={content} />;
            else if (id % 2 === 0)
              return <Parallax x={x} key={id.toString()} content={content} />;
            else
              return window.innerWidth >= 1200 ? (
                <Parallax2 x={x} key={id.toString()} content={content} />
              ) : (
                <Parallax x={x} key={id.toString()} content={content} />
              );
          })}

          <div class="btn-cont">
            <a
              class="btn"
              href="https://docs.google.com/forms/d/e/1FAIpQLScodg_UYACMBMLkUaN-FwXrmQDDGuq9K0-KPRl3AKRS7FoPoQ/viewform?usp=sf_link"
            >
              REGISTER HERE
              <span class="line-1"></span>
              <span class="line-2"></span>
              <span class="line-3"></span>
              <span class="line-4"></span>
            </a>
          </div>
        </div>
        <br />
        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css"
        />
        {/* <a href="https://api.whatsapp.com/send?phone=9835063191" class="float" target="_blank">
          <i class="fa fa-whatsapp my-float"></i>
        </a> */}
        <Footer />
      </div>
    );
  }
}

Home.propTypes = {
  classes: PropTypes.object.isRequired,
};
export default withStyles(styles)(Home);
