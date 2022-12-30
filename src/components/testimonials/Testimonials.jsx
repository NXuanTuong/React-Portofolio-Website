import React from 'react'
// import Swiper core and required modules
import { Pagination } from 'swiper'
// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
import { Swiper, SwiperSlide } from 'swiper/react'
import AVATAR1 from '../../assets/avatar1.jpg'
import './testimonials.css'



const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <div className='dot-light-1'></div>
      <div className='dot-light-2'></div>
      <div className='dot-light-3'></div>
      <div className='dot-light-4'></div>

      <Swiper className="container testimonials__container"
      modules={[Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }}
      >
        
        <SwiperSlide className='testimonial'>
          <div className="client__avatar">
            <img src={AVATAR1} alt="" />
          </div>
          <h5 className='client__name'>Nguyen Xuan Tuong</h5>
            <small className='client__review'>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi mollitia a explicabo quasi voluptatibus maxime temporibus culpa accusamus minus? Cumque aliquam nemo obcaecati 
              eveniet placeat officia labore ipsum culpa fugit.
            </small>
        </SwiperSlide>

        <SwiperSlide className='testimonial'>
          <div className="client__avatar">
            <img src={AVATAR1} alt="" />
          </div>
          <h5 className='client__name'>Nguyen Xuan Tuong</h5>
            <small className='client__review'>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi mollitia a explicabo quasi voluptatibus maxime temporibus culpa accusamus minus? Cumque aliquam nemo obcaecati 
              eveniet placeat officia labore ipsum culpa fugit.
            </small>
        </SwiperSlide>

        <SwiperSlide className='testimonial'>
          <div className="client__avatar">
            <img src={AVATAR1} alt="" />
          </div>
          <h5 className='client__name'>Nguyen Xuan Tuong</h5>
            <small className='client__review'>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi mollitia a explicabo quasi voluptatibus maxime temporibus culpa accusamus minus? Cumque aliquam nemo obcaecati 
              eveniet placeat officia labore ipsum culpa fugit.
            </small>
        </SwiperSlide>
      </Swiper>
    </section>
  )
}

export default Testimonials