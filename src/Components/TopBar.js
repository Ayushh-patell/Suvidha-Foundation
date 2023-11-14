import React, { useEffect } from "react";
import "./Component_CSS/TopBar.css";

const TopBar = () => {

  useEffect(() => { //show side socialsbar when user scrolls down 150px
    let sidesocials = document.getElementsByClassName("side_socials_box")[0];
  
    window.addEventListener("scroll", () => {
      if (window.scrollY > 150) {
        sidesocials.style.transform = "translateY(-50%) translateX(0%)"
      } else {
        sidesocials.style.transform = "translateY(-50%) translateX(1000%)"

      }
    });
  }, []);

  return (
    <>
      <div className="bar">
        <div className="phone_box ">
          <i className="fas fa-phone"></i> Call Us :
          <strong>
            <span className="contact">+91 7020044091</span>
          </strong>
        </div>
        <div className="socials_box">
          <ul>
            <li>
              <a href="https://www.facebook.com/suvidhamahilamandal/" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-facebook-f"></i>
              </a>
            </li>

            <li>
              <a href="https://instagram.com/suvidha_mahila_mandal?igshid=YmMyMTA2M2Y=" target="_blank" rel="noopener noreferrer">
                <i style={{ fontSize: "1.13rem" }} className="fab fa-instagram"></i>
              </a>
            </li>

            <li>
              <a href="mailto:info@suvidhafoundationedutech.org" target="_blank" rel="noopener noreferrer">
                <i className="fa-brands fa-google"></i>
              </a>
            </li>

            <li>
              <a href="https://www.linkedin.com/company/suvidha-foundation/mycompany/" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="side_socials_box">
                <ul>
                  <li>
                    <a href="https://www.facebook.com/suvidhamahilamandal/" target="_blank" rel="noopener noreferrer">
                      <i className="fab fa-facebook-f"></i>
                    </a>
                  </li>

                  <li>
                    <a href="https://instagram.com/suvidha_mahila_mandal?igshid=YmMyMTA2M2Y=" target="_blank" rel="noopener noreferrer">
                      <i className="fab fa-instagram"></i>
                    </a>
                  </li>

                  <li>
                    <a href="mailto:info@suvidhafoundationedutech.org" target="_blank" rel="noopener noreferrer">
                    <i className="fa-brands fa-google"></i>
                    </a>
                  </li>

                  <li>
                    <a href="https://www.linkedin.com/company/suvidha-foundation/mycompany/" target="_blank" rel="noopener noreferrer">
                      <i className="fab fa-linkedin-in"></i>
                    </a>
                  </li>
                </ul>
              </div>
    </>
  );
};

export default TopBar;
