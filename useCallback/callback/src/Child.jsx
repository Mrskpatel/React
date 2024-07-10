import React, { memo } from 'react';

function Child({ countTwo, handleInc }) {
    console.log("Child Component");
    return (
        <div className="container">
            <h1>Child</h1>
            <h1>Counter: {countTwo}</h1>
            <button onClick={handleInc}>Increment</button>
        </div>
    );
}

export default memo(Child);
