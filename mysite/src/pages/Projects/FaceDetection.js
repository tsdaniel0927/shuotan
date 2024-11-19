import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import { Collapse } from "@mui/material";
import "./facedetection.css";
import FRcorrect from "../../images/FRcorrect.jpeg";
import ResultFR from "../../images/ResultFR.jpeg";

export default function Projects() {
  const navigate = useNavigate();

  useEffect(() => {
    const userAnswer = localStorage.getItem('userAnswer');
    if (!userAnswer) {
      navigate('/'); // Redirect to verification page if no valid session
    }
  }, [navigate]);

  const [isFRGUIexpanded, setIsFRGUIexpanded] = useState(false);
  const [isResultFRexpanded, setIsResultFRexpanded] = useState(false);
  const [isContentxpanded, setIsContentExpanded] = useState(false);

  useEffect(() => {
    if (window.innerWidth < 768) {
      setIsFRGUIexpanded(true);
      const timeoutId = setTimeout(() => {
        setIsResultFRexpanded(true);
        setIsContentExpanded(true);
      }, 500); // Delay the expansion of the second image by 500 milliseconds

      return () => clearTimeout(timeoutId); // Clear the timeout if the component unmounts
    } else {
      setIsFRGUIexpanded(true);
      setIsContentExpanded(true);
      const timeoutId = setTimeout(() => {
        setIsResultFRexpanded(true);
      }, 500); // Delay the expansion of the second image by 500 milliseconds

      return () => clearTimeout(timeoutId); // Clear the timeout if the component unmounts
    }
  }, []);

  return (
    <div className="flex-wrapper-projects">
      <div className="wrapper-left-projects" style={{ marginTop: "30px" }}>
        <span className="sub-heading">Face-Recognition</span>
        <Collapse in={isFRGUIexpanded} timeout={500}>
          <img
            src={FRcorrect}
            alt="FRproject"
            className="project-image"
          />
        </Collapse>
        <Collapse in={isResultFRexpanded} timeout={500}>
          <img
            src={ResultFR}
            alt="FRresults"
            className="project-image"
            style={{marginBottom:'20px'}}
          />
        </Collapse>
      </div>

      <Collapse in={isContentxpanded} timeout={1000}>
        <div className="wrapper-right-face">
          This project is about developing a face recognition system using MATLAB. When inputting faces to this system, after training, this system will 'memorize' all the faces and be able to get the specific face that you are searching. This system could be useful in some areas, for example, security, finding missing persons, and identifying someone. My role in this project was: <br/><br/>
          <li className="list"> Implementing face recognition algorithm </li>
          <li className="list"> GUI design </li>
          <li className="list"> Accuracy improvements </li>
          <li className="list"> Test this app to make sure that more real photos are allowed </li> <br/>
          <div> This app also allows user to use a real-life photo of someone and train the system to memorize the photo. The accuracy of this app is about 96.6%, you can view the whole project <a className="hyper-link" style={{fontWeight:'600', color:'#366091'}} href="https://github.com/tsdaniel0927/face_recogition"> here</a>. You are welcome to take this project to improve or edit, this is an open sourced project</div>
        </div>
      </Collapse>
    </div>
  );
}
