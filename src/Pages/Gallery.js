import React, { useLayoutEffect, useRef } from "react";
import "../Components/Component_CSS/Gallery.css";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const carousel_option = {
  loop: true,
  items: 1,
  dots: false,
  rewind: true,
  autoplay: true,
  autoplaySpeed: 4000,
  autoplayTimeout: 4000,
  responsiveClass: true,
};
const Gallery = () => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0)
});
    const card = useRef()
    useLayoutEffect(()=> {
      let ctx = gsap.context(() => {
        let cards = document.querySelectorAll(".gallery_card")
        cards.forEach((card)=> {
            gsap.from(card, {
              delay:0.5,
                opacity:0.5,
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
    <div ref={card} className="gallery">
    <div className="gallery_carousel">
      <h2 className="gallery_header_text">Our Gallery</h2>
      <OwlCarousel className="owl-theme" {...carousel_option}>
        <div className="item">
          <div className="gallery_header_img">
            <img src="./images/Gallery/AnimalFeeding.jpg" alt="" />
          </div>
        </div>
        <div className="item">
          <div className="gallery_header_img">
            <img src="./images/Gallery/BooksDistribution.jpg" alt="" />
          </div>
        </div>
        <div className="item">
          <div className="gallery_header_img">
            <img src="./images/Gallery/ClothsDistribution.jpg" alt="" />
          </div>
        </div>
        <div className="item">
          <div className="gallery_header_img">
            <img src="./images/Gallery/FoodDistribution.jpg" alt="" />
          </div>
        </div>
        <div className="item">
          <div className="gallery_header_img">
            <img src="./images/Gallery/FreeEducation.jpg" alt="" />
          </div>
        </div>
        <div className="item">
          <div className="gallery_header_img">
            <img src="./images/Gallery/OnlineEvents.jpg" alt="" />
          </div>
        </div>
        <div className="item">
          <div className="gallery_header_img">
            <img src="./images/Gallery/SanitaryPad.jpg" alt="" />
          </div>
        </div>
        <div className="item">
          <div className="gallery_header_img">
            <img src="./images/Gallery/SuvidhaEvents.jpg" alt="" />
          </div>
        </div>
        <div className="item">
          <div className="gallery_header_img">
            <img src="./images/Gallery/TreePlantation.jpg" alt="" />
          </div>
        </div>
        <div className="item">
          <div className="gallery_header_img">
            <img src="./images/Gallery/Women'sDay.jpg" alt="" />
          </div>
        </div>
        <div className="item">
          <div className="gallery_header_img">
            <img src="./images/Gallery/Workshops.jpg" alt="" />
          </div>
        </div>
      </OwlCarousel>
      </div>

      <div className="title">Capturing Moments of Impact</div>
      <div className="gallery_cards">
        <div className="gallery_card">
            <a href="https://drive.google.com/drive/u/1/folders/1xr7jhBYaap-tZ2puU5HiF6ccitJtBfaB" target="_blank" rel="noopener noreferrer">
            <div className="gallery_card_img">
                <img src="./images/Gallery/AnimalFeeding.jpg" alt="" />
            </div>
            <div className="gallery_card_text">Animal Feeding</div>
            </a>
        </div>
        <div className="gallery_card">
            <a href="https://drive.google.com/drive/u/1/folders/1FKG4shImI-9JRavKIP-0b-Tp9Hd205VI" target="_blank" rel="noopener noreferrer">
            <div className="gallery_card_img">
                <img src="./images/Gallery/BooksDistribution.jpg" alt="" />
            </div>
            <div className="gallery_card_text">Books Distribution</div>
            </a>
        </div>
        <div className="gallery_card">
            <a href="https://drive.google.com/drive/u/1/folders/1nOFKvOjhWsbfVVPGumOfpLrFe2364_zK" target="_blank" rel="noopener noreferrer">
            <div className="gallery_card_img">
                <img src="./images/Gallery/ClothsDistribution.jpg" alt="" />
            </div>
            <div className="gallery_card_text">Cloths Distribution</div>
            </a>
        </div>
        <div className="gallery_card">
            <a href="https://drive.google.com/drive/u/1/folders/1AfCK5kJqf9_N_JGd8wqUhNesS8k1tVmw" target="_blank" rel="noopener noreferrer">
            <div className="gallery_card_img">
                <img src="./images/Gallery/FoodDistribution.jpg" alt="" />
            </div>
            <div className="gallery_card_text">Food Distribution</div>
            </a>
        </div>
        <div className="gallery_card">
            <a href="https://drive.google.com/drive/u/1/folders/1ucG-Ltm_6fAwZ-1ta4-nHhRdKpu-3EAN" target="_blank" rel="noopener noreferrer">
            <div className="gallery_card_img">
                <img src="./images/Gallery/FreeEducation.jpg" alt="" />
            </div>
            <div className="gallery_card_text">Free Education</div>
            </a>
        </div>
        <div className="gallery_card">
            <a href="https://drive.google.com/drive/u/1/folders/1LF6c_FtHzv1ldXKXZ6oRueaD6OtIWsms" target="_blank" rel="noopener noreferrer">
            <div className="gallery_card_img">
                <img src="./images/Gallery/OnlineEvents.jpg" alt="" />
            </div>
            <div className="gallery_card_text">Online Events</div>
            </a>
        </div>
        <div className="gallery_card">
            <a href="https://drive.google.com/drive/u/1/folders/1tMkME479AhVFQ5pUZag3-YPgNWhIn7Rl" target="_blank" rel="noopener noreferrer">
            <div className="gallery_card_img">
                <img src="./images/Gallery/SanitaryPad.jpg" alt="" />
            </div>
            <div className="gallery_card_text">Sanitary Pads</div>
            </a>
        </div>
        <div className="gallery_card">
            <a href="https://drive.google.com/drive/u/1/folders/1LF6c_FtHzv1ldXKXZ6oRueaD6OtIWsms" target="_blank" rel="noopener noreferrer">
            <div className="gallery_card_img">
                <img src="./images/Gallery/SuvidhaEvents.jpg" alt="" />
            </div>
            <div className="gallery_card_text">Suvidha Events</div>
            </a>
        </div>
        <div className="gallery_card">
            <a href="https://drive.google.com/drive/u/1/folders/1V5Owzjc00GT_U2Mw_bdOMbiCYSxmScSw" target="_blank" rel="noopener noreferrer">
            <div className="gallery_card_img">
                <img src="./images/Gallery/TreePlantation.jpg" alt="" />
            </div>
            <div className="gallery_card_text">Tree Plantation</div>
            </a>
        </div>
        <div className="gallery_card">
            <a href="https://drive.google.com/drive/u/1/folders/1_V-acFibBsweHcM-R-P__4EQWpauB6dK" target="_blank" rel="noopener noreferrer">
            <div className="gallery_card_img">
                <img src="./images/Gallery/Women'sDay.jpg" alt="" />
            </div>
            <div className="gallery_card_text">Women's Day</div>
            </a>
        </div>
        <div className="gallery_card">
            <a href="https://drive.google.com/drive/u/1/folders/11DrNvVoYiIlmKUDW2AvsiklJTuIDL3Gk" target="_blank" rel="noopener noreferrer">
            <div className="gallery_card_img">
                <img src="./images/Gallery/Workshops.jpg" alt="" />
            </div>
            <div className="gallery_card_text">Workshops</div>
            </a>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
