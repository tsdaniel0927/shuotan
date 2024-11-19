import React, { useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import './certifications.css'
import MasterTestaumur from '../images/certifications/MasterTestamur.jpg'
import BachelorTestamur from '../images/certifications/BachelorTestamur.jpg'
import OOP from '../images/certifications/OOP.jpg'
import SDLC from '../images/certifications/SDLC.jpg'
import { Fade } from "@mui/material";

export default function Home(){
    const navigate = useNavigate();

    useEffect(() => {
        const userAnswer = localStorage.getItem('userAnswer');
        if (!userAnswer) {
            navigate('/'); // Redirect to verification page if no valid session
        }
    }, [navigate]);

    return(
        <Fade in={true} timeout={1000}>
            <div className="flex-wrapper-certifications">
                <div className="wrapper-left-certifications">
                    <span className="sub-heading"> Degree Certificate </span>
                    <img className="certification-image" src={MasterTestaumur} alt="certificationMaster"/>
                    <img className="certification-image" src={OOP} alt="certificationOOP"/>
                    <span className="sub-heading" style={{marginTop:'2vw', marginBottom:'20px'}}> More certifications ongoing... </span>
                </div>
                
                <div className="wrapper-right-certifications" style={{marginTop:'27px'}}>
                    <img className="certification-image" src={BachelorTestamur} alt="certificationBachelor"/>
                    <img className="certification-image" src={SDLC} alt="certificationSDLC"/>
                </div>
            </div>
        </Fade>
    )
}