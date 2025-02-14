import { useState } from 'react'

import './App.css'
import { use } from 'react'

function App() {
  const [len, setlen] = useState(8)
  const [numberAllowed,setnumber ] = useState(false);
  const [charallowed,setchar] = useState(false);
  const [password, setpassword] = useState("")

  const passwordGenerator = () => {}
  return (
    <>
      <h1 className='text-4xl text-center text-white'>password generator</h1>
    </>
  )
}

export default App
