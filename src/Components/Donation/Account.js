import React from 'react'
import './Account.css'

const Account = () => {
  return (
    <div>
      <h4 className="title">Account Details</h4>
      <div className="account">
        <div className="account_text">
        <h5 className="account_title">For Indian Donors</h5>
            <ul>
                <li>Bank of Baroda</li>
                <li>City: Nagpur</li>
                <li>Contact No: +91 8010996763</li>
                <li>Account Name: Suvidha Mahila Mandal</li>
                <li>Suvidha Account No: 97840100027609</li>
                <li>IFSC Code: BARB0DBKPAR</li>
            </ul>
        </div>
        <div className="account_img">
            <img src="./images/QR-Codes.jpg" alt="" />
        </div>
      </div>
    </div>
  )
}

export default Account
