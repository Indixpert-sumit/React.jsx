import React from 'react'
import { useState } from 'react';

const Counter = () => {
    const [counter, setCounter] = useState(0)

    const Addition = () => {
        setCounter(counter + 1)
        console.log(counter)
    }
    const Decriment = () => {
        setCounter(counter - 1)
        console.log(counter)
    }

    return (
        <div>
            counter = {counter}
            {/* <br /> <button className='btn btn-outline-primary btn btn-color-primary' onClick={Addition}>+</button>
            <button className='btn btn-outline-primary' onClick={Decriment}>-</button> */}

        </div>

    )


}

export default Counter
