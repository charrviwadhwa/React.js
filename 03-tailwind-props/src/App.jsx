import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)
  let myobj={
    name:"john",
    age:34,
  }

  return (
    <>
     <h1 className="bg-green-300 text-black p-3 rounded-2xl mb-4">tailwind</h1>
     <Card username="hello" obj={myobj} />
     <Card username="world"/>
    </>
  )
}

export default App
