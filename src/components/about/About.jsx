import AVT2 from '../../assets/avatar-2.svg'
import './about.css'
const About = () => {
  return (
    // <!-- about -->
    <setcion className="section about" id="about">
        <div className="container">
            <h2 className="section-title padd-15"> About me</h2>
            <div className="row">
                <div className="about-img padd-15">
                    <img src={AVT2} alt="" />
                </div>

                <div className="about-content padd-15">
                    <div className="rounded">
                        <div className="row">
                            <div className="about-text">
                                <p>
                                    I'm a frontend developer living in Hanoi, Vietnam. I graduated with a major in Web Design. Up to now, I have worked on many projects from basic HTML to projects using the React library. Besides coding, I also enjoy designing websites using Figma tools. Scroll down to understand more about the projects I have developed and designed!
                                </p>

                                <div>
                                    <a href="" className="btn btn-default">Download CV</a>
                                </div>
                            </div>
                            <div className="skills padd-15">
                                <div className="row">
                                    <div className="skill-item">
                                        <h4>Development</h4>
                                        <div className="progress">
                                            <div className="progress-in" style={{width: '95%', background: 'rgb(255, 209, 92)'}}>
                                                <div className="skill-percent">
                                                    95%
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="skill-item">
                                        <h4>Photography</h4>
                                        <div className="progress">
                                            <div className="progress-in" style={{width: '75%', background: 'rgb(255, 76, 96)'}}>
                                                <div className="skill-percent">
                                                    75%
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="skill-item">
                                        <h4>UI/UX Design</h4>
                                        <div className="progress">
                                            <div className="progress-in" style={{width: '85%', background: 'rgb(108, 108, 229)'}}>
                                                <div className="skill-percent">
                                                    85%
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="fact-item padd-15">
                    <i className="lni lni-thumbs-up"></i>
                        <div className="details">
                            <h3>198</h3>
                            <p>Project done</p>
                        </div>
                </div>

                <div className="fact-item padd-15">
                    <i className="lni lni-coffee-cup"></i>
                        <div className="details">
                            <h3>678</h3>
                            <p>Cup of coffee</p>
                        </div>
                </div>

                <div className="fact-item padd-15">
                    <i className="lni lni-users"></i>
                        <div className="details">
                            <h3>428</h3>
                            <p>Satisfied clients</p>
                        </div>
                </div>

                <div className="fact-item padd-15">
                    <i className="lni lni-cup"></i>
                        <div className="details">
                            <h3>28</h3>
                            <p>Nominiees winner</p>
                        </div>
                </div>
            </div>
        </div>
    </setcion>
  )
}

export default About