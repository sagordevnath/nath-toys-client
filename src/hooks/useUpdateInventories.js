import { useEffect, useState } from "react";

const useUpdateInventories = inventoryId =>{
    const [inventory, setInventory] = useState({});

    useEffect( () =>{
        const url = `http://localhost:5000/inventory/${inventoryId}`;
        console.log(url);
        fetch(url)
        .then(res=> res.json())
        .then(data => setInventory(data));

    }, [inventoryId]);
    return [inventory     ]
}

export default useUpdateInventories;