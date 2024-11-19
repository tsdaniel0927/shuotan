import React, { useEffect } from "react";
import { Button } from "@mui/material";
import { useNavigate } from 'react-router-dom';
import './error.css'

export default function Error(){
    const navigate = useNavigate();

    useEffect(() => {
        const userAnswer = sessionStorage.getItem('userAnswer');
        if (!userAnswer) {
            navigate('/'); // Redirect to verification page if no valid session or token expired
        }
    }, [navigate]);

    return(
        <div className="flex-wrapper-error">
            <h1>OOPS!</h1>
            <h2>Don't know my name? The answer is on the top left of this page 😉</h2>
            <h2>Or your token might expired 🥲, you can go back and re-enter the name </h2><br/>
            <Button 
            href="/"
            style={{
                backgroundColor:'green',
                color: 'white',
                fontWeight:'600'
            }}>
                Go Back
            </Button>
        </div>
    )
}