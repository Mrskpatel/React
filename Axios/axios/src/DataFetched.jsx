import React from 'react'
import { useState , useEffect } from 'react'
import axios from 'axios'

function DataFetched() {
    const[data,setData] = useState([])

    useEffect(()=>{
        const fetching = async ()=>{
            try{
                let response = await axios.get('https://fakestoreapi.com/products')
                setData(response.data)
            } catch(err){
                console.log("Error")
            }
        }
        fetching()
    },[])


  return (
    <>
        {
            data && data.map((el)=>(
                <>
                <h1 key={el.id}>{el.title}</h1>
                <h2>{el.price}</h2>
                <p>{el.description}</p>
                <img src={el.image} alt="" />
                </>
            ))
        }
    </>
  )
}

export default DataFetched