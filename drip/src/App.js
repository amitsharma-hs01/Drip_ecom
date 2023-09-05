import { Routes,Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Cart from "./pages/cart/Cart";
import Favorites from "./pages/favorites/Favorites";
import Account from "./pages/AuthenticatedPages/account/Account";
import Layout from "./components/Layout"
import Login from "./pages/login/Login";
import Private from "./components/Routes/Private";
import AdminDashboard from "./pages/admin/adminDashboard/AdminDashboard";
import AdminRoute from "./components/Routes/AdminRoute";

function App() {
  return ( 
    <Layout>
     
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/favorites" element={<Favorites/>}/>

        <Route path="/account" element={<Private/>}>
           <Route path="" element={<Account/>}/>
        </Route>
        
        <Route path="/admin" element={<AdminRoute/>}>
          <Route path="admin-dashboard" element={<AdminDashboard/>} />
          </Route>

        <Route path="/login" element={<Login/>} />
      </Routes>
    </Layout>
  );
}

export default App;
