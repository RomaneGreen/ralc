import React from 'react'

const Button = (props) => {

    // pushButton = () => {

    //     const newInput = this.state.input.push()
    //       this.setState = ({
    //         input: newInput
    //       })
    //   }

  return (
    <div>
     <button onClick={props.pushButton}>{props.children}</button>
    </div>
  )
}

export default Button



