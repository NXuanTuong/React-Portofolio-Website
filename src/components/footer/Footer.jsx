import React from 'react'
import { BsSuitHeartFill } from 'react-icons/bs'
import { FaFacebookF } from 'react-icons/fa'
import { FiInstagram } from 'react-icons/fi'
import { IoLogoTwitter } from 'react-icons/io'
import './footer.css'

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>TuongNX</a>

      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#expeirience">Expeirience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href=""><FaFacebookF /></a>
        <a href="#"><FiInstagram /></a>
        <a href="#"><IoLogoTwitter /></a>
      </div>

      <p className="footer__copyright">
        @Copy Nguyen Xuan Tuong <BsSuitHeartFill className='heart__footer'/> nhe !
      </p>
    </footer>
  )
}

export default Footer