import React from 'react'
import Logo from "../../../Imgs/swanlake.png";
import "./StartNavSection.scss"


function StartNavSection() {
    return (
        <section className='start_nav'>
            <div className='start'>
                <div className='logo'>
                    <img alt='foto' src={Logo} />
                </div>
                <div className='connections'>
                    <div className='contact'>
                        <div className='contact_elements'>
                            <p>Contact US :</p>
                            <p>Mail@Example.com</p>
                        </div>
                        <div className='contact_icon'>
                            <i class="fa-solid fa-envelope"></i>
                        </div>
                    </div>
                    <div className='call'>
                        <div className='call_elements'>
                            <p>Call Us :</p>
                            <p>+201093515252</p>
                        </div>
                        <div className='call_icon'>
                            <i class="fa-solid fa-phone"></i>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default StartNavSection