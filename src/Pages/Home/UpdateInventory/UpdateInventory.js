import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import './UpdateInventory.css';


const UpdateInventory = () => {
    const {id} = useParams();
    
    const [inventory, setInventory] = useState({});
    
    
    const {img, name, description, price, quantity, supplier} = inventory;

    useEffect(() => {
          const url = `http://localhost:5000/inventory/${id}`;
          fetch(url)
          .then(res => res.json())
          .then(data => setInventory(data)) 
    },[quantity]);

    // quantity decrease by one when clicked
    
     
 

      
  


   
       
    
        
    return (
        <div className='updateInventory'>
            <div className="card">
            <img width="30px" src={img} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <p className="card-text">{description}</p>
            </div>
            <ul className="list-group list-group-flush">
                <li className="list-group-item">Price: {price}</li>
                <li className="list-group-item">Quantity: {quantity}</li>
                <li className="list-group-item">Supplier: {supplier}</li>
            </ul>            
            <div className="card-body">
                <button><Link to="/" className="card-link">Delivered</Link></button>                
            </div>
            </div>
        </div>
    );
};

export default UpdateInventory;