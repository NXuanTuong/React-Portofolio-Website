import React from 'react'
import AVT1 from '../../assets/service-1.svg'
import AVT2 from '../../assets/service-2.svg'
import AVT3 from '../../assets/service-3.svg'
import './services.css'


const Services = () => {
  return (
    // <!-- services -->
    <section className="services section" id="services">
        <div className="container">
            <h2 className="section-title padd-15">
                Services
            </h2>
            <div className="row">
                <div className="service-item padd-15">
                    <div className="service-item-inner" style={{backgroundColor: 'rgb(108, 108, 229)'}}>
                        <img src={AVT1} alt="" />
                        <h3>UI/UX Design</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia aperiam adipisci veniam excepturi, odit, repudiandae quas pariatur similique rem provident ipsam iusto quod nulla doloribus eveniet vel iste quidem vero?</p>
                    </div>
                </div>

                <div className="service-item padd-15">
                    <div className="service-item-inner" style={{backgroundColor: 'rgb(249, 215, 76)'}}>
                        <img src={AVT2} alt="" />
                        <h3>Web Development</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia aperiam adipisci veniam excepturi, odit, repudiandae quas pariatur similique rem provident ipsam iusto quod nulla doloribus eveniet vel iste quidem vero?</p>
                    </div>
                </div>

                <div className="service-item padd-15">
                    <div className="service-item-inner" style={{backgroundColor: 'rgb(249, 123, 139)'}}>
                        <img src={AVT3} alt="" />
                        <h3>Photography</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia aperiam adipisci veniam excepturi, odit, repudiandae quas pariatur similique rem provident ipsam iusto quod nulla doloribus eveniet vel iste quidem vero?</p>
                    </div>
                </div>
            </div>

            <div className="text padd-15">
                <p>Looking for a custom job ? <a href="#contact"> Click me </a> to contact me !</p>
            </div>
        </div>
    </section>
  )
}

export default Services