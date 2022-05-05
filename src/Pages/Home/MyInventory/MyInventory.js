import axios from 'axios';
import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate } from 'react-router-dom';
import auth from "../../../Firebase/Firebase.init";
import useInventories from '../../../hooks/useInventories';

const MyInventory = () => {
    const [user] = useAuthState(auth);
    const [myInventory, setMyInventory] = useState([]);
    // const [inventories] = useInventories();

    useEffect(()=> {
        const getMyInventory = async() => {
            const email = user?.email;
            
            const url = `http://localhost:5000/myInventory?email={email}`;
            
            

            try{
                const {data} = await axios.get(url);
                const myItems= data.filter(item => item.email === email);
                console.log(myItems);
                setMyInventory(myItems);
            }
            catch(error){
                console.log(error.message);
                if(error.response.status === 401 || error.response.status === 403){
                    signOut(auth);
                    Navigate('/login')
                }
            }
        }
        getMyInventory();
    },[user]);
    return (
        <div>
            <h2>My Invntory: {myInventory.length}</h2>
        </div>
    );
};

export default MyInventory;