import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import useUpdateInventories from '../../../hooks/useUpdateInventories';

const UpdateInventory = () => {
    const {inventoryId} = useParams();
    
        const [inventory] = useUpdateInventories(inventoryId);
        console.log(inventory);
    
        
    return (
        <div className='inventory'>
            <div className="card">
            {/* <img width="50px" src={inventory.img} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{inventory.name}</h5>
                <p className="card-text">{inventory.description}</p>
            </div>
            <ul className="list-group list-group-flush">
                <li className="list-group-item">Price: {inventory.price}</li>
                <li className="list-group-item">Quantity: {inventory.quantity}</li>
                <li className="list-group-item">Supplier: {inventory.supplier}</li>
            </ul> */}
            <input type="number" name="" id="" />
            <input type="number" name="" id="" />
            <div className="card-body">
                <button><Link to="#" className="card-link">UPDATE</Link></button>                
            </div>
            </div>
        </div>
    );
};

export default UpdateInventory;