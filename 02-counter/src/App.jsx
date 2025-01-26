import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter, setcounter] = useState(15)

  //let count = 5
  
  const addvalue =()=>{
    //console.log("clicked",Math.random());
    // counter+=1;
    if(counter<20){
      setcounter(counter+1)
    }
    
  }


  const removeValue= ()=>{
   
    if(counter>
      0){
       setcounter(counter-1)
    }
  }

  return (
    <>
      <h1>hello</h1>
      <h2>counter value :{counter}</h2>
      <button onClick={addvalue}>add value:{counter}</button>
      <br/>
      <button onClick={removeValue}>remove value</button>
    </>
  )
}

export default App
