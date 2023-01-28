import React from 'react'
import "./RergisterSection.scss"
import Dalga from "../../../Imgs/dalga.png";
import Arrow from "../../../Imgs/arrow.png"
import { Formik, Form, Field } from "formik"

function RegisterSection() {
  return (
    <section className='register_section'>
      <div className='register'>
        <div className='register_info'>
          <div className='register_info_element'>
            <p>Creative Landing Page Template</p>
            <h2 className='started'>LET’S GET STARTED WITH </h2>
            <h2 className='lake'>SWAN LAKE TEMPLATE</h2>
            <img alt='foto' src={Dalga} />
          </div>
          <div className='explore_button'><button>EXPlORE MORE</button>
            <img alt='foto' src={Arrow} />
          </div>
        </div>
        <div className='register_now'>
          <div className='register_form'>
            <div className='now'>
              <h3>REGISTER NOW</h3>
              <p>Take your free trial</p>
            </div>
            <div className='register_formik_1'>
              <div className='register_formik'>
                <Formik>
                  <Form>
                    <Field className="field" placeholder="Your Name" />
                    <Field className="field" placeholder="Your Email" />
                    <Field className="field" placeholder="Phone Number" />
                  </Form>
                </Formik>
              </div>
            </div>

            <div className='info_button'>
              <p>
                We will never share your personal info</p>
              <button>GET A QOUTE</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default RegisterSection