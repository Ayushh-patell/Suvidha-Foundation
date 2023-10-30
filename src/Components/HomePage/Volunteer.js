import React from 'react'
import './Component_CSS/Volunteer.css'
import { Link } from 'react-router-dom'

const Volunteer = () => {
  return (
    <div className='volunteer' >
      <h3 className='title'>Internship & Mentorship Programs</h3>
      <p className='volunteer_text'>Seize the opportunity to gain invaluable experience and jumpstart your career with an internship that propels you towards success. <br /> The Suvidha Foundation Internship Program is a unique opportunity for students and recent graduates to gain experience and contribute to the work of Suvidha Foundation. Along with undertaking tasks related to their specific skills, we encourage interns to develop a reputable professional portfolio.</p>
      <Link to={"/Internship"} className='btn'>Apply Now</Link>
    </div>
  )
}

export default Volunteer
