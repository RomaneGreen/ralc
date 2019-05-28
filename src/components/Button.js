import React from 'react'

const Button = (props) => {


  return (
    <div>
     <button onClick={props.depressed}>{props.children}</button>
    </div>
  )
}

export default Button



