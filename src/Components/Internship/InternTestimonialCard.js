import React, { useLayoutEffect, useRef } from "react";
import './Component_CSS/InternTestimonialCard.css'
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger)

const InternTestimonialCard = () => {

    const card = useRef();

useLayoutEffect(() => {
  let ctx = gsap.context(() => { //animate each testimonial card
    let cards = document.querySelectorAll(".testimonial_card")
    cards.forEach((card)=> {
        gsap.from(card, {
          delay:0.2,
            opacity:0,
            y:50,
            scrollTrigger: {
                trigger:card,
                start:"top 90%",
                end:"+=400",
                toggleActions:"play none none reverse"
            }
        })
    })
    
  }, card); 
  
  return () => ctx.revert(); 
  
}, []);

  return (
    <>
    <h4 className="title">Interns Share Suvidha Foundation Success Stories</h4>
    <div ref={card} className="intern_testimonial_cards">
      <div className="testimonial_card">
        <i className="fa-sharp fa-solid fa-quote-left"></i>
        <div className="testimonial_text">
          The experience here at Suvidha Foundation was wonderful. I learnt a
          lot. It was worth it.
        </div>
        <div className="testimonial_head">
          <div className="testimonial_img">
            <img src="./images/testimonials/people-1.jpg" alt="" />
          </div>
          <p className="name">Samrudhi Nawale</p>
        </div>
      </div>

      <div className="testimonial_card">
        <i className="fa-sharp fa-solid fa-quote-left"></i>
        <div className="testimonial_text">
          Regular meetings really helped in systematic learning as well as
          working
        </div>
        <div className="testimonial_head">
          <div className="testimonial_img">
            <img src="./images/testimonials/people-2.jpg" alt="" />
          </div>
          <p className="name">Ananya Tripathi</p>
        </div>
      </div>

      <div className="testimonial_card">
        <i className="fa-sharp fa-solid fa-quote-left"></i>
        <div className="testimonial_text">
          It was entirely a new experience and a gained alot from it.
        </div>
        <div className="testimonial_head">
          <div className="testimonial_img">
            <img src="./images/testimonials/people-3.jpg" alt="" />
          </div>
          <p className="name">Sanjana Tunk</p>
        </div>
      </div>

      <div className="testimonial_card">
        <i className="fa-sharp fa-solid fa-quote-left"></i>
        <div className="testimonial_text">
          Thank you for giving the opportunity. Did this intership which was a
          bit different and unique from others{" "}
        </div>
        <div className="testimonial_head">
          <div className="testimonial_img">
            <img src="./images/testimonials/people-4.jpg" alt="" />
          </div>
          <p className="name">Manya Sahni</p>
        </div>
      </div>

      <div className="testimonial_card">
        <i className="fa-sharp fa-solid fa-quote-left"></i>
        <div className="testimonial_text">
          It was great experience to work in suvidha foundation, team work is
          very good.
        </div>
        <div className="testimonial_head">
          <div className="testimonial_img">
            <img src="./images/testimonials/people-5.jpg" alt="" />
          </div>
          <p className="name">Divina Malfoy</p>
        </div>
      </div>

      <div className="testimonial_card">
        <i className="fa-sharp fa-solid fa-quote-left"></i>
        <div className="testimonial_text">
          I'm glad to have worked with the Suvidha Foundation because I am
          passionate about their message and what they do
        </div>
        <div className="testimonial_head">
          <div className="testimonial_img">
            <img src="./images/testimonials/people-6.jpg" alt="" />
          </div>
          <p className="name">Aheri Ghosh</p>
        </div>
      </div>
    </div>
    </>
  );
};
//App Created by Ayush Patel https://www.linkedin.com/in/ayush-patel-99a44b283
export default InternTestimonialCard;
