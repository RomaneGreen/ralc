
import React from 'react'
import '../App.css'

const boxSize = {
    height: '50px',
    width: '180px',
    fontSize:'2rem'
}
export default function Input(props) {
    return (
        <div>
            <input style={boxSize} onClick={props.clearInput}  value={props.display}></input>
        </div>
    )
}
