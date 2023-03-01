import React, { useEffect, useState } from "react"

const Contactus = () => {

    const [count, setCount] = useState(0)

    console.log("render")

    useEffect(() => {
        console.log("useEffect");

        return () => {
            console.log("WillUnMount");
        }
    }, [count])

    return (

        <div>
            {console.log("DOM update")}
            <h4>{count}</h4>
            <button onClick={() => { setCount(count => count + 1) }}>inc</button>
        </div>
    )
}
export default Contactus