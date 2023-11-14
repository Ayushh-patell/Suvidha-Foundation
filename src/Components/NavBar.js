import React, { useEffect } from 'react'
import './Component_CSS/NavBar.css'
import { Link, useNavigate } from "react-router-dom";




const NavBar = () => {
  const navigate = useNavigate()

const GoHome = ()=> {
  navigate("/")
}

  const handleToggle = ()=> { //Expand/Shrink the navbar
    let navbar = document.querySelector(".topnav")
    navbar.classList.toggle("expand_nav")
  }

const handleMenu = (e)=> { //open/close side navbar
  e.target.classList.toggle("rotate_plus")

  document.querySelectorAll(".nav_circle").forEach((circle)=> {
    circle.classList.toggle("show_nav")
  })
  document.querySelectorAll(".nav_circle a span").forEach((span)=> {
    span.classList.toggle("show_span")
  })
}

  useEffect(() => { // show side navbar when user scrolls down 150px
    let sidenav = document.getElementsByClassName("sidenav")[0];
  
    window.addEventListener("scroll", () => {
      if (window.scrollY > 150) {
        sidenav.style.transform = "translateY(-50%) translateX(0%)"
      } else {
        sidenav.style.transform = "translateY(-50%) translateX(-1000%)"

      }
    });
  }, []);

  return (
    <>
    <nav className='topnav'>
        <div onClick={GoHome} className="logo">
            <img className='logo_full' src="./images/SuvidhaLogo.png" alt="" />
            <img className='logo_mini' src="./images/SuvidhaLogoMini.png" alt="" />
        </div>
        <div onClick={handleToggle} className="nav_menu_toggle">
        <i className="fa-solid fa-bars"></i>
        </div>
        <div className="navigations">
            <div className="nav_tab"><Link to='/Internship'>Internship</Link></div>
            <div className="nav_tab"><Link to='/Donation'>Help Us</Link></div>
            <div className="nav_tab"><Link to='/Events'>Events</Link></div>
            <div className="nav_tab"><Link to='/Gallery'>Gallery</Link></div>
            <div className="nav_tab"><a target='_blank' rel="noopener noreferrer" href='https://docs.google.com/forms/d/e/1FAIpQLSfAaaHU-k256CY6_83JPBOYeVFtKuKBvqMJb7oBIsDLKRmwNg/viewform'>Contact</a></div>
        </div>
    </nav>
    <nav className='sidenav'>
    <div className="sidenav_menu" onClick={handleMenu}><i className="fa-solid fa-plus"></i></div>
    <div className="nav_circle"><Link to='/Internship'><i className="fa-solid fa-graduation-cap"></i> <span> Internship</span></Link></div>
    <div className="nav_circle"><Link to='/Donation'><i className="fa-solid fa-handshake-angle"></i> <span> Help Us</span></Link></div>
    <div className="nav_circle"><Link to='/Events'><i className="fa-regular fa-calendar-days"></i> <span> Events</span></Link></div>
    <div className="nav_circle"><Link to='/Gallery'><i className="fa-regular fa-image"></i> <span> Gallery</span></Link></div>
    <div className="nav_circle"><a target='_blank' rel="noopener noreferrer" href='https://docs.google.com/forms/d/e/1FAIpQLSfAaaHU-k256CY6_83JPBOYeVFtKuKBvqMJb7oBIsDLKRmwNg/viewform'><i className="fa-regular fa-address-book"></i> <span> Contact</span></a></div>
    </nav>
    </>
  )
}

export default NavBar
