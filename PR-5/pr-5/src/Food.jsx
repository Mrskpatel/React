import React from "react";
import { useState } from "react";

function Food() {
  const [inputValue_1, setInputValue_1] = useState("");
  const [inputValue_2, setInputValue_2] = useState("");
  const [inputValue_3, setInputValue_3] = useState("");
  const [inputValue_4, setInputValue_4] = useState("");

  const [recp, setRecp] = useState([]);

  localStorage.setItem("rec", JSON.stringify(recp));

  function addtask(e) {
    e.preventDefault();

    let newrec = {
      text: inputValue_1,
      sel: inputValue_2,
      price: inputValue_3,
      num: inputValue_4,
    };

    setRecp([...recp, newrec]);

    setInputValue_1("");
    setInputValue_2("");
    setInputValue_3("");
    setInputValue_4("");
  }
  return (
    <div>
      <center>
        <h1 style={{ color: "blue" }}>*** Recipe Book ***</h1>
        <br /> <br />
        <form action="">
          <input
            type="text"
            placeholder="Enter the Receipe Book"
            onChange={(a) => setInputValue_1(a.target.value)}
          />
          <br />
          <br />
          <select
            name=""
            id=""
            onChange={(b) => {
              setInputValue_2(b.target.value);
            }}
          >
            <option value="">Type of Receipe</option>
            <option value="gujarati"> Gujarati </option>
            <option value="panjabi"> Panjabi </option>
            <option value="south-indian"> South-indian </option>
            <option value="fast-Food"> Fast-Food </option>
          </select>
          <br /> <br />
          <input
            type="number"
            placeholder="Payment price of the food"
            onChange={(c) => setInputValue_3(c.target.value)}
          />
          <br />
          <br />
          <input
            type="number"
            placeholder="Enter Mobile No"
            onChange={(d) => setInputValue_4(d.target.value)}
          />
          <br />
          <br />
          <button onClick={addtask}>Add</button>
        </form>
      </center>
      <br /> <br />
      <table
        class="table"
        style={{
          width: "600px",
          border: "1px solid black",
          marginLeft: "450px",
        }}
      >
        <thead>
          <tr>
            <th scope="col">#</th>

            <th scope="col">Name</th>
            <th scope="col">Action</th>
            <th scope="col">Price</th>
            <th scope="col">Mobile number</th>
          </tr>
        </thead>

        <tbody>
          {recp.map((el, i) => (
            <tr key={i}>
              <td scope="row">{i + 1}</td>
              <td>{el.text}</td>
              <td>{el.sel}</td>
              <td>{el.price}</td>
              <td>{el.num}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Food;
