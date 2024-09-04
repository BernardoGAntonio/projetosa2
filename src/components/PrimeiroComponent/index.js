import "./primeiro.css"
import { useState } from "react"

export default function PrimeiroComponent(){
    const [num, setNum] = useState(14);
    function increment(){
        setNum(num+1)
    }
    function decrement(){
        setNum(num-1)
    }
    return(
        <p className="paragrafo">
            
            <button onClick={increment}>Add 1</button>
            {num}
            <button onClick={decrement}>Remove 1</button>
        </p>
    )
}                              