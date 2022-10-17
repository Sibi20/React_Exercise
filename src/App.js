import './App.css';
import './Style.css';
import React,{useState} from 'react'
import FunctionalCount from './button.js';
import Student from './exercise4/propsdata'
import Dates from './exercise3/dates';
import Day from './exercise3/time';

function App() {
  const [name,setName]=useState("SIBI")
  return (
    <div className="App">
      <header className="App-header">
        <img src='../assets/1.jpg' alt="Img"/>
        <FunctionalCount />
        <Dates />
        <Day />
        <h1>Props in React :</h1>
     <Student name={name}/>
     <button onClick={()=>{setName("SURYA")}} >Update Name</button>
      </header>
    </div>
  );
}

export default App; 
