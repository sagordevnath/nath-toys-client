import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';


const ManageInventory = ({inventory}) => {
    const {_id, img, name, description, price, quantity, sell, supplier} = inventory;

    const [items, setItems] = useState([]);

    // const navigate = useNavigate();


    // handle delete inventory
    const handleDelete =  (id) => {
        const proceed = window.confirm(`Are you sure you want to delete ${name}?`);
        if (proceed) {
        const url = `http://localhost:5000/inventory/${id}`;
        
        fetch(url, {
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            const remaining = items.filter(item => item._id !== id);
            setItems(remaining);
        })
        }
    }
    

    return (
        <div className='inventory'>
            <div className="card">
            <img width="50px" src={img} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <p className="card-text">{description}</p>
            </div>
            <ul className="list-group list-group-flush">
                <li className="list-group-item">Price: {price}</li>
                <li className="list-group-item">Quantity: {quantity}</li>
                <li className="list-group-item">Sell: {sell}</li>
                <li className="list-group-item">Supplier: {supplier}</li>
            </ul>
            <div className="card-body">
                <button onClick={()=>handleDelete(inventory._id)}><Link to="" className="card-link">DELETE</Link></button>                
            </div>
            </div>            
        </div>
    );
};

export default ManageInventory;