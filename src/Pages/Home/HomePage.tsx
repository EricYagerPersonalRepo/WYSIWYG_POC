import React from "react"
import { CanovaButton } from "../../Components/Common"

export default function Home(){
    const handleClick = () => {
        console.log("button clicked")

    }
    return(
        <div>
            <h1>Home</h1>
            <CanovaButton
                text="Click Me"
                onClick={handleClick}
                color="secondary"
                hoverColor="#a83232"
            />
        </div>
    ) 
}