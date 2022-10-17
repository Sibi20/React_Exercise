import React,{useState} from 'react'
const FunctionalCount = () => {
    const [count,setCount] = useState(0)
    const handleClick = () =>{
        setCount(count+1)
    }
    const handledecrease = () =>{
        setCount(count-1)
    }
   
    return(
    <>
    <div className="count">
     <h1>Counter:{count}</h1>
     <button onClick={() => handleClick()}>Increse</button><br></br>
     <br></br>
    {count !==0 && <button onClick={() => handledecrease()}>Decrese</button>}

        </div>
        <div class ="slide">
            <h1>React is a JavaScript library developed by Facebook which, among other things, was used to build Instagram.com. Its aim is to allow developers to easily create fast user interfaces for websites and applications alike. The main concept of React. js is virtual DOM.</h1>
        </div>
    </>
    );
}
 
export default FunctionalCount;
