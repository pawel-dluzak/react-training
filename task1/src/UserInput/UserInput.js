import React from 'react';

const userInput = (props) => {
    const inputStyle = {
        backgroundColor: "white",
        font: "inherit",
        border: "1px solid blue",
        boxShadow: "0 2px 3px #ccc",
        padding: "8px",
        cursor: "pointer",
        width: "50%"
      }
    return (
        <div>
            <input type="text" style={inputStyle} onChange={props.changed} value={props.name} />
        </div>
    )
}

export default userInput