import React from 'react'
import { useState } from 'react';

const Countdown = () => {
    const [counter, setCounter] = useState(0)

    // let counter =0;
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
            current value of counter = {counter} 
           <br /> <button className='btn btn-outline-primary btn btn-color-primary' onClick={Addition}>Counter</button>
            <button className='btn btn-outline-primary' onClick={Decriment}>Counter</button>

        </div>

    )



}

export default Countdown
