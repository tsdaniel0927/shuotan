import React, {useEffect, useState} from "react";
import { Collapse } from "@mui/material";
import { useNavigate } from 'react-router-dom';
import "./ohcwa.css";
import clientApproval from "../../images/clientApproval.jpeg";
import OHCWA from "../../images/OHCWA.jpeg";

export default function Projects() {
  const navigate = useNavigate();

  useEffect(() => {
    const userAnswer = localStorage.getItem('userAnswer');
    if (!userAnswer) {
      navigate('/'); // Redirect to verification page if no valid session
    }
  }, [navigate]);

  const [isPageCollapsed, setIsPageCollapsed] = useState(false);

  useEffect(() => {
    setIsPageCollapsed(true)
  }, []);

  return (
    <Collapse in={isPageCollapsed} timeout={1000}>
      <div className="flex-wrapper-projects">
        <div className="wrapper-left-projects" style={{ marginTop: "30px" }}>
          <span className="sub-heading">OHCWA</span>
          <img src={OHCWA} alt="OHCWAproject" className="ohcwa-image" />
          <img src={clientApproval} alt="Approval-Email" className="ohcwa-image" />
        </div>

        <div className="wrapper-right-projects">
            Oral Health Centre at UWA requires a data entry system to manage the patient's profile and treatment record. OHCWA is the web-based application solution for the data entry system, and my role was a full-stack developer. Development tools include Figma for UI design, GitHub for managing this project, ReactJS and Django for the application design. My responsibilities include: <br/><br/>
            <li className="list"> Gathering requirements and organise them into a clear structured document. </li>
            <li className="list"> Built functionality of collecting patient data and verfying patient  </li>
            <li className="list"> Fetching survey history from database </li>
            <li className="list"> User Interface design </li> <br/>
            This app has been deployed on the Microsoft Surface Pro in oral health centre at Western Australia. With this data entry system, patients no longer need to fill in the pre-treatment and post-treatment survey mannualy, which solves stuff shortage problem during busy hours in clinic. Additionally, this app contains some advanced features that analyse a group of patients' survey score and allow clinicians to find the connection in between.
        </div>
      </div>
    </Collapse>
  );
}
