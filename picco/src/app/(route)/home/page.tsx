import Footer from "@/components/footer/footer";
import Header from "@/components/header/header";
import About from "@/components/home/about";
import Career from "@/components/home/career";
import Profile from "@/components/home/profile";
import Skills from "@/components/home/skills";
import Testimonial from "@/components/home/testimonial";
import React from 'react'

const Home = () => {
  return (
    <>
      <Header />
      <div style={{ padding: '2rem 3rem 2rem 3rem' }}>
        <Profile />
        <About />
        <Skills />
        <Career />
        <Testimonial />
      </div>
      <Footer />
    </>
  )
}

export default Home
