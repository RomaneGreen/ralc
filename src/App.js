import React from 'react';
import Input from './components/Input'
import Button from './components/Button'
import Clear from './components/Clear'
import './App.css';

function App() {

      constructor(props){
        super(props)
        this.state={
            input: ''
        }

        handleInput = (digit) => {

          const newInput = this.state.input.push(digit)
            this.setState = ({
              input: newInput
            })
        }
      }

  return (
    <div className="App allCalc">

     <div className="rowz"><Input />
      </div>

      <div className="rowz">
    <Button onClick={this.handleInput(digit)}>7</Button>
    <Button onClick={this.handleInput(digit)}>8</Button>
    <Button onClick={this.handleInput(digit)}>9</Button>
    </div>

    <div className="rowz">
    <Button onClick={this.handleInput(digit)}>4</Button>
    <Button onClick={this.handleInput(digit)}>5</Button>
    <Button onClick={this.handleInput(digit)}>6</Button>
    </div>

    <div className="rowz">
    <Button onClick={this.handleInput(digit)}>1</Button>
    <Button onClick={this.handleInput(digit)}>2</Button>
    <Button onClick={this.handleInput(digit)}>3</Button>
    </div>

    <div className="rowz">
    <Button onClick={this.handleInput(digit)}>0</Button>
    <Button onClick={this.handleInput(digit)}>.</Button>
    
    <Button onClick={this.handleInput(digit)}>/</Button>
    </div>
    
    <div className="rowz">
    <Button onClick={this.handleInput(digit)}>+</Button>
    <Button onClick={this.handleInput(digit)}>-</Button>
    <Button onClick={this.handleInput(digit)}>*</Button>
    </div>

    <div className="rowz">
    <Button onClick={this.handleInput(digit)}>=</Button>
  <Clear>Clear</Clear>
  </div>
    </div>
  );
}

export default App;
