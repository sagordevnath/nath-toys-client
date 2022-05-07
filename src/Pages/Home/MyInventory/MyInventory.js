// import axiosPrivate from '../../../api/axiosPrivate';
// import { signOut } from 'firebase/auth';
// import React, { useEffect, useState } from 'react';
// import { useAuthState } from 'react-firebase-hooks/auth';
// import { Link, Navigate } from 'react-router-dom';
// import auth from "../../../Firebase/Firebase.init";
import useInventories from '../../../hooks/useInventories';
import MysingleInventory from '../MySingleInventory/MysingleInventory';
// import { toast } from 'react-toastify';

const MyInventory = () => {
    // const [user] = useAuthState(auth);
    // const [myInventory, setMyInventory] = useState([]);
    // const [items, setItems] = useState([]);
    const [inventories] = useInventories();

    // useEffect(()=> {
    //     const getMyInventory = async() => {
    //         const email = user?.email;
            
    //         const url = `https://quiet-dawn-19288.herokuapp.com/inventory?email=${email}`;         
            

    //         try{
    //             const {data} = await axiosPrivate.get(url);
    //             console.log(data)
    //             const myItems= data.filter(item => item.email === email);
    //             console.log(myItems);
    //             setMyInventory(data);
    //         }
    //         catch(error){
    //             console.log(error.message);
    //             if(error.response?.status === 401 || error.response?.status === 403){
    //                 // signOut(auth);
    //                 // Navigate('/login')
    //                 toast.warning('error.message')
    //             }
    //         }
    //     }
    //     getMyInventory();
    // },[user]);

    //  // handle delete inventory
    //  const handleDelete =  (id) => {
    //     const proceed = window.confirm(`Are you sure you want to delete ${myInventory.name}?`);
    //     if (proceed) {
    //     const url = `https://quiet-dawn-19288.herokuapp.com/inventory/${id}`;
        
    //     fetch(url, {
    //         method: 'DELETE'
    //     })
    //     .then(res => res.json())
    //     .then(data => {
    //         console.log(data);
    //         const remaining = items.filter(item => item._id !== id);
    //         setItems(remaining);
    //     })
    //     }
    // }
    return (
        <div>
            {/* <p>slfsdlsf:{inventories.length}</p> */}
            {/* {
                myInventory.map(singleInventory => <MysingleInventory
                key={singleInventory._id}
                singleInventory = {singleInventory}
                ></MysingleInventory>)

                
            } */}
            {
                inventories.map(singleInventory => <MysingleInventory
                key={singleInventory._id}
                singleInventory = {singleInventory}
                ></MysingleInventory>
                )
            }
        </div>
    );
};

export default MyInventory;