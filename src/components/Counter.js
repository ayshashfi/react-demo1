import React,{useState} from 'react'

function Counter() {
  
    const [count,setCount]=useState(0);
  
    const increment=()=>{
        if (count<10){
        setCount(count+1)
        }
    }

    const decrement=()=>{
        if( count>0){
        setCount(count-1)
    }
    }

  return (
    <div>
        Counter
    <button onClick={increment}>+</button>
    <p>{count}</p>
    <button onClick={decrement}>-</button>
    </div>
  )
}

export default Counter

