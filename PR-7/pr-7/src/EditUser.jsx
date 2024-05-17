import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

function EditUser({ editpost, posts }) {
  const { id } = useParams(); // Use useParams to get the id from the route
  const navigate = useNavigate();

  // Find the post using the id from the params
  const postToEdit = posts.find(post => post.id === parseInt(id));

  // Set initial state only if postToEdit is found
  const [name, setName] = useState(postToEdit ? postToEdit.name : '');
  const [emp_id, setEmp_Id] = useState(postToEdit ? postToEdit.emp_id : '');
  const [phone, setPhone] = useState(postToEdit ? postToEdit.phone : '');
  const [emp_add, setEmp_Add] = useState(postToEdit ? postToEdit.emp_add : '');
  const [dep, setDep] = useState(postToEdit ? postToEdit.dep : 'Departments');

  useEffect(() => {
    if (postToEdit) {
      setName(postToEdit.name);
      setEmp_Id(postToEdit.emp_id);
      setPhone(postToEdit.phone);
      setEmp_Add(postToEdit.emp_add);
      setDep(postToEdit.dep);
    }
  }, [postToEdit]);

  function handleSubmit(e) {
    e.preventDefault();
    if (postToEdit) {
      editpost(postToEdit.id, name, emp_id, phone, emp_add, dep);
      navigate('/');
    } else {
      alert("Post not found");
    }
  }

  return (
    <div>
      <center>
        <h1 style={{ color: "#07AAB9" }}>*** Update Employee ***</h1>
        <br />
        <br />
        <form action="" style={{ paddingRight: "420px" }} onSubmit={handleSubmit}>
          <br />
          <input 
            type="text" 
            placeholder="Enter the Employee name" 
            value={name} 
            onChange={(e) => setName(e.target.value)} 
          />
          <br />
          <br />
          <input 
            type="number" 
            placeholder="Enter the Employee ID" 
            value={emp_id} 
            onChange={(e) => setEmp_Id(e.target.value)} 
          />
          <br />
          <br />
          <input 
            type="number" 
            placeholder="Enter the Employee Phone" 
            value={phone} 
            onChange={(e) => setPhone(e.target.value)} 
          />
          <br />
          <br />
          <input 
            type="text" 
            placeholder="Enter the Employee Address" 
            value={emp_add} 
            onChange={(e) => setEmp_Add(e.target.value)} 
          />
          <br />
          <br />
          <select value={dep} onChange={(e) => setDep(e.target.value)}>
            <option value="Departments">Departments</option>
            <option value="AI">AI</option>
            <option value="Front-end Dev">Front-end Dev</option>
            <option value="back-end Dev">back-end Dev</option>
            <option value="VLC">VLC</option>
            <option value="Flutter">Flutter</option>
            <option value="UI-UX">UI-UX</option>
          </select>
          <br />
          <br />
          <button type="submit">Update Employee</button>
        </form>
      </center>
    </div>
  );
}

export default EditUser;
