import React from "react";
import "./eventDetailPageNew.css";

function month(m) {
  if (m === 1) return "Jan";
  if (m === 2) return "Feb";
  if (m === 3) return "Mar";
  if (m === 4) return "Apr";
  if (m === 5) return "May";
  if (m === 6) return "June";
  if (m === 7) return "July";
  if (m === 8) return "Aug";
  if (m === 9) return "Sep";
  if (m === 10) return "Oct";
  if (m === 11) return "Nov";
  if (m === 12) return "Dec";
}

function convertDateToReadable(timestamp) {
  let date = new Date(Date.parse(timestamp));
  return `${date.getDate()} ${month(
    date.getMonth()
  )}, ${date.getFullYear()}. ${date.getHours()}:${date.getMinutes()} hours`;
}

export default function EventDetailPageNew(props) {
  return (
    props.event && (
      <>
        <div className="event-detail-popup-container">
          <div className="event-detail-popup">
            <div className="event-detail-image-container">
              <img src={props.event.image} alt={props.event.name} />
            </div>
            <div className="event-detail-info-container">
              <h2>{props.event.name}</h2>
              {props.event.presented_by && (
                <p>
                  Presented By <b>{props.event.presented_by}</b>
                </p>
              )}
              <p>{props.details}</p>
            </div>
            <div className="event-detail-extra-info">
              <h5>Important dates</h5>
              <p>
                <b>Start : </b>
                {convertDateToReadable(props.event.start_timestamp)}
              </p>
              <p>
                <b>End : </b>
                {convertDateToReadable(props.event.end_timestamp)}
              </p>
              <p>
                <b>Registration : </b>
                {convertDateToReadable(props.event.register_timestamp)}
              </p>
            </div>
            <div className="event-detail-buttons">
              <button>
                <a href={props.event.brochure_link}>Rules</a>
              </button>
              <button>
                <a href={props.event.register_link}>Register</a>
              </button>
            </div>
          </div>
        </div>
      </>
    )
  );
}
