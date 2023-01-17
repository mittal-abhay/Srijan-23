import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Header from "../Header";
import Homeabout from "../HomeAbout/Homeabout.jsx";
import "./styles.css";
import { Helmet } from "react-helmet";
import PastPerformers from "../pastPerformers/PastPerformers";
import AnimatedBg from "../Animated_Bg/Animated_Bg.jsx";
import Loading from "../Loading/Loading";
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
      loading: true,
    };
    this.homeRef = React.createRef();
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({
        loading: false,
      });
    }, 3000);
    this.props.hideLogo();
    window.scrollTo(0, 0);

    window.addEventListener("scroll", this.handleScroll);
    if (window.innerHeight < 670) document.body.style.paddingBottom = "18vh";
    else document.body.style.paddingBottom = "10vh";
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
    const { loading } = this.state;
    if (typeof loading == "undefined" || loading == null || loading == false)
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
          <AnimatedBg />
          <Header />
          <div className="patterns">
            <svg width="100%">
              <text x="50%" y="50%" textAnchor="middle">
                SRIJAN'23
              </text>
            </svg>
            <div className="glow">
              <h2>Carnival of Reminiscence......</h2>
            </div>
          </div>
          <div className="btn-cont">
            <a className="btn" href="#">
              REGISTER HERE
              <span className="line-1"></span>
              <span className="line-2"></span>
              <span className="line-3"></span>
              <span className="line-4"></span>
            </a>
          </div>
          <Homeabout />
          <h1
            style={{
              textAlign: "center",
              marginTop: "60px",
              color: "white",
              fontSize: "52px",
              fontFamily: "'Montserrat', sans-serif",
            }}
            className="title"
          >
            PAST&nbsp;&nbsp;PERFORMERS
          </h1>
          <PastPerformers />

          <link
            rel="stylesheet"
            href="https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css"
          />
        </div>
      );
    return <Loading />;
  }
}

Home.propTypes = {
  classes: PropTypes.object.isRequired,
};
export default withStyles(styles)(Home);
