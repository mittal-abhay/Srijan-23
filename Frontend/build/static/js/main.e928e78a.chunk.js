(window.webpackJsonpconcetto = window.webpackJsonpconcetto || []).push([
  [0],
  {
    107: function (e, t, n) {},
    116: function (e, t, n) {},
    120: function (e, t, n) {},
    123: function (e, t, n) {},
    124: function (e, t, n) {},
    125: function (e, t, n) {},
    126: function (e, t, n) {},
    127: function (e, t, n) {},
    134: function (e, t, n) {},
    135: function (e, t, n) {
      "use strict";
      n.r(t);
      var a,
        o,
        r = n(0),
        i = n.n(r),
        c = n(34),
        s = n.n(c),
        l = n(21),
        m = n.n(l),
        d = n(39),
        u = n(16),
        h = n(2),
        p = n(3),
        g = n(4),
        f = n(1),
        b = n(5),
        v = n(9),
        E = n(18),
        w = n(19),
        y =
          (n(99),
          n(104),
          (function (e) {
            function t(e) {
              var n;
              return (
                Object(h.a)(this, t),
                ((n = Object(g.a)(this, Object(f.a)(t).call(this, e))).toggle =
                  n.toggle.bind(Object(w.a)(n))),
                (n.state = { tooltipOpen: !1 }),
                n
              );
            }
            return (
              Object(b.a)(t, e),
              Object(p.a)(t, [
                {
                  key: "toggle",
                  value: function () {
                    this.setState({ tooltipOpen: !this.state.tooltipOpen });
                  },
                },
                {
                  key: "render",
                  value: function () {
                    var e = this.props.classes;
                    return i.a.createElement(
                      "div",
                      { className: e.socialMedia },
                      i.a.createElement(
                        "a",
                        {
                          href: "https://www.facebook.com/concettoiitdhanbad/",
                          className: e.a,
                        },
                        i.a.createElement("img", {
                          src: "https://img.icons8.com/fluency/48/000000/facebook-new.png",
                        })
                      ),
                      i.a.createElement(
                        "a",
                        {
                          href: "https://www.instagram.com/concetto.iitism/",
                          className: e.a,
                        },
                        i.a.createElement("img", {
                          src: "https://img.icons8.com/fluency/48/000000/instagram-new.png",
                        })
                      ),
                      i.a.createElement(
                        "a",
                        {
                          href: "https://www.linkedin.com/company/concetto-iitism-dhanbad/",
                          className: e.a,
                        },
                        i.a.createElement("img", {
                          src: "https://img.icons8.com/fluency/48/000000/linkedin-2.png",
                        })
                      ),
                      i.a.createElement(
                        "a",
                        {
                          href: "https://play.google.com/store/apps/details?id=com.concetto.concetto",
                          target: "_blank",
                          rel: "noopener noreferrer",
                          className: e.a,
                          id: "app-icon",
                        },
                        i.a.createElement("img", {
                          src: "https://img.icons8.com/fluency/48/000000/google-play.png",
                        })
                      )
                    );
                  },
                },
              ]),
              t
            );
          })(i.a.Component)),
        k = Object(E.a)(function (e) {
          return {
            socialMedia: {
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            },
            a: Object(v.a)(
              {
                height: "40px",
                width: "40px",
                margin: "5px",
                marginRight: "20px",
                marginLeft: "20px",
                marginBottom: "10px",
                borderRadius: "20px",
                textAlign: "center",
                fontSize: "30px",
                lineHeight: "45px",
                zIndex: 205,
                transition: "all 0.3s linear",
                "&:hover": { fontSize: "36px" },
              },
              e.breakpoints.down("sm"),
              { margin: "10px", marginBottom: "6px" }
            ),
          };
        })(y),
        x = n(13),
        C = (function (e) {
          function t(e) {
            var n;
            return (
              Object(h.a)(this, t),
              ((n = Object(g.a)(this, Object(f.a)(t).call(this, e))).state = {
                isMenuOpen: !1,
              }),
              (n.toggleMenu = n.toggleMenu.bind(Object(w.a)(n))),
              n
            );
          }
          return (
            Object(b.a)(t, e),
            Object(p.a)(t, [
              {
                key: "toggleMenu",
                value: function () {
                  var e = this.state.isMenuOpen;
                  this.setState({ isMenuOpen: !e }),
                    e
                      ? (window.scrollBy(0, -window.innerHeight / 10 - 1),
                        (document.body.style.overflowY = "scroll"),
                        (document.body.style.touchAction = "auto"))
                      : (window.scrollBy(0, window.innerHeight / 10 + 1),
                        (document.body.style.overflow = "hidden"),
                        (document.body.style.touchAction = "none"));
                },
              },
              {
                key: "render",
                value: function () {
                  var e = this.state.isMenuOpen;
                  return (
                    console.log(
                      window.innerWidth,
                      window.innerWidth < 800 &&
                        window.pageYOffset > window.innerHeight
                    ),
                    i.a.createElement(
                      "div",
                      {
                        className: "header fixed-top",
                        style:
                          window.innerWidth < 800 &&
                          window.pageYOffset > window.innerHeight
                            ? { backgroundColor: "rgba(0, 0, 0, 0.5)" }
                            : null,
                      },
                      i.a.createElement(
                        "nav",
                        { className: "navbar navbar-expand-md navbar-dark" },
                        i.a.createElement(
                          "a",
                          { className: "navbar-brand", href: "home" },
                          i.a.createElement("span", { className: "helper" })
                        ),
                        i.a.createElement(
                          "div",
                          { id: "menuToggle" },
                          i.a.createElement("input", {
                            type: "checkbox",
                            checked: e,
                            onClick: this.toggleMenu,
                          }),
                          i.a.createElement("span", null),
                          i.a.createElement("span", null),
                          i.a.createElement("span", null),
                          i.a.createElement(
                            "ul",
                            { id: "menu" },
                            i.a.createElement("br", null),
                            i.a.createElement(
                              "li",
                              null,
                              i.a.createElement(
                                x.c,
                                {
                                  className: "nav-link header-link ",
                                  to: "/home",
                                  onClick: this.toggleMenu,
                                },
                                "HOME"
                              )
                            ),
                            i.a.createElement(
                              "li",
                              null,
                              i.a.createElement(
                                x.c,
                                {
                                  className: "nav-link header-link ",
                                  to: "/about-us",
                                  onClick: this.toggleMenu,
                                },
                                "ABOUT US"
                              )
                            ),
                            i.a.createElement(
                              "li",
                              null,
                              i.a.createElement(
                                x.c,
                                {
                                  className: "nav-link header-link ",
                                  to: "/club-events",
                                  onClick: this.toggleMenu,
                                },
                                "EVENTS"
                              )
                            ),
                            i.a.createElement(
                              "li",
                              null,
                              i.a.createElement(
                                x.c,
                                {
                                  className: "nav-link header-link ",
                                  to: "/sponsors",
                                  onClick: this.toggleMenu,
                                },
                                "SPONSORS"
                              )
                            ),
                            i.a.createElement(
                              "li",
                              null,
                              i.a.createElement(
                                x.c,
                                {
                                  className: "nav-link header-link ",
                                  to: "/our-team",
                                  onClick: this.toggleMenu,
                                },
                                "OUR TEAM"
                              )
                            ),
                            i.a.createElement(
                              "li",
                              null,
                              i.a.createElement(
                                x.c,
                                {
                                  className: "nav-link header-link ",
                                  to: "/guest-talks",
                                  onClick: this.toggleMenu,
                                },
                                "GUEST TALKS"
                              )
                            ),
                            i.a.createElement(
                              "li",
                              null,
                              i.a.createElement(
                                "a",
                                {
                                  className: "nav-link header-link ",
                                  href: "https://docs.google.com/forms/d/e/1FAIpQLScodg_UYACMBMLkUaN-FwXrmQDDGuq9K0-KPRl3AKRS7FoPoQ/viewform?usp=sf_link",
                                  onClick: this.toggleMenu,
                                },
                                "REGISTER"
                              )
                            )
                          )
                        )
                      ),
                      i.a.createElement("nav", { role: "navigation" })
                    )
                  );
                },
              },
            ]),
            t
          );
        })(r.Component),
        I = n(15),
        j = n.n(I),
        T = (function (e) {
          function t(e) {
            var n;
            return (
              Object(h.a)(this, t),
              ((n = Object(g.a)(this, Object(f.a)(t).call(this, e))).parent =
                i.a.createRef()),
              (n.parentOffsetTop = 0),
              n
            );
          }
          return (
            Object(b.a)(t, e),
            Object(p.a)(t, [
              {
                key: "componentDidMount",
                value: function () {
                  window.scrollTo(0, 0),
                    (this.parentOffsetTop =
                      this.parent.current.getBoundingClientRect().top);
                },
              },
              {
                key: "render",
                value: function () {
                  var e = this.props,
                    t = e.content,
                    n = e.classes,
                    a = e.x;
                  return i.a.createElement(
                    "div",
                    { className: j()(n.container, "container") },
                    i.a.createElement(
                      "div",
                      { className: "row" },
                      i.a.createElement(
                        "div",
                        {
                          ref: this.parent,
                          className:
                            window.innerWidth > 991
                              ? j()(n.images, "col-6 ")
                              : "col-12 ",
                        },
                        i.a.createElement("img", {
                          style:
                            window.innerWidth > 991
                              ? {
                                  transform: "translateY(".concat(
                                    -(-this.parentOffsetTop + a) / 8,
                                    "px)"
                                  ),
                                }
                              : null,
                          src: t.image1,
                          alt: "Loading...",
                          className:
                            window.innerWidth > 991
                              ? j()(
                                  n.image1,
                                  "col-offset-2 col-8 col-md-2  rounded borderImgWrapper  ",
                                  "image1"
                                )
                              : j()(
                                  n.image1M,
                                  "col-12  rounded borderImgWrapper  "
                                ),
                        }),
                        window.innerWidth > 991
                          ? i.a.createElement("img", {
                              style:
                                window.innerWidth > 991
                                  ? {
                                      transform: "translateY(".concat(
                                        (-this.parentOffsetTop + a) / 16,
                                        "px)"
                                      ),
                                    }
                                  : null,
                              src: t.image2,
                              alt: "Loading...",
                              className:
                                window.innerWidth > 600
                                  ? j()(
                                      n.image2,
                                      "col-offset-2 col-8 col-md-3  rounded borderImgWrapper  ",
                                      "image2"
                                    )
                                  : j()(
                                      n.image2M,
                                      "col-4  rounded borderImgWrapper  "
                                    ),
                            })
                          : null,
                        window.innerWidth > 991
                          ? i.a.createElement("img", {
                              style:
                                window.innerWidth > 991
                                  ? {
                                      transform: "translateY(".concat(
                                        -(-this.parentOffsetTop + a) / 2,
                                        "px)"
                                      ),
                                    }
                                  : null,
                              src: t.image3,
                              alt: "Loading...",
                              className:
                                window.innerWidth > 991
                                  ? j()(
                                      n.image3,
                                      "col-offset-2 col-8 col-md-2  rounded borderImgWrapper  ",
                                      "image3  rounded borderImgWrapper  "
                                    )
                                  : j()(
                                      n.image3M,
                                      "col-4  rounded borderImgWrapper  "
                                    ),
                            })
                          : null
                      ),
                      i.a.createElement(
                        "div",
                        {
                          className:
                            window.innerWidth > 991
                              ? j()(n.text, "col-12 col-md-3 homeCard")
                              : j()("col-12 homeCard"),
                          style:
                            window.innerWidth < 1200 && window.innerWidth > 991
                              ? { textAlign: "center", marginLeft: "0px" }
                              : { textAlign: "center" },
                        },
                        i.a.createElement(
                          x.b,
                          { to: t.link, className: " title" },
                          i.a.createElement(
                            "h1",
                            { className: "title" },
                            t.heading
                          )
                        ),
                        i.a.createElement(
                          "p",
                          { className: n.descriptionText },
                          t.description
                        )
                      )
                    )
                  );
                },
              },
            ]),
            t
          );
        })(i.a.Component),
        N = Object(E.a)(function (e) {
          return {
            container: Object(v.a)(
              { margin: "100px" },
              e.breakpoints.down("sm"),
              { position: "relative", margin: "40px" }
            ),
            descriptionText: {
              fontSize: "14px",
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
            image1M: { marginBottom: "30px" },
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
          };
        })(T),
        O = (function (e) {
          function t(e) {
            var n;
            return (
              Object(h.a)(this, t),
              ((n = Object(g.a)(this, Object(f.a)(t).call(this, e))).parent =
                i.a.createRef()),
              (n.parentOffsetTop = 0),
              n
            );
          }
          return (
            Object(b.a)(t, e),
            Object(p.a)(t, [
              {
                key: "componentDidMount",
                value: function () {
                  window.scrollTo(0, 0),
                    (this.parentOffsetTop =
                      this.parent.current.getBoundingClientRect().top);
                },
              },
              {
                key: "render",
                value: function () {
                  var e = this.props,
                    t = e.content,
                    n = e.classes,
                    a = e.x;
                  return i.a.createElement(
                    "div",
                    { className: j()(n.container, "container") },
                    i.a.createElement(
                      "div",
                      { className: "row" },
                      i.a.createElement(
                        "div",
                        {
                          className:
                            window.innerWidth > 600
                              ? j()(n.text, "col-12 col-md-3 homeCard")
                              : j()("col-12 col-md-3 homeCard"),
                          style: { textAlign: "center" },
                        },
                        i.a.createElement(
                          x.b,
                          { to: t.link, className: " title" },
                          i.a.createElement(
                            "h1",
                            { className: "title" },
                            t.heading
                          )
                        ),
                        i.a.createElement(
                          "p",
                          { className: n.descriptionText },
                          t.description
                        )
                      ),
                      i.a.createElement(
                        "div",
                        {
                          ref: this.parent,
                          className:
                            window.innerWidth > 600
                              ? j()(n.images, "col-6")
                              : "col-12",
                        },
                        i.a.createElement("img", {
                          style:
                            window.innerWidth > 800
                              ? {
                                  transform: "translateY(".concat(
                                    -(-this.parentOffsetTop + a) / 8,
                                    "px)"
                                  ),
                                }
                              : null,
                          src: t.image1,
                          alt: "Loading...",
                          className:
                            window.innerWidth > 600
                              ? j()(
                                  n.image1,
                                  "col-offset-2 col-8 col-md-2  rounded borderImgWrapper  ",
                                  "image1"
                                )
                              : j()(
                                  n.image1M,
                                  "col-4  rounded borderImgWrapper  "
                                ),
                        }),
                        i.a.createElement("img", {
                          style:
                            window.innerWidth > 800
                              ? {
                                  transform: "translateY(".concat(
                                    (-this.parentOffsetTop + a) / 16,
                                    "px)"
                                  ),
                                }
                              : null,
                          src: t.image2,
                          alt: "Loading...",
                          className:
                            window.innerWidth > 600
                              ? j()(
                                  n.image2,
                                  "col-offset-2 col-8 col-md-3  rounded borderImgWrapper  ",
                                  "image2"
                                )
                              : j()(
                                  n.image2M,
                                  "col-4  rounded borderImgWrapper  "
                                ),
                        }),
                        i.a.createElement("img", {
                          style:
                            window.innerWidth > 800
                              ? {
                                  transform: "translateY(".concat(
                                    -(-this.parentOffsetTop + a) / 2,
                                    "px)"
                                  ),
                                }
                              : null,
                          src: t.image3,
                          alt: "Loading...",
                          className:
                            window.innerWidth > 600
                              ? j()(
                                  n.image3,
                                  "col-offset-2 col-8 col-md-2  rounded borderImgWrapper  ",
                                  "image3"
                                )
                              : j()(
                                  n.image3M,
                                  "col-4  rounded borderImgWrapper  "
                                ),
                        })
                      )
                    )
                  );
                },
              },
            ]),
            t
          );
        })(i.a.Component),
        S = Object(E.a)(function (e) {
          return {
            container: { position: "relative", margin: "100px", right: "60px" },
            descriptionText: {
              fontSize: "14px",
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
              left: "-100px",
              opacity: 0.8,
              zIndex: 150,
              bottom: 25,
              margin: 0,
              padding: 0,
            },
            image1M: {},
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
              right: "-10px",
              opacity: 0.8,
              zIndex: 150,
              margin: 0,
              padding: 0,
              bottom: 0,
            },
            image3M: {},
            text: {
              minWidth: "400px",
              marginLeft: "160px",
              marginTop: "50px",
              position: "relative",
              textAlign: "center",
              padding: 0,
              zIndex: 160,
            },
          };
        })(O),
        M =
          (n(107),
          (function (e) {
            function t(e) {
              return (
                Object(h.a)(this, t),
                Object(g.a)(this, Object(f.a)(t).call(this, e))
              );
            }
            return (
              Object(b.a)(t, e),
              Object(p.a)(t, [
                {
                  key: "componentDidMount",
                  value: function () {
                    window.scrollTo(0, 0);
                  },
                },
                {
                  key: "render",
                  value: function () {
                    var e = this.props,
                      t = e.content,
                      n = e.classes;
                    return i.a.createElement(
                      "div",
                      { className: j()(n.container, "container") },
                      i.a.createElement(
                        "div",
                        { className: "row" },
                        i.a.createElement(
                          "div",
                          { className: j()("slider", "col-12") },
                          i.a.createElement("img", {
                            src: t.image1,
                            alt: "Loading...",
                            className: j()(
                              "image1M",
                              n.image,
                              "col-12 rounded"
                            ),
                          }),
                          i.a.createElement("img", {
                            src: t.image2,
                            alt: "Loading...",
                            className: j()(
                              "image2M",
                              n.image,
                              "col-12 rounded"
                            ),
                          }),
                          i.a.createElement("img", {
                            src: t.image3,
                            alt: "Loading...",
                            className: j()(
                              "image3M",
                              n.image,
                              "col-12 rounded"
                            ),
                          })
                        ),
                        i.a.createElement(
                          "div",
                          {
                            className: j()("col-12 homeCard"),
                            style: { textAlign: "center" },
                          },
                          i.a.createElement(
                            x.b,
                            { to: t.link, className: " title" },
                            i.a.createElement(
                              "h1",
                              {
                                style: { color: "lightblue" },
                                className: "title",
                              },
                              t.heading
                            )
                          ),
                          i.a.createElement(
                            "p",
                            { className: n.descriptionText },
                            t.description
                          )
                        )
                      )
                    );
                  },
                },
              ]),
              t
            );
          })(i.a.Component)),
        A = Object(E.a)(function (e) {
          var t;
          return {
            container: {
              position: "relative",
              margin: "40px",
              width: "100vw",
              overflowX: "hidden",
            },
            descriptionText: {
              fontSize: "14px",
              fontFamily: '"Noto Sans", sans- serif',
            },
            image:
              ((t = {
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                position: "absolute",
                objectFit: "contain,cover",
                objectPosition: "center",
                overflow: "hidden",
                height: "40vh",
                width: "100%",
              }),
              Object(v.a)(t, e.breakpoints.up("sm"), { height: "55vh" }),
              Object(v.a)(t, e.breakpoints.up("md"), { height: "55vh" }),
              t),
          };
        })(M),
        z = [
          {
            link: "about-us",
            heading: "ABOUT US",
            image1:
              "https://concetto-front.s3.ap-south-1.amazonaws.com/about1.jpg",
            image2:
              "https://concetto-front.s3.ap-south-1.amazonaws.com/about2.jpg",
            image3:
              "https://concetto-front.s3.ap-south-1.amazonaws.com/about3.jpg",
            description:
              "concetto-2022, the annual Techno-Management fest of IIT (ISM) Dhanbad will be organized from 21th to 23th October 2022, where every year, thousands of participants from all across the country come to compete in the largest techno-management fest of eastern India. Participants show their technical and management skills on one common platform, concetto.",
          },
          {
            link: "club-events",
            heading: "CLUB EVENTS",
            image1:
              "https://concetto-front.s3.ap-south-1.amazonaws.com/club1.jpg",
            image2:
              "https://concetto-front.s3.ap-south-1.amazonaws.com/club2.jpg",
            image3:
              "https://concetto-front.s3.ap-south-1.amazonaws.com/club3.jpg",
            description:
              "Organized by the various clubs of IIT (ISM) Dhanbad, are the attraction of concetto'22. Having a special combination of management and technical prowess, club events provide a platform to budding entrepreneurs to showcase their skills and to prove their mettle among the very best in the field.",
          },
          {
            link: "department-events",
            heading: "DEPARTMENTAL EVENTS",
            image1:
              "https://concetto-front.s3.ap-south-1.amazonaws.com/events/Truss+The+Frame_main.jpg",
            image2:
              "https://concetto-front.s3.ap-south-1.amazonaws.com/events/money_main.jpg",
            image3:
              "https://concetto-front.s3.ap-south-1.amazonaws.com/department3.jpg",
            description:
              "Organized by the Departments of IIT (ISM) Dhanbad, these events prove to be a different kind of challenge for the participants. Along with sound technical knowledge, they also check your proficiency in various fields of engineering. They make you think out of the box in problems associated with the respective fields.",
          },
        ],
        D = n(80),
        _ = n.n(D),
        R = n(87),
        W = (n(116), n(20)),
        B = (function (e) {
          function t(e) {
            var n;
            return (
              Object(h.a)(this, t),
              ((n = Object(g.a)(
                this,
                Object(f.a)(t).call(this, e)
              )).handleScroll = function (e) {
                var t = window.pageYOffset,
                  r = n.state,
                  i = r.offset,
                  c = r.header,
                  s = r.previous_scroll;
                window.innerWidth > 800 && n.setState({ x: window.scrollY }),
                  t > window.innerHeight / 10
                    ? (c ||
                        (n.setState({ header: !0 }),
                        n.homeRef.current &&
                          (n.homeRef.current.classList.toggle("logo-home"),
                          n.homeRef.current.classList.toggle("logo-header"))),
                      i <= a && n.setState({ offset: a }))
                    : (c &&
                        (n.setState({ header: !1 }),
                        n.homeRef.current &&
                          (n.homeRef.current.classList.toggle("logo-header"),
                          n.homeRef.current.classList.toggle("logo-home"))),
                      t <= s
                        ? n.setState({
                            offset:
                              a -
                              ((a - o) * (window.innerHeight / 10 - t)) /
                                (window.innerHeight / 10),
                          })
                        : n.setState({
                            offset:
                              o + ((a - o) * t) / (window.innerHeight / 10),
                          })),
                  s < window.innerHeight / 10 + 5 &&
                    n.setState({ previous_scroll: t });
              }),
              (n.vantaRef = i.a.createRef()),
              window.innerHeight < 450
                ? ((o = 110), (a = 130))
                : window.innerHeight < 600
                ? ((o = 80), (a = 90))
                : window.innerHeight < 670
                ? ((o = 58), (a = 68))
                : window.innerHeight < 745
                ? ((o = 54), (a = 64))
                : window.innerHeight < 850
                ? ((o = 50), (a = 56))
                : window.innerHeight < 910
                ? ((o = 47), (a = 52))
                : ((o = 38), (a = 43)),
              (n.state = { offset: o, header: !1, x: 0, previous_scroll: 0 }),
              (n.homeRef = i.a.createRef()),
              n
            );
          }
          return (
            Object(b.a)(t, e),
            Object(p.a)(t, [
              {
                key: "componentDidMount",
                value: function () {
                  this.props.hideLogo(),
                    window.scrollTo(0, 0),
                    (this.vantaEffect = _()({
                      el: this.vantaRef.current,
                      mouseControls: !0,
                      touchControls: !0,
                      gyroControls: !1,
                      minHeight: 200,
                      minWidth: 200,
                      backgroundColor: 0,
                      skyColor: 655633,
                      cloudColor: 1781072,
                      cloudShadowColor: 16448250,
                      sunColor: 238335,
                      sunGlareColor: 6303999,
                      sunlightColor: 3944703,
                      THREE: R,
                    })),
                    console.log(window.innerWidth),
                    window.addEventListener("scroll", this.handleScroll),
                    window.innerHeight < 670
                      ? (document.body.style.paddingBottom = "38vh")
                      : (document.body.style.paddingBottom = "30vh");
                },
              },
              {
                key: "componentWillUnmount",
                value: function () {
                  (document.body.style.paddingBottom = "0"),
                    this.vantaEffect && this.vantaEffect.destroy(),
                    window.scrollTo(0, 0),
                    window.removeEventListener("scroll", this.handleScroll);
                },
              },
              {
                key: "scrollDown",
                value: function () {
                  window.scrollTo(0, window.innerHeight);
                },
              },
              {
                key: "render",
                value: function () {
                  var e = this,
                    t = this.props.classes,
                    n = this.state,
                    a = n.offset,
                    o = n.x;
                  return i.a.createElement(
                    "div",
                    null,
                    i.a.createElement(
                      W.Helmet,
                      null,
                      i.a.createElement("title", null, "concetto"),
                      i.a.createElement("link", {
                        rel: "shortcut icon",
                        href: "./favicon.ico",
                      }),
                      i.a.createElement("meta", {
                        name: "description",
                        content:
                          "concetto is one of the largest Techno-management fest of IIT (ISM) Dhanbad in Eastern India with a massive participation of more than 2000 participants from 300 different colleges and institutes, who stalk the grounds of ISM to prove their technical expertise.",
                      }),
                      i.a.createElement("meta", {
                        name: "keywords",
                        content:
                          "concetto,concetto 22,concetto 2022,concetto 2k22,concetto iit,concetto iit (ism) dhanbad,concetto iit ism,concetto techfest,concetto tecnical fest, concetto 2022-2020, concetto tech fest 22,concetto tech fest 2022,iit ism, iit (ism) DHANBAD, events, exhibition, Workshops,Techno-management fest, iit ism dhanbad techfest, iit dhanbad techfest,",
                      }),
                      i.a.createElement("meta", {
                        property: "og:url",
                        content: "https://www.concetto.in/",
                      })
                    ),
                    i.a.createElement(
                      "section",
                      { id: "scroll_down", className: "demo" },
                      i.a.createElement(
                        "a",
                        {
                          onClick: function () {
                            e.scrollDown();
                          },
                        },
                        i.a.createElement("span", null),
                        i.a.createElement("span", null),
                        i.a.createElement("span", null)
                      )
                    ),
                    i.a.createElement(C, null),
                    i.a.createElement(
                      "div",
                      { className: t.logo, ref: this.vantaRef },
                      i.a.createElement("img", {
                        src: "../images/concettoLogo.webp",
                        className: "logo logo-home",
                        ref: this.homeRef,
                        alt: " ",
                      })
                    ),
                    i.a.createElement(
                      "div",
                      {
                        style: {
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          width: "100vw",
                        },
                      },
                      i.a.createElement("img", {
                        src: "../images/landing.png",
                        className: t.moon,
                        alt: " ",
                        style: { transform: "translateY(" + a + "px" },
                      })
                    ),
                    i.a.createElement(
                      "div",
                      { className: t.parallax + " gradientBg mt-0" },
                      z.map(function (e, t) {
                        return window.innerWidth < 992
                          ? i.a.createElement(A, {
                              key: t.toString(),
                              content: e,
                            })
                          : t % 2 === 0
                          ? i.a.createElement(N, {
                              x: o,
                              key: t.toString(),
                              content: e,
                            })
                          : window.innerWidth >= 1200
                          ? i.a.createElement(S, {
                              x: o,
                              key: t.toString(),
                              content: e,
                            })
                          : i.a.createElement(N, {
                              x: o,
                              key: t.toString(),
                              content: e,
                            });
                      }),
                      i.a.createElement(
                        "div",
                        { class: "btn-cont" },
                        i.a.createElement(
                          "a",
                          {
                            class: "btn",
                            href: "https://docs.google.com/forms/d/e/1FAIpQLScodg_UYACMBMLkUaN-FwXrmQDDGuq9K0-KPRl3AKRS7FoPoQ/viewform?usp=sf_link",
                          },
                          "REGISTER HERE",
                          i.a.createElement("span", { class: "line-1" }),
                          i.a.createElement("span", { class: "line-2" }),
                          i.a.createElement("span", { class: "line-3" }),
                          i.a.createElement("span", { class: "line-4" })
                        )
                      )
                    ),
                    i.a.createElement("br", null),
                    i.a.createElement("link", {
                      rel: "stylesheet",
                      href: "https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css",
                    }),
                    i.a.createElement(k, null)
                  );
                },
              },
            ]),
            t
          );
        })(r.Component),
        P = Object(E.a)(function (e) {
          return {
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
            parallax: Object(v.a)(
              {
                marginTop: "20px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              },
              e.breakpoints.down("sm"),
              { marginTop: "0px" }
            ),
            moon: Object(v.a)(
              {
                display: "flex",
                zIndex: 999,
                height: "300px",
                width: "600px",
                bottom: 20,
                position: "fixed",
              },
              e.breakpoints.down("md"),
              { display: "none" }
            ),
          };
        })(B),
        H = (n(65), n(11)),
        L = n(12);
      function F() {
        var e = Object(H.a)(["\n  font-size: 0.6em;\n  margin: 0 10px;\n  \n"]);
        return (
          (F = function () {
            return e;
          }),
          e
        );
      }
      function U() {
        var e = Object(H.a)([
          '\n  color: #988d8d !important;\n  letter-spacing: -1px;\n  font-family: "Noto Sans", sans-serif;\n  font-size: 0.65em;\n  font-weight: 300px;\n  margin: 10px;\n  text-align: center;\n',
        ]);
        return (
          (U = function () {
            return e;
          }),
          e
        );
      }
      function G() {
        var e = Object(H.a)([
          '\n  color: cyan !important;\n  letter-spacing: 1px;\n  font-family: "Montserrat";\n  font-size: 1.3rem;\n  text-align: center;\n  margin: 0.6em 0.2em;\n  text-transform: uppercase;\n  margin-top: 10px;\n',
        ]);
        return (
          (G = function () {
            return e;
          }),
          e
        );
      }
      function Y() {
        var e = Object(H.a)(["\n  opacity: 0.7;\n"]);
        return (
          (Y = function () {
            return e;
          }),
          e
        );
      }
      function q() {
        var e = Object(H.a)(["\n  height: 200px;\n"]);
        return (
          (q = function () {
            return e;
          }),
          e
        );
      }
      function V() {
        var e = Object(H.a)([
          "\n  background: rgba( 255, 255, 255, 0.11 ) !important;\nbox - shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);\nbackdrop - filter: blur(4px);\n-webkit - backdrop - filter: blur(4px);\nborder - radius: 10px;\nborder: 1px solid rgba(255, 255, 255, 0.18);\n",
        ]);
        return (
          (V = function () {
            return e;
          }),
          e
        );
      }
      var K = L.a.div(V()),
        Q = L.a.div(q()),
        X = L.a.img(Y()),
        J = L.a.h2(G()),
        Z = L.a.p(U()),
        $ = L.a.p(F());
      var ee = function (e) {
        var t = Object(r.useState)(e.events),
          n = Object(u.a)(t, 2),
          a = n[0],
          o = n[1];
        return (
          Object(r.useEffect)(function () {
            o(e.events);
          }, e.event),
          i.a.createElement(
            "div",
            { className: "" },
            i.a.createElement(
              "div",
              { className: "container" },
              i.a.createElement(
                W.Helmet,
                null,
                i.a.createElement(
                  "title",
                  null,
                  "concetto departmental events"
                ),
                i.a.createElement("meta", {
                  name: "description",
                  content:
                    "Organized by the Departments of IIT (ISM) Dhanbad, these events prove to be a different kind of challenge for the participants. Along with sound technical knowledge, they also check your proficiency in various fields of engineering. They make you think out of the box in problems associated with the respective fields.",
                }),
                i.a.createElement("meta", {
                  name: "keywords",
                  content:
                    "departmental events concetto 2022, department events, branch events iit ism, iit ism dhanbad techfest, iit dhanbad techfest,concetto,concetto 22,concetto 2022,concetto 2k22,concetto IIT,concetto IIT (ISM) DHANBAD,concetto IIT ISM, concetto theme, concetto techfest,concetto tecnical fest, concetto 2022-2023, concetto tech fest 22,concetto tech fest 2022,IIT ISM, IIT (ISM) DHANBAD, events, exhibition, Workshops,Techno-management fest",
                })
              ),
              i.a.createElement("br", null),
              a.map(function (e, t) {
                return i.a.createElement(
                  "div",
                  { className: "cards" },
                  i.a.createElement(
                    K,
                    { className: "card-item", key: e.name },
                    i.a.createElement(
                      x.b,
                      {
                        to: "department-events/".concat(
                          e.name.split(" ").join("-"),
                          "/about"
                        ),
                        style: { textDecoration: "none" },
                      },
                      i.a.createElement(
                        Q,
                        { className: "card-image p-2" },
                        i.a.createElement(X, {
                          src: e.image,
                          alt: e.name,
                          className:
                            "bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto rounded",
                          width: "500",
                          height: "500",
                          xmlns: "http://www.w3.org/2000/svg",
                          preserveAspectRatio: "xMidYMid slice",
                          focusable: "false",
                        })
                      ),
                      i.a.createElement(
                        "div",
                        { className: "card-info" },
                        i.a.createElement(
                          J,
                          { className: "card-title" },
                          e.name
                        ),
                        i.a.createElement($, null, e.summary),
                        i.a.createElement(Z, null, e.presented_by)
                      )
                    )
                  )
                );
              })
            )
          )
        );
      };
      n(120);
      function te() {
        var e = Object(H.a)(["\n  font-size: 0.6em;\n  margin: 0 10px;\n  \n"]);
        return (
          (te = function () {
            return e;
          }),
          e
        );
      }
      function ne() {
        var e = Object(H.a)([
          '\n  color: #988d8d !important;\n  letter-spacing: -1px;\n  font-family: "Noto Sans", sans-serif;\n  font-size: 0.65em;\n  font-weight: 300px;\n  margin: 10px;\n  text-align: center;\n',
        ]);
        return (
          (ne = function () {
            return e;
          }),
          e
        );
      }
      function ae() {
        var e = Object(H.a)([
          '\n  color: cyan !important;\n  letter-spacing: 1px;\n  font-family: "Montserrat";\n  font-size: 1.3rem;\n  text-align: center;\n  margin: 0.6em 0.2em;\n  text-transform: uppercase;\n  margin-top: 10px;\n',
        ]);
        return (
          (ae = function () {
            return e;
          }),
          e
        );
      }
      function oe() {
        var e = Object(H.a)(["\n  opacity: 0.7;\n"]);
        return (
          (oe = function () {
            return e;
          }),
          e
        );
      }
      function re() {
        var e = Object(H.a)(["\n  height: 200px;\n"]);
        return (
          (re = function () {
            return e;
          }),
          e
        );
      }
      function ie() {
        var e = Object(H.a)([
          "\n  background: rgba( 255, 255, 255, 0.11 ) !important;\nbox - shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);\nbackdrop - filter: blur(4px);\n-webkit - backdrop - filter: blur(4px);\nborder - radius: 10px;\nborder: 1px solid rgba(255, 255, 255, 0.18);\n",
        ]);
        return (
          (ie = function () {
            return e;
          }),
          e
        );
      }
      var ce = L.a.div(ie()),
        se = L.a.div(re()),
        le = L.a.img(oe()),
        me = L.a.h2(ae()),
        de = L.a.p(ne()),
        ue = L.a.p(te());
      var he = function (e) {
          var t = Object(r.useState)(e.events),
            n = Object(u.a)(t, 2),
            a = n[0],
            o = n[1];
          return (
            Object(r.useEffect)(function () {
              o(e.events);
            }, e.event),
            i.a.createElement(
              "div",
              { className: "container" },
              i.a.createElement(
                W.Helmet,
                null,
                i.a.createElement("title", null, "concetto club events"),
                i.a.createElement("meta", {
                  name: "description",
                  content:
                    "Organized by the various clubs of IIT (ISM) Dhanbad, are the attraction of concetto 2022. Having a special combination of management and technical prowess, club events provide a platform to budding entrepreneurs to showcase their skills and to prove their mettle among the very best in the field.",
                }),
                i.a.createElement("meta", {
                  name: "keywords",
                  content:
                    "club events concetto 2022, club event iit dhanbad, iit ism dhanbad techfest, iit dhanbad techfest,concetto,concetto 22,concetto 2022,concetto 2k22,concetto IIT,concetto IIT (ISM) DHANBAD,concetto IIT ISM, concetto theme, concetto techfest,concetto tecnical fest, concetto 2022-2020, concetto tech fest 22,concetto tech fest 2022,IIT ISM, IIT (ISM) DHANBAD, events, exhibition, Workshops,Techno-management fest",
                })
              ),
              i.a.createElement("br", null),
              a.map(function (e, t) {
                return i.a.createElement(
                  "div",
                  { className: "cards" },
                  i.a.createElement(
                    ce,
                    { className: "card-item", key: e.name },
                    i.a.createElement(
                      x.b,
                      {
                        to: "club-events/".concat(
                          e.name.split(" ").join("-"),
                          "/about"
                        ),
                        style: { textDecoration: "none" },
                      },
                      i.a.createElement(
                        se,
                        { className: "card-image p-2" },
                        i.a.createElement(le, {
                          src: e.image,
                          alt: e.name,
                          className:
                            "bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto rounded",
                          width: "500",
                          height: "500",
                          xmlns: "http://www.w3.org/2000/svg",
                          preserveAspectRatio: "xMidYMid slice",
                          focusable: "false",
                        })
                      ),
                      i.a.createElement(
                        "div",
                        { className: "card-info" },
                        i.a.createElement(
                          me,
                          { className: "card-title" },
                          e.name
                        ),
                        i.a.createElement(ue, null, e.summary),
                        i.a.createElement(de, null, e.presented_by)
                      )
                    )
                  )
                );
              })
            )
          );
        },
        pe = n(167),
        ge = n(160),
        fe = n(159),
        be = (function (e) {
          function t(e) {
            var n;
            return (
              Object(h.a)(this, t),
              ((n = Object(g.a)(this, Object(f.a)(t).call(this, e))).state = {
                isMenuOpen: !1,
              }),
              (n.toggleMenu = n.toggleMenu.bind(Object(w.a)(n))),
              n
            );
          }
          return (
            Object(b.a)(t, e),
            Object(p.a)(t, [
              {
                key: "toggleMenu",
                value: function () {
                  var e = this.state.isMenuOpen;
                  this.setState({ isMenuOpen: !e }),
                    e
                      ? ((document.body.style.overflowY = "scroll"),
                        (document.body.style.touchAction = "auto"))
                      : ((document.body.style.overflow = "hidden"),
                        (document.body.style.touchAction = "none"));
                },
              },
              {
                key: "render",
                value: function () {
                  var e = this.state.isMenuOpen;
                  return i.a.createElement(
                    "div",
                    {
                      style: { backgroundColor: "rgba(0, 0, 0, 0.5)" },
                      className: "header fixed-top",
                    },
                    i.a.createElement(
                      "nav",
                      { className: "navbar navbar-expand-md navbar-dark" },
                      i.a.createElement(
                        x.c,
                        { to: "home", exact: !0, strict: !0 },
                        i.a.createElement(
                          "a",
                          { className: "navbar-brand" },
                          i.a.createElement("span", { className: "helper" }),
                          i.a.createElement("img", {
                            src: "../images/concettoLogo.webp",
                            className: "logo-header",
                            alt: "concetto",
                          })
                        )
                      ),
                      i.a.createElement(
                        "div",
                        { id: "menuToggle" },
                        i.a.createElement("input", {
                          type: "checkbox",
                          checked: e,
                          onClick: this.toggleMenu,
                        }),
                        i.a.createElement("span", null),
                        i.a.createElement("span", null),
                        i.a.createElement("span", null),
                        i.a.createElement(
                          "ul",
                          { id: "menu" },
                          i.a.createElement("br", null),
                          i.a.createElement(
                            "li",
                            null,
                            i.a.createElement(
                              x.c,
                              {
                                className: "nav-link header-link",
                                to: "/home",
                                onClick: this.toggleMenu,
                              },
                              "HOME"
                            )
                          ),
                          i.a.createElement(
                            "li",
                            null,
                            i.a.createElement(
                              x.c,
                              {
                                className: "nav-link header-link",
                                to: "/about-us",
                                onClick: this.toggleMenu,
                              },
                              "ABOUT US"
                            )
                          ),
                          i.a.createElement(
                            "li",
                            null,
                            i.a.createElement(
                              x.c,
                              {
                                className: "nav-link header-link ",
                                to: "/club-events",
                                onClick: this.toggleMenu,
                              },
                              "EVENTS"
                            )
                          ),
                          i.a.createElement(
                            "li",
                            null,
                            i.a.createElement(
                              x.c,
                              {
                                className: "nav-link header-link ",
                                to: "/sponsors",
                                onClick: this.toggleMenu,
                              },
                              "SPONSORS"
                            )
                          ),
                          i.a.createElement(
                            "li",
                            null,
                            i.a.createElement(
                              x.c,
                              {
                                className: "nav-link header-link ",
                                to: "/our-team",
                                onClick: this.toggleMenu,
                              },
                              "OUR TEAM"
                            )
                          ),
                          i.a.createElement(
                            "li",
                            null,
                            i.a.createElement(
                              x.c,
                              {
                                className: "nav-link header-link ",
                                to: "/guest-talks",
                                onClick: this.toggleMenu,
                              },
                              "GUEST TALKS"
                            )
                          ),
                          i.a.createElement(
                            "li",
                            null,
                            i.a.createElement(
                              "a",
                              {
                                className: "nav-link header-link ",
                                href: "https://docs.google.com/forms/d/e/1FAIpQLScodg_UYACMBMLkUaN-FwXrmQDDGuq9K0-KPRl3AKRS7FoPoQ/viewform?usp=sf_link",
                                onClick: this.toggleMenu,
                              },
                              "REGISTER"
                            )
                          )
                        )
                      )
                    ),
                    i.a.createElement("nav", { role: "navigation" })
                  );
                },
              },
            ]),
            t
          );
        })(r.Component);
      var ve = Object(E.a)(function (e) {
        return {
          mobileTab: {
            border: "1px solid white",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          },
          tabRoot: {
            minWidth: "50%",
            textTransform: "initial",
            fontWeight: "bold",
            backgroundColor: "rgba(0, 255, 255, 0.637)",
            borderRadius: "10px",
            color: "white",
            "&:hover": { color: "#000", opacity: 1 },
            "&$tabSelected": {
              color: "white",
              backgroundColor: "rgba(0, 0, 0, 0.6)",
              fontWeight: "bold",
            },
          },
          tabsRoot: { minWidth: "50%", borderBottom: "1px solid #e8e8e8" },
          tabsIndicator: { backgroundColor: "#1890ff" },
          tab: { width: "100%" },
          tabSelected: {},
        };
      })(function (e) {
        var t = Object(r.useState)(e.events),
          n = Object(u.a)(t, 2),
          a = n[0],
          o = (n[1], Object(r.useState)(e.classes)),
          c = Object(u.a)(o, 2),
          s = c[0],
          l = (c[1], Object(r.useState)(e.active)),
          m = Object(u.a)(l, 2),
          d = m[0],
          h = (m[1], Object(r.useState)([])),
          p = Object(u.a)(h, 2),
          g = p[0],
          f = p[1],
          b = Object(r.useState)([]),
          v = Object(u.a)(b, 2),
          E = v[0],
          w = v[1];
        return (
          Object(r.useEffect)(
            function () {
              f(
                a.filter(function (e) {
                  return "departmental" == e.event_type;
                })
              ),
                w(
                  a.filter(function (e) {
                    return "club" === e.event_type;
                  })
                );
            },
            [a]
          ),
          i.a.createElement(
            "div",
            { className: s.mobileTab },
            i.a.createElement(
              fe.a,
              {
                style: {
                  backgroundColor: "#1b2d50",
                  overflow: "hidden",
                  zIndex: 10,
                },
                position: "fixed",
              },
              i.a.createElement(ge.a, null, i.a.createElement(be, null)),
              i.a.createElement(
                pe.a,
                {
                  value: d,
                  indicatorColor: "#666666",
                  textColor: "secondary",
                  className: s.tab,
                },
                i.a.createElement(ge.a, {
                  label: "Club",
                  classes: { root: s.tabRoot, selected: s.tabSelected },
                  component: x.b,
                  to: "club-events",
                }),
                i.a.createElement(ge.a, {
                  label: "Department",
                  classes: { root: s.tabRoot, selected: s.tabSelected },
                  component: x.b,
                  to: "department-events",
                })
              )
            ),
            i.a.createElement("br", null),
            1 === d && i.a.createElement(he, { events: E }),
            0 === d && i.a.createElement(ee, { events: g }),
            i.a.createElement("br", null)
          )
        );
      });
      var Ee = Object(E.a)(function (e) {
          return {
            root: Object(v.a)({ display: "flex" }, e.breakpoints.down("sm"), {
              flexDirection: "column",
            }),
            verticalTab: Object(v.a)(
              {
                display: "flex",
                flexDirection: "column",
                width: "20vw !important",
                backgroundColor: "rgba(97, 97, 97, 0.1)",
                position: "fixed",
                height: "100vh",
              },
              e.breakpoints.down("sm"),
              { display: "none" }
            ),
            eventsCard: Object(v.a)(
              { marginLeft: "40vh" },
              e.breakpoints.down("sm"),
              { marginLeft: "0px", display: "none" }
            ),
          };
        })(function (e) {
          var t = Object(r.useState)(e.events),
            n = Object(u.a)(t, 2),
            a = n[0],
            o = (n[1], Object(r.useState)(e.classes)),
            c = Object(u.a)(o, 2),
            s = c[0],
            l = (c[1], Object(r.useState)(e.active)),
            m = Object(u.a)(l, 2),
            d = m[0],
            h = (m[1], Object(r.useState)([])),
            p = Object(u.a)(h, 2),
            g = p[0],
            f = p[1],
            b = Object(r.useState)([]),
            v = Object(u.a)(b, 2),
            E = v[0],
            w = v[1];
          return (
            Object(r.useEffect)(
              function () {
                console.log(a),
                  f(
                    a.filter(function (e) {
                      return "departmental" == e.event_type;
                    })
                  ),
                  w(
                    a.filter(function (e) {
                      return "club" === e.event_type;
                    })
                  );
              },
              [a]
            ),
            i.a.createElement(
              "div",
              { className: "gradientBg" },
              i.a.createElement(
                "div",
                { className: s.root },
                i.a.createElement(C, null),
                i.a.createElement(
                  "div",
                  { className: s.verticalTab },
                  i.a.createElement(
                    "div",
                    null,
                    i.a.createElement(
                      x.c,
                      { to: "home", exact: !0, strict: !0 },
                      i.a.createElement("img", {
                        src: "../images/concettoLogo.webp",
                        className: "img-fluid",
                        alt: " ",
                      })
                    )
                  ),
                  i.a.createElement(
                    "div",
                    { className: "btnFlex" },
                    i.a.createElement(
                      x.b,
                      { to: "club-events" },
                      i.a.createElement(
                        "button",
                        {
                          style: { fontFamily: "'Noto Sans',sans-serif" },
                          className:
                            "btn btn-event btn-2 " +
                            (1 === d ? "active-bottom" : ""),
                        },
                        "CLUB"
                      )
                    ),
                    i.a.createElement(
                      x.b,
                      { to: "department-events" },
                      i.a.createElement(
                        "button",
                        {
                          style: { fontFamily: "'Noto Sans',sans-serif" },
                          className:
                            "btn btn-event btn-2 " +
                            (0 === d ? "active-bottom" : ""),
                        },
                        "DEPARTMENT"
                      )
                    )
                  )
                ),
                i.a.createElement("br", null),
                i.a.createElement(
                  "div",
                  { className: s.eventsCard },
                  0 === d && i.a.createElement(ee, { events: g }),
                  1 === d && i.a.createElement(he, { events: E })
                ),
                window.innerWidth < 760
                  ? i.a.createElement(ve, { events: a, active: d })
                  : ""
              )
            )
          );
        }),
        we = n(38);
      function ye() {
        var e = Object(H.a)([
          '\n  color: white;\n  font-family: "Noto Sans", sans-serif;\n  font-size: 16px;\n  text-align: center;\n',
        ]);
        return (
          (ye = function () {
            return e;
          }),
          e
        );
      }
      var ke = L.a.p(ye());
      function xe(e) {
        var t = Object(r.useState)(e.event),
          n = Object(u.a)(t, 2),
          a = n[0],
          o =
            (n[1],
            function (e) {
              var t = new Date(e).toLocaleString("en-IN", {
                timeZone: "Asia/Kolkata",
              });
              return console.log(t), t;
            });
        return i.a.createElement(
          "div",
          {
            className: "container",
            style: { display: "block", width: "80vw" },
          },
          i.a.createElement(
            W.Helmet,
            null,
            i.a.createElement("title", null, a.name),
            i.a.createElement("meta", {
              name: "description",
              content: "Organized by "
                .concat(
                  "club" == a.event_type
                    ? a.presented_by + " club "
                    : a.presented_by + " department ",
                  " of IIT (ISM) Dhanbad, during concetto 2019. "
                )
                .concat(a.details, " "),
            }),
            i.a.createElement("meta", {
              name: "keywords",
              content: ""
                .concat(a.name, " concetto , ")
                .concat(a.name, " , ")
                .concat(a.name, " 2022   , ")
                .concat(
                  a.presented_by,
                  "\n            concetto , iit ism dhanbad techfest, iit dhanbad techfest, concetto,concetto 22,concetto 2022,concetto 2k22,concetto IIT,concetto IIT (ISM) DHANBAD,concetto IIT ISM, concetto techfest,concetto tecnical fest, concetto 2019-2020, concetto tech fest 22,concetto tech fest 2022,IIT ISM, IIT (ISM) DHANBAD, events, exhibition, Workshops,Techno-management fest"
                ),
            })
          ),
          " ",
          i.a.createElement(ke, null, a.summary),
          i.a.createElement(
            ke,
            null,
            "".concat(
              "club" === a.event_type
                ? " CLUB  :  " + a.presented_by
                : "  DEPARTMENT  :  " + a.presented_by
            )
          ),
          i.a.createElement("br", null),
          i.a.createElement(
            ke,
            null,
            "Registration ends : ".concat(o(a.register_timestamp))
          ),
          i.a.createElement(
            ke,
            null,
            "Event duration : "
              .concat(o(a.start_timestamp), " - ")
              .concat(o(a.end_timestamp))
          ),
          i.a.createElement(ke, null, "Venue : ".concat(a.venue))
        );
      }
      function Ce() {
        var e = Object(H.a)([
          '\n  color: white;\n  font-family: "Noto Sans", sans-serif;\n  font-size: 16px;\n  text-align: center;\n',
        ]);
        return (
          (Ce = function () {
            return e;
          }),
          e
        );
      }
      L.a.p(Ce());
      function Ie() {
        var e = Object(H.a)([
          '\n  color: white;\n  font-family: "Noto Sans", sans-serif;\n  font-size: 16px;\n  text-align: center;\n',
        ]);
        return (
          (Ie = function () {
            return e;
          }),
          e
        );
      }
      var je = L.a.p(Ie()),
        Te = (function (e) {
          function t() {
            return (
              Object(h.a)(this, t),
              Object(g.a)(this, Object(f.a)(t).apply(this, arguments))
            );
          }
          return (
            Object(b.a)(t, e),
            Object(p.a)(t, [
              {
                key: "render",
                value: function () {
                  var e = this.props.event;
                  return i.a.createElement(
                    "div",
                    {
                      className: "container",
                      style: { display: "block", width: "80vw" },
                    },
                    i.a.createElement(
                      W.Helmet,
                      null,
                      i.a.createElement("title", null, e.name),
                      i.a.createElement("meta", {
                        name: "description",
                        content: "Organized by "
                          .concat(
                            "club" === e.event_type
                              ? e.presented_by + " club "
                              : e.presented_by + " department ",
                            " of IIT (ISM) Dhanbad, during concetto 2019. "
                          )
                          .concat(e.details),
                      }),
                      i.a.createElement("meta", {
                        name: "keywords",
                        content: "details of "
                          .concat(e.name, " concetto , details of ")
                          .concat(e.name, " , ")
                          .concat(e.name, " 2019 details , ")
                          .concat(
                            e.presented_by,
                            " concetto , iit ism dhanbad techfest, iit dhanbad techfest, concetto,concetto 19,concetto 2019,concetto 2k19,concetto IIT,concetto IIT (ISM) DHANBAD,concetto IIT ISM, concetto techfest,concetto tecnical fest, concetto 2019-2020, concetto tech fest 19,concetto tech fest 2019,IIT ISM, IIT (ISM) DHANBAD, events, exhibition, Workshops,Techno-management fest"
                          ),
                      })
                    ),
                    i.a.createElement(je, null, e.details),
                    i.a.createElement(
                      je,
                      null,
                      e.brochure_link
                        ? i.a.createElement(
                            i.a.Fragment,
                            null,
                            i.a.createElement("br", null),
                            "For detailed description, refer the",
                            " ",
                            i.a.createElement(
                              "a",
                              { href: e.brochure_link },
                              "document"
                            )
                          )
                        : ""
                    ),
                    i.a.createElement("br", null)
                  );
                },
              },
            ]),
            t
          );
        })(r.Component),
        Ne = (function (e) {
          function t() {
            return (
              Object(h.a)(this, t),
              Object(g.a)(this, Object(f.a)(t).apply(this, arguments))
            );
          }
          return (
            Object(b.a)(t, e),
            Object(p.a)(t, [
              {
                key: "render",
                value: function () {
                  var e = this.props.event;
                  return i.a.createElement(
                    "div",
                    {
                      className: " container text-center",
                      style: { display: "block", width: "80vw" },
                    },
                    i.a.createElement(
                      W.Helmet,
                      null,
                      i.a.createElement("title", null, e.name),
                      i.a.createElement("meta", {
                        name: "description",
                        content: "Organized by "
                          .concat(
                            "club" == e.event_type
                              ? e.presented_by + " club "
                              : e.presented_by + " department ",
                            " of IIT (ISM) Dhanbad, during concetto 2019. "
                          )
                          .concat(e.details, " Register for it here."),
                      }),
                      i.a.createElement("meta", {
                        name: "keywords",
                        content: ""
                          .concat(e.name, "  register concetto , register for ")
                          .concat(e.name, " , register for ")
                          .concat(e.name, " 2019, ")
                          .concat(
                            e.presented_by,
                            " concetto , iit ism dhanbad techfest, iit dhanbad techfest, concetto,concetto 19,concetto 2019,concetto 2k19,concetto IIT,concetto IIT (ISM) DHANBAD,concetto IIT ISM, concetto techfest,concetto tecnical fest, concetto 2019-2020, concetto tech fest 19,concetto tech fest 2019,IIT ISM, IIT (ISM) DHANBAD, events, exhibition, Workshops,Techno-management fest"
                          ),
                      })
                    ),
                    e.register_link
                      ? i.a.createElement(
                          "a",
                          {
                            href: e.register_link,
                            target: "_blank",
                            rel: "noopener noreferrer",
                          },
                          i.a.createElement(
                            "button",
                            {
                              type: "button",
                              className: "btn btn-primary btn-lg",
                            },
                            "REGISTER"
                          )
                        )
                      : "No registration required for this event."
                  );
                },
              },
            ]),
            t
          );
        })(r.Component),
        Oe = n(168),
        Se = n(83),
        Me = n.n(Se),
        Ae = n(170),
        ze = n(161),
        De = n(162);
      var _e = function (e) {
        console.log(e);
        var t = Object(r.useState)(e.event),
          n = Object(u.a)(t, 2),
          a = n[0],
          o =
            (n[1],
            function (e) {
              return new Date(e).toLocaleString("en-IN", {
                timeZone: "Asia/Kolkata",
              });
            });
        return i.a.createElement(
          "div",
          null,
          i.a.createElement(
            Oe.a,
            { square: !0, expandIcon: i.a.createElement(Me.a, null) },
            i.a.createElement(
              Ae.a,
              {
                "aria-controls": "panel1d-content",
                id: "panel1d-header",
                style: { backgroundColor: "#666666" },
              },
              i.a.createElement(
                "div",
                {
                  className: "btn btn-event btn-2 active-bottom",
                  style: { marginLeft: "32%" },
                },
                "ABOUT"
              )
            ),
            i.a.createElement(
              ze.a,
              null,
              i.a.createElement(
                De.a,
                null,
                " ",
                " About : ".concat(a.summary),
                i.a.createElement("br", null),
                i.a.createElement("br", null),
                "".concat(
                  "club" == a.presented_by
                    ? " CLUB  :  " + a.presented_by
                    : " DEPARTMENT  :  " + a.presented_by
                ),
                i.a.createElement("br", null),
                i.a.createElement("br", null),
                "Registration ends : ".concat(o(a.register_timestamp)),
                i.a.createElement("br", null),
                i.a.createElement("br", null),
                "Event Duration : "
                  .concat(o(a.start_timestamp), " - ")
                  .concat(o(a.end_timestamp)),
                i.a.createElement("br", null),
                i.a.createElement("br", null),
                "Venue : ".concat(a.venue)
              )
            )
          ),
          i.a.createElement(
            Oe.a,
            { square: !0 },
            i.a.createElement(
              Ae.a,
              {
                "aria-controls": "panel2d-content",
                id: "panel2d-header",
                style: { backgroundColor: "#666666" },
              },
              i.a.createElement(
                "div",
                {
                  className: "btn btn-event btn-2 active-bottom",
                  style: { marginLeft: "32%" },
                },
                "DETAILS"
              )
            ),
            i.a.createElement(
              ze.a,
              null,
              i.a.createElement(
                De.a,
                null,
                a.details,
                i.a.createElement("br", null),
                i.a.createElement("br", null),
                a.brochure_link
                  ? i.a.createElement(
                      i.a.Fragment,
                      null,
                      i.a.createElement("br", null),
                      "For detailed description, refer the",
                      " ",
                      i.a.createElement(
                        "a",
                        { href: a.brochure_link },
                        "document"
                      )
                    )
                  : "",
                " "
              )
            )
          ),
          i.a.createElement(
            Oe.a,
            { square: !0 },
            i.a.createElement(
              Ae.a,
              {
                "aria-controls": "panel3d-content",
                id: "panel3d-header",
                style: { backgroundColor: "#666666" },
              },
              i.a.createElement(
                "div",
                {
                  className: "btn btn-event btn-2 active-bottom",
                  style: { marginLeft: "32%" },
                },
                "REGISTER"
              )
            ),
            i.a.createElement(
              ze.a,
              { style: { paddingLeft: "35%" } },
              a.register_link
                ? i.a.createElement(
                    "a",
                    {
                      href: a.register_link,
                      target: "_blank",
                      rel: "noopener noreferrer",
                    },
                    i.a.createElement(
                      "button",
                      { type: "button", className: "btn btn-primary btn-lg" },
                      "REGISTER"
                    )
                  )
                : "No registration required for this event."
            )
          )
        );
      };
      function Re() {
        var e = Object(H.a)(["\n  \n"]);
        return (
          (Re = function () {
            return e;
          }),
          e
        );
      }
      L.a.img(Re());
      var We = (function (e) {
          function t() {
            return (
              Object(h.a)(this, t),
              Object(g.a)(this, Object(f.a)(t).apply(this, arguments))
            );
          }
          return (
            Object(b.a)(t, e),
            Object(p.a)(t, [
              {
                key: "componentDidMount",
                value: function () {
                  window.scrollTo(0, 0);
                },
              },
              {
                key: "render",
                value: function () {
                  var e = this.props,
                    t = e.classes,
                    n = e.active,
                    a = e.event;
                  return i.a.createElement(
                    "div",
                    { style: { display: "flex" } },
                    i.a.createElement(
                      "div",
                      { className: t.verticalTab },
                      i.a.createElement(
                        "div",
                        null,
                        i.a.createElement(
                          x.c,
                          { to: "home" },
                          i.a.createElement("img", {
                            src: "../images/concettoLogo.webp",
                            className: "img-fluid",
                            alt: " ",
                          })
                        )
                      ),
                      i.a.createElement(
                        "div",
                        { className: "btnFlex" },
                        i.a.createElement(
                          x.b,
                          { to: "about" },
                          i.a.createElement(
                            "button",
                            {
                              className:
                                "btn btn-event btn-2 " +
                                ("about" === n ? "active-bottom" : ""),
                            },
                            "ABOUT"
                          )
                        ),
                        i.a.createElement(
                          x.b,
                          { to: "details" },
                          i.a.createElement(
                            "button",
                            {
                              className:
                                "btn btn-event btn-2 " +
                                ("details" === n ? "active-bottom" : ""),
                            },
                            "DETAILS"
                          )
                        ),
                        i.a.createElement(
                          x.b,
                          { to: "register" },
                          i.a.createElement(
                            "button",
                            {
                              className:
                                "btn btn-event btn-2 " +
                                ("register" === n ? "active-bottom" : ""),
                            },
                            "REGISTER"
                          )
                        )
                      )
                    ),
                    window.innerWidth < 960
                      ? i.a.createElement(be, null)
                      : i.a.createElement(C, null),
                    i.a.createElement(
                      "div",
                      { className: t.image },
                      i.a.createElement("img", {
                        src: a.image,
                        alt: a.name,
                        className: "event-img rounded",
                      }),
                      i.a.createElement(
                        "div",
                        {
                          style: {
                            fontSize: "40px",
                            fontWeight: 800,
                            textTransform: "capitalize",
                          },
                          className: "title",
                        },
                        a.name
                      ),
                      i.a.createElement(
                        "div",
                        { className: t.desktopView },
                        "about" === n &&
                          i.a.createElement(xe, { event: this.props.event }),
                        "details" === n &&
                          i.a.createElement(Te, { event: this.props.event }),
                        "register" === n &&
                          i.a.createElement(Ne, { event: this.props.event })
                      ),
                      i.a.createElement(
                        "div",
                        null,
                        window.innerWidth < 960
                          ? i.a.createElement(_e, { event: a })
                          : ""
                      )
                    )
                  );
                },
              },
            ]),
            t
          );
        })(r.Component),
        Be = Object(E.a)(function (e) {
          return {
            verticalTab: Object(v.a)(
              {
                display: "flex",
                flexDirection: "column",
                width: "20vw !important",
                backgroundColor: "rgba(97, 97, 97, 0.1)",
                position: "fixed",
                height: "100vh",
              },
              e.breakpoints.down("sm"),
              { display: "none" }
            ),
            desktopView: Object(v.a)({}, e.breakpoints.down("sm"), {
              display: "none",
            }),
            image: Object(v.a)(
              {
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                marginLeft: "20vw",
                marginTop: "50px",
              },
              e.breakpoints.down("sm"),
              { marginLeft: "0px", marginTop: "50px" }
            ),
          };
        })(We);
      function Pe() {
        var e = Object(H.a)([
          "\n    position: absolute;\n    top: 300px;\n    color: #ccc;\n    font-size: 16px;\n    font-weight: 700;\n    white-space: nowrap;\n    transform: translateY(-10px) translateX(-50%);\n    left: 50%;\n",
        ]);
        return (
          (Pe = function () {
            return e;
          }),
          e
        );
      }
      function He() {
        var e = Object(H.a)([
          "\n  color: #8797a1;\n    height: 32px;\n    width: 32px;\n    border-radius: 50%;\n    display: inline-flex;\n    align-items: center;\n    justify-content: center;\n    transition: 0.3s;\n    background-color: rgba(93, 133, 193, 0.05);\n    border-radius: 50%;\n    margin-right: 10px;\n    &:hover {\n      svg {\n        fill: darken(rgb(165, 181, 206), 20%);\n      }\n    }\n    &:last-child {\n      margin-right: 0;\n    }\n",
        ]);
        return (
          (He = function () {
            return e;
          }),
          e
        );
      }
      function Le() {
        var e = Object(H.a)([
          "\n    fill: white;\n    color: white;\n    width: 25px;\n    height: 40px;\n    display: block;\n    transition: 0.3s;\n    text-align: center;\n    margin: 0 auto;\n",
        ]);
        return (
          (Le = function () {
            return e;
          }),
          e
        );
      }
      function Fe() {
        var e = Object(H.a)([
          "\n    position: absolute;\n    bottom: 0;\n    top: 210px;\n    color: #ccc;\n    font-size: 22px;\n    font-weight: 700;\n    text-align: center;\n    white-space: nowrap;\n    transform: translateY(-10px) translateX(-50%);\n    left: 50%;\n",
        ]);
        return (
          (Fe = function () {
            return e;
          }),
          e
        );
      }
      function Ue() {
        var e = Object(H.a)([
          "\n    position: absolute;\n    margin: 0;\n    bottom: -4px;\n    margin-top: 4px;\n    font-size: 12px;\n    white-space: nowrap;\n    font-weight: 500;\n    opacity: 0.7;\n    text-transform: uppercase;\n    letter-spacing: 1.5px;\n    left: 50%;\n    color: #66ffff;\n    transform: translateX(-50%) translateY(-7px);\n",
        ]);
        return (
          (Ue = function () {
            return e;
          }),
          e
        );
      }
      function Ge() {
        var e = Object(H.a)([
          "\n    position: absolute;\n    bottom: 0;\n    color: #ccc;\n    font-size: 22px;\n    font-weight: 700;\n    text-align: center;\n    white-space: nowrap;\n    transform: translateY(-10px) translateX(-50%);\n    left: 50%;\n",
        ]);
        return (
          (Ge = function () {
            return e;
          }),
          e
        );
      }
      function Ye() {
        var e = Object(H.a)([
          "\n    width: 100px;\n    height: 100px;\n    box-shadow: 0 8px 8px rgba(0, 0, 0, 0.2);\n    border-radius: 50%;\n    object-position: center;\n    object-fit: cover;\n    position: absolute;\n    bottom: 0;\n    left: 50%;\n    transform: translateX(-50%) translateY(-64px);\n",
        ]);
        return (
          (Ye = function () {
            return e;
          }),
          e
        );
      }
      function qe() {
        var e = Object(H.a)([
          "\n    width: 100%;\n    height: 100%;\n    position: absolute;\n    height: 160px;\n    top: -20%;\n    left: 0;\n    will-change: top;\n    background-size: cover;\n    background-position: center;\n    filter: blur(30px);\n    transform: scale(1.2);\n    transition: 0.5s;\n",
        ]);
        return (
          (qe = function () {
            return e;
          }),
          e
        );
      }
      function Ve() {
        var e = Object(H.a)([
          "\n    position: relative;\n    display: flex;\n    height: 200px;\n    flex-shrink: 0;\n    width: 100%;\n    transition: 0.3s;\n",
        ]);
        return (
          (Ve = function () {
            return e;
          }),
          e
        );
      }
      function Ke() {
        var e = Object(H.a)([
          "\n    padding: 10px;\n    width: 350px;\n    margin: 10px !important;\n    backdrop-filter: blur(16px) saturate(180%);\n    -webkit-backdrop-filter: blur(16px) saturate(180%);\n    background-color: rgba(17, 25, 40, 0.75);\n    border-radius: 12px;\n    border: 1px solid rgba(255, 255, 255, 0.125);\n    max-width: 400px;\n    margin: auto;\n    overflow-y: auto;\n    position: relative;\n    z-index: 1;\n    overflow-x: hidden;\n    display: flex;\n    transition: 0.3s;\n    flex-direction: column;\n    height: 400px;\n",
        ]);
        return (
          (Ke = function () {
            return e;
          }),
          e
        );
      }
      var Qe = L.a.div(Ke()),
        Xe = L.a.div(Ve()),
        Je = L.a.div(qe()),
        Ze = L.a.img(Ye()),
        $e = L.a.h1(Ge()),
        et = L.a.h2(Ue()),
        tt = L.a.div(Fe()),
        nt = L.a.svg(Le()),
        at = L.a.a(He()),
        ot = L.a.div(Pe());
      function rt(e) {
        var t = Object(r.useState)(e.member),
          n = Object(u.a)(t, 2),
          a = n[0];
        n[1];
        return i.a.createElement(
          Qe,
          { id: a.id },
          i.a.createElement(
            Xe,
            null,
            i.a.createElement(Je, { style: { backgroundImage: a.image } }),
            i.a.createElement(Ze, { src: a.image, alt: "avatar" }),
            i.a.createElement($e, null, a.name),
            i.a.createElement(et, null, a.designation),
            i.a.createElement(
              tt,
              null,
              i.a.createElement(
                at,
                { href: a.linkedin },
                i.a.createElement(
                  nt,
                  { viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg" },
                  i.a.createElement("path", {
                    d: "M23.994 24v-.001H24v-8.802c0-4.306-.927-7.623-5.961-7.623-2.42 0-4.044 1.328-4.707 2.587h-.07V7.976H8.489v16.023h4.97v-7.934c0-2.089.396-4.109 2.983-4.109 2.549 0 2.587 2.384 2.587 4.243V24zM.396 7.977h4.976V24H.396zM2.882 0C1.291 0 0 1.291 0 2.882s1.291 2.909 2.882 2.909 2.882-1.318 2.882-2.909A2.884 2.884 0 002.882 0z",
                  }),
                  "LinekdIn"
                )
              )
            ),
            i.a.createElement(
              ot,
              null,
              i.a.createElement(
                nt,
                {
                  xmlns: "http://www.w3.org/2000/svg",
                  viewbox: "0 0 24 24",
                  fill: "none",
                  stroke: "currentColor",
                  "stroke-width": "2",
                  "stroke-linecap": "round",
                  "stroke-linejoin": "round",
                },
                i.a.createElement("path", {
                  d: "M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z",
                })
              ),
              a.contact
            )
          )
        );
      }
      n(123);
      function it() {
        var e = Object(r.useState)(window.innerWidth),
          t = Object(u.a)(e, 2),
          n = t[0],
          a = (t[1], Object(r.useState)([])),
          o = Object(u.a)(a, 2),
          c = o[0],
          s = o[1];
        return (
          Object(r.useEffect)(function () {
            fetch("https://admin.concetto.in/organisingteammembers/", {
              mode: "cors",
            })
              .then(function (e) {
                return e.json();
              })
              .then(function (e) {
                return s(e);
              });
          }, []),
          i.a.createElement(
            "div",
            { className: "team-page" },
            i.a.createElement(
              W.Helmet,
              null,
              i.a.createElement("title", null, "concetto Team"),
              i.a.createElement("meta", {
                name: "description",
                content:
                  "concetto is one of the largest Techno-management fest of IIT (ISM) Dhanbad in Eastern India with a massive participation of more than 2000 participants from 300 different colleges and institutes. Meet the core-team and developers of concetto here.",
              }),
              i.a.createElement("meta", {
                name: "keywords",
                content:
                  "iit ism dhanbad techfest, iit dhanbad techfest,concetto,concetto 22,concetto 2022,concetto 2k22,concetto IIT,concetto IIT (ISM) DHANBAD,concetto IIT ISM, concetto core-team, concetto developers, concetto techfest,concetto tecnical fest, concetto 2022-2023, concetto tech fest 22,concetto tech fest 2022,IIT ISM, IIT (ISM) DHANBAD, events, exhibition, Workshops,Techno-management fest",
              })
            ),
            i.a.createElement(be, null),
            i.a.createElement("br", null),
            i.a.createElement("br", null),
            n > 486
              ? i.a.createElement(
                  "h2",
                  { align: "center", className: "title highlighted" },
                  "CORE TEAM"
                )
              : i.a.createElement(
                  "h2",
                  { align: "center", className: "highlighted" },
                  "OUR TEAM"
                ),
            i.a.createElement("br", null),
            i.a.createElement(
              "div",
              { class: "container team" },
              i.a.createElement(
                "div",
                { class: "row mt-2 mb-2 justify-content-center" },
                c.map(function (e) {
                  return i.a.createElement(rt, { member: e });
                })
              )
            )
          )
        );
      }
      var ct = (function (e) {
        function t() {
          return (
            Object(h.a)(this, t),
            Object(g.a)(this, Object(f.a)(t).apply(this, arguments))
          );
        }
        return (
          Object(b.a)(t, e),
          Object(p.a)(t, [
            {
              key: "componentDidMount",
              value: function () {
                (document.body.style.overflow = "hidden"),
                  window.scrollTo(0, 0);
              },
            },
            {
              key: "componentWillUnmount",
              value: function () {
                document.body.style.overflowY = "scroll";
              },
            },
            {
              key: "render",
              value: function () {
                return i.a.createElement(
                  "div",
                  null,
                  i.a.createElement(be, null),
                  i.a.createElement(
                    "h1",
                    {
                      className: "title",
                      style: {
                        textAlign: "center",
                        left: "40%",
                        height: "100vh",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      },
                    },
                    "COMING SOON......"
                  )
                );
              },
            },
          ]),
          t
        );
      })(r.Component);
      function st() {
        var e = Object(H.a)(["\n  font-size: 0.6em;\n  margin: 0 10px;\n"]);
        return (
          (st = function () {
            return e;
          }),
          e
        );
      }
      function lt() {
        var e = Object(H.a)([
          '\n  color: #988d8d !important;\n  letter-spacing: -1px;\n  font-family: "Noto Sans", sans-serif;\n  font-size: 0.65em;\n  font-weight: 300px;\n  margin: 10px;\n  text-align: center;\n',
        ]);
        return (
          (lt = function () {
            return e;
          }),
          e
        );
      }
      function mt() {
        var e = Object(H.a)([
          '\n  color: cyan !important;\n  letter-spacing: 1px;\n  font-family: "Montserrat";\n  font-size: 1.3rem;\n  text-align: center;\n  margin: 0.6em 0.2em;\n  text-transform: uppercase;\n  margin-top: 10px;\n',
        ]);
        return (
          (mt = function () {
            return e;
          }),
          e
        );
      }
      function dt() {
        var e = Object(H.a)(["\n  opacity: 0.7;\n"]);
        return (
          (dt = function () {
            return e;
          }),
          e
        );
      }
      function ut() {
        var e = Object(H.a)(["\n  height: 200px;\n"]);
        return (
          (ut = function () {
            return e;
          }),
          e
        );
      }
      function ht() {
        var e = Object(H.a)([
          "\n  background: rgba( 255, 255, 255, 0.11 ) !important;\nbox - shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);\nbackdrop - filter: blur(4px);\n-webkit - backdrop - filter: blur(4px);\nborder - radius: 10px;\nborder: 1px solid rgba(255, 255, 255, 0.18);\n",
        ]);
        return (
          (ht = function () {
            return e;
          }),
          e
        );
      }
      var pt = L.a.div(ht()),
        gt = L.a.div(ut()),
        ft = L.a.img(dt()),
        bt = L.a.h2(mt()),
        vt = (L.a.p(lt()), L.a.p(st())),
        Et = (function (e) {
          function t() {
            return (
              Object(h.a)(this, t),
              Object(g.a)(this, Object(f.a)(t).apply(this, arguments))
            );
          }
          return (
            Object(b.a)(t, e),
            Object(p.a)(t, [
              {
                key: "componentDidMount",
                value: function () {
                  window.scrollTo(0, 0);
                },
              },
              {
                key: "render",
                value: function () {
                  var e = this.props.Informals;
                  return i.a.createElement(
                    "div",
                    null,
                    i.a.createElement(
                      W.Helmet,
                      null,
                      i.a.createElement("title", null, "concetto Informals"),
                      i.a.createElement("meta", {
                        name: "description",
                        content:
                          "concetto, the annual Techno-management fest of IIT(ISM), organizes a variety of workshops with the best in the business so that our participants feel lucid while competing with technical brilliance.",
                      }),
                      i.a.createElement("meta", {
                        name: "keywords",
                        content:
                          "informals iit ism dhanbad techfest, iit dhanbad techfest, iit dhanbad informals, concetto,concetto 19,concetto 2019,concetto 2k19,concetto IIT,concetto IIT (ISM) DHANBAD,concetto IIT ISM, concetto techfest,concetto tecnical fest, concetto 2019-2020, concetto tech fest 19,concetto tech fest 2019,IIT ISM, IIT (ISM) DHANBAD, events, exhibition, Workshops,Techno-management fest",
                      })
                    ),
                    i.a.createElement(be, null),
                    i.a.createElement("br", null),
                    i.a.createElement("br", null),
                    i.a.createElement(
                      "h1",
                      {
                        style: { textAlign: "center", marginTop: "20px" },
                        className: "title",
                      },
                      "INFORMAL EVENTS"
                    ),
                    i.a.createElement(
                      "div",
                      { className: "container" },
                      e.map(function (e, t) {
                        return i.a.createElement(
                          "div",
                          { className: "cards" },
                          i.a.createElement(
                            pt,
                            { className: "card-item", key: e.name },
                            i.a.createElement(
                              x.b,
                              {
                                to: "informal-events/".concat(
                                  e.name.split(" ").join("-"),
                                  "/about"
                                ),
                                style: { textDecoration: "none" },
                              },
                              i.a.createElement(
                                gt,
                                { className: "card-image p-2" },
                                i.a.createElement(ft, {
                                  src: e.img,
                                  alt: e.name,
                                  className:
                                    "bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto rounded",
                                  width: "500",
                                  height: "500",
                                  xmlns: "http://www.w3.org/2000/svg",
                                  preserveAspectRatio: "xMidYMid slice",
                                  focusable: "false",
                                })
                              ),
                              i.a.createElement(
                                "div",
                                { className: "card-info" },
                                i.a.createElement(
                                  bt,
                                  { className: "card-title" },
                                  e.name
                                ),
                                i.a.createElement(vt, null, e.prizes)
                              )
                            )
                          )
                        );
                      })
                    )
                  );
                },
              },
            ]),
            t
          );
        })(r.Component),
        wt = [
          {
            name: "Data Science and Artificial Intelligence",
            link: "https://drive.google.com/file/d/1mRqCc4E92zJWmOTQQS9a_sq-DmRoVG0Y/view?usp=sharing",
            img: "https://concetto-front.s3.ap-south-1.amazonaws.com/ML.jpg",
            details:
              "concetto and ACM Student Chapter, IIT(ISM) Dhanbad are organizing the Data Science and Artificial Intelligence Workshop that will be conducted in collaboration with the edu-tech giant Coding Blocks.This will be followed by Prize Distribution of ACM League Of Code organised during last Summer vacations.; The Co- founder of Coding Blocks, Prateek Narang(http://www.prateeknarang.com) will address the students and provide the freshers with a deeper insight of Artificial Intelligence and Data Science from learning at college level to it's implementation in the industrial level. He will be accompanied by the Head of Marketing of Coding Blocks, Jatin Virmani.; Participation certificate and goodies for each participant; Free for ACM Student Chapter Members and \u20b9100 / - for all other Non - ACM Members ; T - shirts and goodies for all winners during workshop from Coding Blocks and GeeksForGeeks",
            reg_link:
              "https://docs.google.com/forms/d/e/1FAIpQLSePuP1VVHvn4FDNqFPHGeuT0xeQDg17gR8DMGk4vUKPpim58g/viewform",
          },
          {
            name: "Bizathon - workshop",
            link: "https://drive.google.com/file/d/1T8oZb9PC8VHpeiEW28HFLHYIPUs29QNa/view?usp=sharing",
            img: "https://concetto-front.s3.ap-south-1.amazonaws.com/events/bizathon.jpg",
            details:
              "A one day workshop on business modelling, basic financial projection and estimation, will cover the cruial domains of preparation and execution of a business model is going to take place on 18th october under bizathon from 10AM to 6PM including 2 hours breaks by Mridul kabra, seasoned digital marketing professional, TEDx speaker having 7 years marketing, management and entrepreneurial experience. ;Registration fees for this entrepreneurial excursion is Rs. 400 per student.",
            reg_link:
              "https://docs.google.com/forms/d/1_m-Zw_YtvhIOSvxGm8rsqh0dAnq9nZKrQy2F6nZCWys/viewform",
          },
          {
            name: "Cyber Security and Ethical Hacking",
            link: "https://drive.google.com/file/d/10sgGAf8j4Er9GAfTyM7jYekVxaXd8H0L/view",
            img: "https://concetto-front.s3.ap-south-1.amazonaws.com/events/cyberlabs.jpg",
            details:
              "Hacking is a thing that acquires the attention of every single person who is interested in technology and its advancements. We, concetto\u201919 brings to you the most awaited workshop about ethical hacking in association with \u201cWingfotech Pvt. Ltd.\u201d, the leading training providing firm. The workshop will be of 8-hour duration having a minimal charge of Rs. 650 . It will have 10 sessions in which various hacking processes and its terminologies will be taught",
            reg_link: "https://forms.gle/9BiTMNkahEQMJjqX6",
          },
          {
            name: "AI and ML using Python",
            link: "https://drive.google.com/file/d/1-UAZhH9PlehVNM3F05c3ywYn_ZS57IqK/view",
            img: "https://concetto-front.s3.ap-south-1.amazonaws.com/ml-workshop.jpg",
            details:
              "Artificial intelligence and machine learning has also been on the peek of human interest, so concetto\u201919 brings to you a workshop on AI and ML using python in association with \u201cWingfotech Pvt. Ltd.\u201d, the leading training providing firm. The workshop will be of 8-hour duration having a minimal charge of Rs. 650 . The workshop will have various topics covered in the sessions",
            reg_link: "https://forms.gle/9BiTMNkahEQMJjqX6",
          },
          {
            name: "Internet of Things (IoT)",
            link: "https://drive.google.com/file/d/1GLdIHUjYirqKZUqM4wg3vSgSEmKqRS4X/view",
            img: "https://concetto-front.s3.ap-south-1.amazonaws.com/workshop2.jpg",
            details:
              "concetto\u201919 brings to you a workshop on \u2018Internet of Things\u2019 in association with\u201cWingfotech Pvt. Ltd.\u201d, the leading training providing firm. The workshop will be of 8-hour duration having a minimal charge of Rs. 650 . Internet of Things (IoT) is an ecosystem of connected physical things that are accessible through the internet. The 'Thing' in IoT could be a person with a heart monitor or an automobile with built-in-sensors, i.e. objects that have been assigned an IP address and could collect and transfer data over a network without manual intervention. The embedded devices in the objects helps them to interact with internal states or the external environment, which in turn used for remote monitoring and control purpose and affects the decisions taken. ",
            reg_link: "https://forms.gle/9BiTMNkahEQMJjqX6",
          },
          {
            name: "Humanoid Robotics",
            link: "https://drive.google.com/file/d/1-FMgRCEdxErn3uhh3vEuYWz0eTxBBmUv/view",
            img: "https://concetto-front.s3.ap-south-1.amazonaws.com/exhibition2.jpg",
            details:
              "Robots are the center of attention for everyone, how intelligent and useful they can be, has always been interesting. concetto\u201919 brings to you a workshop on \u2018HUMANOID ROBOTICS\u2019 in association with\u201cWingfotech Pvt. Ltd.\u201d, the leading training providing firm. The workshop will be of 8-hour duration having a minimal charge of Rs. 650. Projects like PWM Generation, Servo Interfacing, Angle Calculation, No, Namaste, Walking (Forward, Back, Left, Right & Back), Dancing Robot will be covered in the workshop ",
            reg_link: "https://forms.gle/9BiTMNkahEQMJjqX6",
          },
        ],
        yt = (function (e) {
          function t() {
            return (
              Object(h.a)(this, t),
              Object(g.a)(this, Object(f.a)(t).apply(this, arguments))
            );
          }
          return (
            Object(b.a)(t, e),
            Object(p.a)(t, [
              {
                key: "componentDidMount",
                value: function () {
                  window.scrollTo(0, 0);
                },
              },
              {
                key: "render",
                value: function () {
                  return i.a.createElement(
                    "div",
                    null,
                    i.a.createElement(
                      W.Helmet,
                      null,
                      i.a.createElement("title", null, "concetto Workshops"),
                      i.a.createElement("meta", {
                        name: "description",
                        content:
                          "concetto, the annual Techno-management fest of IIT(ISM), organizes a variety of workshops with the best in the business so that our participants feel lucid while competing with technical brilliance.",
                      }),
                      i.a.createElement("meta", {
                        name: "keywords",
                        content:
                          "iit ism dhanbad techfest, iit dhanbad techfest, iit dhanbad workshops, concetto,concetto 19,concetto 2019,concetto 2k19,concetto IIT,concetto IIT (ISM) DHANBAD,concetto IIT ISM, concetto techfest,concetto tecnical fest, concetto 2019-2020, concetto tech fest 19,concetto tech fest 2019,IIT ISM, IIT (ISM) DHANBAD, events, exhibition, Workshops,Techno-management fest",
                      })
                    ),
                    i.a.createElement(be, null),
                    i.a.createElement("br", null),
                    i.a.createElement(
                      "h1",
                      {
                        style: { textAlign: "center", marginTop: "20px" },
                        className: "title",
                      },
                      "WORKSHOPS"
                    ),
                    i.a.createElement(
                      "div",
                      { className: "container" },
                      wt.map(function (e, t) {
                        return i.a.createElement(
                          i.a.Fragment,
                          { key: t.toString() },
                          i.a.createElement("hr", {
                            class: "featurette-divider",
                            style: 0 !== t ? { margin: "2rem" } : null,
                          }),
                          i.a.createElement(
                            "div",
                            { class: "row featurette" },
                            i.a.createElement(
                              "div",
                              {
                                class:
                                  "col-md-5 " +
                                  (t % 2 === 0 ? "order-md-2" : ""),
                                style: {
                                  display: "flex",
                                  alignItems: "center",
                                  flexWrap: "wrap",
                                },
                              },
                              i.a.createElement("img", {
                                src: e.img,
                                class:
                                  "bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto",
                                width: "500",
                                height: "500",
                                xmlns: "http://www.w3.org/2000/svg",
                                preserveAspectRatio: "xMidYMid slice",
                                focusable: "false",
                                "aria-label": "Placeholder: 500x500",
                                alt: e.name,
                              })
                            ),
                            i.a.createElement(
                              "div",
                              {
                                class:
                                  "col-md-7 " +
                                  (t % 2 === 0 ? "order-md-1" : ""),
                              },
                              i.a.createElement(
                                "h2",
                                {
                                  class: "featurette-heading",
                                  align: "center",
                                  style: { color: "lightblue" },
                                },
                                e.name
                              ),
                              e.details.split(";").map(function (e) {
                                return i.a.createElement("p", null, e);
                              }),
                              i.a.createElement(
                                "p",
                                null,
                                i.a.createElement(
                                  "a",
                                  {
                                    href: e.link,
                                    target: "_blank",
                                    rel: "noopener noreferrer",
                                    style: { color: "lightblue" },
                                  },
                                  "Know more.."
                                )
                              ),
                              i.a.createElement(
                                "p",
                                { align: "center" },
                                i.a.createElement(
                                  "a",
                                  {
                                    href: e.reg_link,
                                    target: "_blank",
                                    rel: "noopener noreferrer",
                                  },
                                  i.a.createElement(
                                    "button",
                                    {
                                      className: "btn btn-primary text-center",
                                    },
                                    "Register ",
                                    i.a.createElement("i", {
                                      class: "fa fa-arrow-circle-right",
                                    })
                                  )
                                )
                              )
                            )
                          )
                        );
                      }),
                      i.a.createElement("br", null)
                    )
                  );
                },
              },
            ]),
            t
          );
        })(r.Component),
        kt =
          (n(124),
          [
            {
              name: "JAGN-E-ROSHAN",
              description:
                "This event is a CSR initiative for Diya and Candle creation to evolve entrepreneurial mindset in young minds. Children from various NGOs and schools, irrespective of their economic of social status are encouraged to participate at this event. In this event we will be going to basti and providing all material to make diyas and candles, and invite them to sell these diyas and candles in amber ground during pre diwali event, all diyas which will be used through out the campus will be made by them. This event will help small basti children to spend there diwali joyfully and this event will be a small initiative towards making India self- dependent",
              duration: "3 Hours",
              venue: "Amber Ground",
            },
          ]);
      var xt = function (e) {
          return i.a.createElement(
            "div",
            { className: "container" },
            kt.map(function (e, t) {
              return i.a.createElement(
                "div",
                { className: "row", key: t.toString() },
                i.a.createElement(
                  "div",
                  {
                    className:
                      "col-12 col-lg-6 col-lg-12" +
                      (t % 2 === 0 ? " order-lg-1" : ""),
                  },
                  i.a.createElement(
                    "div",
                    { class: "wrapper" },
                    i.a.createElement(
                      "a",
                      {
                        href: e.link,
                        class: "meetup",
                        target: "_blank",
                        rel: "noopener noreferrer",
                      },
                      e.name
                    ),
                    i.a.createElement(
                      "h5",
                      { class: "group" },
                      e.description.split(";").map(function (e) {
                        return i.a.createElement(
                          i.a.Fragment,
                          null,
                          i.a.createElement("br", null),
                          e,
                          i.a.createElement("br", null)
                        );
                      })
                    ),
                    i.a.createElement(
                      "h5",
                      { class: "group" },
                      i.a.createElement(
                        i.a.Fragment,
                        null,
                        i.a.createElement("br", null),
                        e.duration,
                        i.a.createElement("br", null),
                        e.venue
                      )
                    )
                  )
                ),
                i.a.createElement("br", null)
              );
            })
          );
        },
        Ct = n(163),
        It = n(164),
        jt = n(165),
        Tt = n(169),
        Nt = (function (e) {
          function t() {
            return (
              Object(h.a)(this, t),
              Object(g.a)(this, Object(f.a)(t).apply(this, arguments))
            );
          }
          return (
            Object(b.a)(t, e),
            Object(p.a)(t, [
              {
                key: "componentDidMount",
                value: function () {
                  window.scrollTo(0, 0);
                },
              },
              {
                key: "render",
                value: function () {
                  return i.a.createElement(
                    "div",
                    { className: "theme-page" },
                    i.a.createElement(
                      W.Helmet,
                      null,
                      i.a.createElement("title", null, "concetto"),
                      i.a.createElement("meta", {
                        name: "description",
                        content:
                          "concetto is one of the largest Techno-management fest of IIT (ISM) Dhanbad in Eastern India with a massive participation of more than 2000 participants from 300 different colleges and institutes. Know about the theme of this year - To the moon and back.",
                      }),
                      i.a.createElement("meta", {
                        name: "keywords",
                        content:
                          "to the moon and back, iit ism dhanbad techfest, iit dhanbad techfest,concetto,concetto 19,concetto 2019,concetto 2k19,concetto IIT,concetto IIT (ISM) DHANBAD,concetto IIT ISM, concetto theme, concetto techfest,concetto tecnical fest, concetto 2019-2020, concetto tech fest 19,concetto tech fest 2019,IIT ISM, IIT (ISM) DHANBAD, events, exhibition, Workshops,Techno-management fest",
                      })
                    ),
                    i.a.createElement(be, null),
                    i.a.createElement("br", null),
                    i.a.createElement(
                      "h1",
                      {
                        style: {
                          textAlign: "center",
                          marginTop: "60px",
                          color: "white",
                          fontSize: "52px",
                          fontFamily: "'Montserrat', sans-serif",
                        },
                        className: "title",
                      },
                      "About Us"
                    ),
                    i.a.createElement(
                      "div",
                      { className: "container" },
                      i.a.createElement(
                        "div",
                        { className: "row container" },
                        i.a.createElement(
                          "div",
                          { className: "col-12 col-md-6 opaque " },
                          i.a.createElement("br", null),
                          "concetto - the 3 day annual techno-management fest of IIT(ISM) Dhanbad. concetto is the place where the magnificent minds of students from all over India come together to turn their ideas into reality. This is a great event for aspiring engineers to learn about any technical field they have ever thought of. There are many events related to every department of Engineering where we can learn about many new things. These are the events which make learning fun. concetto is here with the events like \u201cSky is the limit\u2019\u2019, \u201cRunism\u201d, \u201cTradathon\u201d, \u201cBussinelytics\u201d and many more which also includes cultural events,workshops,guest lectures.",
                          i.a.createElement("br", null),
                          " ",
                          i.a.createElement("br", null),
                          "The theme of concetto\u201922 is \u201cAUGMENTED REALITY - VIRTUAL REALITY-Reality beyond Vision\u201d where students can experience anything just through their smartphone. Prizes worth a million, loads of goodies, certificates and lots of fun are all that awaits everyone who becomes a witness of this legendary event."
                        ),
                        i.a.createElement(
                          "div",
                          {
                            className: "col-12 col-md-6",
                            style: { paddingLeft: "0", paddingRight: "0" },
                          },
                          i.a.createElement(
                            Ct.a,
                            {
                              body: !0,
                              inverse: !0,
                              style: {
                                backgroundColor: "rgba(0,0,0,0.8)",
                                borderColor: "#333",
                              },
                            },
                            i.a.createElement(It.a, {
                              top: !0,
                              width: "100%",
                              src: "/images/CAMPUS-MAP.jpg",
                              alt: "IIT (ISM) Campus Map",
                            }),
                            i.a.createElement("br", null),
                            i.a.createElement(
                              jt.a,
                              { style: { paddingLeft: "43%" } },
                              i.a.createElement(
                                "a",
                                {
                                  href: "/images/CAMPUS-MAP.jpg",
                                  target: "_blank",
                                },
                                i.a.createElement(
                                  Tt.a,
                                  {
                                    type: "button",
                                    className: "themedButton",
                                    style: { margin: "auto" },
                                  },
                                  i.a.createElement("i", {
                                    className: "fa fa-eye",
                                  }),
                                  " View"
                                )
                              )
                            )
                          )
                        )
                      ),
                      i.a.createElement("br", null)
                    ),
                    i.a.createElement("br", null),
                    i.a.createElement(
                      "h1",
                      {
                        style: {
                          textAlign: "center",
                          marginTop: "120px",
                          color: "white",
                          fontSize: "52px",
                          fontFamily: "'Montserrat', sans-serif",
                        },
                        className: "title",
                      },
                      "Our Theme"
                    ),
                    i.a.createElement(
                      "div",
                      { className: "container opaque" },
                      i.a.createElement("br", null),
                      "Our minds hold a world of endless possibilities, a world in which we can do whatever we imagine \u2013 fight space monsters, explore the oceans, fly a plane, design a city, jump into the universe of our favourite movie franchise.AR and VR give us the chance to live out these dreams.Augmented reality is a technology that enhances your surroundings by adding digital elements to a live view \u2013 possible through the camera of your smartphone!Virtual reality holds the power to immerse you in a simulated world of your choice \u2013 a world you can explore and interact with.This theme of concetto \u201922 serves as a reminder that imagination is our only limit, and that technology holds the key to shaping our future.concetto \u201922 has informative workshops, and a roster of compelling events \u2013there\u2019s an event for an enthusiast of every technical field!Build robots, code your heart out, create new designs, trade virtual money, test your wits in quizzes, and a lot more!concetto \u201922 returns, bigger and bolder than ever before, and is waiting for you tech geeks out there! Boasting of a huge roaster of exhilarating and engaging events, along with\xa0promises to be grander, greater, more splendid and glorious than ever before IIT ISM presenting",
                      " ",
                      i.a.createElement(
                        "b",
                        null,
                        "concetto: REALITY BEYOND VISION"
                      ),
                      "."
                    ),
                    i.a.createElement("br", null),
                    i.a.createElement(
                      "h1",
                      {
                        style: {
                          textAlign: "center",
                          marginTop: "120px",
                          color: "white",
                          fontSize: "52px",
                          fontFamily: "'Montserrat', sans-serif",
                        },
                        className: "title",
                      },
                      "Message from the Convener"
                    ),
                    i.a.createElement(
                      "div",
                      { className: "container opaque" },
                      i.a.createElement("br", null),
                      'Greetings! The past two years have been tough for everyone. As the saying goes, "Tough times don\'t last long but tough people do this tough time also challenged everyone to fight and bring out their best. To keep alive the thrill of innovation and the spirit of technological challenges, I am pleased to announce that the Indian Institute of Technology (SM) Dhanbad is organizing its flagship techno-management fest, "concetto 22", starting on 21st October 2022. The three-day fest organized by the institute\'s students aims to disseminate individual skills and mutual exchange of scientific knowledge through a series of technical and management events and seminars.',
                      i.a.createElement("br", null),
                      i.a.createElement("br", null),
                      "To bridge the digital and physical worlds, this year's concetto is themed on the concept of AR/VR with the tagline Reality Beyond Vision\" AR uses a real-world setting, while VR is entirely virtual This year, we plan to make the event grander by introducing new technical challenges and adding a new dimension to concetto",
                      i.a.createElement("br", null),
                      i.a.createElement("br", null),
                      "The participation of the engineering and science departments of the institute and the students from other engineering institutes makes this fest an arena of innovation and creativity. This fest provides all young budding minds space to demonstrate their talent and grit",
                      i.a.createElement("br", null),
                      i.a.createElement("br", null),
                      "Further, talks delivered by eminent personalities and scientists during the fest also inspire and encourage all students to strive for greater success in life. I acknowledge all the efforts made by students, faculty members, and officials toward its successful execution. I also take this opportunity to express my gratitude to all sponsors, advertisers, and media associated with this grand event",
                      i.a.createElement("br", null),
                      "We aim to take the next step towards the goal of technological innovation through",
                      i.a.createElement("br", null),
                      i.a.createElement("br", null),
                      "concetto 2022",
                      i.a.createElement("br", null),
                      i.a.createElement("br", null),
                      "I wish all the best to the Participants, Colleges, Event Organizers and Contributors",
                      i.a.createElement("br", null),
                      "Best Regards",
                      i.a.createElement(
                        "div",
                        { className: "col-12 p-5" },
                        i.a.createElement("img", {
                          style: {
                            display: "block",
                            position: "relative",
                            margin: "auto",
                          },
                          className: "rounded-circle",
                          src: "https://people.iitism.ac.in/~download/images/employee/1004/1004.jpg",
                          alt: "Prof. Ajit Kumar",
                          height: "220",
                          width: "220",
                        }),
                        i.a.createElement(
                          "h5",
                          { align: "center" },
                          "Prof. Ajit Kumar",
                          i.a.createElement("br", null),
                          "Convener, concetto'22",
                          i.a.createElement("br", null),
                          "Assistant Professor",
                          i.a.createElement("br", null),
                          "Department of Mechanical Engineering",
                          i.a.createElement("br", null)
                        )
                      )
                    ),
                    i.a.createElement("br", null),
                    i.a.createElement(
                      "h1",
                      {
                        style: {
                          textAlign: "center",
                          marginTop: "120px",
                          color: "white",
                          fontSize: "52px",
                          fontFamily: "'Montserrat', sans-serif",
                        },
                        className: "title",
                      },
                      "CSR EVENTS"
                    ),
                    i.a.createElement(xt, null)
                  );
                },
              },
            ]),
            t
          );
        })(r.Component);
      n(125);
      function Ot() {
        var e = Object(H.a)([
          '\n  text-align: center;\n  margin-top: 40px;\n  letter-spacing: -2px;\n  color: white;\n  font-size: 36px;\n  font-family: "Moneterrat", sans-serif;\n',
        ]);
        return (
          (Ot = function () {
            return e;
          }),
          e
        );
      }
      L.a.h3(Ot());
      function St() {
        var e = Object(r.useState)([]),
          t = Object(u.a)(e, 2),
          n = t[0],
          a = t[1],
          o = function (e) {
            var t = new Date(e).toLocaleString("en-IN", {
              timeZone: "Asia/Kolkata",
            });
            return console.log(t), t;
          };
        return (
          Object(r.useEffect)(function () {
            fetch("https://admin.concetto.in/guesttalks/", { mode: "cors" })
              .then(function (e) {
                return e.json();
              })
              .then(function (e) {
                a(e);
              });
          }, []),
          i.a.createElement(
            "div",
            null,
            i.a.createElement(
              W.Helmet,
              null,
              i.a.createElement("title", null, "concetto Guest-Talks"),
              i.a.createElement("meta", {
                name: "description",
                content:
                  "concetto, the annual Techno-management fest of IIT(ISM), organizes a variety of workshops with the best in the business so that our participants feel lucid while competing with technical brilliance. Meet the guest coming for tech talks, here",
              }),
              i.a.createElement("meta", {
                name: "keywords",
                content:
                  "Geeks-for-Geeks iit dhanbad, NASA iit dhanbad, NASA ism dhanbad, Chandrayan 2 iit ism, Chandrayan 2 iit dhanbad, Geeks-for-Geeks ism dhanbad, Geeks-for-Geeks iit ism, NASA iit ism, iit ism dhanbad techfest, iit dhanbad techfest, concetto,concetto 22,concetto 2022,concetto 2k22,concetto IIT,concetto IIT (ISM) DHANBAD,concetto IIT ISM, concetto techfest,concetto tecnical fest, concetto 2022-2023, concetto tech fest 22,concetto tech fest 2022,IIT ISM, IIT (ISM) DHANBAD, events, exhibition, Workshops,Techno-management fest",
              })
            ),
            i.a.createElement(be, null),
            i.a.createElement("br", null),
            i.a.createElement("br", null),
            i.a.createElement(
              "h1",
              {
                style: { textAlign: "center", marginTop: "20px" },
                className: "title",
              },
              "GUEST TALKS"
            ),
            i.a.createElement(
              "div",
              { className: "container" },
              n.map(function (e, t) {
                return i.a.createElement(
                  "div",
                  {
                    className: "row",
                    style: { marginTop: "80px" },
                    key: t.toString(),
                  },
                  i.a.createElement(
                    "div",
                    {
                      className:
                        "col-12 col-lg-3 " + (t % 2 === 0 ? " order-lg-2" : ""),
                      style: {
                        display: "flex",
                        alignItems: "center",
                        flexWrap: "wrap",
                      },
                    },
                    i.a.createElement("img", {
                      src: e.image,
                      class:
                        "bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto",
                      width: "350",
                      height: "350",
                      xmlns: "http://www.w3.org/2000/svg",
                      preserveAspectRatio: "xMidYMid slice",
                      focusable: "false",
                      "aria-label": "Placeholder: 350x350",
                      alt: e.guest_name,
                    })
                  ),
                  i.a.createElement(
                    "div",
                    {
                      className:
                        "col-12 col-lg-6 col-lg-9" +
                        (t % 2 === 0 ? " order-lg-1" : ""),
                    },
                    i.a.createElement(
                      "div",
                      { class: "wrapper" },
                      i.a.createElement(
                        "a",
                        { href: e.register_link, class: "meetup" },
                        e.guest_name
                      ),
                      i.a.createElement("h2", { class: "upper" }, e.summary),
                      i.a.createElement(
                        "h5",
                        { class: "group" },
                        e.details,
                        i.a.createElement("br", null)
                      ),
                      i.a.createElement(
                        "p",
                        { class: "details ml-3" },
                        i.a.createElement(
                          "span",
                          { class: "row" },
                          i.a.createElement("i", {
                            class: "fa fa-calendar fa-lg",
                          }),
                          i.a.createElement(
                            "span",
                            { class: "row-item" },
                            ""
                              .concat(o(e.start_timestamp), " - ")
                              .concat(o(e.end_timestamp))
                          )
                        ),
                        i.a.createElement(
                          "span",
                          { class: "row" },
                          i.a.createElement("i", {
                            class: "fa fa-map-marker fa-lg",
                          }),
                          i.a.createElement(
                            "span",
                            { class: "row-item" },
                            i.a.createElement("strong", null, e.venue)
                          )
                        ),
                        i.a.createElement(
                          "span",
                          { class: "row" },
                          i.a.createElement(
                            "a",
                            {
                              href: e.register_link,
                              target: "_blank",
                              className: "btn btn-primary m-0",
                              rel: "noopener noreferrer",
                            },
                            "REGISTER"
                          )
                        )
                      )
                    )
                  ),
                  i.a.createElement("br", null)
                );
              })
            )
          )
        );
      }
      n(126);
      var Mt = [
          {
            name: "Wingfotech Bot Exhibition",
            img: "https://concetto-front.s3.ap-south-1.amazonaws.com/GuestTalks/wingfotech.jpg",
            details:
              "concetto'19 in association with Wingfotech Pvt.Ltd.will have exhibitions for some of these cutting edge technologies to help our participants widen the horizon of their thoughts.;Ideas ranging from Brain Wave Devices to Spy Robots, from Humanoid Robot to Hexa Pod, from QuadCopter to IoT devices and so much more.This concetto, come, explore the endless possibilities and carve out an opportunity for yourself.",
          },
          {
            name: "CyberLabs Exhibition",
            img: "https://concetto-front.s3.ap-south-1.amazonaws.com/exhibitions/machineLearning.jpg",
            details:
              "The Cybersecurity and ML division of Cyberlabs in association with concetto is organizing an exhibition on various ethical hacking techniques and ML paradigm. We will showcase a variety of demonstrations such as Phishing Attacks, Key Loggers for Windows and Linux,Predator, a software which locks your PC when you are away, even if your Windows session is still active,Various Steganography tools,Parameter tampering, DDOS attack, famously used to hack 6 US banks simultaneously in 2012, Neural impainting, Auto colorization, Anime generation using gans,Music generation and many more.We cordially invite you to take part in the exhibition and expand your knowledge as well as get a glimpse of the vast world of Information Security and machine learning.",
          },
          {
            name: "RoboIsm Exhibition",
            img: "https://concetto-front.s3.ap-south-1.amazonaws.com/exhibitions/robot.jpg",
            details:
              "The robotics and ai club of iit ism dhanbad brings to us the star exhibiton of concetto\u201919.Few exciting robo projects include Laser tag jacket, a type of jacket which has  fire infrared beams, Cubesolver, Quadcopter and much more.We cordially invite you to take part in the exhibition and expand your knowledge as well as get a glimpse of the vast world of Robotics and artificial intelligence.",
          },
          {
            name: "IOT",
            dept: "Computer Science Engineering",
            img: "https://concetto-front.s3.ap-south-1.amazonaws.com/exhibitions/iot.jpg",
            details:
              "The department of computer science and enginerring presents to you Internet of Things (IoT) which is an ecosystem of connected physical things that are accessible through the internet. The 'Thing' in IoT could be a person with a heart monitor or an automobile with built-in-sensors, i.e. objects that have been assigned an IP address and could collect and transfer data over a network without manual intervention.We cordially invite you to take part in the exhibition and expand your knowledge as well as get a idea about IOT node based systems.",
          },
          {
            name: "3d printing",
            dept: "Electronics Engineering",
            img: "https://concetto-front.s3.ap-south-1.amazonaws.com/exhibitions/3DPrinting.jpg",
            details:
              "concetto\u201919 in association with department of  electronics enginerring brings to you the 3D Printing exhibition.It is a process of manufacturing 3 dimentional objects designed on computer & directly commanded by the computer to the printer. By this technology and equipment it is possible to print 3d objects of any size and design, most accurately and at cheaper cost quickly. From 3D printing (making) of automobiles and aircrafts critical parts, architectural scale models to human body parts (prosthetics) to human tissues, everything thought can be made through this technology. This is the reason this technology is named as Technical Revolution, and is taking rapid prototyping and limited production as storm. This has further made innovations now easier and accessible.",
          },
          {
            name: "OSA",
            dept: "Electronics Engineering",
            img: "https://concetto-front.s3.ap-south-1.amazonaws.com/exhibitions/optics.jpg",
            details:
              "concetto 19 in association with the optical society from the department of electronics engineering will be demonstrating live modules on bsc physical phenomenon related to optics.This presentation will be reinforcing the understanding of light dual wave- particle nature and its Interpretation with quantum mechanics.Visit and Colour your vization with blissfulness of optical wonders.",
          },
          {
            name: "Waste water to energy storage",
            dept: "Chemical",
            img: "https://concetto-front.s3.ap-south-1.amazonaws.com/exhibitions/wasteWaterToEnergy.jpg",
            details:
              "The power industry is facing change at a faster pace, than ever before.As policies and technologies change, markets favor the proactive and informed.The exhibition is focused on the power industry\u2019s latest research, technical advances, development trends and business strategies, including power plant operations, maintenance, performance, economics and many more strategies.The work is based on converting the harmful metal ion contaminated waste water into a useful working energy storage device(hybrid supercapacitor).",
          },
        ],
        At = (function (e) {
          function t() {
            return (
              Object(h.a)(this, t),
              Object(g.a)(this, Object(f.a)(t).apply(this, arguments))
            );
          }
          return (
            Object(b.a)(t, e),
            Object(p.a)(t, [
              {
                key: "componentDidMount",
                value: function () {
                  window.scrollTo(0, 0);
                },
              },
              {
                key: "render",
                value: function () {
                  return i.a.createElement(
                    "div",
                    { className: "bg-gradient" },
                    i.a.createElement(
                      W.Helmet,
                      null,
                      i.a.createElement("title", null, "concetto Exhibitions"),
                      i.a.createElement("meta", {
                        name: "description",
                        content:
                          "concetto, the annual Techno-management fest of IIT(ISM), organizes a variety of Exhibitions with the best in the business so that our participants feel lucid while competing with technical brilliance.",
                      }),
                      i.a.createElement("meta", {
                        name: "keywords",
                        content:
                          "wingfotech, iit ism dhanbad techfest, iit dhanbad techfest, iit dhanbad Exhibitions, concetto,concetto 19,concetto 2019,concetto 2k19,concetto IIT,concetto IIT (ISM) DHANBAD,concetto IIT ISM, concetto techfest,concetto tecnical fest, concetto 2019-2020, concetto tech fest 19,concetto tech fest 2019,IIT ISM, IIT (ISM) DHANBAD, events, exhibition, Exhibitions,Techno-management fest",
                      })
                    ),
                    i.a.createElement(be, null),
                    i.a.createElement("br", null),
                    i.a.createElement(
                      "h1",
                      {
                        style: {
                          textAlign: "center",
                          marginTop: "60px",
                          color: "white",
                          fontSize: "52px",
                          fontFamily: "'Montserrat', sans-serif",
                        },
                        className: "title",
                      },
                      "Exhibitions"
                    ),
                    "\xa0\u0330",
                    i.a.createElement(
                      "div",
                      { className: "container" },
                      Mt.map(function (e, t) {
                        return i.a.createElement(
                          i.a.Fragment,
                          { key: t.toString() },
                          i.a.createElement("hr", {
                            class: "featurette-divider",
                            style: 0 !== t ? { margin: "2rem" } : null,
                          }),
                          i.a.createElement(
                            "div",
                            { class: "row featurette" },
                            i.a.createElement(
                              "div",
                              {
                                class:
                                  "col-md-5 " +
                                  (t % 2 === 0 ? "order-md-2" : ""),
                                style: {
                                  display: "flex",
                                  alignItems: "center",
                                  flexWrap: "wrap",
                                },
                              },
                              i.a.createElement("img", {
                                src: e.img,
                                class:
                                  "bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto rounded shadow",
                                width: "500",
                                height: "500",
                                xmlns: "http://www.w3.org/2000/svg",
                                preserveAspectRatio: "xMidYMid slice",
                                focusable: "false",
                                "aria-label": "Placeholder: 500x500",
                                alt: e.name,
                              })
                            ),
                            i.a.createElement(
                              "div",
                              {
                                class:
                                  "col-md-7 glassCard " +
                                  (t % 2 === 0 ? "order-md-1" : ""),
                              },
                              i.a.createElement(
                                "h2",
                                {
                                  class: "featurette-heading",
                                  align: "center",
                                },
                                e.name
                              ),
                              e.details.split(";").map(function (e) {
                                return i.a.createElement(
                                  "p",
                                  { className: "featurette-text" },
                                  e
                                );
                              })
                            )
                          )
                        );
                      }),
                      i.a.createElement("br", null)
                    )
                  );
                },
              },
            ]),
            t
          );
        })(r.Component),
        zt = n(166);
      n(127);
      function Dt() {
        var e = Object(H.a)(["\n  height: 120px !important;\n"]);
        return (
          (Dt = function () {
            return e;
          }),
          e
        );
      }
      function _t() {
        var e = Object(H.a)([
          '\n  text-align: center;\n  margin-top: 40px;\n  letter-spacing: -2px;\n  color: white;\n  font-size: 36px;\n  font-family: "Moneterrat", sans-serif;\n',
        ]);
        return (
          (_t = function () {
            return e;
          }),
          e
        );
      }
      function Rt() {
        var e = Object(H.a)([
          '\n  text-align: center;\n  margin-top: 52px;\n  margin-bottom: 0px;\n  letter-spacing: -2px;\n  color: cyan !important;\n  font-size: 44px !important;\n  font-family: "Montserrat", sans-serif;\n',
        ]);
        return (
          (Rt = function () {
            return e;
          }),
          e
        );
      }
      function Wt() {
        var e = Object(H.a)([
          "\n  position: relative;\n  background: rgba(255, 255, 255, 0.1);\n  box-shadow: 0 8px 32px 0 rgb(31 38 135 / 37%);\n  backdrop-filter: blur(12px);\n  -webkit-backdrop-filter: blur(12px);\n  border-radius: 10px;\n  border: 1px solid rgba(255, 255, 255, 0.18);\n  justify-content: center;\n",
        ]);
        return (
          (Wt = function () {
            return e;
          }),
          e
        );
      }
      var Bt = Object(L.a)(zt.a)(Wt()),
        Pt = L.a.h2(Rt()),
        Ht = L.a.h3(_t()),
        Lt = L.a.img(Dt());
      function Ft() {
        var e = Object(r.useState)(null),
          t = Object(u.a)(e, 2),
          n = t[0],
          a = t[1],
          o = Object(r.useState)([]),
          c = Object(u.a)(o, 2),
          s = c[0],
          l = c[1];
        return (
          Object(r.useEffect)(function () {
            window.addEventListener("resize", function () {
              a(window.innerHeight);
            });
          }),
          Object(r.useEffect)(function () {
            fetch("https://admin.concetto.in/sponsors/", { mode: "cors" })
              .then(function (e) {
                return e.json();
              })
              .then(function (e) {
                return l(e);
              });
          }, []),
          i.a.createElement(
            i.a.Fragment,
            null,
            i.a.createElement(be, null),
            i.a.createElement(
              "section",
              {
                className: "sponsors",
                style: { minHeight: { windowHeight: n } + "px" },
              },
              i.a.createElement(Pt, null, "Sponsors"),
              i.a.createElement(Ht, null, "Major Sponsors "),
              i.a.createElement(
                Bt,
                null,
                i.a.createElement(
                  "div",
                  { className: "sponsors-list" },
                  s.map(function (e) {
                    if ("Major Sponsors" == e.category)
                      return i.a.createElement(
                        "a",
                        { href: e.url, target: "_blank" },
                        i.a.createElement(Lt, { src: e.logo })
                      );
                  })
                )
              ),
              i.a.createElement(Ht, null, "Skill Development Partner"),
              i.a.createElement(
                Bt,
                null,
                i.a.createElement(
                  "div",
                  { className: "sponsors-list" },
                  s.map(function (e) {
                    if ("Skill Development Partner" == e.category)
                      return i.a.createElement(
                        "a",
                        { href: e.url, target: "_blank" },
                        i.a.createElement(Lt, { src: e.logo })
                      );
                  })
                )
              ),
              i.a.createElement(Ht, null, "Event Sponsor"),
              i.a.createElement(
                Bt,
                null,
                i.a.createElement(
                  "div",
                  { className: "sponsors-list" },
                  s.map(function (e) {
                    if ("Event Sponsor" == e.category)
                      return i.a.createElement(
                        "a",
                        { href: e.url, target: "_blank" },
                        i.a.createElement(Lt, { src: e.logo })
                      );
                  })
                )
              ),
              i.a.createElement(Ht, null, "Food Partner"),
              i.a.createElement(
                Bt,
                null,
                i.a.createElement(
                  "div",
                  { className: "sponsors-list" },
                  s.map(function (e) {
                    if ("Food Partner" == e.category)
                      return i.a.createElement(
                        "a",
                        { href: e.url, target: "_blank" },
                        i.a.createElement(Lt, { src: e.logo })
                      );
                  })
                )
              ),
              i.a.createElement(Ht, null, "Education Sponsor"),
              i.a.createElement(
                Bt,
                null,
                i.a.createElement(
                  "div",
                  { className: "sponsors-list" },
                  s.map(function (e) {
                    if ("Education Sponsor" == e.category)
                      return i.a.createElement(
                        "a",
                        { href: e.url, target: "_blank" },
                        i.a.createElement(Lt, { src: e.logo })
                      );
                  })
                )
              ),
              i.a.createElement(Ht, null, "Hospitality Partner"),
              i.a.createElement(
                Bt,
                null,
                i.a.createElement(
                  "div",
                  { className: "sponsors-list" },
                  s.map(function (e) {
                    if ("Hospitality Partner" == e.category)
                      return i.a.createElement(
                        "a",
                        { href: e.url, target: "_blank" },
                        i.a.createElement(Lt, { src: e.logo })
                      );
                  })
                )
              ),
              i.a.createElement(Ht, null, "Technology Service Partner"),
              i.a.createElement(
                Bt,
                null,
                i.a.createElement(
                  "div",
                  { className: "sponsors-list" },
                  s.map(function (e) {
                    if ("Technology Service Partner" == e.category)
                      return i.a.createElement(
                        "a",
                        { href: e.url, target: "_blank" },
                        i.a.createElement(Lt, { src: e.logo })
                      );
                  })
                )
              ),
              i.a.createElement(Ht, null, "Books Partner"),
              i.a.createElement(
                Bt,
                null,
                i.a.createElement(
                  "div",
                  { className: "sponsors-list" },
                  s.map(function (e) {
                    if ("Books Partner" == e.category)
                      return i.a.createElement(
                        "a",
                        { href: e.url, target: "_blank" },
                        i.a.createElement(Lt, { src: e.logo })
                      );
                  })
                )
              )
            )
          )
        );
      }
      var Ut = [
          {
            name: "PUBG",
            description:
              "Timing of match will be announced on the WhatsApp group. ;;Paytm: 9386667625 Only paytm. ; ",
            about:
              "The certain anxiety of staying alive, an element of gambling in weapons you find along with the adrenaline rush of intense fights is what makes pubg one of the greatest games ever. Now The wait to play your most favourite battle royale is over. concetto\u201919 presents pubg mobile tournament where you can show off your pubg skills and earn money. See you on the streets of Pochinki..!",
            rules:
              "(SQUAD) Entry fee for each squad is 200 rupees. The team leader can register for his entire team.; (Solo) Entry fee for each player is 50 rupees.;\tUsing Emulators is allowed.;Matches will be conducted in TPP erangal  mode .;If anyone is found cheating or using hacks, he and his team will be disqualified immediately.;Players should provide their actual in game name(case sensitive).Unregistered players e ntering the room will be kicked out.;Participants can be from any college.;You need to take the screenshot when you/ your team is / are eliminated",
            img: "https://concetto-front.s3.ap-south-1.amazonaws.com/informalEvents/pubG.jpg",
            prizes: "",
            fee: 0,
            timing: "",
            day: 0,
            admins: ["9386667625"],
            link: "https://forms.gle/vY3r2amYLodPAd8s9",
            pdf: "https://drive.google.com/file/d/1Bvy7Ooxg99lEWe_KogHnGGE-d24LnJy_/view?fbclid=IwAR029iPUsBXR_R8jfUjPIboLVTqKdyAnBemMDsSZbJUfagjMjVTDrHIPCeY",
          },
          {
            name: "Paper Dance",
            description: "",
            about:
              "Show us the way you groove, feel the music as it speeds up and the paper folds down, take on the challenge and show us what you got as concetto'19 brings to you Paper dance. Bring your partner whoever it may be your friend, 'best friend' or your soulmate. The event is being sponsored and endorsed by Bahamas. ",
            rules:
              "Individual entries not allowed .Participants must register in pairs.; Each pair stands on the paper. They may only touch the paper but not the floor. As soon as the music is turned on, the pairs have to 'dance' as best as possible. Any team touching the floor is out of the game.; After some time, the music stops and the referee orders the paper to be folded in half (teams may step on the floor during that time). Then, the music (and dancing) starts again. The team that manages to 'survive' the dancing as last pair has of course won the game.",
            img: "https://concetto-front.s3.ap-south-1.amazonaws.com/informalEvents/paperDance.jpg",
            prizes: "",
            fee: 0,
            timing: "",
            day: 0,
            admins: [
              " Aryan Sharma - 6205182883",
              "Utkarsh Anand - 7070520276 ",
            ],
            link: "https://docs.google.com/forms/d/1RfKm76__VWeEcGuFnrplmtipAaRda1mVZ59lNeKBuzc/edit?usp=drivesdk",
            pdf: "",
          },
          {
            name: "Blind Date",
            about:
              'Need a break from all the technical bonanza of the biggest Techno-Management fest of Eastern India? concetto presents to all, Blind Date.A Blind Date is a social tweet- up game between two people who have not previously met.The event is organized "only for all the first years" irrespective of their course and degree.The event is sponsored and endorsed by Bahamas.Fill the questionnaire provided in the registration link below to ensure a perfect match',
            description:
              "Couples would be presented with coupons of their romantic date at Bahamas and winning couple will get a free romantic date along with other exciting coupons and goodies. So explore all your possibilities this concetto-2019 because Love is in the air. ",
            rules:
              "If the picture provided is not yours, you'll be disqualified.;If you aren't a first year student of IIT (ISM) Dhanbad, you'll be disqualified.;You'll have to show your Id card just before the organizers provide you the name of your Blind date.",
            img: "https://concetto-front.s3.ap-south-1.amazonaws.com/informalEvents/blindDate.jpg",
            prizes: "",
            fee: 0,
            timing: "",
            day: 0,
            admins: [
              " Aryan Sharma - 6205182883",
              "Utkarsh Anand - 7070520276 ",
            ],
            link: "https://docs.google.com/forms/d/1VwYRnTInWims0KHYqnm_NgobglpDIP1NzZxuBIu3XhM/edit?usp=drivesdk",
            pdf: "",
          },
          {
            name: "EDM Night",
            description:
              'Yes, concetto\'19 feels enthusiastic to announce the association of DJ Carnivore with concetto for DJ night in association with NCM and White Heaven Entertainments Pvt Ltd. Let yourself go as they say, "FUN BEGINS WHEN YOU UNFAKE IT!"',
            about:
              "There was a time when engineers were believed to be boring, tech-savvy, nerds who didn't have any fun in their life. Well, times have changed and now, they know how to add life to any party. Imagine a night when so many engineers let themselves go to the tunes of DJ Carnivore.",
            rules: "Just Enjoy the night !",
            img: "https://concetto-front.s3.ap-south-1.amazonaws.com/informalEvents/carnivore.jpg",
            prizes: "",
            fee: 0,
            timing: "19:30 ONWARDS",
            day: 3,
            link: "",
            pdf: "https://www.facebook.com/djCarnivoreMusic/?__tn__=K-R&eid=ARCqBOU72lASwZxttU2Bye5g2q1e1xQB-LsWSAMniLnV-EkHCwHWz5C8R9qPuQPLqhUiJPXHHqxIgfId&fref=mentions&__xts__%5B0%5D=68.ARBXXfo1E_o7pHw86rpWoEuEshUPrpLmo12n9KcjpJMg6sxrg8bLpe5hp02CSuXM3_T2jgcOu1fpZcY1cVRPoGvC3SP4RR2tK9e6i8McQQMVohU-sf45KvxTrh72-igP7f70zbU6TXh0C3W96g8tkVVBnipC-1-smls4g63Lti0MzsuehuLFLUxBk2bGrX9keedAwas6qHsoVgrfnyl_PxwQM_GdrMG2rusyasWsHWcWIU-66G3okxdL5QY2vYHrnjyhLrJDpFXz7b2FxPXFRe4JbjQoxUZrUdyKsYAe-ht-L8zzH-YNofPhlr8zOYXdbKT9AjSKsCoJ7FzroWKpdvz3fg",
          },
        ],
        Gt = [
          {
            img: "https://concetto-front.s3.ap-south-1.amazonaws.com/Sponsors/JCSTI-title-cropped.webp",
            is_title: !0,
            link: "https://dst.gov.in/jharkhand",
            cat: "",
          },
          {
            img: "https://concetto-front.s3.ap-south-1.amazonaws.com/Sponsors/LTConstructionWET.png",
            is_title: !1,
            link: "https://www.larsentoubro.com/corporate/products-and-services/construction/water-effluent-treatment/",
            cat: "Major Sponsors",
          },
          {
            img: "https://concetto-front.s3.ap-south-1.amazonaws.com/Sponsors/NTFC-bronze+sponsor.webp",
            is_title: !1,
            link: "https://www.ntpc.co.in/",
            cat: "Major Sponsors",
          },
          {
            img: "https://concetto-front.s3.ap-south-1.amazonaws.com/Sponsors/99Group.jpg",
            is_title: !1,
            link: "http://99group.in/",
            cat: "General Sponsors",
          },
          {
            img: "https://concetto-front.s3.ap-south-1.amazonaws.com/Sponsors/Home-Central.jpg",
            is_title: !1,
            link: "https://home-central.business.site/",
            cat: "General Sponsors",
          },
          {
            img: "https://concetto-front.s3.ap-south-1.amazonaws.com/Sponsors/Techno-Scientific.jpg",
            is_title: !1,
            link: "https://www.techno-scientific.com/",
            cat: "General Sponsors",
          },
          {
            img: "https://concetto-front.s3.ap-south-1.amazonaws.com/Sponsors/ONGC.jpg",
            is_title: !1,
            link: "https://www.ongcindia.com/",
            cat: "Event Sponsors",
          },
          {
            img: "https://concetto-front.s3.ap-south-1.amazonaws.com/Sponsors/POONAM-Emporium.jpeg",
            is_title: !1,
            link: "",
            cat: "Event Sponsors",
          },
          {
            img: "https://concetto-front.s3.ap-south-1.amazonaws.com/Sponsors/rapido.jpg",
            is_title: !1,
            link: "https://rapido.bike/",
            cat: "Travel Partner",
          },
          {
            img: "https://concetto-front.s3.ap-south-1.amazonaws.com/Sponsors/IES+MASTER.jpg",
            is_title: !1,
            link: "https://iesmaster.org/",
            cat: "Education Partner",
          },
          {
            img: "https://concetto-front.s3.ap-south-1.amazonaws.com/Sponsors/vistara+airlines.jpg",
            is_title: !1,
            link: "https://www.airvistara.com/",
            cat: "Airlines Partner",
          },
          {
            img: "https://concetto-front.s3.ap-south-1.amazonaws.com/Sponsors/99News.webp",
            is_title: !1,
            link: "http://99news.co/",
            cat: "Media Partner",
          },
          {
            img: "https://concetto-front.s3.ap-south-1.amazonaws.com/Sponsors/cocacola.webp",
            is_title: !1,
            link: "https://www.coca-colacompany.com/",
            cat: "Beverage Partner",
          },
          {
            img: "https://concetto-front.s3.ap-south-1.amazonaws.com/Sponsors/Bhamas.jpg",
            is_title: !1,
            link: "",
            cat: "Food Partner",
          },
          {
            img: "https://concetto-front.s3.ap-south-1.amazonaws.com/Sponsors/Champaran.jpg",
            is_title: !1,
            link: "",
            cat: "Food Partner",
          },
          {
            img: "https://concetto-front.s3.ap-south-1.amazonaws.com/Sponsors/Pabrai-s.jpg",
            is_title: !1,
            link: "",
            cat: "Food Partner",
          },
          {
            img: "https://concetto-front.s3.ap-south-1.amazonaws.com/Sponsors/BINGO-comedy.jpg",
            is_title: !1,
            link: "http://bingosnacks.com/comedy-adda/",
            cat: "Entertainment Partner",
          },
          {
            img: "https://concetto-front.s3.ap-south-1.amazonaws.com/Sponsors/DiscountBazaar.png",
            is_title: !1,
            link: "",
            cat: "Coupon Partner",
          },
          {
            img: "https://concetto-front.s3.ap-south-1.amazonaws.com/Sponsors/Baithak.jpg",
            is_title: !1,
            link: "",
            cat: "Coupon Partner",
          },
          {
            img: "https://concetto-front.s3.ap-south-1.amazonaws.com/Sponsors/R-Launch.jpeg",
            is_title: !1,
            link: "",
            cat: "Coupon Partner",
          },
          {
            img: "https://concetto-front.s3.ap-south-1.amazonaws.com/Sponsors/Coding+Blocks.webp",
            is_title: !1,
            link: "https://codingblocks.com/",
            cat: "Build-a-bit Sponsors",
          },
          {
            img: "https://concetto-front.s3.ap-south-1.amazonaws.com/Sponsors/CNLOGO.svg",
            is_title: !1,
            link: "https://www.codingninjas.in/",
            cat: "Build-a-bit Sponsors",
          },
          {
            img: "https://concetto-front.s3.ap-south-1.amazonaws.com/Sponsors/kanjoos.jpg",
            is_title: !1,
            link: "",
            cat: "Build-a-bit Sponsors",
          },
          {
            img: "https://concetto-front.s3.ap-south-1.amazonaws.com/Sponsors/codechef.webp",
            is_title: !1,
            link: "https://www.codechef.com/",
            cat: "Build-a-bit Sponsors",
          },
          {
            img: "https://concetto-front.s3.ap-south-1.amazonaws.com/Sponsors/skillenza.webp",
            is_title: !1,
            link: "https://skillenza.com/",
            cat: "Build-a-bit Sponsors",
          },
          {
            img: "https://concetto-front.s3.ap-south-1.amazonaws.com/Sponsors/geeksforgeeks.png",
            is_title: !1,
            link: "https://www.geeksforgeeks.org/",
            cat: "Build-a-bit Sponsors",
          },
          {
            img: "https://concetto-front.s3.ap-south-1.amazonaws.com/Sponsors/foxmula.jpg",
            is_title: !1,
            link: "https://foxmula.com/",
            cat: "Build-a-bit Sponsors",
          },
        ];
      n(136);
      var Yt = Object(we.g)(function (e) {
        var t = Object(r.useState)(!1),
          n = Object(u.a)(t, 2),
          a = n[0],
          o = n[1],
          c = Object(r.useState)([]),
          s = Object(u.a)(c, 2),
          l = s[0],
          h = s[1];
        function p() {
          a || o(!0);
        }
        function g() {
          a && o(!1);
        }
        Object(r.useEffect)(
          Object(d.a)(
            m.a.mark(function e() {
              return m.a.wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (e.next = 2),
                        fetch("https://admin.concetto.in/events/", {
                          mode: "cors",
                        })
                          .then(function (e) {
                            return e.json();
                          })
                          .then(function (e) {
                            return h(e);
                          })
                      );
                    case 2:
                    case "end":
                      return e.stop();
                  }
              }, e);
            })
          ),
          []
        );
        var f = function (e) {
            var t = e.match,
              n = l.filter(function (e) {
                return e.name.split(" ").join("-") === t.params.eventName;
              })[0];
            return void 0 === n
              ? i.a.createElement(ct, null)
              : i.a.createElement(Be, { event: n, active: "about" });
          },
          b = function (e) {
            var t = e.match,
              n = l.filter(function (e) {
                return e.name.split(" ").join("-") === t.params.eventName;
              })[0];
            return void 0 === n
              ? i.a.createElement(ct, null)
              : i.a.createElement(Be, { event: n, active: "rules" });
          },
          v = function (e) {
            var t = e.match,
              n = l.filter(function (e) {
                return e.name.split(" ").join("-") === t.params.eventName;
              })[0];
            return void 0 === n
              ? i.a.createElement(ct, null)
              : i.a.createElement(Be, { event: n, active: "details" });
          },
          E = function (e) {
            var t = e.match,
              n = l.filter(function (e) {
                return e.name.split(" ").join("-") === t.params.eventName;
              })[0];
            return void 0 === n
              ? i.a.createElement(ct, null)
              : i.a.createElement(Be, { event: n, active: "register" });
          };
        return i.a.createElement(
          "div",
          { className: "App" },
          i.a.createElement(
            we.d,
            { location: e.location },
            "zz",
            " ",
            i.a.createElement(we.b, {
              exact: !0,
              path: "/home",
              component: function () {
                return i.a.createElement(P, { makeShowLogo: p, hideLogo: g });
              },
            }),
            i.a.createElement(we.b, {
              exact: !0,
              path: "/our-team",
              component: function () {
                return i.a.createElement(it, null);
              },
            }),
            i.a.createElement(we.b, {
              exact: !0,
              path: "/coming-soon",
              component: function () {
                return i.a.createElement(ct, null);
              },
            }),
            i.a.createElement(we.b, {
              exact: !0,
              path: "/workshops",
              component: function () {
                return i.a.createElement(yt, null);
              },
            }),
            i.a.createElement(we.b, {
              exact: !0,
              path: "/exhibitions",
              component: function () {
                return i.a.createElement(At, null);
              },
            }),
            i.a.createElement(we.b, {
              exact: !0,
              path: "/about-us",
              component: function () {
                return i.a.createElement(Nt, null);
              },
            }),
            i.a.createElement(we.b, {
              exact: !0,
              path: "/guest-talks",
              component: function () {
                return i.a.createElement(St, null);
              },
            }),
            i.a.createElement(we.b, {
              exact: !0,
              path: "/department-events",
              component: function () {
                return i.a.createElement(Ee, { events: l, active: 0 });
              },
            }),
            i.a.createElement(we.b, {
              exact: !0,
              path: "/club-events",
              component: function () {
                return i.a.createElement(Ee, { events: l, active: 1 });
              },
            }),
            i.a.createElement(we.b, {
              exact: !0,
              path: "/informal-events",
              component: function () {
                return i.a.createElement(Et, { Informals: Ut });
              },
            }),
            i.a.createElement(we.b, {
              path: "/department-events/:eventName/about",
              component: f,
            }),
            i.a.createElement(we.b, {
              path: "/department-events/:eventName/rules",
              component: b,
            }),
            i.a.createElement(we.b, {
              path: "/department-events/:eventName/details",
              component: v,
            }),
            i.a.createElement(we.b, {
              path: "/department-events/:eventName/register",
              component: E,
            }),
            i.a.createElement(we.b, {
              exact: !0,
              path: "/department-events/:eventName",
              component: function (e) {
                var t = e.match;
                return i.a.createElement(we.a, {
                  to: {
                    pathname: "/department-events/".concat(
                      t.params.eventName,
                      "/about"
                    ),
                  },
                });
              },
            }),
            i.a.createElement(we.b, {
              path: "/club-events/:eventName/about",
              component: f,
            }),
            i.a.createElement(we.b, {
              path: "/club-events/:eventName/rules",
              component: b,
            }),
            i.a.createElement(we.b, {
              path: "/club-events/:eventName/details",
              component: v,
            }),
            i.a.createElement(we.b, {
              path: "/club-events/:eventName/register",
              component: E,
            }),
            i.a.createElement(we.b, {
              exact: !0,
              path: "/club-events/:eventName",
              component: function (e) {
                var t = e.match;
                return i.a.createElement(we.a, {
                  to: {
                    pathname: "/club-events/".concat(
                      t.params.eventName,
                      "/about"
                    ),
                  },
                });
              },
            }),
            i.a.createElement(we.b, {
              path: "/informal-events/:eventName/about",
              component: function (e) {
                var t = e.match,
                  n = Ut.filter(function (e) {
                    return e.name.split(" ").join("-") === t.params.eventName;
                  })[0];
                return void 0 === n
                  ? i.a.createElement(ct, null)
                  : i.a.createElement(Be, { event: n, active: "about" });
              },
            }),
            i.a.createElement(we.b, {
              path: "/informal-events/:eventName/rules",
              component: function (e) {
                var t = e.match,
                  n = Ut.filter(function (e) {
                    return e.name.split(" ").join("-") === t.params.eventName;
                  })[0];
                return void 0 === n
                  ? i.a.createElement(ct, null)
                  : i.a.createElement(Be, { event: n, active: "rules" });
              },
            }),
            i.a.createElement(we.b, {
              path: "/informal-events/:eventName/details",
              component: function (e) {
                var t = e.match,
                  n = Ut.filter(function (e) {
                    return e.name.split(" ").join("-") === t.params.eventName;
                  })[0];
                return void 0 === n
                  ? i.a.createElement(ct, null)
                  : i.a.createElement(Be, { event: n, active: "details" });
              },
            }),
            i.a.createElement(we.b, {
              path: "/informal-events/:eventName/register",
              component: function (e) {
                var t = e.match,
                  n = Ut.filter(function (e) {
                    return e.name.split(" ").join("-") === t.params.eventName;
                  })[0];
                return void 0 === n
                  ? i.a.createElement(ct, null)
                  : i.a.createElement(Be, { event: n, active: "register" });
              },
            }),
            i.a.createElement(we.b, {
              exact: !0,
              path: "/informal-events/:eventName",
              component: function (e) {
                var t = e.match;
                return i.a.createElement(we.a, {
                  to: {
                    pathname: "/informal-events/".concat(
                      t.params.eventName,
                      "/about"
                    ),
                  },
                });
              },
            }),
            i.a.createElement(we.b, {
              path: "/sponsors",
              component: function () {
                return i.a.createElement(Ft, { sponsors: Gt });
              },
            }),
            i.a.createElement(we.a, { to: "/home" })
          )
        );
      });
      n(132), n(133), n(134);
      var qt = function () {
        return i.a.createElement(
          i.a.Fragment,
          null,
          i.a.createElement(
            x.a,
            null,
            i.a.createElement(
              "div",
              { className: "App" },
              i.a.createElement(Yt, null)
            )
          )
        );
      };
      Boolean(
        "localhost" === window.location.hostname ||
          "[::1]" === window.location.hostname ||
          window.location.hostname.match(
            /^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/
          )
      );
      s.a.render(i.a.createElement(qt, null), document.getElementById("root")),
        "serviceWorker" in navigator &&
          navigator.serviceWorker.ready.then(function (e) {
            e.unregister();
          });
    },
    65: function (e, t, n) {},
    93: function (e, t, n) {
      e.exports = n(135);
    },
  },
  [[93, 1, 2]],
]);
//# sourceMappingURL=main.e928e78a.chunk.js.map
