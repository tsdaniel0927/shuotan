import React from 'react';
import { AppBar, Box, Toolbar, Typography, CssBaseline, Button, Menu, MenuItem } from '@mui/material';
import { Link } from 'react-router-dom';

function Myheader() {
  const style = {
    color: 'white',
    fontWeight: 900,
  };

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <React.Fragment>
      <CssBaseline />
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" style={{ backgroundColor: '#366091' }}>
          <Toolbar>
            <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Pacifico" />
            <Typography variant="h8" component="div" sx={{ flexGrow: 1 }} style={{ fontFamily: 'Pacifico', color: 'white' }}>
              <Link className='home-link' style={{ textDecoration: 'none', color: 'white' }} to="/home">
                Shuo Tan
              </Link>
            </Typography>
            <Link to="/about">
              <Button size='small' sx={{ ...style, '@media (max-width: 600px)': { fontSize: 12 }, '@media (min-width: 601px) and (max-width: 960px)': { fontSize: 14 } }}>
                About
              </Button>
            </Link>
            <div>
              <Button
                aria-controls="projects-menu"
                aria-haspopup="true"
                onClick={handleClick}
                size='small'
                sx={{ ...style, '@media (max-width: 600px)': { fontSize: 12 }, '@media (min-width: 601px) and (max-width: 960px)': { fontSize: 14 } }}
              >
                Projects
              </Button>
              <Menu
                id="projects-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose} component={Link} to="/projects/ohcwa">OHCWA</MenuItem>
                <MenuItem onClick={handleClose} component={Link} to="/projects/facedetection">FaceDetection</MenuItem>
              </Menu>
            </div>
            <Link to='/certifications'>
              <Button  size='small' sx={{ ...style, '@media (max-width: 600px)': { fontSize: 12 }, '@media (min-width: 601px) and (max-width: 960px)': { fontSize: 14 } }}>
                Certifications
              </Button>
            </Link>
          </Toolbar>
        </AppBar>
      </Box>
    </React.Fragment>
  );
}

export default Myheader;
