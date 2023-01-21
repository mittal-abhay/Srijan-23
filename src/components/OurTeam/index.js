import React, { useState, useEffect } from "react";
import Header from "../Header";
import Card from "./Card";
import "./styles.css";
import { Helmet } from "react-helmet";
import { encryptData, decryptData } from "../../Encryption/encrypt";
import Loading from "../Loading/Loading";
import { API_BASE_URL } from "../../data/Constants";

export default function OurTeam() {
  const [coreTeam, setCoreTeam] = useState(null);
  const [developers, setDevelopers] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    fetch(`${API_BASE_URL}/organisingteammembers/`, {
      method: "get",
    })
      .then((res) => res.json())
      .then((data) => {
        const newData = data.sort(function (a, b) {
          return a.id - b.id;
        });
        setCoreTeam(newData);
      })
      .catch(() => {
        alert("You are offline!!!");
      });
    fetch(`${API_BASE_URL}/developers/`, { method: "get" })
      .then((res) => res.json())
      .then((data) => {
        setDevelopers(data);
      })
      .catch(() => {
        alert("You are offline!!!");
      });
  };

  useEffect(() => {
    if (typeof coreTeam === "undefined" || coreTeam == null) {
      if (sessionStorage.getItem("coreteam") !== null) {
        setCoreTeam(decryptData(sessionStorage.getItem("coreteam")));
      } else {
        fetchData();
      }
    }
    if (typeof developers === "undefined" || developers == null) {
      if (sessionStorage.getItem("developers") !== null) {
        setDevelopers(decryptData(sessionStorage.getItem("developers")));
      } else {
        fetchData();
      }
    }
  }, []);

  useEffect(() => {
    if (coreTeam != null) {
      window.sessionStorage.setItem("coreteam", encryptData(coreTeam));
      setLoading(false);
    }
    if (developers != null) {
      window.sessionStorage.setItem("developers", encryptData(developers));
      setLoading(false);
    }
  }, [coreTeam, developers]);

  if (loading) return <Loading />;

  return (
    <div className="team-page">
      <Helmet>
        <title>Srijan | Our-Team</title>
        <meta
          name="description"
          content="Srijan is the biggest socio-cultural festival in eastern India, which has been in the limelight since 1977. It attracts an annual footfall of over 30,000 from more than 200 colleges across the country and has prize money worth more than INR 7.5 lakhs. It offers a fantastic platform where participants from different parts of thecountry get an opportunity to interact, enhance and demonstrate their creativity, personality, and talents."
        />
        <meta
          name="keywords"
          content="iit ism dhanbad socio-cultural fest, iit dhanbad socio-cultural fest,srijan,srijan 23,srijan 2023,srijan 2k23,srijan IIT,srijan IIT (ISM) DHANBAD,srijan IIT ISM, srijan core-team, srijan developers, srijan socio-cultural fest, srijan 2022-2023, srijan socio-cultural fest 23,IIT ISM, IIT (ISM) DHANBAD, events, exhibition, Workshops,socio-cultural fest"
        />
      </Helmet>
      <Header />

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
