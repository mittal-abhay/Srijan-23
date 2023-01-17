import React, { useState } from "react";
import Home from "./Home";
import EventPage from "./EventPage";
import { Switch, Route, Redirect, withRouter } from "react-router-dom";
import EventDetail from "./EventDetail";
import OurTeam from "./OurTeam";
import ComingSoon from "./ComingSoon";
import AboutUs from "./AboutUs";
import Sponsers from "./Sponsors";
import SocialLink from "./Social-links";
import Footer from "./Footer";

function Main(props) {
  const [header, setHeader] = useState(false);

  function makeShowLogo() {
    if (!header) setHeader(true);
  }

  function hideLogo() {
    if (header) setHeader(false);
  }

  return (
    <main>
      <Switch location={props.location}>
        <Route
          exact
          path="/home"
          component={() => (
            <Home makeShowLogo={makeShowLogo} hideLogo={hideLogo} />
          )}
        />
        <Route exact path="/our-team" component={() => <OurTeam />} />
        <Route exact path="/coming-soon" component={() => <ComingSoon />} />
        <Route exact path="/about-us" component={() => <AboutUs />} />
        <Route exact path="/social-links" component={() => <SocialLink />} />
        <Route exact path="/club-events" component={() => <EventPage />} />
        <Route path="/club-events/:eventName/about" component={EventDetail} />
        <Route
          exact
          path="/club-events/:eventName"
          component={({ match }) => (
            <Redirect
              to={{
                pathname: `/club-events/${match.params.eventName}/about`,
              }}
            />
          )}
        />
        <Route path="/sponsors" component={() => <Sponsers />} />
        <Redirect to="/home" />
      </Switch>
      <Footer />
    </main>
  );
}

export default withRouter(Main);
