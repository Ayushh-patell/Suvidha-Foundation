import React from "react";
import "./Component_CSS/Event_display.css";
import { Link } from "react-router-dom";

const EventDisplay = () => {
  return (
    <div className="event_display">
      <h3 className="title">Celebrating Our Mission: Charity Event</h3>
      <div className="event_display_box">
        <div className="event_display_item">
          <div className="event_display_img">
            <img src="./images/Tree-Plantation.jpg" alt="" />
          </div>
          <h4 className="event_display_title">Tree Plantation</h4>
          <p className="event_display_text">
            Join us in nurturing the Earth's embrace, one tree at a time.
            Together, let's create a greener tomorrow and breathe life into our
            planet.
          </p>
        </div>
        <div className="event_display_item">
          <div className="event_display_img">
            <img src="./images/Fundraising.jpg" alt="" />
          </div>
          <h4 className="event_display_title">Fundraising Events</h4>
          <p className="event_display_text">
            Unlock the power of generosity at our Fundraising Event. Your
            support will ignite positive change and uplift lives in our
            community.
          </p>
        </div>
      </div>
      <Link to={"/Events"} className="btn">View All</Link>
    </div>
  );
};
//App Created by Ayush Patel https://www.linkedin.com/in/ayush-patel-99a44b283
export default EventDisplay;
