// import React, { Component } from 'react'

// export default class Input extends Component {
    
//   render() {
//     return (
//       <div>
//         <input  value="" onChange=""></input>
//       </div>
//     )
//   }



import React from 'react'

export default function Input(props) {
    return (
        <div>
            <input  value={props.display}></input>
        </div>
    )
}
