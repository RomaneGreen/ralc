import React from 'react';
import Input from './components/Input'
import Button from './components/Button'
import Clear from './components/Clear'
import './App.css';

function App() {
  return (
    <div className="App allCalc">
    <Input />

      <div className="rowz">
    <Button>7</Button>
    <Button>8</Button>
    <Button>9</Button>
    </div>

    <div className="rowz">
    <Button>4</Button>
    <Button>5</Button>
    <Button>6</Button>
    </div>

    <div className="rowz">
    <Button>1</Button>
    <Button>2</Button>
    <Button>3</Button>
    </div>

    <div className="rowz">
    <Button>0</Button>
    <Button>.</Button>
    <Button>/</Button>
    </div>
    
    <div className="rowz">
    <Button>+</Button>
    <Button>-</Button>
    <Button>=</Button>
    </div>

  <Clear />
    </div>
  );
}

export default App;
