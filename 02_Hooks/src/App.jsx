import { useState } from 'react';
import './App.css'
// let count=15;
// const AddValue=(count)=>{
//   console.log("Update Value",Math.random());
//   count=count+1;
// }

function App() {

  let [count,updateCount]=useState(15);
  const AddValue=()=>{
    if(count>=20){
      count=20;
      return;
    }
    //Here 15 dont change in 19 because our use state take batch of work as same due to fibre algorithm and update it on UI 
    // updateCount(count+1);
    // updateCount(count+1);
    // updateCount(count+1);
    // updateCount(count+1);
    //Here we use previous count state and update it or add in it and uesState dont take it as same or batch
    //Here we use call back function hidden feature that exist in useSate
    updateCount(prevCounter=>prevCounter+1);
    updateCount(prevCounter=>prevCounter+1);
    updateCount(prevCounter=>prevCounter+1);
    updateCount(prevCounter=>prevCounter+1);


  }
  const DecValue=()=>{
    if(count<=0){
      count=0;
      return;
    }
    updateCount(count-1);
    
  }

  return (
    <>
    <h1>Kanwer Abdull Rahman</h1>
    <h2>Kanwer Abdull Rahman</h2>
    <h3>Count Value :{count}</h3>
    <button onClick={AddValue}>Increase{count}</button>
    <button onClick={DecValue}>Decrease{count}</button>
    </>
  )
}

export default App
