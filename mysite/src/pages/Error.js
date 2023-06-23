import React from "react";
import { Button } from "@mui/material";
import './error.css'

export default function Error(){
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