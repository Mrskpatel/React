import React from 'react'
import { useState } from 'react'
import axios from 'axios'

function ApiData() {
    const [apidata, setApidata] = useState({
        product: '',
        price: '',
        category: ''
    });

    const handleChange = (event) => {
        setApidata({ ...apidata, [event.target.name]: event.target.value });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        axios.post('http://localhost:8000/products', apidata)
            .then((res) => {
                console.log(res);
                setApidata({
                    product: '',
                    price: '',
                    category: ''
                });
            }).catch((err) => {
                console.log(err);
            });
    };
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <p>Store API Create</p>
            <span>Product Name :</span> <input type="text" name="product" onChange={handleChange} value={apidata.product} />
            <span>Product Price :</span> <input type="text" name="price" onChange={handleChange} value={apidata.price} />
            <span>Product category :</span> <input type="text" name="category" onChange={handleChange} value={apidata.category} />
            <button>Submit</button>
        </form>
    </div>
  )
}

export default ApiData