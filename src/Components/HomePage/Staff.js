import React from 'react'
import './Component_CSS/Staff.css'

const Team = () => {
  return (
    <div className='teams'>
        <h4 className="title">Meet the Awesome Team Behind Every Activities</h4>
        <div className="team_box">
            <div className="team_member" id='#ShobhaMotghare'>
                <div className="member_img">
                    <img src="./images/team/Shobha_Motghare.jpeg" alt="" />
                </div>
                <div className="member_socials">
                    <a href='#ShobhaMotghare' className="member_social"><i className="fab fa-facebook-f"></i></a>
                    <a href='#ShobhaMotghare' className="member_social"><i className="fab fa-instagram"></i></a>
                    <a href='#ShobhaMotghare' className="member_social"><i className="fa-brands fa-google"></i></a>
                    <a href='#ShobhaMotghare' className="member_social"><i className="fab fa-linkedin-in"></i></a>
                </div>
                <div className="member_text">
                    <h5>Shobha Motghare</h5>
                    <p>Secretary</p>
                </div>
            </div>
            <div className="team_member" id='#PayalBadhe'>
                <div className="member_img">
                    <img src="./images/team/Payal_Badhe.jpg" alt="" />
                </div>
                <div className="member_socials">
                    <a href='#PayalBadhe' className="member_social"><i className="fab fa-facebook-f"></i></a>
                    <a href='#PayalBadhe' className="member_social"><i className="fab fa-instagram"></i></a>
                    <a href='#PayalBadhe' className="member_social"><i className="fa-brands fa-google"></i></a>
                    <a href='#PayalBadhe' className="member_social"><i className="fab fa-linkedin-in"></i></a>
                </div>
                <div className="member_text">
                    <h5>Payal Badhe</h5>
                    <p>President</p>
                </div>
            </div>
            <div className="team_member" id='#BhartiShendre'>
                <div className="member_img">
                    <img src="./images/team/Bharti_Shendre.jpg" alt="" />
                </div>
                <div className="member_socials">
                    <a href='#BhartiShendre' className="member_social"><i className="fab fa-facebook-f"></i></a>
                    <a href='#BhartiShendre' className="member_social"><i className="fab fa-instagram"></i></a>
                    <a href='#BhartiShendre' className="member_social"><i className="fa-brands fa-google"></i></a>
                    <a href='#BhartiShendre' className="member_social"><i className="fab fa-linkedin-in"></i></a>
                </div>
                <div className="member_text">
                    <h5>Bharti Shendhre</h5>
                    <p>Treasurer</p>
                </div>
            </div>
            <div className="team_member" id='#NilimaKalambe'>
                <div className="member_img">
                    <img src="./images/team/Nilima_Kalambe.jpg" alt="" />
                </div>
                <div className="member_socials">
                    <a href='#NilimaKalambe' className="member_social"><i className="fab fa-facebook-f"></i></a>
                    <a href='#NilimaKalambe' className="member_social"><i className="fab fa-instagram"></i></a>
                    <a href='#NilimaKalambe' className="member_social"><i className="fa-brands fa-google"></i></a>
                    <a href='#NilimaKalambe' className="member_social"><i className="fab fa-linkedin-in"></i></a>
                </div>
                <div className="member_text">
                    <h5>Nilima Kalambe</h5>
                    <p>Advisor</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Team
