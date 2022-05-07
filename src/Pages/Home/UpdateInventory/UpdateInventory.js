import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import "./UpdateInventory.css";

const UpdateInventory = () => {
  const { id } = useParams();

  const [inventory, setInventory] = useState({});

  const { img, name, description, price, quantity, supplier } = inventory;

  useEffect(() => {
    const url = `http://localhost:5000/inventory/${id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setInventory(data));
  }, [id]);

  // quantity decrease by one when clicked
  const decreaseQuantity = () => {
    const url = `http://localhost:5000/inventory/${id}`;
    fetch(url, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        quantity: quantity - 1,
      }),
    })
      .then((res) => res.json())
      .then((data) => setInventory(data));
  };

  // quantity increase by input field value one when clicked
  const increaseQuantity = (event) => {
    const newQuantity = event.target.quantity.value;
    console.log(newQuantity);
    const updatedQuantity = parseInt(newQuantity) + parseInt(quantity);
    const url = `http://localhost:5000/inventory/${id}`;
    fetch(url, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        quantity: updatedQuantity,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        alert(`${data.name} quantity updated to ${updatedQuantity}`);
      });
  };

  const navigate = useNavigate();
  const handleManageInventories = () => {
    navigate("/manageInventories");
  };

  return (    
      <div>
        <div className="manageInventories row">
        <div className="updateInventory w-25 mx-auto co-lg-8">
          <div className="card d-flex flex-column">
            <img width="20px" src={img} className="card-img-top" alt="..." />
            <div>
              <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <p className="card-text">{description}</p>
              </div>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Price: {price}</li>
                <li className="list-group-item">Quantity: {quantity}</li>
                <li className="list-group-item">Supplier: {supplier}</li>
              </ul>
            </div>
            <div className="card-body">
              <button
                onClick={decreaseQuantity}
                className="btn btn-outline-success w-100 mx-auto"
              >
                DELIVERED
              </button>
            </div>
            </div> 
          </div>        
        <div className=' co-lg-4' id="feedback-form">
          <h4 className="header">Update quantity here</h4>
          <div>
            <form className="updateStock" onSubmit={increaseQuantity}>
              <input
                type="text"
                name="quantity"
                placeholder="New Quantity"
              ></input>
              <input as={Link} type="submit" value="Update Quantity" />
            </form>
          </div>
        </div>           
    </div>
    <button as={Link}
        onClick={handleManageInventories}
        className="btn btn-outline-success w-50 mx-auto"
      >
        Manage Inventories
      </button>
      </div>
  );
};

export default UpdateInventory;



