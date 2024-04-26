import React from 'react';
import { useState , useEffect } from 'react';

const Calculator1 = () => {
  const [expression, setExpression] = useState('');
  const [result, setResult] = useState('');

  useEffect(() => {
    try {
      setResult(eval(expression) || '');
    } catch (error) {
      setResult('Error');
    }
  }, [expression]);

  const handleButtonPress = (value) => {
    setExpression(prevExpression => prevExpression + value);
  };

  const clearExpression = () => {
    setExpression('');
    setResult('');
  };

  return (
    <div>
      <h2>Calculator</h2>
      <input
        type="text"
        value={expression}
        placeholder="Enter expression"
        readOnly
      />
      <div>
        <button onClick={() => handleButtonPress('1')}>1</button>
        <button onClick={() => handleButtonPress('2')}>2</button>
        <button onClick={() => handleButtonPress('3')}>3</button>
        <button onClick={() => handleButtonPress('+')}>+</button>
      </div>
      <div>
        <button onClick={() => handleButtonPress('4')}>4</button>
        <button onClick={() => handleButtonPress('5')}>5</button>
        <button onClick={() => handleButtonPress('6')}>6</button>
        <button onClick={() => handleButtonPress('-')}>-</button>
      </div>
      <div>
        <button onClick={() => handleButtonPress('7')}>7</button>
        <button onClick={() => handleButtonPress('8')}>8</button>
        <button onClick={() => handleButtonPress('9')}>9</button>
        <button onClick={() => handleButtonPress('*')}>*</button>
      </div>
      <div>
        <button onClick={() => handleButtonPress('0')}>0</button>
        <button onClick={() => handleButtonPress('.')}>.</button>
        <button onClick={() => clearExpression()}>C</button>
        <button onClick={() => handleButtonPress('/')}>/</button>
      </div>
      <div>
        <button onClick={() => handleButtonPress('(')}>(</button>
        <button onClick={() => handleButtonPress(')')}>)</button>
        <button onClick={() => handleButtonPress('%')}>%</button>
        <button onClick={() => handleButtonPress('^')}>^</button>
      </div>
      <button onClick={() => setExpression(prevExpression => prevExpression + '=')}>=</button>
      <div>
        <input type="text" value={result} readOnly />
      </div>
    </div>
  );
};

export default Calculator1;
