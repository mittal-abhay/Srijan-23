import React, { Component } from "react";
import { Helmet } from "react-helmet";
class Register extends Component {
  render() {
    const { event } = this.props;
    return (
      <div
        className=" container text-center"
        style={{ display: "block", width: "80vw" }}
      >
        <Helmet>
          <title>{event.name}</title>
          <meta
            name="description"
            content={`Organized by ${
              event.event_type == "club"
                ? event.presented_by + " club "
                : event.presented_by + " department "
            } of IIT (ISM) Dhanbad, during srijan 2019. ${
              event.details
            } Register for it here.`}
          />
          <meta
            name="keywords"
            content={`${event.name}  register srijan , register for ${event.name} , register for ${event.name} 2019, ${event.presented_by} srijan , iit ism dhanbad techfest, iit dhanbad techfest, srijan,srijan 19,srijan 2019,srijan 2k19,srijan IIT,srijan IIT (ISM) DHANBAD,srijan IIT ISM, srijan techfest,srijan tecnical fest, srijan 2019-2020, srijan tech fest 19,srijan tech fest 2019,IIT ISM, IIT (ISM) DHANBAD, events, exhibition, Workshops,Techno-management fest`}
          />
        </Helmet>
        {event.register_link ? (
          <a
            href={event.register_link}
            target="_blank"
            rel="noopener noreferrer"
          >
            <button type="button" className="btn btn-primary btn-lg">
              REGISTER
            </button>
          </a>
        ) : (
          "No registration required for this event."
        )}
      </div>
    );
  }
}

export default Register;
