import React, { useEffect, useState } from "react";
import "./Component_CSS/About.css";

const About = () => {
    const [aboutTab, setaboutTab] = useState("about") //state to change the tab(about, mission, vision) visible to user

useEffect(()=> {
    let slide_text = document.querySelector(".about_slide_text") //move the about text element according to the tab selected
    if(aboutTab==="about") {
        slide_text.style.translate= "0%"
    }
    else if(aboutTab==="mission") {
        slide_text.style.translate= "-100%"
    }
    else {
        slide_text.style.translate = "-200%"
    }
},[aboutTab])

  return (
    <div className="about_box">
      <div className="about_text">
        <h3 className="title">
          Suvidha Foundation <br /> (Suvidha Mahila Mandal)
        </h3>
        <div className="about_mission_vision">
          <div className="about_nav">
            <div onClick={()=> {setaboutTab("about")}} className={`about_tab ${aboutTab==="about"? "about_active": ""}`}>About</div>
            <div onClick={()=> {setaboutTab("mission")}} className={`about_tab ${aboutTab==="mission"? "about_active": ""}`}>Mission</div>
            <div onClick={()=> {setaboutTab("vision")}} className={`about_tab ${aboutTab==="vision"? "about_active": ""}`}>Vision</div>
          </div>
          <div className="about_nav_text">
          <div className="about_slide_text" >
            <p className="about_nav_para">
              Suvidha Mahila Mandal is a non-profit organization working to
              impart education among the financially challenged sections to help
              them realize parity in education and strength of little minds in
              building a promising future. The organization has provisions of
              student internships, student mentorship and the scope to
              volunteer. Through these programmes, the organization aims to
              achieve the vision of imparting innovative education that stays
              with the students forever and equip them for the unforeseen
              future.
            </p>
            <p className="about_nav_para">
              To Inspire Students, help them Innovate and let them Integrate to build the next generation humankind. <br /> To Run Food Donation And Awareness Campaign In Rural Region.

            </p>
            <p className="about_nav_para">
              To build Next Generation Entrepreneur, by providing them a Skill-Based Education. <br /> To Provide Internship, Training And Workshops and Quality Education All Over The World..

            </p>
            </div>
          </div>
        </div>
      </div>
      <div className="about_img">
        <img src="./images/about.jpg" alt="" />
      </div>
    </div>
  );
};

export default About;
