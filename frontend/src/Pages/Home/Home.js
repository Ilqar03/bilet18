import React from 'react'
import GreatPricingSection from '../../Components/HomePageComponents/GreatPricingSection/GreatPricingSection'
import { Helmet } from "react-helmet";
import Navbar from '../../LayOut/Navbar/Navbar';
import "./Home.scss"
import RegisterSection from '../../Components/HomePageComponents/RegisterSection/RegisterSection';
import StartNavSection from '../../Components/HomePageComponents/StartNavSection/StartNavSection';
import AboutSection from '../../Components/HomePageComponents/AboutSection/AboutSection';
import LoadingSection from '../../Components/LoadingSection/LoadingSection';

function Home() {
  return (
    <div>
      <Helmet><title>Home</title></Helmet>
      <StartNavSection />
      <Navbar />
      <RegisterSection />
      <AboutSection/>
      <GreatPricingSection />
      <LoadingSection/>
      <StartNavSection/>




    </div>
  )
}

export default Home