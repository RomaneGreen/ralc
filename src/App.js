import React, {Component} from 'react';
import Input from './components/Input'
import Button from './components/Button'
import Clear from './components/Clear'
import './App.css';

class App extends Component {
      
  
     render() {
  return (
    <div className="App allCalc">

     <div className="rowz"><Input />
      </div>

      <div className="rowz">
    <Button pushButtonsz={this.pushedButton(7)}>7</Button>
    <Button onClick={this.pushButton(8)}>8</Button>
    <Button onClick={this.pushButton(9)}>9</Button>
    </div>

    <div className="rowz">
    <Button onClick={this.pushButton(4)}>4</Button>
    <Button onClick={this.pushButton(5)}>5</Button>
    <Button onClick={this.pushButton(6)}>6</Button>
    </div>

    <div className="rowz">
    <Button onClick={this.pushButton(1)}>1</Button>
    <Button onClick={this.pushButton(2)}>2</Button>
    <Button onClick={this.pushButton(3)}>3</Button>
    </div>

    <div className="rowz">
    <Button onClick={this.pushButton(0)}>0</Button>
    <Button onClick={this.pushButton('.')}>.</Button>
    
    <Button onClick={this.pushButton('/')}>/</Button>
    </div>
    
    <div className="rowz">
    <Button onClick={this.pushButton('+')}>+</Button>
    <Button onClick={this.pushButton('-')}>-</Button>
    <Button onClick={this.pushButton('*')}>*</Button>
    </div>

    <div className="rowz">
    <Button onClick={this.pushButton('=')}>=</Button>
  <Clear>Clear</Clear>
  </div>
    </div>
  );
  }
}

export default App;
