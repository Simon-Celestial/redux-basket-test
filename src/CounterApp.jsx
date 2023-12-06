import React, {useRef} from 'react'
import {ViewCount} from "./components/ViewCount.jsx";
import {useDispatch} from "react-redux";
import {decrement, increment, incrementByAmount} from "./redux/features/counter.js";

export const CounterApp = () => {
    const dispatch = useDispatch();
    const handleSubmit = (e) => {
        e.preventDefault();
        let {value} = inpRef.current
       dispatch(incrementByAmount(Number(value)));
    };
    const inpRef = useRef(null);
    return (
        <>
            <button onClick={() => dispatch(increment())}>increment</button>
            <ViewCount />
            <button onClick={()=> dispatch(decrement())}>decrement</button>
            <form onSubmit={handleSubmit}>
                <input type="number" ref ={inpRef} style={{border: "1px solid black"}}/>
                <button>SUBMIT</button>
            </form>
        </>
    )
}
