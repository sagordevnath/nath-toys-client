import axiosPrivate from '../../../api/axiosPrivate';
import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from "../../../Firebase/Firebase.init";
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const MyInventory = () => {
    const [user] = useAuthState(auth);
    const [myInventories, setMyInventories] = useState([]); 
    const navigate = useNavigate();

    useEffect(()=> {
        const getMyInventory = async() => {            
            const email = user?.email;
            
            const url = `https://quiet-dawn-19288.herokuapp.com/inventory?email=${email}`;          

            try{
                const {data} = await axiosPrivate.get(url);                
                setMyInventories(data);
            }
            catch(error){
                console.log(error.message);
                if(error.response?.status === 401 || error.response?.status === 403){
                    signOut(auth);
                    navigate('/login')
                    toast.warning('error.message')
                }
            }
        }
        getMyInventory();
    },[user]);

     // handle delete inventory
     const handleDelete =  (id) => {
        const agree = window.confirm(`Are you sure you want to delete?`);
        if (agree) {
        const url = `https://quiet-dawn-19288.herokuapp.com/inventory/${id}`;
        
        fetch(url, {
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(data => {            
            const remaining = myInventories.filter(item => item._id !== id);
            setMyInventories(remaining);
        })
        }
    }
    return (
        <div>
            <div className="inventories-container">
        {myInventories.map((inventory) => (
          <div key={inventory._id} className="container">
            <div className="card lg-3 inventories-card">
              <div className="row full-card g-0">
                <div className=" image col-lg-6">
                  <img
                    width="100%"
                    src={inventory.img}
                    className=" img-fluid rounded-start"
                    alt="..."
                  />
                </div>
                <div className="col-lg-6">
                  <div className="card-body">
                    <h6 className="card-title">{inventory.name}</h6>
                    <ul>
                      <li className="card-text">Price: {inventory.price}</li>
                      <li className="card-text">
                        Quantity: {inventory.quantity}
                      </li>
                      <li className="card-text">Sell: {inventory.sell}</li>
                      <li className="card-text">
                        Supplier: {inventory.supplier}
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="card-body">                
                                              
            <button
                    onClick={() => handleDelete(inventory._id)}
                    type="button"
                    className="btn btn-outline-danger button mt-4"
                  >
                    DELETE
                  </button>
            </div>
            </div>
          </div>
        ))}
      </div>
        </div>
    );
};

export default MyInventory;