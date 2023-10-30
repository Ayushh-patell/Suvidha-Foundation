import React, { useLayoutEffect } from 'react'
import HeaderImg from '../Components/Donation/HeaderImg'
import Account from '../Components/Donation/Account'

const Donation = () => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0)
});
  return (
    <div>
      <HeaderImg/>
      <Account/>
    </div>
  )
}

export default Donation
