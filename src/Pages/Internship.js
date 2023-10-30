import React, { useLayoutEffect } from 'react'
import LandingImg from '../Components/Internship/LandingImg'
import InternTestimonialCard from '../Components/Internship/InternTestimonialCard'
import InternDetails from '../Components/Internship/InternDetails'

const Internship = () => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0)
});
  return (
    <>
      <LandingImg/>
      <InternTestimonialCard/>
      <InternDetails/>
      <div style={{display:"flex", flexDirection:"column", alignItems:"center"}} className="join_box">
        <h4 className="title">Join Suvidha Foundation Internship Today.</h4>
        <a href="https://docs.google.com/forms/d/e/1FAIpQLSdPAVP_An-H2y9DgR9kgmMrroeBk3kZJVUR93IC1vJevWM6BA/viewform" target="_blank" rel="noopener noreferrer" className="intern_btn">Apply Now</a>
      </div>
    </>
  )
}

export default Internship
