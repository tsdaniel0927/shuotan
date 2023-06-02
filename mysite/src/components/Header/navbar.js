import React from 'react';
import {AppBar, Box, Toolbar, Typography, CssBaseline, Button} from '@mui/material'

function Myheader(){
    const style = {
        color: 'white',
        fontWeight: 900,
        fontSize: 17,
    }
    return(
        <React.Fragment>
            <CssBaseline />
            <Box sx={{flexGrow: 1}}>
                <AppBar position='static' style={{backgroundColor: '#366091'}}>  
                    <Toolbar>
                        <link rel='stylesheet' href='https://fonts.googleapis.com/css?family=Pacifico'/>
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} style={{fontFamily: 'Pacifico', color: 'white'}}>
                            Shuo Tan
                        </Typography>
                        <Button style={style}>About</Button>
                        <Button style={style}>Projects</Button>
                        <Button style={style}>ME</Button>
                    </Toolbar>
                </AppBar>
            </Box>
        </React.Fragment>
    )
}

export default Myheader