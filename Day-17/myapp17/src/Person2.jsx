// Person2.js
import React from 'react';
import UpdatedComponent from './UpdatedComponent';

function Person2({ money, handleIncrease }) {
    return (
        <>
            <h1>Raj is Offering: ${money}</h1>
            <button onClick={handleIncrease}>Click Me!</button>
        </>
    );
}

export default UpdatedComponent(Person2);
