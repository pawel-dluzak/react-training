import React from 'react'
import './UserOutput.css '

const userOutput = (props) => {
    return (
        <div className="output">
           <p>{props.data1}</p>
           <p>{props.data2}</p>
        </div>
    )
}

export default userOutput