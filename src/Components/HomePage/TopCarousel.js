import React from "react";
import "./Component_CSS/TopCarousel.css";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { Link } from "react-router-dom";

const carousel_option = {
  loop: true,
  items: 1,
  dots: false,
  rewind: true,
  autoplay: true,
  autoplayTimeout: 4000,
  animateOut: "fadeOut",
  responsiveClass: true
};

const TopCarousel = () => {
  return (
    <div>
    <OwlCarousel className="owl-theme" {...carousel_option}>
    
      <div className="item">
        <div className="carousel_img">
          <img src="./images/Suvidha-1.jpg" alt="" />
        </div>
        <div className="carousel_text">
          <h4 className="carousel_text_title">Bringing Smiles to Millions</h4>
          <p className="carousel_text_para">
            Empowering Hope, One Smile at a Time, Spreading Happiness,
            Transforming Lives
          </p>
          <Link to={"/Donation"} className="btn">Donate</Link>
        </div>
      </div>

      <div className="item">
        <div className="carousel_img">
          <img src="./images/Suvidha-2.jpg" alt="" />
        </div>
        <div className="carousel_text">
          <h4 className="carousel_text_title">Internshp Programs</h4>
          <p className="carousel_text_para">
            Nurturing Tomorrow's Talent: Your Path to Internship Success
          </p>
        <Link to={"/Donation"} className="btn">Donate</Link>
        </div>
      </div>

      <div className="item">
        <div className="carousel_img">
          <img src="./images/Suvidha-3.jpg" alt="" />
        </div>
        <div className="carousel_text">
          <h4 className="carousel_text_title">
            Get Your Donations Tax Exempted
          </h4>
          <p className="carousel_text_para">
            Making a Difference Together: Donations that Change Lives
          </p>
        <Link to={"/Donation"} className="btn">Donate</Link>
        </div>
      </div>

      <div className="item">
        <div className="carousel_img">
          <img src="./images/Suvidha-4.jpg" alt="" />
        </div>
        <div className="carousel_text">
          <h4 className="carousel_text_title">
            77<sup>th</sup> Independance Day Celebrations
          </h4>
          <p className="carousel_text_para">
            Building Brighter Tomorrows, Celebrating Freedom"
          </p>
        <Link to={"/Donation"} className="btn">Donate</Link>
        </div>
      </div>
      
      <div className="item">
        <div className="carousel_img">
          <img src="./images/Suvidha-5.jpg" alt="" />
        </div>
        <div className="carousel_text">
          <h4 className="carousel_text_title">
            77<sup>th</sup> Independance Day Celebrations
          </h4>
          <p className="carousel_text_para">
            Empowering the Future, Nurturing Patriotism, Shaping Tomorrow
          </p>
        <Link to={"/Donation"} className="btn">Donate</Link>
        </div>
      </div>
    </OwlCarousel>
    </div>
  );
};

export default TopCarousel;
