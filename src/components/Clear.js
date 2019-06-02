import React from 'react'
import '../App.css'

const Clear = (props) => {
    return (
        <div>
            <button onClick={props.clearInput}>{props.children}</button>
        </div>
    )
}

export default Clear
