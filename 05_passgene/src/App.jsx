import React, { useCallback, useEffect, useState, useRef } from 'react'

function App() {
  const [length,setLenght]=useState(8);
  const [numberAllowed,setNum]=useState(true);
  const [charAllowed,setchar]=useState(true);
  const [password,setpassword]=useState("");

  const clickAble=()=>{
    alert('Copied!');
  }

  //Use Ref for ref password

  const passref=useRef(null);
// Use call back for calling function agin when we change or interect with our variables
  const passgene = useCallback(()=>{
    let pass=""
    let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(numberAllowed) str+="0123456789"
    if(charAllowed) str+="!@#$%^&*-_+=[]{}~`"

    for (let i = 1; i <=length; i++) {
      let char=Math.floor(Math.random()*str.length + 1)
      console.log(char)
      pass+=str.charAt(char);
    }
    setpassword(pass)

  },[length,numberAllowed,charAllowed,setpassword])
//Function to copy text to clipboard
  const copytoclipboard=useCallback(()=>{
    passref.current?.select();
    window.navigator.clipboard.writeText(password);
  },[password]);

  //update when these value change
  useEffect(()=>{
    passgene()
  },[length,numberAllowed,charAllowed,passgene])


  return (
    <div className='w-full max-w-lg mx-auto shadow-md rounded-2xl px-5 py-4 my-8 bg-slate-950 text-orange-500'>
      <h1 className='text-center text-white text-3xl'>Password Generator</h1>
      <div className="flex w-full justify-center shadow-lg p-4 overflow-hidden">
        <input type="text"
        value={password}
        className='p-2 rounded-tl-xl rounded-bl-xl w-96'
        placeholder='Password'
        readOnly
        ref={passref} />
        <button
        onClick={()=>{copytoclipboard(); clickAble();}} placeholder='Copied' className='bg-blue-600 w-16 rounded-tr-xl rounded-br-xl px-3'>Copy</button>
      </div>
      <div className="flex text-sm justify-center gap-x-2 py-6">
        <div className="flex gap-x-2">
          <input type="range"
          value={length}
          min={6}
          max={100}
          onChange={(e)=>{setLenght(e.target.value)}}
          className='curser-pointer'
           />
           <label>Lenght: {length}</label>
        </div>
        <div className="flex gap-x-1">
          <input type="checkbox"
          defaultChecked={numberAllowed}
          id='numbercheck'
          onChange={()=>{
            setNum((prev)=>!prev)
          }} />
          <label>Number</label>
        </div>
        <div className="flex gap-x-1">
          <input type="checkbox" 
          defaultChecked={charAllowed}
          id='charCheck'
          onChange={()=>{
            setchar((prev)=>!prev)
          }}/>
          <label>Symbol</label>
        </div>
      </div>
    </div>
  )
}

export default App
