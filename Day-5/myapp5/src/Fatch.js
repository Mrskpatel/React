import React from 'react'
import { useState , useEffect } from 'react'

export const Fatch = () => {
    const [data ,setdata] = useState(null)
    useEffect(()=>{
        const fatchingdata = async()=>{
     const response = await fetch("https://fakestoreapi.com/products")
     const jsondata = await response.json()
     setdata(jsondata)
     console.log(jsondata)
    
        }
        fatchingdata()
    },[])
  return (
    <div>
        {
            data && data.map((el)=>{
             <h1>{el.category}</h1>
            })
        }
    </div>
  )
}
