import React from 'react'
import { GiNightSleep } from 'react-icons/gi'
import ME from '../../assets/z3523481930128_cb6e570a5f54c78817c4bf9d2e4763f0.png'
import CTA from './CTA'
import './header.css'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <header>
       <div className='container__header-top'>
          <div className='header__logo'>
            <h4>TuongNX</h4>
          </div>
          <div className='icon-sleep'>
            <h3><GiNightSleep /></h3>
          </div>
      </div>
      <div className="container header__container">
        <h2>Hello I'm,</h2>
        <h1>Nguyen Xuan Tuong</h1>
        <h5 className="text-light">
          Frontend Developer
        </h5>
        <CTA />
        <HeaderSocials />

        <div className="me">
          <img src={ME} alt="" />
        </div>

        <a href="#contact" className='scroll__down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header