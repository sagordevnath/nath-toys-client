import React from "react";
import { useNavigate } from "react-router-dom";
import useInventories from "../../../hooks/useInventories";
import "./ManageInventories.css";

const ManageInventories = () => {
  const [inventories, setInventories] = useInventories();
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate("/addInventory");
  };

  // handle delete inventory
  const handleDelete = (id) => {
    const proceed = window.confirm(`Are you sure you want to delete?`);
    if (proceed) {
      const url = `https://quiet-dawn-19288.herokuapp.com/inventory/${id}`;

      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          const remaining = inventories.filter((it) => it._id !== id);
          setInventories(remaining);
        });
    }
  };

  return (
    <div>
      <h2 className='text-center text-primary my-4'>Manage Inventories</h2>
      <div className="inventories-container">      
        {inventories.map((inventory) => (
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
                    className="btn btn-outline-danger button mb-0 mr-0"
                  >
                    DELETE
                  </button>
            </div>
            </div>
          </div>
        ))}
      </div>
      <button
        onClick={handleNavigate}
        type="button"
        className="btn btn-outline-success my-4 w-50 mx-auto"
      >
        Create Items
      </button>
    </div>
  );
};

export default ManageInventories;
