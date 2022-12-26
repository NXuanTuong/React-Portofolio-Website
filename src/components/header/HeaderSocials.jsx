import React from 'react'
import { BsLinkedin } from 'react-icons/bs'
import { FaGithub } from 'react-icons/fa'
import { FiDribbble } from 'react-icons/fi'
import HT from '../../assets/87Uf8Zh.png'
import headerImg from '../../assets/header-img.svg'

const HeaderSocials = () => {
  return (
    <>
    <div className='header__socials header__left'>
      <img src={HT} alt="" />
    </div>
      <div className='header__socials header__center'>
        <a href="#" target="_blank"><BsLinkedin /></a>
        <a href="#" target="_blank"><FaGithub /></a>
        <a href="#" target="_blank"><FiDribbble /></a>
    </div>
    <div className='header__socials header__right'>
      <img src={headerImg} alt="" />
    </div>
    </>
  )
}

export default HeaderSocials