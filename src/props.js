import React from "react"
import NameCells from "./Fragments"
export function Props(props)
{
    return(
        <div>
            {/* <h1>{props.text}</h1> */}
            <NameCells First={props.firstName} Second={props.secondName}/>
        </div>
    )
}