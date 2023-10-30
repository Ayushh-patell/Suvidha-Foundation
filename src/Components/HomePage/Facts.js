import React from 'react'
import './Component_CSS/Facts.css'

const Facts = () => {
  return (
    <div className='facts'>
      <div className="fact_box">
        <div className="fact">
            <div className="fact_logo"><i className="fa-solid fa-earth-americas"></i></div>
            <p className="fact_text">15<sup><i className="fa-solid fa-plus"></i></sup> <span>Countries</span></p>
        </div>
        <div className="fact">
            <div className="fact_logo"><i className="fa-solid fa-hand-holding-hand"></i></div>
            <p className="fact_text">3L<sup><i className="fa-solid fa-plus"></i></sup> <span>Volunteers</span></p>
        </div>
        <div className="fact">
            <div className="fact_logo"><i className="fa-solid fa-hand-holding-heart"></i></div>
            <p className="fact_text">1Cr<sup><i className="fa-solid fa-plus"></i></sup> <span>Internships</span></p>

        </div>
        <div className="fact">
            <div className="fact_logo"><i className="fa-solid fa-tree"></i></div>
            <p className="fact_text">54L<sup><i className="fa-solid fa-plus"></i></sup> <span>Plantations</span></p>
        </div>
      </div>
    </div>
  )
}

export default Facts
