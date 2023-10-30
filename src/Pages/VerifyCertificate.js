import React, { useLayoutEffect } from 'react'
import '../Components/Component_CSS/Verify.css'

const VerifyCertificate = () => {
    useLayoutEffect(() => {
        window.scrollTo(0, 0)
    });
  return (
    <div className='verify'>
      <h2 className="title">Verify Certificate</h2>
      <form action="" method="post">
        <input placeholder='Enter Your Reference Number' required type="text" name='refNo' />
        <button className='intern_btn' type="submit">Verify</button>
      </form>
      <div className="records">
      </div>
    </div>
  )
}

export default VerifyCertificate
