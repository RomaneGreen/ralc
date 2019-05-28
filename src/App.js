import React, {Component} from 'react';
import Input from './components/Input'
import Button from './components/Button'
import Clear from './components/Clear'
import './App.css';

class App extends Component {
      constructor(props){
        super(props)

        this.state={
          input: ''
        }
      }
     pushButton = (digit) => {
          console.log(digit)
          const newInput = this.state.input
          let newerInput = newInput.concat(digit)
          
          this.setState({
            input: newerInput
          })
           console.log(this.state.input)
        }
      evalTotal = () => {
        const evaluatedState = eval(this.state.input)

        this.setState({
          input: evaluatedState
        })
        console.log(this.state.input)
      }
        render() {
  return (
    <div className="App allCalc">

     <div className="rowz"><Input />
      </div>

      <div className="rowz">
    <Button depressed={() => this.pushButton(7)}>7</Button>
    <Button depressed={() => this.pushButton(8)}>8</Button>
    <Button depressed={() => this.pushButton(9)}>9</Button>
    </div>

    <div className="rowz">
    <Button onClickz={() => this.pushButton(4)}>4</Button>
    <Button depressed={() => this.pushButton(5)}>5</Button>
    <Button depressed={() => this.pushButton(6)}>6</Button>
    </div>

    <div className="rowz">
    <Button depressed={() => this.pushButton(1)}>1</Button>
    <Button depressed={() => this.pushButton(2)}>2</Button>
    <Button depressed={() => this.pushButton(3)}>3</Button>
    </div>

    <div className="rowz">
    <Button depressed={() => this.pushButton(0)}>0</Button>
    <Button depressed={() => this.pushButton('.')}>.</Button>
    
    <Button depressed={() => this.pushButton('/')}>/</Button>
    </div>
    
    <div className="rowz">
    <Button depressed={() => this.pushButton('+')}>+</Button>
    <Button depressed={() => this.pushButton('-')}>-</Button>
    <Button depressed={() => this.pushButton('*')}>*</Button>
    </div>

    <div className="rowz">
    <Button depressed={() => this.evalTotal('=')}>=</Button>
  <Clear>Clear</Clear>
  </div>
    </div>
  );
  }
}

export default App;
