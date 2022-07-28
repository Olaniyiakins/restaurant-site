import React from 'react'
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import '../styles/Footer.css';

function Footer() {
  return (
   <div className="footer">

    <div className="socialMedia">
        <TwitterIcon/>
        <FacebookIcon/>
        <InstagramIcon/>
        <p>&copy;2022 Nellycool Restaurant.</p>
    </div>
   </div>
  )
}

export default Footer