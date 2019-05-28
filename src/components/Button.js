import React from 'react'

const Button = (props) => {

    this.pushButton = () => {

        const newInput = this.state.input.push()
          this.setState = ({
            input: newInput
          })
      }
  return (
    <div>
     <button>{props.children}</button>
    </div>
  )
}

export default Button



