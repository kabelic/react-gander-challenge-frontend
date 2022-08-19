import { useState } from 'react';
import Axios from 'axios';
import './App.css';
import InputComponent from './components/inputComponent/inputComponent';

function App() {

  const [firstNumber, setFirstNumber] = useState()
  const [secondNumber, setSecondNumber] = useState()
  const [addClicked, setAddClicked] = useState(false)
  const [getSum, setGetSum] = useState()

  const getData = () => {
    Axios.post("http://localhost:3001/addition", {
     firstNumber: firstNumber,
     secondNumber: secondNumber,
    }).then((response) => {
      setGetSum(response.data.sum)
    }) 
    setAddClicked(true)
  }

  const getFirstNumber = (val) => {
    setFirstNumber(val.target.value)
  }

  const getSecondNumber = (val) => {
    setSecondNumber(val.target.value)
  }
  

  return (
    <div className="App">
      <h1>Adding two numbers</h1>
      <InputComponent placeholder='First Number' getNumber={getFirstNumber}/>
      <InputComponent placeholder='Second Number' getNumber={getSecondNumber}/>
      <button className='buttonStyle' onClick={getData}>
       {!addClicked ? 'add Two Numbers' : `The result is ${getSum}` } 
      </button>
    </div>
  );
}

export default App;
