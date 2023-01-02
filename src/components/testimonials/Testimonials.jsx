import React from 'react'
import AVT1 from '../../assets/avatar-1.svg'
import AVT3 from '../../assets/avatar-3.svg'
import './testimonials.css'

const Testimonials = () => {
  return (
    // <!-- Testimonal -->
            <section className="section" id="testimonal">
                <div className="container">
                    {/* <!-- section title --> */}
                    <h2 className="section-title padd-15">
                        Clients and Review 
                    </h2>
                    <div className="swiper testimonal-wrapper">
                        <div className="swiper-wrapper">
                            <div className="testimonial-item swiper-slide">
                                <div className="thumb">
                                    <img src={AVT3} alt="" />
                                </div>
                                <h3>Tuong NX</h3>
                                <span className="subtitle">Product designer at Dribble</span>
                                <div className="comment">
                                    I enjoy working with the theme and learn so much Good luck! 
                                </div>
                            </div>
                            
                            <div className="testimonial-item swiper-slide">
                                <div className="thumb">
                                    <img src={AVT1} alt="" />
                                </div>
                                <h3>Tuong NX</h3>
                                <span className="subtitle">Product designer at Dribble</span>
                                <div className="comment">
                                    I enjoy working with the theme and learn so much Good luck! 
                                </div>
                            </div>

                            <div className="testimonial-item swiper-slide">
                                <div className="thumb">
                                    <img src={AVT1} alt="" />
                                </div>
                                <h3>Tuong NX</h3>
                                <span className="subtitle">Product designer at Dribble</span>
                                <div className="comment">
                                    I enjoy working with the theme and learn so much Good luck! 
                                </div>
                            </div>

                        </div>
                        <div className="swiper-pagination"></div>

                    </div>
                </div>
            </section>
  )
}

export default Testimonials