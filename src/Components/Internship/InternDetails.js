import React, { useLayoutEffect, useRef } from "react";
import "./Component_CSS/InternDetail.css";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const InternDetails = () => {
  const detail = useRef();

  useLayoutEffect(() => {
    let ctx = gsap.context(() => { //animate 1st element in internDetail component
      gsap.from(".details .detail_box:nth-child(1) .detail", {
        xPercent: -100,
        delay: 0.6,
        duration: 1.5,
        scrollTrigger: {
          trigger: ".details:nth-child(2) .detail",
          start: "top 100%",
          end: "+=350",
          toggleActions: "play none none reset",
        },
      });
    }, detail);

    return () => ctx.revert();
  }, []);
  useLayoutEffect(() => {
    let ctx = gsap.context(() => { //animate 2nd element in internDetail component
      gsap.from(".details .detail_box:nth-child(2) .detail", {
        xPercent: 100,
        delay: 0.6,
        duration: 1.5,
        scrollTrigger: {
          trigger: ".details:nth-child(2) .detail",
          start: "top 50%",
          end: "+=350",
          toggleActions: "play none none reset",
        },
      });
    }, detail);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={detail} className="internDetail">
      <h4 className="title">
        Unlock Your Potential: Join Our Internship Program
      </h4>
      <div className="details">
        <div className="detail_box">
          <div className="detail">
            <div className="detail_img">
              <img src="./images/Internship/internship-1.jpg" alt="" />
            </div>
            <div className="detail_text">
              <h5 className="detail_title">
                Student Internship and Mentorship Programs.
              </h5>
              <p className="detail_para">
                At Suvidha Foundation, we offer a range of free internship
                opportunities, both technical and non-technical, as well as
                social work programs. Our internship programs aim to provide
                valuable hands-on experience to students and individuals,
                allowing them to contribute to our organization's initiatives
                and projects.
              </p>
            </div>
          </div>
        </div>
        <div className="detail_box">
          <div className="detail">
            <div className="detail_img">
              <img src="./images/Internship/internship-3.jpg" alt="" />
            </div>
            <div className="detail_text">
              <h5 className="detail_title">
                Why You Should Apply for This Internship.
              </h5>
              <p className="detail_para">
                Suvidha Foundation's Student Internship and Mentorship Program:
                Cultivating Tomorrow's Change-Makers. Offering hands-on
                experience and expert guidance, students gain valuable insight
                into nonprofit operations, contributing meaningfully to our
                mission, and becoming future leaders in the field.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InternDetails;
