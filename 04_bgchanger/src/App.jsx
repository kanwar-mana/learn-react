import React, { useState } from 'react'

function App() {
  const [color,updateColor]=useState("olive");
  return (
    <div className="h-screen w-full duration-300"
    style={{backgroundColor:color}}>
      <div className="fixed flex flex-wrap justify-center bottom-11 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg px-3 py-2 rounded-3xl bg-slate-300">
          <button onClick={()=>updateColor("red")} className="text-white rounded-3xl px-3 py-2" style={{backgroundColor:"red"}}>Red</button>
          <button onClick={()=>updateColor("green")} className="text-white rounded-3xl px-3 py-2"style={{backgroundColor:"green"}}>Green</button>
          <button onClick={()=>updateColor("yellow")} className="text-white rounded-3xl px-3 py-2"style={{backgroundColor:"yellow"}}>Yellow</button>
          <button onClick={()=>updateColor("orange")} className="text-white rounded-3xl px-3 py-2"style={{backgroundColor:"orange"}}>Orange</button>
          <button onClick={()=>updateColor("gray")} className="text-white rounded-3xl px-3 py-2"style={{backgroundColor:"gray"}}>grey</button>
          <button onClick={()=>updateColor("purple")} className="text-white rounded-3xl px-3 py-2"style={{backgroundColor:"purple"}}>Purple</button>
          <button onClick={()=>updateColor("black")} className=" text-white rounded-3xl px-3 py-2"style={{backgroundColor:"black"}}>Black</button>
          <button onClick={()=>updateColor("pink")} className="text-white rounded-3xl px-3 py-2"style={{backgroundColor:"pink"}}>Pink</button>
          <button onClick={()=>updateColor("teal")} className="text-white rounded-3xl px-3 py-2"style={{backgroundColor:"teal"}}>Teal</button>
          <button onClick={()=>updateColor("blue")} className="text-white rounded-3xl px-3 py-2"style={{backgroundColor:"blue"}}>Blue</button>
        </div>
      </div>
    </div>
  )
}

export default App
