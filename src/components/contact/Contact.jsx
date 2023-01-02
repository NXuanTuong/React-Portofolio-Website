import emailjs from 'emailjs-com';
import { useRef } from 'react';
import { BsWhatsapp } from 'react-icons/bs';
import { MdOutlineEmail } from 'react-icons/md';
import { RiMessengerLine } from 'react-icons/ri';
import './contact.css';


const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_7kq92q5', 'template_hvv4tuz', form.current, 'MmZoz75_3oN2QIIhC')
      .then((result) => {
          if (result) return alert('Mình nhận được rồi nhé !')
      }, (error) => {
          console.log(error.text);
      });

    e.target.reset()
  };

  return (
    // <!-- Contact -->
    <section className="section" id="contact">
        <div className="container">
            {/* <!-- section title --> */}
            <h2 className="section-title padd-15">
                Contact us
            </h2>
            <div className="container contact__container">
                <div className="contact__options">
                  <article className='contact__option'>
                    <MdOutlineEmail className='contact__option-icon'/>
                    <h4>Email</h4>
                    <h5>tuongnx0502@gmail.com</h5>
                    <a href="mailto:tuongnx0502@gmail.com"  target="_blank" rel="noreferrer">Send a message</a>
                  </article>
        
                  <article className='contact__option'>
                    <RiMessengerLine className='contact__option-icon'/>
                    <h4>Messenger</h4>
                    <h5>xuantuong</h5>
                    <a href="https://m.me/xuantuongx5" target="_blank" rel="noreferrer">Send a message</a>
                  </article>
        
                  <article className='contact__option'>
                    <BsWhatsapp className='contact__option-icon'/>
                    <h4>WhatsApp</h4>
                    <h5>+84 59 282 859</h5>
                    <a href="https://api.whatsapp.com/send?=phone+8459282859">Send a message</a>
                  </article>
                </div>
                             
                <form action="" ref={form} onSubmit={sendEmail}>
                  <input type="text" name='name' placeholder='Your Full Name' required/>
                  <input type="email" name='name' placeholder='Your Email' required/>
                  <textarea name='message' rows="7" placeholder='Your Message' required></textarea> 
                  <button type='submit' className='btn btn-default'>Send Message</button>
                </form>
            </div>
        </div>
    </section>
  )
}

export default Contact