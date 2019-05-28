import React, { Component } from 'react'

export default class Input extends Component {
    
    constructor(props){
        super(props) 
        this.state={
            input: ''
        }
    }
  render() {
    return (
      <div>
        <input type="text"></input>
      </div>
    )
  }
}
