import React from 'react'
import './Home.css'
import {Link} from 'react-router-dom'
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import EmailIcon from '@mui/icons-material/Email';

const Home = () => {
    return (
        <div className="home">
            <div className="left">

                <h5>Hello I am </h5>

                <h1 className="name">Jawwad Akhter</h1>

                <h3 className="animate__animated animate__fadeInLeft animate__delay-2s">Web Developer</h3>

                <p className="animate__animated animate__fadeInLeft animate__delay-2s">
                    design and develop services for customers of all sizes, specializing in creating stylish, modern websites, web services and online stores.
                      </p>

                 <button className="portfolio_button">
                     
                <Link className="portfolio_to_Home" to="/project">See Portfolio <ArrowRightAltIcon style={{fontSize:'20px'}}/></Link>
                </button>
                <div className="social_container">
                   <a target="_blank" href="https://www.facebook.com/jawwadakhter674" style={{textDecoration:'none',color:"#0f172A"}}><FacebookIcon className="social_icon" /></a>
                   <a target="_blank" href="" style={{textDecoration:'none',color:"#0f172A"}}><TwitterIcon className="social_icon" /></a>
                   <a target="_blank" href="https://www.instagram.com/jawwadakhter22/" style={{textDecoration:'none',color:"#0f172A"}}><InstagramIcon className="social_icon" /></a>
                   <a target="_blank" href="https://mail.google.com/mail/u/0/#inbox" style={{textDecoration:'none',color:"#0f172A"}}><EmailIcon className="social_icon" /></a>
                </div>
            </div>

        </div>
    )
}


export default Home;