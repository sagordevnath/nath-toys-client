import React from 'react';
import { useNavigate } from 'react-router-dom';
import useInventories from '../../../hooks/useInventories';
import Inventory from '../Inventory/Inventory';
import './Inventories.css';
const Inventories = () => {
    const [inventories, setInventories] = useInventories();

    const navigate = useNavigate();
    const handleManageInventories = () => {
        navigate('/manageInventories');
    }

    return (
        <div id="inventories" className='container'>
            <div className="row">
            <h1 className='text-primary text-center mt-5'> Our Inventories</h1>
            <div className="inventories-container">
            {  
                inventories.slice(0,6).map(inventory => <Inventory
                    key={inventory._id}
                    inventory={inventory}
                >
                </Inventory>)                
            }
            </div>
            </div>
            
            <button  onClick={handleManageInventories} className="btn btn-outline-success w-50 mx-auto">Manage Inventories</button>
            
        </div>
    );
};

export default Inventories;