import React from 'react'
import AVT1 from '../../assets/avatar-1.svg'
import './home.css'
const Home = () => {
  return (
    <section className="home" id="home">
                <div className="container">

                    <div className='dot-light-1'></div>
                    <div className='dot-light-2'></div>
                    <div className='dot-light-3'></div>
                    <div className='dot-light-4'></div>

                    <div className="intro">
                        <img src={AVT1} alt="" />
    
                        <h1>TuongNX</h1>
                        <span>I'm a <span className="info-text">Front End Developer</span></span>
                        <ul className="social-icons">
                            <li><a href=""><i className="lni lni-instagram-original"></i></a></li>
                            <li><a href=""><i className="lni lni-twitter-original"></i></a></li>
                            <li><a href=""><i className="lni lni-behance-original"></i></a></li>
                            <li><a href=""><i className="lni lni-dribbble"></i></a></li>
                            <li><a href=""><i className="lni lni-pinterest"></i></a></li>
                        </ul>
    
                        <div>
                            <a href="" className="btn btn-default">Hire me</a>
                        </div>
                        {/* <!-- scroll down mouse wheel --> */}
                        <div className="scroll-down">
                            <a href="" className="mouse-wrapper">
                                <span>Scroll Down</span>
                                <span className="mouse">
                                    <div className="wheel"></div>
                                </span>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
  )
}

export default Home