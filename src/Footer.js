import './Footer.css';
import {FaLinkedin} from "react-icons/fa6";
import {FaSquareXTwitter} from "react-icons/fa6";
import {FaSquareGithub} from "react-icons/fa6";
import {FaSquareFacebook} from "react-icons/fa6"; 

function Footer() {
  return (
    <div className='footer__container'>
      <a href="#" className='footer__icons'>
        <FaSquareXTwitter />
      </a>
      <a href="#" className='footer__icons'>
        <FaSquareFacebook />
      </a>
      <a href="#" className='footer__icons'>
        <FaLinkedin />
      </a>
      <a href="#" className='footer__icons'>
        <FaSquareGithub />
      </a>
    </div>
  )
}

export default Footer;