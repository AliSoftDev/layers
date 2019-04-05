import React from 'react';
import Slider from 'react-slick';

import chocolate_waffle from '../../resources/images/chocolate_waffle.jpg';
import small_cake from '../../resources/images/small_cake.jpg';
import strawberry from '../../resources/images/strawberry.jpg';


const Carrousel = () => {

    const sliderSettings = {
        dots: false,
        infinite: true,
        autoplay: true,
        speed: 400

    }

    return (
        <div 
            className="carrousel_wrapper"
            style={{
                height: `${window.innerHeight}px`,
                overflow: 'hidden'
            }}
        >
            <Slider {...sliderSettings}>
                <div>
                    <div 
                    className="carrousel_image"
                    style={{
                        background: `url(${chocolate_waffle})`,
                        height: `${window.innerHeight}px`
                    }}
                    >
                    </div>
                </div>
                <div>
                    <div 
                    className="carrousel_image"
                    style={{
                        background: `url(${small_cake})`,
                        height: `${window.innerHeight}px`
                    }}
                    >
                    </div>
                </div>
                <div>
                    <div 
                    className="carrousel_image"
                    style={{
                        background: `url(${strawberry})`,
                        height: `${window.innerHeight}px`
                    }}
                    >
                    </div>
                </div>
            </Slider>
        </div>
    );
};

export default Carrousel;