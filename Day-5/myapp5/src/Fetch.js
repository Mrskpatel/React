import React from 'react'
import { useState , useEffect } from 'react'

export const Fetch = () => {
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
    <div className='main'>
        {
            data && data.map((el)=>(
                <div className='map'>
                    <img src={el.image} />
                    <h1>{el.title}</h1>
                    <p>{el.category}</p>
                    <h3>{el.id}</h3>
                    <h2>{el.price}</h2>
                </div>
            )
             
        )
        }
    </div>
  )
}