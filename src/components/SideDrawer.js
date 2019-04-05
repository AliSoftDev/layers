import React from 'react';

import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

const SideDrawer = (props) => {
    return (
        <Drawer
        anchor="right"
        open={props.open}
        onClose={() => props.onClose(false)}
        >
        
        <List component="nav">
            <ListItem button onClick={()=> console.log('info')}>
                About us
            </ListItem>       
            <ListItem button onClick={()=> console.log('Offer')}>
                What we offer
            </ListItem>  
            <ListItem button onClick={()=> console.log('Menu')}>
                Our Menu
            </ListItem>       
            <ListItem button onClick={()=> console.log('location')}>
                Location
            </ListItem>                   
        </List>


        </Drawer>
    );
};

export default SideDrawer;