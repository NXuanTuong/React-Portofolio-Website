import React from 'react'
import { BsPatchCheckFill } from 'react-icons/bs'
import HT2 from '../../assets/534-5340080_astronaut-helmet-clipart.png'
import Space from '../../assets/6rjVlVH.png'
import Astronaut from '../../assets/pngtree-hand-drawn-cartoon-space-astronaut-vector-image_2300696.png'
import './experience.css'

const Experience = () => {
  return (
    <section id="experience">
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>


      <div className='header__socials experience__left'>
            <img src={Space} alt="" />
      </div>

      
      <div className="container experience__container">
        <div className="experience__frontend">
        <div className='experience__Astronaut-FE'>
        <img src={HT2} alt="" />
        </div>
          <h3>Frontend Development</h3>
          <div className="experience__content">
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
              <h4>HTML</h4>
              <small className='text-light'>Experience</small>
              </div>
            </article>

            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
             <div>
             <h4>CSS</h4>
              <small className='text-light'>Intermediate</small>
             </div>
            </article>

            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
              <h4>Javascript</h4>
              <small className='text-light'>Experience</small>
              </div>
            </article>

            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
             <div>
             <h4>Tailwindcss</h4>
              <small className='text-light'>Experience</small>
             </div>
            </article>

            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
             <div>
             <h4>ReactJS</h4>
              <small className='text-light'>Experience</small>
             </div>
            </article>

            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
             <div>
             <h4>NextJS</h4>
              <small className='text-light'>Experience</small>
             </div>
            </article>
          </div>
        </div>

        {/* End of Frontend */}
        
        <div className='experience__backend'>
        <h3>Backend Development</h3>
          <div className="experience__content">
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
              <h4>NodeJS</h4>
              <small className='text-light'>Experience</small>
              </div>
            </article>

            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
              <h4>MongoDB</h4>
              <small className='text-light'>Intermediate</small>
              </div>
            </article>

            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
              <h4>MySQL</h4>
              <small className='text-light'>Basic</small>
              </div>
            </article>

          
          </div>
          <div className='experience__Astronaut-BE'>
            <img src={Astronaut} alt="" />
            </div>
        </div>
      </div>
    </section>
  )
}

export default Experience