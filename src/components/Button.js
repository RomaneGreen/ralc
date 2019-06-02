import React from 'react'
import '../App.css'

const isOperator = val => {
    return isNaN(val) || val === '.' || val === '=' || val === 'c'
}

const Button = (props) => {

  return (
    <div>
     <button className={isOperator(props.children) ? "operator" : null } onClick={props.depressed}>{props.children}</button>
    </div>
  )
}

export default Button



