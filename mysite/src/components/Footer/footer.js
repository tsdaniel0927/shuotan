import React from "react";
import './footer.css'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import GitHubIcon from '@mui/icons-material/GitHub'
import InstagramIcon from '@mui/icons-material/Instagram';

function Myfooter(){
    return(
        <div className="footer">
            <div className="footer-wrapper">
                <a style={{fontSize: "1rem", marginTop: "10px", marginRight:"110vh"}}>© 2023. All Rights Reserved.</a>
                <a href="https://www.linkedin.com/in/daniel-tan-37870a133" className="icons"><LinkedInIcon/></a>
                <a href="https://github.com/tsdaniel0927" className="icons"><GitHubIcon/></a>
                <a href="https://www.instagram.com/svker_4_pain/" className="icons"><InstagramIcon/></a>
            </div>
        </div>
    )
}

export default Myfooter