import React, { useState, useEffect, Suspense } from "react";
import Header from "../Header";
import Card from "./Card";
import "./styles.css";
import { Helmet } from "react-helmet";
import Footer from "../Footer";
import { encryptData, decryptData } from "../../Encryption/encrypt";

const styles = (theme) => ({
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
    "&:hover": {
      color: "#000",
      opacity: 1,
    },
    "&$tabSelected": {
      color: "white",
      backgroundColor: "rgba(0, 0, 0, 0.6)",

      fontWeight: "bold",
    },
  },
  tabsRoot: {
    minWidth: "50%",
    borderBottom: "1px solid #e8e8e8",
  },
  tabsIndicator: {
    backgroundColor: "#1890ff",
  },
  tab: {
    width: "100%",
  },
  tabSelected: {},
});

export default function OurTeam() {
  const [coreTeam, setCoreTeam] = useState(null);
  const [developers, setDevelopers] = useState(null);

  const fetchData = async () => {
    fetch("https://srijan.herokuapp.com/organisingteammembers/", {
      mode: "cors",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        const newData = data.sort(function (a, b) {
          return a.id - b.id;
        });
        setCoreTeam(newData);

        console.log(newData);
      })
      .catch(() => {
        alert("You are offline!!!");
      });
    fetch("https://srijan.herokuapp.com/developers/", { mode: "cors" })
      .then((res) => res.json())
      .then((data) => setDevelopers(data))
      .catch(() => {
        alert("You are offline!!!");
      });
  };

  useEffect(() => {
    if (typeof coreTeam === "undefined" || coreTeam == null) {
      if (localStorage.getItem("coreteam") !== null) {
        setCoreTeam(decryptData(localStorage.getItem("coreteam")));
      } else {
        fetchData();
      }
    }
    if (typeof developers === "undefined" || developers == null) {
      if (localStorage.getItem("developers") !== null) {
        setDevelopers(decryptData(localStorage.getItem("developers")));
      } else {
        fetchData();
      }
    }
  }, []);

  useEffect(() => {
    if (coreTeam != null)
      window.localStorage.setItem("coreteam", encryptData(coreTeam));
    if (developers != null)
      window.localStorage.setItem("developers", encryptData(developers));
  }, [coreTeam, developers]);

  // useEffect(() => {
  //   fetch("https://srijan.herokuapp.com/organisingteammembers/", {
  //     mode: "cors",
  //   })
  //     .then((res) => res.json())
  //     .then((data) => {
  //       console.log(data);
  //       const newData = data.sort(function (a, b) {
  //         return a.id - b.id;
  //       });
  //       setCoreTeam(newData);

  //       console.log(newData);
  //     })
  //     .catch(() => {
  //       alert("You are offline!!!");
  //     });
  // }, []);
  // useEffect(() => {
  //   fetch("https://srijan.herokuapp.com/developers/", { mode: "cors" })
  //     .then((res) => res.json())
  //     .then((data) => setDevelopers(data))
  //     .catch(() => {
  //       alert("You are offline!!!");
  //     });
  // }, []);

  return (
    <div className="team-page">
      <Helmet>
        <title>Srijan Team</title>
        <meta
          name="description"
          content="srijan is one of the largest Techno-management fest of IIT (ISM) Dhanbad in Eastern India with a massive participation of more than 2000 participants from 300 different colleges and institutes. Meet the core-team and developers of srijan here."
        />
        <meta
          name="keywords"
          content="iit ism dhanbad techfest, iit dhanbad techfest,srijan,srijan 22,srijan 2022,srijan 2k22,srijan IIT,srijan IIT (ISM) DHANBAD,srijan IIT ISM, srijan core-team, srijan developers, srijan techfest,srijan tecnical fest, srijan 2022-2023, srijan tech fest 22,srijan tech fest 2022,IIT ISM, IIT (ISM) DHANBAD, events, exhibition, Workshops,Techno-management fest"
        />
      </Helmet>
      <Header />

      {/* <div className={classes.mobileTab}>
        <AppBar
          style={{
            backgroundColor: "#1b2d50",
            overflow: "hidden",
            zIndex: 10
          }}
          position="fixed"
        >
          <Tab>
            <Header />
          </Tab>
          <Tabs
            value={active}
            indicatorColor="#666666"
            textColor="secondary"
            className={classes.tab}
          >
            <Tab
              label="Core Team"
              classes={{ root: classes.tabRoot, selected: classes.tabSelected }}
              component={Link}
              to="core-team"
            />
            <Tab
              label="Developers"
              classes={{ root: classes.tabRoot, selected: classes.tabSelected }}
              component={Link}
              to="developers"
            />
          </Tabs>
        </AppBar>
        <br />
        {active === true && <CardList members={coreTeam} />}
        {active === false && <CardList members={developers} />}
        <br />
      </div> */}

      <br />
      <br />
      <h2 align="center" className="title highlighted">
        CORE TEAM
      </h2>

      <br />
      <div className="container team">
        <div className="row mt-2 mb-2 justify-content-center">
          {coreTeam &&
            coreTeam.map((person) => (
              <Card key={person.name} member={person}></Card>
            ))}
        </div>
      </div>
      <h2 align="center" className="title highlighted">
        DEVELOPERS
      </h2>

      <br />

      <div className="container team">
        <div className="row mt-2 mb-2 justify-content-center">
          {developers &&
            developers.map((person) => (
              <Card key={person.name} member={person}></Card>
            ))}
        </div>
      </div>
    </div>
  );
}
