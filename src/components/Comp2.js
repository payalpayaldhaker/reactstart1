import React, { useState } from 'react'

export default function Comp2() {
    const [x, setX]  = useState('hello eveyone gsmart work');


    let add =()=>{ 
        setX(x+'have you today guiyes');
    }
    return (
        <>
            <button onClick={()=>{add();}}>submit</button>
            <h1>hello{x}</h1>
        </>
    )
}
