import React from 'react'
import AddSection from '../../Components/AddPageComponent/AddSection/AddSection'
import {Helmet} from "react-helmet";
import Navbar from '../../LayOut/Navbar/Navbar';
import StartNavSection from '../../Components/HomePageComponents/StartNavSection/StartNavSection';

function Add() {
  return (
    <section>
        <Helmet><title>Add</title></Helmet>
        <Navbar/>
        <AddSection/>
        <StartNavSection/>
    </section>
  )
}

export default Add