import React from 'react'
import PR1 from '../../assets/price-1.svg'
import PR2 from '../../assets/price-2.svg'
import PR3 from '../../assets/price-3.svg'
import './pricing.css'
const Pricing = () => {
  return (
    // <!-- Pricing -->
            <section className="pricing section" id="pricing">
                <div className="container">
                    <h2 className="section-title padd-15">
                        Pricing Plans
                    </h2>
                    <div className="row">
                        <div className="prices">
                            <div className="price-item" >
                                <img src={PR1} alt="" />
                                <h3 className="plan">Basic</h3>
                                <p>A Simple option but powerful to manage your business</p>
                                <p>Email support</p>
                                <h3 className="price"><em>$</em>9 <span>Month</span></h3>
                                <a href="" className="btn btn-default">Get Started</a>
                            </div>
                        </div>
                        <div className="prices">
                            <div className="price-item best">
                                <span className="badge">Recomemed</span>
                                <img src={PR2} alt="" />
                                <h3 className="plan">Premium</h3>
                                <p>A Simple option but powerful to manage your business</p>
                                <p>Email support</p>
                                <h3 className="price"><em>$</em>49 <span>Month</span></h3>
                                <a href="" className="btn btn-default">Get Started</a>
                            </div>
                        </div>
                        <div className="prices">
                            <div className="price-item">
                                <img src={PR3} alt="" />
                                <h3 className="plan">Basic</h3>
                                <p>A Simple option but powerful to manage your business</p>
                                <p>24/7 support</p>
                                <h3 className="price"><em>$</em>99 <span>Month</span></h3>
                                <a href="" className="btn btn-default">Get Started</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
  )
}

export default Pricing