import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './home.css'
import selfIntro from '../images/self-intro.mp4'
import { Fade } from '@mui/material';

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
            <div className="flex-wrapper-home">
                <div className="video-container" >
                    <span className="sub-heading">To know me in 55 seconds...</span>
                    <video controls className="video-style">
                        <source src={selfIntro} type="video/mp4"/>
                    </video>
                </div>
                <div>
                    <li style={{marginTop:'20px'}}>More <a href="/about" className="sub-heading">About</a> me</li>
                    <li>My <a href="/about" className="sub-heading">Projects</a></li>
                    <li style={{marginBottom:'20px'}}>My <a href="/about" className="sub-heading">Certifications</a></li>
                </div>
            </div>
        </Fade>
    )
}