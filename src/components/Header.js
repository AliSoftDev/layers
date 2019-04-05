import React, { Component } from 'react';

import SideDrawer from './SideDrawer';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';

class Header extends Component {

    state = {
        showAppBar: false,
        showDrawer: false
    }

    componentDidMount() {
        window.addEventListener('scroll', this.scrollHandler);
    }

    componentWillUnmount() {

    }

    scrollHandler = () => {
        if (window.scrollY > 0) {
            this.setState({
                showAppBar: true
            })
        } else {
            this.setState({
                showAppBar: false
            })
        }
    }

    drawerToggleHandler = (value) => {
        this.setState({
            showDrawer: value
        })
    }

    render() {
        return (
            <AppBar 
                position="fixed"
                style={{ 
                    backgroundColor: this.state.showAppBar ? '#ef5a5a' : 'transparent',
                    boxShadow: 'none',
                    padding: '10px 0px'
            }}
            >
                <Toolbar>
                    <div className="header_logo">
                        <div className="font_comic_sans header_logo_layer">Layers</div>
                        <div className="header_logo_text">Experience the taste of joy</div>
                    </div>

                    <Button className="buttons" color="inherit">
                        Home
                    </Button>

                    <Button className="buttons" color="inherit">
                        Menu
                    </Button>

                    <Button className="buttons" color="inherit">
                        Contact Us
                    </Button>

                    <IconButton
                        aria-label="menu"
                        color="inherit"
                        onClick={(value) => this.drawerToggleHandler(value)}
                        >
                        <MenuIcon />

                    </IconButton>
                    
                        <SideDrawer
                        open={this.state.showDrawer}
                        onClose={(value) => this.drawerToggleHandler(value)}
                        />
                  


                </Toolbar>

            </AppBar>
        )
    }
}

export default Header;