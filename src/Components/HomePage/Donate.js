import React from 'react'
import { Link } from "react-router-dom";


const Donate = () => {
  return (
    <div className='donateHome' style={{padding:"1rem", display:"flex", flexDirection:"column", alignItems:"center"}}>
      <h4 className="title">Gift of Hope: Empowering Change Through Your Donation</h4>
      <Link  to={"/Donation"} className="btn">Donate Us</Link>
    </div>
  )
}

export default Donate
