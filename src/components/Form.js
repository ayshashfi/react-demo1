import {useState} from "react"

export const Form = () => {
    const[username,setUsername]=useState('')

    const handleSubmit=(event)=>{
        event.preventDefault()
        console.log(`username is ${username}`)
    }

    return(
        <form onSubmit={handleSubmit}>
            <label>Username</label>
            <input type='text' value={username} onChange={(event)=>setUsername(event.target.value)}></input>
            <button type="submit">Submit</button>
        </form>
    )

}