import React from 'react'

function Child({choosemessage}){
    return (
        <div>
            <button onClick={()=>choosemessage("Goodbye")}>change text</button>
        </div>
    )
}

export default Child