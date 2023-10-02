import photo from './img/Usii_passport_L.jpg';
import './Info.css';
import {FaLinkedin} from "react-icons/fa6";
import {FaEnvelope} from "react-icons/fa6";


function Info() {
  return (
    <div className='info__container'>
      <img src={photo} className="info__photo" alt="profile photo"/>
      <h2 className='info__heading'>Usman Awwal</h2>
      <div className='info__subheading'>
        <p className='occupation'>Web developer</p>
        <a href='#' className='twitter__handle'>@usman_smooth</a>
      </div>
      <div className='info__btn__container'>
        <a href='#' className='btn btn__white'>
        <FaEnvelope /> <span>Email</span></a>
        <a href='#' className='btn btn__blue'>
        <FaLinkedin /> <span>LinkedIn</span>
        </a>
      </div>
    </div>

  )
}

export default Info;