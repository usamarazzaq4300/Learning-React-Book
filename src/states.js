import { useState } from "react"
function States() {
    const [counterState, setCounterState] = useState(0)
    const inc = () => {

        setCounterState(counterState + 1)
        // alert(counter)
    }

    const dec = () => {

        setCounterState(counterState - 1)
        // alert(counter)
    }
    return (
        <div>
            <button onClick={dec}>-</button>
            counter is: {counterState}
            <button onClick={inc}>+</button>
            <h3 id="h3" style={{ visibility: "display" }}>Negative Number</h3>
        </div>
    )
}
export default States;