import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './App.jsx'

function MyApp(){
  return(
   <div>
    <h1>custom</h1>
   </div>
  )
}

const anotherElem = (
  <a href="https://google.com" target='_blank'>Visit google</a>
)


const anotherUser = "React"
const reactElem = React.createElement(
  'a',
  {href:'https://google.com', target:'_blank'},
  'click to visit google',
   anotherUser
)

createRoot(document.getElementById('root')).render(

 reactElem

)
