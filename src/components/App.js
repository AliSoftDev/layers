import React, { Component } from 'react';

import '../resources/styles.css'

// Components imports
import Header from './Header';
import SlideShow from './slideshow';
import AboutUs from './aboutus';
import Menu from './Menu';
import Map from './Map';
import Footer from './Footer';

class App extends Component {
    render() {
        return (
            <div className="App" style={{ height: '1500px', background: '' }}>
                <Header />
                <SlideShow />
                <AboutUs />
                <Menu />
                <Map />
                <Footer />
            </div>
        );
    }
}

export default App;