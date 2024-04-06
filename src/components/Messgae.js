import React from "react"
import {useState} from "react"

function Message(){
    const [message,setMessage]=useState('Welcome Visitor')
    return (
    <div>
        <h1>{message}</h1>
        <button onClick={() => setMessage('THANK YOU FOR SUBSCRIBING')}>
            Subscribe
            </button>
    </div> 
    )
}


export default Message