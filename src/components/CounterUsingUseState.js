import React,{useState} from "react";

function CounterUsingUseState () {

    const [count,setCount]=useState(0);
    const [color,setColor]=useState('red');

//     function decrement (){
//          setCount(prevCount=>prevCount-1)
//     }

//     function increment (){
//         setCount(prevCount=>prevCount+1)
//    }


    return(
        <div style={{background:color}}>
        <button onClick={()=>setCount(count-1)}>-</button>
        <span>{count}</span>
        <button onClick={()=>setCount(count+1)}>+</button>
        <div>
        <button onClick={()=>setColor('green')}>GREEN</button>
        <button onClick={()=>setColor('blue')}>BLUE</button>
        </div>
        </div>
    );
}

export default CounterUsingUseState;