import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Inventory.css'

const Inventory = ({inventory}) => {
    const {_id, img, name, description, price, quantity, supplier} = inventory;
    

    const navigate = useNavigate();

    // handle navigate
    const navigateToServiceDetail = id =>{
        navigate(`/inventory/${id}`);
    }
    return (
        <div className='inventory'>
            <div className="card h-100">
            <img width="50px" src={img} className="card-img-top" alt="..." />
            <div className="card-body cardBody">
                <h5 className="card-title text-primary">{name}</h5>
                <p className="card-text">{description}</p>
            </div>
            <ul className="list-group list-group-flush">
                <li className="list-group-item">Price: {price}</li>
                <li className="list-group-item">Quantity: {quantity}</li>
                <li className="list-group-item">Supplier: {supplier}</li>
            </ul>
            <div className="card-body">                
                <button onClick={()=>navigateToServiceDetail(_id)} className="btn btn-outline-success w-100 mx-auto">UPDATE</button>               
            </div>
            </div>            
        </div>
        
    );
};

export default Inventory;