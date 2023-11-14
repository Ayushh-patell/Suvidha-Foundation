import React from "react";
import "./Component_CSS/InternTestimonial.css";
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

const InternTestimonial = () => {
  return (
    <div className="intern_testimonial">
    <h4 className="title">Voices of Support: Our Charity's Impact Stories</h4>

      <OwlCarousel className="owl-theme" {...carousel_option}>
        <div className="item">
          <div className="intern_testimonial_img">
            <img src="./images/testimonials/testimonial-1.jpg" alt="" />
          </div>
        </div>
        <div className="item">
          <div className="intern_testimonial_img">
            <img src="./images/testimonials/testimonial-2.jpg" alt="" />
          </div>
        </div>
        <div className="item">
          <div className="intern_testimonial_img">
            <img src="./images/testimonials/testimonial-3.jpg" alt="" />
          </div>
        </div>
        <div className="item">
          <div className="intern_testimonial_img">
            <img src="./images/testimonials/testimonial-4.jpg" alt="" />
          </div>
        </div>
        <div className="item">
          <div className="intern_testimonial_img">
            <img src="./images/testimonials/testimonial-5.jpg" alt="" />
          </div>
        </div>
        <div className="item">
          <div className="intern_testimonial_img">
            <img src="./images/testimonials/testimonial-6.jpg" alt="" />
          </div>
        </div>
        <div className="item">
          <div className="intern_testimonial_img">
            <img src="./images/testimonials/testimonial-7.jpg" alt="" />
          </div>
        </div>
        <div className="item">
          <div className="intern_testimonial_img">
            <img src="./images/testimonials/testimonial-8.jpg" alt="" />
          </div>
        </div>
        <div className="item">
          <div className="intern_testimonial_img">
            <img src="./images/testimonials/testimonial-9.jpg" alt="" />
          </div>
        </div>
        <div className="item">
          <div className="intern_testimonial_img">
            <img src="./images/testimonials/testimonial-10.jpg" alt="" />
          </div>
        </div>
        <div className="item">
          <div className="intern_testimonial_img">
            <img src="./images/testimonials/testimonial-11.jpg" alt="" />
          </div>
        </div>
        <div className="item">
          <div className="intern_testimonial_img">
            <img src="./images/testimonials/testimonial-12.jpg" alt="" />
          </div>
        </div>
        <div className="item">
          <div className="intern_testimonial_img">
            <img src="./images/testimonials/testimonial-13.jpg" alt="" />
          </div>
        </div>
        <div className="item">
          <div className="intern_testimonial_img">
            <img src="./images/testimonials/testimonial-14.jpg" alt="" />
          </div>
        </div>
        <div className="item">
          <div className="intern_testimonial_img">
            <img src="./images/testimonials/testimonial-15.jpg" alt="" />
          </div>
        </div>
      </OwlCarousel>
      <a target="_blank" rel="noopener noreferrer" href="https://drive.google.com/drive/u/1/folders/1lCc5YL2t6eFN3nlk9mgseCXCg7kOdty8" className="btn">View All</a>
    </div>
  );
};
//App Created by Ayush Patel https://www.linkedin.com/in/ayush-patel-99a44b283
export default InternTestimonial;
