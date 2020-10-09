import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// MUI stuff
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';


export class Navbar extends Component {
    render() {
        return (
            <AppBar>
                <Toolbar className="nav-container">
                    <Button variant="outlined" color="inherit" component={Link} to="/login">
                        Login
                    </Button>
                    <Button variant="outlined" color="inherit" component={Link} to="/">
                        Home
                    </Button>
                    <Button variant="outlined" color="inherit" component={Link} to="/signup">
                        Signup
                    </Button>
                    <Button variant="outlined" color="inherit" component={Link} to="/testpage">
                        Testpage
                    </Button>
                </Toolbar>
            </AppBar>
        )
    }
}

export default Navbar
