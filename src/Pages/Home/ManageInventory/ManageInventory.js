// import React, { useState } from "react";
// import { Link } from "react-router-dom";
import useInventories from "../../../hooks/useInventories";

const ManageInventory = ({ inventory }) => {
  const { img, name, price, quantity, sell, supplier } = inventory;

  // const [items, setItems] = useState([]);
  const [inventories, setInventories] = useInventories();

  // const navigate = useNavigate();

  // handle delete inventory
  const handleDelete = (id) => {
    const proceed = window.confirm(`Are you sure you want to delete ${name}?`);
    if (proceed) {
      const url = `http://localhost:5000/inventory/${id}`;

      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          const remaining = inventories.filter((item) => item._id !== id);
          setInventories(remaining);
        });
    }
  };

  return (
    <div className="container">
      <div className="card lg-3">
  <div className="row full-card g-0">
    <div className=" image col-lg-6">
      <img width='100%' src={img} className=" img-fluid rounded-start" alt="..." />
      
            <button onClick={() => handleDelete(inventory._id)} type="button" className="btn btn-outline-danger">DELETE</button>
    </div>
    <div className="col-lg-6">
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <ul>
        <li className="card-text">Price: {price}</li>
        <li className="card-text">Quantity: {quantity}</li>
        <li className="card-text">Sell: {sell}</li>
        <li className="card-text">Supplier: {supplier}</li>
          </ul>    
      </div>
    </div>
  </div>
</div>

    </div>
  );
};

export default ManageInventory;


