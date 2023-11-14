import React from 'react'
import './Component_CSS/Footer.css'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer>
      <div className="footer_links">
      <div className="footer_column">
        <h3 className="title">Suvidha Foundation </h3>
        <ul>
            <li>Suvidha Mahila Mandal, Walni Ward No. 1, Jai Bhole Nagar, Walni, Saoner <br />Nagpur, Maharashtra 441102</li>
            <li className='footer_socials'>
                <div className="footer_social"><a href='https://www.facebook.com/suvidhamahilamandal/' target='_blank' rel='noopener noreferrer'><i className="fab fa-facebook-f"></i></a></div>
                <div className="footer_social"><a href='https://instagram.com/suvidha_mahila_mandal?igshid=YmMyMTA2M2Y=' target='_blank' rel='noopener noreferrer'><i className="fab fa-instagram"></i></a></div>
                <div className="footer_social"><a href='mailto:info@suvidhafoundationedutech.org' target='_blank' rel='noopener noreferrer'><i className="fa-brands fa-google"></i></a></div>
                <div className="footer_social"><a href='https://www.linkedin.com/company/suvidha-foundation/mycompany/' target='_blank' rel='noopener noreferrer'><i className="fab fa-linkedin-in"></i></a></div>
            </li>
        </ul>
      </div>
      <div className="footer_column">
        <h3 className="title">Certificates</h3>
        <ul>
            <li><a target='_blank' rel="noopener noreferrer" href="./PDFs/80G_APPROVAL.pdf">80G Certificate</a></li>
            <li><a target='_blank' rel="noopener noreferrer" href="./PDFs/12A_APPROVAL.pdf">12A Certificate</a></li>
            <li><a target='_blank' rel="noopener noreferrer" href="./PDFs/CSR.PDF">CSR Certificate</a></li>
            <li><a target='_blank' rel="noopener noreferrer" href="./PDFs/suvidha_darpan_portal_registration.pdf">Suvidha Darpan Registration</a></li>
            <li><a target='_blank' rel="noopener noreferrer" href="./PDFs/suvidha_pan_card.pdf">Suvidha Pan Card</a></li>
        </ul>
      </div>
      <div className="footer_column">
        <h3 className="title">Useful Links</h3>
        <ul>
            <li><Link to={"/Verify"}>Verify Your Certificate</Link></li>
            <li><Link to={"/PrivacyPolicy"}>Privacy Policy</Link></li>
        </ul>
      </div>
      </div>
      <div className="footer_copyright">
        <span className="rights">© Suvidha Foundation (Suvidha Mahila Mandal), All Right Reserved</span>
        <a style={{color:"white"}} rel="noopener noreferrer" target='_blank' href='https://www.linkedin.com/in/ayush-patel-99a44b283' className="designer">Designed By Ayush Patel</a>
      </div>
    </footer>
  )
}

export default Footer
