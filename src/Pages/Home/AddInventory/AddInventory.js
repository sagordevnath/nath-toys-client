import React from 'react';
import { Link } from 'react-router-dom';
import './addInventory.css';

const AddInventory = () => {
    return (
        <div>
            <h4 className='text-center text-primary my-3'>Add a New Inventory</h4>
            <div className='addInventory'>            
            <input type="text" name="img" id="" placeholder="Image Url" required />            
            <br />
            <input type="text" name="name" id="" placeholder="Name" required />
            <br />                
            <input type="text" name="description" id="" placeholder="Description" required />
            <br />                
            <input type="text" name="price" id="" placeholder="Price" required />
            <br />                
            <input type="text" name="quantity" id="" placeholder="Quantity" required />
            <br />               
            <input type="text" name="supplier" id="" placeholder="Supplier" required />
            <br />   
            <button><Link to="" className="card-link">Add Inventory</Link></button>              
            
        </div>
        </div>
    );
};

export default AddInventory;