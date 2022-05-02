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
    const decreaseQuantity = () => {
        const url = `http://localhost:5000/inventory/${id}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                quantity: quantity - 1
             }) 
        })
        .then(res => res.json()) 
        .then(data => setInventory(data))
    }

    // quantity increase by input field value one when clicked
    const increaseQuantity = (event) => {
        
        const newQuantity = event.target.quantity.value;
        console.log(newQuantity);
        const updatedQuantity = parseInt(newQuantity) + parseInt(quantity);
        const url = `http://localhost:5000/inventory/${id}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                quantity: updatedQuantity
                })
        })
        .then(res => res.json())
        .then(data => {console.log(data)
            alert(`${data.name} quantity updated to ${updatedQuantity}`)
        
       
       
        })
        
    }

        
       
    
        
    return (
        <div className='manageInventories'>
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
                <button onClick={decreaseQuantity}><Link to="" className="card-link">Delivered</Link></button>                
            </div>
            </div>
        </div>
        <form  onSubmit={increaseQuantity} className='updateStock'>
            <input type="text" name="quantity" placeholder="Quantity" id="" />
            <br /> 
            <input type="submit" value="Stock Quantity" />
        </form>
        </div>
    );
};

export default UpdateInventory;