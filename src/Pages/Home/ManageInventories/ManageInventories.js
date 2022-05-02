import React from 'react';
import useInventories from '../../../hooks/useInventories';
import ManageInventory from '../ManageInventory/ManageInventory';
import './ManageInventories.css';

const ManageInventories = () => {
    const [inventories] = useInventories();
    return (
        <div className='inventories-container'>
            {
                inventories.map(inventory => <ManageInventory
                    key={inventory._id}
                    inventory={inventory}
                >
                </ManageInventory>)
            }
        </div>
    );
};

export default ManageInventories;