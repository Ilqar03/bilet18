import React from 'react'
import "./AboutSection.scss"

function AboutSection() {
    return (
        <section className='about_section'>
            <div className='about_info'>
                <h3>ABOUT SWAN LAKE</h3>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
            </div>
            <div className='about_card'>
                <div className='about_cards'>
                    <div className='card_about'>
                        <p>01.</p>
                        <h3>THE COMPANY</h3>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been indust...</p>
                    </div>
                    <div className='card_about'>
                        <p>02.</p>
                        <h3>THE COMPANY</h3>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been indust...</p>
                    </div>
                    <div className='card_about'>
                        <p>03.</p>
                        <h3>THE COMPANY</h3>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been indust...</p>
                    </div>
                    <div className='card_about'>
                        <p>04.</p>
                        <h3>THE COMPANY</h3>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been indust...</p>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default AboutSection