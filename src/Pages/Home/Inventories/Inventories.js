import React from 'react';
import useInventories from '../../../hooks/useInventories';
import Inventory from '../Inventory/Inventory';
import './Inventories.css';
const Inventories = () => {
    const [inventories, setInventories] = useInventories();
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
        </div>
    );
};

export default Inventories;