import React from 'react';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';

import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';


import crepes from '../resources/images/crepes.jpg';
import cereal_bowl from '../resources/images/cereal_bowl.jpg';
import chocolate_cake from '../resources/images/chocolate_cake.jpg';
import black_coffee from '../resources/images/black_coffee.jpg';
import berries_waffle from '../resources/images/berries_waffle.jpg';
import smoothie from '../resources/images/smoothie.jpg';

const Menu = () => {
    return (
        <div className="menu_wrapper">
      
        <Fade left>
        <h3>Our Menu</h3>
        </Fade>
        <Zoom clear>
        
            <GridList cellHeight={150} cellWidth={150} spacing={5}>
                <GridListTile col={3} style={{ height: '300px' }}>
                        <img src={crepes} />
                </GridListTile>
                <GridListTile col={3} style={{ height: '300px'}} >
                        <img src={chocolate_cake} />
                </GridListTile>
                <GridListTile col={3} style={{ height: '300px' }} >
                        <img src={berries_waffle} />
                </GridListTile>
                <GridListTile col={3} style={{ height: '300px' }}>
                        <img src={black_coffee} />
                </GridListTile>
                <GridListTile col={3} style={{ height: '300px' }}>
                        <img src={cereal_bowl} />
                </GridListTile>
                <GridListTile col={3} style={{ height: '300px' }}>
                        <img src={smoothie} />
                </GridListTile>
            </GridList>
            </Zoom>
        </div>
    );
};

export default Menu;