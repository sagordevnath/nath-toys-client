import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import "./UpdateInventory.css";

const UpdateInventory = () => {
  const { id } = useParams();

  const [inventory, setInventory] = useState({});

  const { _id, img, name, description, price, quantity, supplier } = inventory;

  useEffect(() => {
    const url = `https://quiet-dawn-19288.herokuapp.com/inventory/${id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setInventory(data));
  }, [inventory]);

  // quantity decrease by one when clicked
  const decreaseQuantity = () => {    
    const oldNumber = parseInt(quantity);
    const newNumber = oldNumber - 1;
    const updatedQuantity = { newNumber }
    const url = `https://quiet-dawn-19288.herokuapp.com/inventory/${id}`;
    fetch(url, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedQuantity),
    })
      .then((res) => res.json())
      .then((data) => setInventory(data));
  };

  // quantity increase by input field value one when clicked
  const increaseQuantity = (event) => {
    event.preventDefault();
    const number = parseInt(event.target.quantity.value);
    const oldNumber = parseInt(quantity)    
    const newNumber = oldNumber + number;
    const updatedQuantity = { newNumber };
    console.log(updatedQuantity)

    const url = `https://quiet-dawn-19288.herokuapp.com/inventory/${id}`;
    fetch(url, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedQuantity),
    })
      .then((res) => res.json())
      .then((data) => {
        event.target.reset();
        toast('Quantity added Successfully!!')
      });
  }

    // const newQuantity = event.target.quantity.value;
    // // console.log(newQuantity);
    // const updatedQuantity = parseInt(newQuantity) + parseInt(quantity);
    // console.log(updatedQuantity);
    // const url = `https://quiet-dawn-19288.herokuapp.com/inventory/${id}`;
    // fetch(url, {
    //   method: "PUT",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify({
    //     quantity: updatedQuantity,
    //   }),
    // })
    //   .then((res) => res.json())
    //   .then((data) => {
    //     console.log(data);
    //     toast(`${data.name} quantity updated to ${updatedQuantity}`);
    //   });
  // };

  const navigate = useNavigate();
  const handleManageInventories = () => {
    navigate("/manageInventories");
  };

  return (    
      <div className='container inventory-container'>
        <div className="card mb-3 w-75  info-card" >
  <div className="row g-0">
    <div className="col-md-4">
      <img width='100%' src={img} className="img-fluid rounded-start" alt="..." />
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">{description}</p>
        <ul className="list-group list-group-flush">
                <li className="list-group-item">Price: {price}</li>
                <li className="list-group-item">Quantity: {quantity}</li>
                <li className="list-group-item">Supplier: {supplier}</li>
              </ul>

              <div className="card-body">
              <button
                onClick={decreaseQuantity}
                className="btn btn-outline-success w-25 mx-auto"
              >
                Delivered
              </button>
            </div>
      </div>
    </div>
  </div>
  <button as={Link}
        onClick={handleManageInventories}
        className="btn btn-outline-success my-4 w-50 mx-auto"
      >
        Manage Inventories
      </button>
</div>


        <div className=' co-lg-4' id="feedback-form">
          <h5 className="header">Update quantity here</h5>
          <div>
            <form className="updateStock" onSubmit={increaseQuantity}>
              <input
                type="text"
                name="quantity"
                placeholder="New Quantity"
              ></input>
              <button className="btn btn-outline-success w-100 mx-auto" type="submit" value="">Update Quantity</button>
            </form>
          </div>
          
        </div>           
    
    
      </div>
  );
};

export default UpdateInventory;



