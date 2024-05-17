import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function AddUser({ addpost }) {
  const [name, setName] = useState('');
    const [emp_id, setEmp_Id] = useState('');
    const [phone, setPhone] = useState('');
    const [emp_add, setEmp_Add] = useState('');
    const [dep, setDep] = useState('');
    const navigate = useNavigate();

    function handleSubmit(e) {
        e.preventDefault();
        addpost(name, emp_id, phone, emp_add, dep);
        navigate('/');
    }
  return (
    <>
      <div>
            <header>
                <Link to='/'>Home</Link>
            </header>

            <br />

            <div>
                <center>
                    <h1 style={{ color: "#07AAB9" }}>*** Add New Employee ***</h1>
                    <br />
                    <br />
                    <form action="" style={{ paddingRight: "420px" }} onSubmit={handleSubmit}>
                        <br />
                        <input type="text" placeholder='Enter the Employee name' value={name} onChange={(e) => setName(e.target.value)} /> <br /> <br />
                        <input type="number" placeholder='Enter the Employee ID' value={emp_id} onChange={(e) => setEmp_Id(e.target.value)} /> <br /> <br />
                        <input type="number" placeholder='Enter the Employee Phone' value={phone} onChange={(e) => setPhone(e.target.value)} /> <br /> <br />
                        <input type="text" placeholder='Enter the Employee Address' value={emp_add} onChange={(e) => setEmp_Add(e.target.value)} /> <br /> <br />
                        <select value={dep} onChange={(e) => setDep(e.target.value)}>
                            <option value="Departments">Departments</option>
                            <option value="AI">AI</option>
                            <option value="Front-end Dev">Front-end Dev</option>
                            <option value="back-end Dev">back-end Dev</option>
                            <option value="VLC">VLC</option>
                            <option value="Flutter">Flutter</option>
                            <option value="UI-UX">UI-UX</option>
                        </select>
                        <br /> <br />
                        <button type="submit">Add Employee</button>
                    </form>
                </center>
            </div>
        </div>
    </>
  );
}

export default AddUser;