import React from "react";
import { useForm } from "react-hook-form";
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from "../../../Firebase/Firebase.init";
import "./addInventory.css";
import { toast } from "react-toastify";

const AddInventory = () => {
  const [user] = useAuthState(auth);
    const { register, handleSubmit } = useForm();

    const onSubmit = data => {     
        console.log(data);  

      const url = `https://quiet-dawn-19288.herokuapp.com/inventory`;
      fetch(url, {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(res=> res.json())
    .then(result =>{
        console.log(result);
        toast('Successfully Added')
    } )
};

  return (
    <div className='addItem w-50 mx-auto'>
        <h3 className='text-center text-primary mb-2'>Add a new Inventory</h3>
        <form className='d-flex flex-column' onSubmit={handleSubmit(onSubmit)}>
      <input className='mb-2' placeholder='ImgUrl' {...register("img")} />
      <input className='mb-2' placeholder='Name' {...register("name")} />
      <input className='mb-2' placeholder={user?.email}  readOnly {...register("email")} />
      <textarea className='mb-2' placeholder='Description' {...register("description")} />
      <input className='mb-2' placeholder='Price' type="number" {...register("price")} />
      <input className='mb-2' placeholder='Quantity' type="number" {...register("quantity")} />
      <input className='mb-2' placeholder='Supplier' {...register("supplier")} />
      <input className='btn' type="submit" value='Add Inventory' />
    </form>
    </div>
  );
};

export default AddInventory;
