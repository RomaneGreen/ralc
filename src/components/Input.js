
import React from 'react'

export default function Input(props) {
    return (
        <div>
            <input onClick={props.clearInput}  value={props.display}></input>
        </div>
    )
}
