// Person1.js
import React from 'react';
import UpdatedComponent from './UpdatedComponent';

function Person1({ money, handleIncrease }) {
    return (
        <>
            <h1>Sarthi is Offering: ${money}</h1>
            <button onClick={handleIncrease}>Click Me!</button>
        </>
    );
}

export default UpdatedComponent(Person1);
