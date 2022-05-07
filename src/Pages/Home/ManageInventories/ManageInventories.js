import React from 'react';
import { useNavigate } from 'react-router-dom';
import useInventories from '../../../hooks/useInventories';
import ManageInventory from '../ManageInventory/ManageInventory';
import './ManageInventories.css';



const ManageInventories = () => {
    const [inventories] = useInventories();
    const navigate = useNavigate();
    const handleNavigate =() => {
        
        navigate('/addInventory')
    }
    return (
        <div>
            <div className='inventories-container'>
            {
                inventories.map(inventory => <ManageInventory
                    key={inventory._id}
                    inventory={inventory}
                >
                    
                </ManageInventory>)
                
            }            
            
        </div>
        <button  onClick={handleNavigate} type="button" className="btn btn-outline-success w-50 mx-auto">Create Items</button>
        </div>
    );
};

export default ManageInventories;