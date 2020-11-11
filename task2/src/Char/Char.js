import React from 'react';

const char = (props) => {
    const style = {
        display: 'inline-block',
        padding: "16px",
        margin: "5px",
        border: '2px solid black',
        borderRadius: '10px',
        textAlign: 'center',
        backgroundColor: 'DarkOrange',
        fontWeight: '900'
    };

    return(
        <div style={style} onClick={props.clicked}>
            {props.character}
        </div>
    );
};

export default char;