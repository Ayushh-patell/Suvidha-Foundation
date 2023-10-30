import React from 'react'
import './Component_CSS/LandingImg.css'

const LandingImg = () => {
  return (
    <div className='landing_img'>
        <img src="./images/Internship/internship-2.jpg" alt="" />
        <h2 className="landing_text">Join Our Impactful Internship Program and Make a Difference. <br />
        <a className='intern_btn' href="https://docs.google.com/forms/d/e/1FAIpQLSdPAVP_An-H2y9DgR9kgmMrroeBk3kZJVUR93IC1vJevWM6BA/viewform" target="_blank" rel="noopener noreferrer">Apply Now</a>
</h2>
    </div>
  )
}

export default LandingImg
