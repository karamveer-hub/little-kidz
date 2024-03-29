import React from "react";
// import data from "../eventsData.json";
import { data } from "../eventsData";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

function Events() {
  return (
    <React.Fragment>
      <Navbar />

      <div className="events-container display_flex container">
        {data.map((item, index) => (
          <>
            <div
              key={index}
              // Update the path accordingly
              className="events-div br4"
            >
              <Link to={`/eventShow/${item.eventname}`}>

              <img
                src={item.imgSrc}
                alt={`School Image ${index + 1}`}
                />
              <div className="innerDiv">
                <strong>{item.heading}</strong>
                <p>{item.description}</p>
              </div>
                </Link>
            </div>
          </>
        ))}
      </div>
      <Footer/>
    </React.Fragment>
  );
}

export default Events;
