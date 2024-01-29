import React, { useEffect } from 'react'
import "./contactPage.css"
import { Footer, Navbar } from "../../components";
import { Link } from 'react-router-dom';
import { CiMail, CiPhone, CiMapPin } from "react-icons/ci";
import { FaLinkedin, FaInstagram, FaYoutube, FaFacebook } from "react-icons/fa";
import { Button } from 'react-bootstrap';
import entry from '../ContactPage/entry.jpg';
import Aos from "aos";


type Props = {}

const ContactPage = (props: Props) => {

  useEffect(() => {
    Aos.init({ duration: 2000, offset: 20 });
  }, []);

  return (
    <>
      <Navbar />
      <div className='contact'>
        <div className='contact-entry'>
          <div className='entry-text'>
            <h2 data-aos="fade-right">We are working with all our strength to provide you with trouble-free car rental service.</h2>
            <p data-aos="fade-left">If you have a situation you would like to convey to us, please contact us using our communication channels or by filling out the form below.</p>
          </div>
        </div>
        <div className='contact-form'>
          <h1>Contact Us</h1>
          <div id='contact-container'>
            <div className='contact-info'>
            <h4>Contact Information</h4>
              <p>Call us, send us an e-mail or fill out the form and send a message.</p>
              <div className='icon-text'>
                <i className='icon' aria-hidden="true"><CiPhone /></i>
                <Link to="tel:+902163314800" className='link2'>(0216) 331 48 00</Link>
              </div>
              <div className='icon-text'>
                <i className='icon' aria-hidden="true"><CiMail /></i>
                <Link to="mailto:support@rentogo.com" className='link2'>support@rentogo.com</Link>
              </div>
              <div className='icon-text'>
                <i className='icon' aria-hidden="true"><CiMapPin /></i>
                <Link to="https://www.google.com/maps/place/Smart+Plaza/@41.0901293,29.0908427,17z/data=!3m1!4b1!4m6!3m5!1s0x14cacbca50da40b7:0x1d0efe9cea6f6572!8m2!3d41.0901254!4d29.0957136!16s%2Fg%2F11bycl90bm?entry=ttu" target='_blank' rel="noopener noreferrer" className='link2'>
                  Kavacık, Rüzgarlıbahçe Mah. Çampınarı Sok. No:4 Smart Plaza B Blok Kat:3 34805, Beykoz,İstanbul
                </Link>
              </div>
              <div className='social-media'>
                <Link to="https://www.linkedin.com/company/tobeto/" target='_blank' className='icon-circle'>
                  <i className='fa fa-linkedin'><FaLinkedin /></i>
                </Link>
                <Link to="https://www.instagram.com/tobeto_official/" target='_blank' className='icon-circle'>
                  <i className='fa fa-instagram'><FaInstagram /></i>
                </Link>
                <Link to="https://m.facebook.com/tobetoplatform?refid=13&__tn__=%2Cg" target='_blank' className='icon-circle'>
                  <i className='fa fa-facebook'><FaFacebook /></i>
                </Link>
                <Link to="https://www.youtube.com/@tobeto-platform" target='_blank' className='icon-circle'>
                  <i className='fa fa-youtube'><FaYoutube /></i>
                </Link>
              </div>
            </div>
            <form>
              <div className='col'>
                <div className='form-group'>
                  <label>First Name</label>
                  <input type='text'></input>
                </div>
                <div className='form-group'>
                  <label>Last Name</label>
                  <input type='text'></input>
                </div>
              </div>
              <div className='col'>
                <div className='form-group'>
                  <label>Email</label>
                  <input type='email'></input>
                </div>
                <div className='form-group'>
                  <label>Phone</label>
                  <input type='tel' pattern="0[2-9][0-9]{8}"></input>
                </div>
              </div>
              <div className='col-2'>
                <div className='form-group'>
                  <label>Message</label>
                  <textarea></textarea>
                </div>
              </div>
              <div className='col-2'>
                <div className='form-group right'>
                  <Button className='primary' data-aos="zoom-in">Send Message</Button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default ContactPage