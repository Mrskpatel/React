import React, { useReducer } from "react";
import initialState from './initialState';
import { increment, decrement } from "./actions";
import reducer from "./reducer";

function Example() {
    const [state, dispatch] = useReducer(reducer, initialState);

    const handleIncrement = (id) => {
        dispatch(increment(id));
    };

    const handleDecrement = (id) => {
        dispatch(decrement(id));
    };

    const total = state.prices.reduce((sum, item) => sum + item.value, 0);

    return (
        <div>
            {state.prices.map((item, index) => (
                <div key={index}>
                    <h1>Price Rs. {item.price}</h1>
                    <h1>Amount: {item.value}</h1>
                    <button onClick={() => handleIncrement(item.id)}>Increment</button>
                    <button onClick={() => handleDecrement(item.id)}>Decrement</button>
                </div>
            ))}
            <h1>Total: {total}</h1>
        </div>
    );
}

export default Example;
