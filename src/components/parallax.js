import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import classNames from "classnames";
import { Link } from "react-router-dom";
import image1 from "../assets/1.jpg";
import image2 from "../assets/0.webp";
import image3 from "../assets/Gallery3.jpg";

const styles = (theme) => ({
  container: {
    margin: "100px",
    [theme.breakpoints.down("sm")]: {
      position: "relative",
      margin: "40px",
      // right: "10px"
    },
  },
  descriptionText: {
    fontSize: "20px",
    fontFamily: '"Noto Sans", sans- serif',
  },
  images: {
    right: "-90px",
    height: "400px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    transition: "all 0.3s linear",
    padding: 0,
    position: "relative",
  },
  image1: {
    height: "60%",
    minWidth: "250px !important",
    position: "absolute",
    left: "-40px",
    opacity: 0.8,
    zIndex: 150,
    bottom: 25,
    margin: 0,
    padding: 0,
  },
  image1M: {
    marginBottom: "30px",
  },
  image2: {
    position: "relative",
    padding: 0,
    bottom: 40,
    minHeight: "100% !important",
    minWidth: "75% !important",
  },
  image2M: {},
  image3: {
    height: "70% !important",
    minWidth: "300px !important",
    position: "absolute",
    right: "-70px",
    opacity: 0.8,
    zIndex: 150,
    margin: 0,
    padding: 0,
    bottom: 0,
  },
  image3M: {},
  text: {
    minWidth: "400px",
    marginLeft: "130px",
    marginTop: "50px",
    position: "relative",
    textAlign: "center",
    padding: 0,
    zIndex: 160,
  },
});
class Parallax extends React.Component {
  constructor(props) {
    super(props);
    this.parent = React.createRef();
    this.parentOffsetTop = 0;
  }
  componentDidMount() {
    window.scrollTo(0, 0);
    this.parentOffsetTop = this.parent.current.getBoundingClientRect().top;
  }
  render() {
    const { content, classes, x } = this.props;
    console.log(classes);
    console.log(content);
    return (
      <div className={classNames(classes.container, "container")}>
        <div className="row">
          <div
            ref={this.parent}
            className={
              window.innerWidth > 991
                ? classNames(classes.images, "col-6 ")
                : "col-12 "
            }
          >
            <img
              style={
                window.innerWidth > 991
                  ? {
                      transform: `translateY(${
                        -(-this.parentOffsetTop + x) / 8
                      }px)`,
                    }
                  : null
              }
              src={image1}
              alt="Loading..."
              className={
                window.innerWidth > 991
                  ? classNames(
                      classes.image1,
                      "col-offset-2 col-8 col-md-2  rounded borderImgWrapper  ",
                      "image1"
                    )
                  : classNames(
                      classes.image1M,
                      "col-12  rounded borderImgWrapper  "
                    )
              }
            />
            {window.innerWidth > 991 ? (
              <img
                style={
                  window.innerWidth > 991
                    ? {
                        transform: `translateY(${
                          (-this.parentOffsetTop + x) / 16
                        }px)`,
                      }
                    : null
                }
                src={image2}
                alt="Loading..."
                className={
                  window.innerWidth > 600
                    ? classNames(
                        classes.image2,
                        "col-offset-2 col-8 col-md-3  rounded borderImgWrapper  ",
                        "image2"
                      )
                    : classNames(
                        classes.image2M,
                        "col-4  rounded borderImgWrapper"
                      )
                }
              />
            ) : null}
            {window.innerWidth > 991 ? (
              <img
                style={
                  window.innerWidth > 991
                    ? {
                        transform: `translateY(${
                          -(-this.parentOffsetTop + x) / 2
                        }px)`,
                      }
                    : null
                }
                src={image3}
                alt="Loading..."
                className={
                  window.innerWidth > 991
                    ? classNames(
                        classes.image3,
                        "col-offset-2 col-8 col-md-2  rounded borderImgWrapper  ",
                        "image3  rounded borderImgWrapper  "
                      )
                    : classNames(
                        classes.image3M,
                        "col-4  rounded borderImgWrapper  "
                      )
                }
              />
            ) : null}
          </div>
          <div
            className={
              window.innerWidth > 991
                ? classNames(classes.text, "col-12 col-md-3 opaque")
                : classNames("col-12 opaque")
            }
            style={
              window.innerWidth < 1200 && window.innerWidth > 991
                ? { textAlign: "center", marginLeft: "0px" }
                : { textAlign: "center" }
            }
          >
            <Link to={content.link} className={" title"}>
              <h1 className="title">{content.heading}</h1>
            </Link>
            <p
              className={classes.descriptionText}
              style={{ textAlign: "left" }}
            >
              {content.description}
            </p>
          </div>
        </div>
      </div>
    );
  }
}

Parallax.propTypes = {
  classes: PropTypes.object.isRequired,
  content: PropTypes.object.isRequired,
  x: PropTypes.number.isRequired,
};
export default withStyles(styles)(Parallax);
