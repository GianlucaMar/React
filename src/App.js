import React, {useState} from 'react';
import "./App.css"
function App() {
  const [count, setCount] = useState(0)
  function decrementCount(){
    setCount(count -1)
  }
  function incCount(){
    setCount(count +1)
  }
  return(
    <>
     <p>Counter {count}</p>
    <button className='btn' onClick={incCount}>+</button>
    <button className='btn' onClick={decrementCount}>-</button>
    <button type="reset">Reset</button>
   
    </>
  )
}

export default App;
