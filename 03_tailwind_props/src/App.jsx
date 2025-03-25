import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Cards from './components/Cards'
import './App.css'

function App() {
  let somObj={
    name:"kanwer",
    reg:71,
    uni:"UET Taxila"
  }
  let arr=[1,3,4,5,3]
  let btn=<button>Kanwer</button>
  return (
    <>
      <h1 className="bg-red-700 rounded-xl flex justify-end p-4 mb-4">Kanwer Abdull Rahman</h1>
      {/* <Cards channels="Kanwer" obj={somObj} newAr={arr}/> */}

      <Cards h1="Soon" />
      <Cards h1="Available Soon" bt={btn}/>
    </>
  )
}

export default App
