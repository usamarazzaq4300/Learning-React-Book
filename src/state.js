import {useState} from "react"
function State()
{
    // State in React
    const[myName, setName]= useState("usama")
    const[yourName, setyourName]=useState("noman")
    const[flag, setFlag]=useState(true)
    const [arr,setarr]= useState(["usama","sayaam","bakar"])
    return (
        <div>
        <h2>Students List</h2>
        <ul>
        {
            arr.map((names)=>{
                return(
                    <li>{names}</li>
                )
            })
        }
        </ul>
            {
                flag ?
                <p style={{background: flag? "red":"blue"}}>{myName}</p>
                :
                <p>{yourName}</p>
            }
            <button onClick={()=> setFlag(!flag)}>Change Name</button>
        </div>
    )
}
export default State;