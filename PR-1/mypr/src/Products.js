import React, { useState, useEffect } from 'react';

export const Products = () => {
    const [data, setData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("https://api.escuelajs.co/api/v1/products");
                const jsonData = await response.json();
                setData(jsonData);
                console.log(jsonData);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, []);

    return (
        <div id='product-container'> {/* Changed ID to class for styling */}
            {data && data.map((el) => (
                <div className='product-box' key={el.id}> {/* Changed ID to class for styling */}
                    <img className='product-image' src={el.images} alt={el.name} /> {/* Changed ID to class for styling */}
                    <h4 className='product-title'>{el.title}</h4>
                    <h4 className='product-price'>{el.price}</h4>
                    <p className='product-description'>{el.description}</p>
                    <p className='product-category'>{el.category.name}</p>
                </div>
            ))}
        </div>
    );
};
