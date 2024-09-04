import "./segundo.css"

import { useState } from "react"

export default function SegundoComponent(){
    const [num, setNum] = useState(14);
    function handleFive(){
        setNum(5)
    }
    function handleZero(){
        setNum(0)
    }
    return(
        <p className="paragrafo">
            {num}
            {num === 0 ? <></> : <button onClick= {handleZero}>zero</button>}
            {num === 5 ? <></> : <button onClick= {handleFive}>five</button>}
        </p>
    )
}                  