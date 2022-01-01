
import { useState } from "react"




export default function Comp1(){ 
    //1. State
    //salary=5000;
    // Hook Variables
    const [salary, setSalary] = useState(5000)
  
    //2. function/method
    let incr =()=>{ 
        setSalary(salary+4000)

    }
  
    //3. Return
    return<> <button onClick={()=>{incr();}}>add salary</button>
    <h2>The Value of Y is {salary}</h2>
   
            
            </>
}