import React, { useState } from "react"
export const Counter = () => {
    const [count,setCount] = useState(0) //useState-Это исходящее состояние,чему сейчас равна
    //setCount-эта функ. котроая будет изменяться.
    // count - эта переменная
    
    const Increment = () => {
        setCount(count+1)
    }

    const Descrement = () => {
        setCount(count-1)
    }

    if (count === -1) {
        setCount(Increment)
    }
    else if (count === 11) {
        setCount(Descrement)
    }

    return <div>
        <button onClick={Increment}>Increment</button>
        <h1>{count}</h1>
        <button onClick={Descrement}>Descrement</button>
        <button  onClick={() => setCount(0)}>Сборос</button>
    </div>
        
    
}

export default Counter 