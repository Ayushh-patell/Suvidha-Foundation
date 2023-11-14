import React, { useLayoutEffect } from 'react'
import TopCarousel from '../Components/HomePage/TopCarousel'
import About from '../Components/HomePage/About'
import Volunteer from '../Components/HomePage/Volunteer'
import Goals from '../Components/HomePage/Goals'
import EventDisplay from '../Components/HomePage/Event_display'
import Facts from '../Components/HomePage/Facts'
import InternTestimonial from '../Components/HomePage/InternTestimonial'
import Team from '../Components/HomePage/Staff'
import Collab from '../Components/HomePage/Collab'
import Testimonial from '../Components/HomePage/Testimonial'
import Donate from '../Components/HomePage/Donate'

const HomePage = () => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0)
});
  return (
    <>
    <TopCarousel/>
    <About/>
    <Donate/>
    <Volunteer/>
    <Goals/>
    <EventDisplay/>
    <Facts/>
    <InternTestimonial/>
    <Team/>
    <Collab/>
    <Testimonial/>
    </>
  )
}

export default HomePage
