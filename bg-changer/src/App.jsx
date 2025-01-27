import { useState } from "react"


function App() {
  const [color,set] =useState("black")

  return (
    <>
     <div className="w-full h-screen duration-200"
      style={{backgroundColor: color}}>
     </div>
     <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
      <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
        <button 
        onClick={()=> set("red")}
        className="outline-noone px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor: "red"}}> Red
        </button>
        <button
        onClick={()=> set("green")}
        className="outline-noone px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor: "green"}}> 
          Green
        </button>
        <button 
        onClick={()=> set("olive")}
        className="outline-noone px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor: "olive"}}> Olive
        </button>
        <button 
        onClick={()=> set("Gray")}
        className="outline-noone px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor: "Gray"}}> Gray
        </button>
        <button 
        onClick={()=> set("blue")}
        className="outline-noone px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor: "blue"}}> Blue
        </button>
        <button 
        onClick={()=> set("yellow")}
        className="outline-noone px-4 py-1 rounded-full text-black shadow-lg"
          style={{backgroundColor: "yellow"}}> Yellow
        </button>
        <button 
        onClick={()=> set("pink")}
        className="outline-noone px-4 py-1 rounded-full text-black shadow-lg"
          style={{backgroundColor: "pink"}}> Pink
        </button>
        <button 
        onClick={()=> set("purple")}
        className="outline-noone px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor: "purple"}}> Purple
        </button>
        <button 
        onClick={()=> set("orange")}
        className="outline-noone px-4 py-1 rounded-full text-black shadow-lg"
          style={{backgroundColor: "orange"}}> Orange
        </button>
        <button 
        onClick={()=> set("white")}
        className="outline-noone px-4 py-1 rounded-full text-black shadow-lg"
          style={{backgroundColor: "white"}}> White
        </button>
        <button 
        onClick={()=> set("black")}
        className="outline-noone px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor: "black"}}> Black
        </button>
        <button 
        onClick={()=> set("turquoise")}
        className="outline-noone px-4 py-1 rounded-full text-black shadow-lg"
          style={{backgroundColor: "turquoise"}}> Turquoise
        </button>
        
      </div>
     </div>
    </>
  )
}

export default App
