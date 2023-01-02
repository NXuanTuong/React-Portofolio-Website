import AVT1 from '../../assets/1.svg'
import AVT2 from '../../assets/2.svg'
import AVT3 from '../../assets/3.svg'
import AVT4 from '../../assets/4.svg'
import AVT5 from '../../assets/5.svg'
import AVT6 from '../../assets/6.svg'
import './portfolio.css'


const Portfolio = () => {
  return (
    // <!-- Portfolio -->

            <section class="portfolio section" id="portfolio">
                <div class="container">
                    <h2 class="section-title padd-15">
                        Portfolio 
                    </h2>

                    <div class="row">
                        <div class="portfolio-filter padd-15">
                            <div class="portfolio-filter-inner">
                                <button type="button" class="active" data-filter="all">Everything</button>
                                <button type="button" data-filter="art">Art</button>
                                <button type="button" data-filter="creative">Creative</button>
                                <button type="button" data-filter="design">Design</button>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="portfolio-item padd-15" data-category="art">
                            <div class="portfolio-item-inner">
                                <div class="portfolio-item-thumbnail">
                                    <img src={AVT1} alt="" />
                                    <div class="mask"></div>
                                </div>

                                <span class="term">Art, design</span>

                                <h3 class="portfolio-item-title">Project Management Illustration</h3>
                                <span class="more-button">&hellip;</span>
                            </div>
                        </div>

                        <div class="portfolio-item padd-15" data-category="creative">
                            <div class="portfolio-item-inner">
                                <div class="portfolio-item-thumbnail">
                                    <img src={AVT2} alt="" />
                                    <div class="mask"></div>
                                </div>

                                <span class="term">Creative</span>

                                <h3 class="portfolio-item-title">Onboaeding Motivation</h3>
                                <span class="more-button">&hellip;</span>
                            </div>
                        </div>

                        <div class="portfolio-item padd-15" data-category="design">
                            <div class="portfolio-item-inner">
                                <div class="portfolio-item-thumbnail">
                                    <img src={AVT3} alt="" />
                                    <div class="mask"></div>
                                </div>

                                <span class="term">Art, design</span>

                                <h3 class="portfolio-item-title">iMac Mockup Design</h3>
                                <span class="more-button">&hellip;</span>
                            </div>
                        </div>

                        <div class="portfolio-item padd-15" data-category="creative">
                            <div class="portfolio-item-inner">
                                <div class="portfolio-item-thumbnail">
                                    <img src={AVT4} alt="" />
                                    <div class="mask"></div>
                                </div>

                                <span class="term">Creative</span>

                                <h3 class="portfolio-item-title">Game Store App Concept</h3>
                                <span class="more-button">&hellip;</span>
                            </div>
                        </div>

                        <div class="portfolio-item padd-15" data-category="design">
                            <div class="portfolio-item-inner">
                                <div class="portfolio-item-thumbnail">
                                    <img src={AVT5} alt="" />
                                    <div class="mask"></div>
                                </div>

                                <span class="term">Creative</span>

                                <h3 class="portfolio-item-title">Guest App Walkthrough Screens</h3>
                                <span class="more-button">&hellip;</span>
                            </div>
                        </div>

                        <div class="portfolio-item padd-15" data-category="creative">
                            <div class="portfolio-item-inner">
                                <div class="portfolio-item-thumbnail">
                                    <img src={AVT6} alt="" />
                                    <div class="mask"></div>
                                </div>

                                <span class="term">Design</span>

                                <h3 class="portfolio-item-title">Delivery App Wireframe</h3>
                                <span class="more-button">&hellip;</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
  )
}

export default Portfolio