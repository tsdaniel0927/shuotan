import React from "react";
import { Button } from "@mui/material";

export default function Error(){
    return(
        <div>
            <h1>Don't know my name? The answer is on the top left of the page 😉</h1><br/><br/>
            <h1>The other reason you are on this page is that your token might expired🥲 go back and re-enter the name </h1>
            <Button href="/">Go back</Button>
        </div>
    )
}