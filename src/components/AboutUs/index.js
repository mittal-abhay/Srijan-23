import React, { Component } from "react";
import Header from "../Header";
import "./styles.css";
import { Helmet } from "react-helmet";
import CSREventDisplay from "./CSREventDisplay";
import { Card, CardImg, CardBody, CardHeader, Button } from "reactstrap";
class AboutUs extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div className="theme-page">
        <Helmet>
          <title>srijan</title>
          <meta
            name="description"
            content="srijan is one of the largest Techno-management fest of IIT (ISM) Dhanbad in Eastern India with a massive participation of more than 2000 participants from 300 different colleges and institutes. Know about the theme of this year - To the moon and back."
          />
          <meta
            name="keywords"
            content="to the moon and back, iit ism dhanbad techfest, iit dhanbad techfest,srijan,srijan 19,srijan 2019,srijan 2k19,srijan IIT,srijan IIT (ISM) DHANBAD,srijan IIT ISM, srijan theme, srijan techfest,srijan tecnical fest, srijan 2019-2020, srijan tech fest 19,srijan tech fest 2019,IIT ISM, IIT (ISM) DHANBAD, events, exhibition, Workshops,Techno-management fest"
          />
        </Helmet>
        <Header />
        <br />

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
          About Us
        </h1>
        <div className="container">
          <div className="row container">
            <div className="col-12 opaque">
              <br />
              Indian Institute of Technology (Indian School of Mines), Dhanbad, abbreviated
              as IIT (ISM), is a public engineering and research institution located in
              Dhanbad, India. It was formerly known as the Indian School of Mines and was
              a Deemed University before it became an Institute of National Importance
              under the Institutes of Technology Act 1961. IIT (ISM) is located in the mineralrich region of India, in the city of Dhanbad. It is the third oldest institute
              among the IITs. The British Indian Government established it on the lines of
              the Royal School of Mines-London and was formally inaugurated on 9
              December 1926 by Lord Irwin, the then Viceroy of India. It started as an
              institution to impart mining education, and today has grown into a technical
              institution with various academic departments. The institute featured among
              the top 100 universities in the world in the QS World University Rankings of
              2016 by Subject in the fields of Mining and Mineral Engineering IIT (ISM)
              admits its undergraduate students through Joint Entrance Examination
              (Advanced) previously IIT-JEE, IIT (ISM) has 18 academic departments covering
              Engineering, Applied Sciences, Humanities, and Social Sciences and
              Management programs.
              <br /> <br />
              "SRIJAN" is the biggest socio-cultural festival in eastern India, which has been
              in the limelight since 1977. It attracts an annual footfall of over 30,000 from
              more than 200 colleges across the country and has prize money worth more
              than INR 7.5 lakhs. It offers a fantastic platform where participants from
              different parts of the country get an opportunity to interact, enhance and
              demonstrate their creativity, personality, and talents.
            </div>
            <div
              className="col-12"
              style={{
                marginTop: "20px",
              }}
            >
              {/* <Card
                body
                inverse
                style={{
                  backgroundColor: "rgba(0,0,0,0.8)",
                  borderColor: "#333",
                }}
              >
                <CardImg
                  top
                  width="100%"
                  src="/images/CAMPUS-MAP.jpg"
                  alt="IIT (ISM) Campus Map"
                />
                <br />
                <CardBody style={{ paddingLeft: "43%" }}>
                  <a href="/images/CAMPUS-MAP.jpg" target="_blank">
                    <Button
                      type="button"
                      className="themedButton"
                      style={{ margin: "auto" }}
                    >
                      <i className="fa fa-eye" /> View
                    </Button>
                  </a>
                </CardBody>
              </Card> */}
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3650.1208808356632!2d86.43899201397402!3d23.814300192251448!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f6bc9fac678481%3A0x122cb1d133a89995!2sIndian%20Institute%20of%20Technology%20(Indian%20School%20of%20Mines)%2C%20Dhanbad!5e0!3m2!1sen!2sin!4v1672820703102!5m2!1sen!2sin"
                width="100%"
                height="410"
                title="IIT ISM DHANBAD"
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
          <br />
        </div>
        <br />
        <h1
          style={{
            textAlign: "center",
            marginTop: "120px",
            color: "white",
            fontSize: "52px",
            fontFamily: "'Montserrat', sans-serif",
          }}
          className="title"
        >
          Our Theme
        </h1>
        <div className="container">
          <div className="col-12 opaque">
            <br />
            Our minds hold a world of endless possibilities, a world in which we
            can do whatever we imagine - fight space monsters, explore the
            oceans, fly a plane, design a city, jump into the universe of our
            favourite movie franchise.AR and VR give us the chance to live out
            these dreams.Augmented reality is a technology that enhances your
            surroundings by adding digital elements to a live view - possible
            through the camera of your smartphone!Virtual reality holds the
            power to immerse you in a simulated world of your choice - a world
            you can explore and interact with.This theme of srijan '23 serves as
            a reminder that imagination is our only limit, and that technology
            holds the key to shaping our future.srijan '23 has informative
            workshops, and a roster of compelling events - there's an event for
            an enthusiast of every technical field!Build robots, code your heart
            out, create new designs, trade virtual money, test your wits in
            quizzes, and a lot more!srijan ' 22 returns, bigger and bolder than
            ever before, and is waiting for you tech geeks out there! Boasting
            of a huge roaster of exhilarating and engaging events, along
            with promises to be grander, greater, more splendid and glorious
            than ever before IIT ISM presenting{" "}
            <b>srijan: REALITY BEYOND VISION</b>.
          </div>
        </div>
        <br />
        <h1
          style={{
            textAlign: "center",
            marginTop: "120px",
            color: "white",
            fontSize: "52px",
            fontFamily: "'Montserrat', sans-serif",
          }}
          className="title"
        >
          Message from the Convener
        </h1>
        <div className="container">
          <div className="col-12 opaque">
            <br />
            Culture is considered to be an identification of a
            society or a nation as a whole. It inculcates a sense of
            togetherness through shared beliefs, values,
            traditions, and norms. Education or knowledge,
            when fostered in a cultured environment, leads to
            harmonious progress not only for an individual but
            also for the whole society, country, or entire globe. We
            take pride in India's unique culture, which serves as a
            metaphor for the nation's diversity. The majority of its
            social, economic, and other activities show evidence
            of culture and creativity. 
            <br />
            <br />
            In consonance with the above, SRIJAN 2023, a three-day
            annual socio-cultural spring festival of IIT (ISM) Dhanbad,
            strives to nurture a spirit of brotherhood and togetherness
            in diversity via a variety of activities that celebrate the
            different cultures of our country.The continual growth of
            our country is propelled by the ideas of the next generation
            <br />
            <br />
            To this, SRIJAN 2023 provides a
            congenial platform to showcase one's talent and
            innovative and exuberant ideas that may help the
            social cause. It involves varieties of events through
            which the participants will hone their talents in skills
            like dancing, singing, poetry writing, arts, and so on
            before coming to a close with the much-anticipated
            gala star or cultural night.
            <br />
            <br />
            Team SRIJAN sends its warmest welcome and anticipates your
            gracious presence at the socio-cultural extravaganza to commemorate
            the occasion as a momentous milestone in the journey of IIT (ISM) Dhanbad.
            <br />
            <br />
            <br />
            Best Regards
            <div className="col-12 p-5">
              <img
                style={{
                  display: "block",
                  position: "relative",
                  margin: "auto",
                }}
                className="rounded-circle"
                src="Srijan-23\src\assets\prof_gauri_shankar.png"
                alt={"Prof. Gauri Shankar"}
                height="220"
                width="220"
              />
              <h5 align="center">
                Prof. Gauri Shankar
                <br />
                Convener, Srijan'23
                <br />
                Dept. of Electrical Engg.
                IIT (ISM) Dhanbad
                <br />
              </h5>
            </div>
          </div>
        </div>
        <br />
        
      </div>
    );
  }
}

export default AboutUs;
