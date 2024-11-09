import React, { useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import './about.css';
import SkillBar from "../components/Skillbar/skillbar";
import profileIMG from "../images/profileIMG.jpeg";
import { Fade } from '@mui/material';

function About(){
    const navigate = useNavigate();

    useEffect(() => {
        const userAnswer = sessionStorage.getItem('userAnswer');
        if (!userAnswer) {
            navigate('/'); // Redirect to verification page if no valid session
        }
    }, [navigate]);

    const email = 'tsdaniel0927@gmail.com'

    return(
        <Fade in={true} timeout={1000}>
            <div className="flex-wrapper-about">
                <div className="wrapper-left">
                    <div style={{marginBottom:'20px'}}>
                        I'm a software graduate from <a className="hyper-link" href='https://uwa.edu.au'>University of Western Australia</a>, I have a Master degree of Software Engineering in UWA. My most recent projects are <a className='hyper-link' href="/projects/ohcwa">OHCWA</a> and <a className='hyper-link' href="/projects/facedetection">Face Recognition</a>. <br/>
                        I currently work in IT department of <a className="hyper-link" href="https://www.linkedin.com/company/cloughgroup/posts/">Clough</a> as a IT Operation Analyst. My main responsibilities basically include - <b> solving complex tickets and generate new ideas to automate our work and make it reliable. </b>
                    </div>

                    <span className="sub-heading">Education</span>
                    <div style={{marginBottom:'20px'}}>
                        2021-2022 -- Master of Professional Engineering, MPE specialise in software (UWA)<br/>
                        2023.3-2024.3 -- National Institude of Technology (NIT)<br/>
                        ### NIT is a industrial focused training organisation that provides professional IT training courses <br/>
                        2017-2020 -- Bachelor of Engineering Science, specialise in software (UWA)
                    </div>

                    <span className="sub-heading">Personal Development & Achivements</span>
                    <div style={{marginBottom:'20px'}}>
                        Automated user Termination Procedure with a PowerShell Script, implemented a logic flow and decrease the time for terminating one user from 150s to 5s<br/>
                        Granted with level 2 access within 5 months<br/>
                        Participated company events - <a className="hyper-link" href="https://www.linkedin.com/feed/update/urn:li:activity:7176401480394973184/">Harmony Day</a><br/>
                        Proposed a solution to resolve a large Mircrosoft organisation issue "Error 1001"<br/>
                        Australian computer science accociate member<br/>
                    </div>

                    <span className="sub-heading">Skill (based on exposure time)</span>
                    <div style={{marginBottom:'20px'}}>
                        <SkillBar skill="JS,CSS,HTML" score={80}/> &nbsp;
                        <SkillBar skill="Python" score={70}/> &nbsp;
                        <SkillBar skill="Endpoint Manager" score={80}/> &nbsp;
                        <SkillBar skill="AD, AAD" score={70}/> &nbsp;
                        <SkillBar skill="PowerShell" score={90}/> &nbsp;
                        <SkillBar skill="MATLAB" score={50}/> &nbsp;
                        <SkillBar skill="RaspberryPi, Arduino" score={50}/> &nbsp;
                    </div>
                    
                    <span className="sub-heading">Experiences</span>
                    <div style={{marginBottom:'20px'}}>
                        2023.12-now -- IT Services and Operations Support Analyst <br/>
                        2023.10-2024.1 -- IT networking support and enginner at COMO The Treasury <br/>
                        2022.2-2022.11 -- Software Engineer in the <a className="hyper-link" href="/projects/ohcwa">OCHWA project</a> <br/>
                    </div>
                    
                    <span className="sub-heading">Courses</span>
                    <div style={{marginBottom:'20px'}}>
                        Clouding computing with AWS <br/>
                        {/* <a className="hyper-link" href="https://github.com/tsdaniel0927/face_recogition">Face recognition</a> with MATLAB <br/> */}
                        <a className="hyper-link" href="https://github.com/daniel-jacobs98/UR5-Project">Robotic</a>, High Performance Computing and Data Structure with C <br/>
                        <a className="hyper-link" href="https://github.com/tsdaniel0927/Evasive-metadata-test">Research Project</a> - Machine Learning and neurual networks <b>(Distinction)</b> <br/>
                        Design Project - Data Entry System for patients <b>(High Distinction)</b>
                    </div>

                    <span className="sub-heading">Volunteer</span>
                    <div style={{marginBottom:'20px'}}>
                        {/* <a className="hyper-link" href="https://www.instagram.com/p/CCS-N_Ljfsj/">Attended protest for protecting animals</a><br/> */}
                        AUG immigration conference registration
                    </div>

                    <span className="sub-heading">References</span>
                    <div style={{marginBottom:'20px'}}>
                        For references, please contact me via <a className="hyper-link" href={`mailto:${email}`}>email</a> or <a className="hyper-link" href="https://www.linkedin.com/in/daniel-tan-37870a133">linkedin</a>
                    </div>
                </div>

                <div className="wrapper-right">
                    <img src={profileIMG} alt="Profile" className="profile-image"/>
                    <div className="contact-details">Mobile: 0406194250</div>
                    <div className="contact-details">
                        Email: <a className="hyper-link" href={`mailto:${email}`}>tsdaniel0927@gmail.com</a> <br/>
                        Work: <a className="hyper-link" href={`mailto:${email}`}>daniel.tan@cloughgroup.com</a>
                    </div> <br/>
                    <div className="contact-details"> {'if ('} <a className="hyper-link" href={`mailto:${email}`}>talked</a> {'||'} <a className="hyper-link" href="https://www.linkedin.com/in/daniel-tan-37870a133">connected</a> {')'} </div>
                    <div className="contact-details"> {'    { gratitude += 1; }'} </div>
                    <div className="contact-details" style={{marginBottom:'20px'}}> {'else { $("I").feel("down"); }'}  </div>
                </div>

            </div>
        </Fade>
    )
}

export default About