import React from "react";
import './footer.css'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import GitHubIcon from '@mui/icons-material/GitHub'; 

function Myfooter(){
    return(
        <div className="footer">
            {/* <p>footer here</p> */}
            <a><LinkedInIcon/></a>
            <a><GitHubIcon/></a>
        </div>
    )
}

export default Myfooter