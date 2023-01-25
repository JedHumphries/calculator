import { useState } from 'react'

import './App.css'

function App() {
  const [calc, SetCalc] = useState("")
  const [result, SetResult] = useState("")

const ops = ["/", "*", "-", "+", "."]

const updateCalcFunction = value => {
  // This if statment stops you from using a operator(ops) more that once if the ops value is the last value (at the last position) simply put so you cant have a ++ or *+ op next to each other) 

if( ops.includes(value) && calc === '' 
||
ops.includes(value) && ops.includes(calc.slice(-1)
)
){
  return;
}

SetCalc(calc + value)

if(!ops.includes(value)){
  SetResult(eval(calc + value).toString())
}

}

  // creating a function that creates a for loop for numbers 1 to 9 then pushes them into an empty array 'digits' and displays them as buttons  
  const createDigitsFunction = () => {
    const digits = []

    for (let i = 1; i < 10; i++){
      digits.push(
        <button key={i}
        onClick={() => updateCalcFunction(i.toString())}
        >{i}</button>
      )
    }

    return digits
  }

  
  const calculateFunction = () => {
  SetCalc(eval(calc).toString())
  }
  
const delentLastDigitFunction = () => {
  if (calc === '') {
    return
  }
  const value = calc.slice(0, -1)

  SetCalc(value)
}

  return (
    <div className="App">
      <div className="calculator">
      
      <div className="display">
         {result ? <span>({result})</span> : '' } {calc || "0"}
      </div>

      <div className="operators">
      <button onClick={() => updateCalcFunction('/')}>/</button>
      <button onClick={() => updateCalcFunction('*')}>*</button>
      <button onClick={() => updateCalcFunction('+')}>+</button>
      <button onClick={() => updateCalcFunction('-')}>-</button>

      <button onClick={delentLastDigitFunction}>DEL</button>
      </div>
      
      <div div className="digits">
        { createDigitsFunction() }
        <button>0</button>
        <button>.</button>
        <button onClick={calculateFunction}>=</button>
        </div>

      </div>
    </div>
    
  )
}

export default App
