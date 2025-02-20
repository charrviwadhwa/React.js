import { useState , useCallback,useEffect,useRef} from 'react'

import './App.css'
import { use } from 'react'

function App() {
  const [length, setlength] = useState(8)
  const [numberAllowed,setnumber ] = useState(false);
  const [charallowed,setchar] = useState(false);
  const [password, setpassword] = useState("")

  //useref hooks

  const passref = useRef(null)


  const passwordGenerator = useCallback(()=>{
    let pass=""
    let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if(numberAllowed) str+="0123456789"
    if(charallowed) str+="!@#$%^&*()~"

    for (let i = 1; i <= length; i++) {
      let char =Math.floor(Math.random()*str.length+1)
      pass += str.charAt(char)

    }
    setpassword(pass)
  },[length,numberAllowed,charallowed,setpassword])
  
  useEffect(()=>{passwordGenerator()},[length,numberAllowed,charallowed,passwordGenerator])

  const copyPassword = useCallback(()=>{
    passref.current?.select();
    passref.current?.setSelectionRange(0,999);
    window.navigator.clipboard.writeText(password)
  },[password])
  return (
    <>
   <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500">
    <h1 className='text-white text-center my-3'>Password generator</h1>
      <div className='flex shadow rounded-lg overflow-hidden mb-4'>
          <input
          type="text"
          value={password}
          className='outline-none w-full py-1 px-3 bg-white'
          placeholder='password'
          readOnly
          ref={passref}
          />
      <button
      onClick={copyPassword} className='outline-none bg-blue-700 text-white px-3 py-0.5 hover:bg-blue-500'>copy</button>
      </div>
    <div className='flex text-sm gap-x-2'>
      <div className='flex items-center gap-x-2'>
          <input 
          type="range"
          min={6}
          max={100}
          value={length}
          className='curson-pointer'
          onChange={(e)=>{setlength(e.target.value)}}/>

          <label>Length: {length}</label>
      </div>
       <div className='flex items-center gap-x-1'>
        <input 
          type="checkbox"
         defaultChecked={numberAllowed}
          id="numberInput"
          onChange={()=>{setnumber((prev)=>!prev);

          }}/>
          <label htmlFor='numberinput'>Numbers</label>
        </div>
        <div className='flex items-center gap-x-1'>
      <input 
          type="checkbox"
         defaultChecked={charallowed}
          id="characterInput"
          onChange={()=>{setchar((prev)=>!prev);

          }}/>
          <label htmlFor='characterinput'>Characters</label>
      </div>
      </div>
    
    </div>
        

       
     
    

    </>
  )
}

export default App
