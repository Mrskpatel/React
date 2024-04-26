import React, { useState } from 'react';

export const Calculator = () => {
    const [value1, setValue1] = useState('');
    const [value2, setValue2] = useState('');
    const [operation, setOperation] = useState('+');

    const change1 = (e) => {
        setValue1(e.target.value);
    }

    const change2 = (e) => {
        setValue2(e.target.value);
    }

    const changeOperation = (e) => {
        setOperation(e.target.value);
    }

    const calculate = () => {
        let result;

        const num1 = parseFloat(value1);
        const num2 = parseFloat(value2);

        switch (operation) {
            case '+':
                result = num1 + num2;
                break;
            case '-':
                result = num1 - num2;
                break;
            case '*':
                result = num1 * num2;
                break;
            case '/':
                result = num1 / num2;
                break;
            default:
                result = 'Invalid operation';
        }

        console.log(result);
    }

    return (
        <div>
            <input type="text" value={value1} onChange={change1} placeholder='Enter Value of A: ' />
            <select onChange={changeOperation}>
                <option value="+">+</option>
                <option value="-">-</option>
                <option value="*">*</option>
                <option value="/">/</option>
            </select>
            <input type="text" value={value2} onChange={change2} placeholder='Enter Value of B: ' />

            <button onClick={calculate}>Output</button>
        </div>
    );
}
