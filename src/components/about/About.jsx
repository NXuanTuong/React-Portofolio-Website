import React from 'react'
import { FaAward } from 'react-icons/fa'
import { FiUsers } from 'react-icons/fi'
import { VscFolderLibrary } from 'react-icons/vsc'
import HT2 from '../../assets/contact-img.svg'
import ME from '../../assets/ME.jpg'
import './about.css'

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <FaAward className='about__icon'/>
              <h5>Experrience</h5>
              <small>3+ Months Working</small>
            </article>
            <article className='about__card'>
              <FiUsers className='about__icon'/>
              <h5>Clients</h5>
              <small>200+ Worldwide</small>
            </article>
            <article className='about__card'>
              <VscFolderLibrary className='about__icon'/>
              <h5>Project</h5>
              <small>80+ Completed</small>
            </article>
          </div>

          <p>
          I'm a frontend developer living in Hanoi, Vietnam. I graduated with a major in Web Design. Up to now, I have worked on many projects from basic HTML to projects using the React library. Besides coding, I also enjoy designing websites using Figma tools.
          Scroll down to understand more about the projects I have developed and designed!
          </p>
          
          <div className='about__left'>
          <img src={HT2} alt="" />
          </div>

          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About