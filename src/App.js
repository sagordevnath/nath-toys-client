import { Route, Routes } from 'react-router-dom';
import './App.css';
import Blogs from './Pages/Blogs/Blogs';
import AddInventory from './Pages/Home/AddInventory/AddInventory';
import Home from './Pages/Home/Home/Home';
import Inventories from './Pages/Home/Inventories/Inventories';
import ManageInventories from './Pages/Home/ManageInventories/ManageInventories';
import UpdateInventory from './Pages/Home/UpdateInventory/UpdateInventory';
import Login from './Pages/Login/Login/Login';
import Register from './Pages/Login/Register/Register';
import RequireAuth from './Pages/Login/RequireAuth/RequireAuth';
import Footer from './Pages/Shared/Footer/Footer';
import Header from './Pages/Shared/Header/Header';
import NotFound from './Pages/Shared/NotFound/NotFound';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/inventories" element={<Inventories></Inventories>}></Route>
        <Route path='/manageInventories' element={<ManageInventories></ManageInventories>}></Route>
        <Route path ='/addInventory' element={<AddInventory></AddInventory>}></Route>
        <Route path="/inventory/:id" element={
          <RequireAuth>
            <UpdateInventory></UpdateInventory>
          </RequireAuth>
        }></Route>
        <Route path="/blogs" element={<Blogs />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
