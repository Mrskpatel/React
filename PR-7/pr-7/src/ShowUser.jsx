import React from 'react'
import { Link } from 'react-router-dom'

function ShowUser({posts,delpost}) {
  function del(id)
  {
    delpost(id)
  }
  return (
    <div>
        <header>
     
     <Link to='/add'>ADD Employee</Link>
        </header>
        
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Sr no.</th>
              <th scope="col">Name</th>
              <th scope="col">ID</th>
              <th scope="col">Phone</th>
              <th scope="col">Address</th>
              <th scope="col">Department</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {
              posts.map((el, i) => (
                <tr key={i}>
                  <th scope="row">{i + 1}</th>
                  <td>{el.name}</td>
                  <td>{el. emp_id}</td>
                  <td>{el.phone}</td> 
                  <td>{el.emp_add}</td>
                  <td>{el.dep}</td>
                  <td><i class="ri-delete-bin-6-line" onClick={()=>del(el.id)}></i> &nbsp;<Link to={`/edit/${el.id}`}><i class="ri-edit-box-line"></i></Link></td>
                </tr>
              ))
            }
          </tbody>
        </table>
              
    </div>
  )
}

export default ShowUser