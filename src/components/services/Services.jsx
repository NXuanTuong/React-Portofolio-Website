import React from 'react'
import { BiCheck } from 'react-icons/bi'
import astronaut from '../../assets/cute-cartoon-astronaut-isolated-astronout-260nw-1733195078.png'
import pngTree from '../../assets/pngtree-1.png'
import pngTree2 from '../../assets/pngtree-2.png'
import './services.css'

const Services = () => {
  return (
    <section id="services">
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className='astronaut__png'>
        <img src={astronaut} alt="" />
      </div>
      <div className="container services__container">
      <article className='services'>
        <div className="service__head">
          <h3>UI/UX Design</h3>
        </div>

        <ul className='service__list'>
          <li><BiCheck className='service__list-icon' />
            <p>Building UI/UX your website...</p>
          </li>
          <li><BiCheck className='service__list-icon'/>
            <p>Landing Page</p>
          </li>

        </ul>
      </article>
      {/* End of UI/UX */}

      <article className='services'>
        <div className="service__head">
          <h3>Web Development</h3>
        </div>

        <ul className='service__list'>
          <li><BiCheck className='service__list-icon' />
            <p>Building or maintaining your website...</p>
          </li>
          <li><BiCheck className='service__list-icon'/>
            <p>Landing Page</p>
          </li>
        </ul>

      </article>
      {/* End of Web development */}

      <article className='services'>
        <div className="service__head">
          <h3>Content Creation</h3>
        </div>

        <ul className='service__list'>
          <li><BiCheck className='service__list-icon' />
            <p>Design website by figma, just basic, I'll come back soon...</p>
          </li>
          <li><BiCheck className='service__list-icon'/>
            <p>Landing Page</p>
          </li>
        </ul>

      </article>
      {/* End of UI/UX */}
      </div>

      <div className='pngTree__png'>
        <img src={pngTree} alt="" />
      </div>

      <div className='pngTree2__png'>
        <img src={pngTree2} alt="" />
      </div>
    </section>
  )
}

export default Services