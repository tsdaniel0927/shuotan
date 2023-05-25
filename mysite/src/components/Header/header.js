import React from 'react';
import {AppBar, Box, Toolbar, Typography, CssBaseline} from '@mui/material'

function Myheader(){
    return(
        <React.Fragment>
            <CssBaseline />
            <Box sx={{flexGrow: 1}}>
                <AppBar position='static' s>  
                    <Toolbar>
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                            Shuo Tan
                        </Typography>
                    </Toolbar>
                </AppBar>
            <div>
                <header>Hi</header>
            </div>
            </Box>
        </React.Fragment>
    )
}

export default Myheader