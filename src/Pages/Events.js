import React, { useLayoutEffect, useRef } from 'react'
import '../Components/Component_CSS/Events.css'
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Events = () => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0)
});

  const card = useRef()
  useLayoutEffect(()=> {
    let ctx = gsap.context(() => {
      let cards = document.querySelectorAll(".event_item")
      cards.forEach((card)=> {
          gsap.from(card, {
            delay:0.2,
              opacity:0,
              y:80,
              duration:1,
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
    
  },[])
  return (
    <div ref={card} className='events'>
      <div className="events_header">
        <h4 className="title">Our Charity Events: Celebrating Our Impact Together</h4>
        <p className="events_para">Our charity events are a joyous occasion where we come together to celebrate the remarkable impact we've achieved for our community. Through your support, we've transformed lives, and together, we can continue to make a lasting difference in the lives of those we serve.</p>
      </div>
      <div className="event_box">
      <div className="event_item">
          <div className="event_img">
            <img src="./images/Tree-Plantation.jpg" alt="" />
          </div>
          <h4 className="event_title">Tree Plantation</h4>
          <p className="event_text">
            Join us in nurturing the Earth's embrace, one tree at a time.
            Together, let's create a greener tomorrow and breathe life into our
            planet.
          </p>
        </div>
        <div className="event_item">
          <div className="event_img">
            <img src="./images/Fundraising.jpg" alt="" />
          </div>
          <h4 className="event_title">Fundraising Events</h4>
          <p className="event_text">
            Unlock the power of generosity at our Fundraising Event. Your
            support will ignite positive change and uplift lives in our
            community.
          </p>
        </div>
        <div className="event_item">
          <div className="event_img">
            <img src="./images/Event/Animal-Feeding.jpg" alt="" />
          </div>
          <h4 className="event_title">Animal Feeding</h4>
          <p className="event_text">
          Join us in providing sustenance and compassion to our furry companions. Together, let's make a positive impact on their lives through our Animal Feeding event. 
          </p>
        </div>
        <div className="event_item">
          <div className="event_img">
            <img src="./images/Event/Cloths-Distribution.jpg" alt="" />
          </div>
          <h4 className="event_title">Cloth Distribution</h4>
          <p className="event_text">
          Providing warmth and dignity through clothing. Join us in our mission to bring smiles and comfort to those in need through our cloth distribution event. 
          </p>
        </div>
        <div className="event_item">
          <div className="event_img">
            <img src="./images/Event/Food-Donation.jpg" alt="" />
          </div>
          <h4 className="event_title">Food Distribution</h4>
          <p className="event_text">
          Your generous contributions can fill empty plates and bring smiles to those in need. Together, we can create a world where everyone has access to nutritious meals. 
          </p>
        </div>
        <div className="event_item">
          <div className="event_img">
            <img src="./images/Event/Free-Workshop.jpg" alt="" />
          </div>
          <h4 className="event_title">Free Workshop</h4>
          <p className="event_text">
          Discover new skills, ignite your passions, and embrace lifelong learning with our engaging and enriching free workshops. 
          </p>
        </div>
        <div className="event_item">
          <div className="event_img">
            <img src="./images/Event/Sanitary-Pads.jpg" alt="" />
          </div>
          <h4 className="event_title">Sanitary Pads Distribution</h4>
          <p className="event_text">
          Breaking barriers and promoting menstrual health with our Sanitary Pad Initiative. Together, let's empower women and ensure access to safe and dignified hygiene. 
          </p>
        </div>
        <div className="event_item">
          <div className="event_img">
            <img src="./images/Event/Women's-Day.jpg" alt="" />
          </div>
          <h4 className="event_title">Woman's Day</h4>
          <p className="event_text">
          Celebrating the strength, resilience, and achievements of women worldwide on this special Women's Day. Together, let's honor their contributions. 
          </p>
        </div>
      </div>
    </div>
  )
}

export default Events
