import React, { useState } from 'react';

function Employee() {
    const [inputValue, setInputValue] = useState('');
    const [inputValue1, setInputValue1] = useState('');
    const [inputValue2, setInputValue2] = useState('');
    const[inputValue3,setInputValue3] = useState('')
    const [empty, setEmpty] = useState([]);
    const[editId , setEditId] = useState(null);

    localStorage.setItem('emp', JSON.stringify(empty));

    function addEmployee(e) {
        e.preventDefault();

        if(editId !== null){
            setEmpty(empty.map((h)=>{
                if(h.id===editId)
                    {
                        return{...h,name:inputValue,number:inputValue1,email:inputValue2,salary:inputValue3}
                    }
                    return h
            }))
            setEditId(null)

            setInputValue('');
            setInputValue1('');
            setInputValue2('');
            setInputValue3('');


        }else{
            let newTask = {
                id : new Date().getTime(),
                name: inputValue,
                number: inputValue1,
                email: inputValue2,
                salary : inputValue3
            };
            setEmpty([...empty, newTask]);
            setInputValue('');
            setInputValue1('');
            setInputValue2('');
            setInputValue3('');
        }
    }

    function handleEdit(id){
        let newvalue = empty.find(to=>to.id === id)
        setInputValue(newvalue.name)
        setInputValue1(newvalue.number)
        setInputValue2(newvalue.email)
        setInputValue3(newvalue.salary)

        setEditId(id)
    }

    function handleDelet(id) {
        const confirmed = window.confirm('Are you sure you want to delete this employee?');
        if (confirmed) {
            setEmpty(empty.filter((d) => (
                d.id !== id
            )))
        }
    }
    
    return (
        <div>
            <center>
            <div className="form">
            <p>Employee Details</p>
            <input type="text" placeholder='Enter Employee Name :' value={inputValue} onChange={(a) => setInputValue(a.target.value)} required/> <br />
            <input type="text" maxLength={10} placeholder='Enter Employee Phone Number : ' value={inputValue1} onChange={(b) => setInputValue1(b.target.value)} required/><br />
            <input type="text" placeholder='Enter Employee Email : ' value={inputValue2} onChange={(c) => setInputValue2(c.target.value)} required/>
            <input type="text" name="" id="" placeholder='Enter Employee Salary :' value={inputValue3} onChange={(d)=> setInputValue3(d.target.value)}required/>
            <button onClick={addEmployee} id='add'>Add Detail</button>
            </div>
            </center>
            <br /><br /><br /><br />
            <table className="table table-striped table-hover table-width">
                <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Employee Name</th>
                        <th scope="col">Employee Phone Number</th>
                        <th scope="col">Employee Email</th>
                        <th scope="col">Employee Salary</th>
                        <th scope="col">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {empty.map((el, i) => (
                        <tr key={i}>
                            <th scope="row">{i + 1}</th>
                            <td>{el.name}</td>
                            <td>{el.number}</td>
                            <td>{el.email}</td>
                            <td>{el.salary} $</td>
                            <td><button id='edit' onClick={()=>handleEdit(el.id)}><i class="fa-solid fa-pen-to-square"></i></button> <button id='del' onClick={()=>handleDelet(el.id)}><i class="fa-regular fa-trash-can"></i></button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Employee;
