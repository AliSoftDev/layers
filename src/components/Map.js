import React from 'react';

const Map = () => {
    return (
        <div className="location_wrapper">
            <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d317718.6931929206!2d-0.3817765050863085!3d51.528307984912544!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8a00baf21de75%3A0x52963a5addd52a99!2sLondon!5e0!3m2!1sen!2suk!4v1554429731784!5m2!1sen!2suk" 
            width="100%" 
            height="500px" 
            frameBorder="0" 
            allowFullScreen>
            </iframe>
            
        

        <div className="location_tag">
            <div>Location</div>
        </div>
        </div>
    )
};

export default Map;