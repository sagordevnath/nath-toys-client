import { useEffect, useState } from 'react';
import Loading from '../Pages/Shared/Loading/Loading.js';

const useInventories = () => {    
    const [inventories, setInventories] = useState([]);

    useEffect(() => {
        fetch('https://quiet-dawn-19288.herokuapp.com/inventory')       

        .then(res => res.json())
        .then((data) => {
            if (!data) {
                <Loading></Loading>
            }
            setInventories(data)})
        
    },[])    
    return [inventories, setInventories];
};

export default useInventories;