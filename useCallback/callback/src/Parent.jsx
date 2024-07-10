import React, { useCallback } from 'react';
import { useState } from 'react';
import Child from './Child';

function Parent() {
    const [count, setCount] = useState(0);
    const [countTwo, setCountTwo] = useState(0);

    const handleClick = () => {
        setCount(count + 1);
    };

    const handleInc = useCallback(() => {
        setCountTwo(countTwo + 1);
    }, [countTwo]);

    return (
        <div className="container">
            <h1>Counter: {count}</h1>
            <button onClick={handleClick}>Increment</button>
            <Child countTwo={countTwo} handleInc={handleInc} />
        </div>
    );
}

export default Parent;
