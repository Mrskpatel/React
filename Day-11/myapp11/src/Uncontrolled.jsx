import React, { useState, useRef } from 'react';

export default function Uncontrolled() {
    const inputRef = useRef(null); 

    function handleSubmit(e) {
        e.preventDefault();
        alert(`Surname: ${inputRef.current.value}`); 
    }

    return (
        <div>
            <center>
            <form onSubmit={handleSubmit}> <br />
                <input type="text" ref={inputRef} placeholder='Enter your Surname' /> <br />
                <button type='submit'>Submit</button>
            </form>
            </center>
        </div>
    );
}
