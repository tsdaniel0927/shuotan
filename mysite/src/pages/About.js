import React from "react";
import './about.css';
import SkillBar from "../components/Skillbar/skillbar";
import profileIMG from "../images/profileIMG.jpeg";
import { Fade } from '@mui/material';

function About(){
    const email = 'tsdaniel0927@gmail.com'

    return(
        <Fade in={true} timeout={1000}>
            <div className="flex-wrapper-about">
                <div className="wrapper-left">
                    <div style={{marginBottom:'20px'}}>
                        I'm a software graduate from <a className="hyper-link" href='https://uwa.edu.au'>University of Western Australia</a>, my bachelor degree is Engineering Science, specialise in software engineering. I also hold a degree of Master of Professional Engineering specialse in software. My most recent projects are <a className='hyper-link' href="/projects/ohcwa">OHCWA</a> and <a className='hyper-link' href="/projects/facedetection">Face Recognition</a>.
                    </div>

                    <span className="sub-heading">Education</span>
                    <div style={{marginBottom:'20px'}}>
                        2023.3-now -- National Institude of Technology <br/>
                        ### NIT is a industrial focused training organisation that provides professional IT training courses <br/>
                        2021-2022 -- Master of Professional Engineering, MPE specialise in software <br/>
                        2017-2020 -- Bachelor of Engineering Science, specialise in software
                    </div>

                    <span className="sub-heading">Skill (based on exposure time)</span>
                    <div style={{marginBottom:'20px'}}>
                        <SkillBar skill="ReactJS" score={80}/> &nbsp;
                        <SkillBar skill="Flask" score={60}/> &nbsp;
                        <SkillBar skill="Django" score={70}/> &nbsp;
                        <SkillBar skill="Python" score={70}/> &nbsp;
                        <SkillBar skill="AWS" score={60}/> &nbsp;
                        <SkillBar skill="CSS" score={80}/> &nbsp;
                        <SkillBar skill="HTML" score={80}/> &nbsp;
                        <SkillBar skill="C" score={65}/> &nbsp;
                        <SkillBar skill="java" score={50}/> &nbsp;
                        <SkillBar skill="R" score={40}/> &nbsp;
                        <SkillBar skill="MATLAB" score={50}/> &nbsp;
                        <SkillBar skill="Arduino" score={60}/> &nbsp;
                        <SkillBar skill="RaspberryPi" score={70}/> &nbsp;
                    </div>
                    
                    <span className="sub-heading">Experiences</span>
                    <div style={{marginBottom:'20px'}}>
                        2022.2-2022.11 -- Developer in the <a className="hyper-link" href="/projects">OCHWA project</a> <br/>
                        2017.11-2020.1 -- Receptionist in Rong's massage in Joondalup shopping centre <br/>
                        2021.1-2021.5 -- Kitchen Hand in The Collab Bar in West Perth
                    </div>
                    
                    <span className="sub-heading">Courses</span>
                    <div style={{marginBottom:'20px'}}>
                        Clouding computing with AWS <br/>
                        {/* <a className="hyper-link" href="https://github.com/tsdaniel0927/face_recogition">Face recognition</a> with MATLAB <br/> */}
                        <a className="hyper-link" href="https://github.com/daniel-jacobs98/UR5-Project">Robotic</a>, High Performance Computing and Data Structure with C <br/>
                        <a className="hyper-link" href="https://github.com/tsdaniel0927/Evasive-metadata-test">Research Project</a> - Machine Learning and neurual networks <b>(Distinction)</b> <br/>
                        Design Project - Data Entry System for patients <b>(High Distinction)</b>
                    </div>

                    <span className="sub-heading">Personal Development</span>
                    <div style={{marginBottom:'20px'}}>
                        Australian computer science accociate member
                    </div>

                    <span className="sub-heading">Volunteer</span>
                    <div style={{marginBottom:'20px'}}>
                        {/* <a className="hyper-link" href="https://www.instagram.com/p/CCS-N_Ljfsj/">Attended protest for protecting animals</a><br/> */}
                        AUG immigration conference registration
                    </div>

                    <span className="sub-heading">References</span>
                    <div style={{marginBottom:'20px'}}>
                        Tasha Stewart (Senior Property Manager) -- 0424690300<br/>
                    </div>
                </div>

                <div className="wrapper-right">
                    <img src={profileIMG} alt="Profile" style={{width:'18vw', height:'auto', marginBottom:'10px', marginTop:'1vh'}}/>
                    <div className="contact-details">Mobile: 0406194250</div>
                    <div className="contact-details">Email: <a className="hyper-link" href={`mailto:${email}`}>tsdaniel0927@gmail.com</a></div> <br/>
                    <div className="contact-details"> {'>>'} I think with more powerful AI</div>
                    <div className="contact-details"> {'>>'} What we really need... </div>
                    <div className="contact-details"> {'>>'} is nothing but just an idea </div>
                </div>

            </div>
        </Fade>
    )
}

export default About