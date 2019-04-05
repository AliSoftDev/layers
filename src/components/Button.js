import React from 'react';
import Button from '@material-ui/core/Button';


const MyButton = (props) => {
    return (
        <div>
            <Button
            href=""
            variant="contained"
            size="small"
            style={{
                background: props.bck,
                color: props.color
            }}
            >
                {props.text}
            </Button>
        </div>
    );
};

export default MyButton;