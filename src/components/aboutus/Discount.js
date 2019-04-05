import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import Slide from 'react-reveal/Slide';

import MyButton from '../Button';

class Discount extends Component {

    state = { 
        discountStart: 0,
        discountEnd: 20
    }

    percentage = () => {
        if (this.state.discountStart < this.state.discountEnd) {
            this.setState({
                discountStart: this.state.discountStart + 1
            })
        }
    }

    componentDidUpdate() {
        setTimeout(() => {
            this.percentage()
        }, 40)
    }

    render() {
        return (
            <div className="center_wrapper">
                <div className="discount_wrapper">

                <Fade 
                    onReveal={()=> this.percentage()}
                >
                    <div className="discount_percentage">
                        <span>{this.state.discountStart}%</span>
                        <span>OFF</span>
                    </div>

                </Fade>
                  
                <Slide right>
                    <div className="discount_description">
                        <h3>Place your first order and get 20% OFF</h3>
                        <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                         Bibendum at varius vel pharetra. Amet venenatis urna cursus eget nunc scelerisque viverra mauris.
                        </p>
                    <div>
                        <MyButton 
                            text="Place Order"
                            bck="#d34848"
                            color="#ffffff"
                            link=""
                        />
                    </div>
                    
                    </div>

                </Slide>
                  
                
                </div>
                
            </div>
        );
    }
}

export default Discount;