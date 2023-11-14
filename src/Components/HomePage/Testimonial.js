import React from "react";
import "./Component_CSS/Testimonial.css";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

const carousel_option = {
  loop: true,
  items: 3,
  dots: false,
  rewind: true,
  autoplay: true,
  autoplayTimeout: 5000,
  responsiveClass: true,
  responsive: {
    0: {
      items: 1,
    },
    576: {
      items: 1,
    },
    768: {
      items: 2,
    },
    992: {
      items: 3,
    },
  },
};

const Testimonial = () => {
  return (
    <div>
    <h4 className="title">Buzz and Conversations Surrounding Our Charitable Initiatives</h4>
    
      <OwlCarousel className="owl-theme" {...carousel_option}>
        <div className="item">
          <div className="testimonial_carousel">
          <i className="fa-sharp fa-solid fa-quote-left"></i>
            <div className="testimonial_text">
              The experience here at Suvidha Foundation was wonderful. I learnt
              a lot. It was worth it.
            </div>
            <div className="testimonial_head">
              <div className="testimonial_img">
                <img src="./images/testimonials/people-1.jpg" alt="" />
              </div>
              <p className="name">Samrudhi Nawale</p>
            </div>
          </div>
        </div>
        <div className="item">
          <div className="testimonial_carousel">
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
        </div>
        <div className="item">
          <div className="testimonial_carousel">
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
        </div>
        <div className="item">
          <div className="testimonial_carousel">
          <i className="fa-sharp fa-solid fa-quote-left"></i>
            <div className="testimonial_text">
              Thank you for giving the opportunity. Did this intership which was
              a bit different and unique from others{" "}
            </div>
            <div className="testimonial_head">
              <div className="testimonial_img">
                <img src="./images/testimonials/people-4.jpg" alt="" />
              </div>
              <p className="name">Manya Sahni</p>
            </div>
          </div>
        </div>
        <div className="item">
          <div className="testimonial_carousel">
          <i className="fa-sharp fa-solid fa-quote-left"></i>
            <div className="testimonial_text">
              It was great experience to work in suvidha foundation, team work
              is very good.
            </div>
            <div className="testimonial_head">
              <div className="testimonial_img">
                <img src="./images/testimonials/people-5.jpg" alt="" />
              </div>
              <p className="name">Divina Malfoy</p>
            </div>
          </div>
        </div>
        <div className="item">
          <div className="testimonial_carousel">
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
        <div className="item">
          <div className="testimonial_carousel">
          <i className="fa-sharp fa-solid fa-quote-left"></i>
            <div className="testimonial_text">
              It was a great experience working with your NGO. I learned to
              connect with the society and helped the underprivileged section of
              the society.
            </div>
            <div className="testimonial_head">
              <div className="testimonial_img">
                <img src="./images/testimonials/people-7.jpg" alt="" />
              </div>
              <p className="name">Lekhashree H J</p>
            </div>
          </div>
        </div>
        <div className="item">
          <div className="testimonial_carousel">
          <i className="fa-sharp fa-solid fa-quote-left"></i>
            <div className="testimonial_text">
              Had great learning. Fruitful experience.{" "}
            </div>
            <div className="testimonial_head">
              <div className="testimonial_img">
                <img src="./images/testimonials/people-8.jpg" alt="" />
              </div>
              <p className="name">Khushi Jain</p>
            </div>
          </div>
        </div>
      </OwlCarousel>
    </div>
  );
};

export default Testimonial;
