import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Cart from "./pages/cart/Cart";
import Favorites from "./pages/favorites/Favorites";
import Account from "./pages/AuthenticatedPages/account/Account";
import Layout from "./components/Layout"
import Login from "./pages/login/Login";
import Private from "./components/Routes/Private";
import AdminDashboard from "./pages/admin/adminDashboard/AdminDashboard";
import AdminRoute from "./components/Routes/AdminRoute";
import UserProfile from "./components/userDashboard/UserProfile";
import UserWishlist from "./components/userDashboard/UserWishlist"
import UserCart from "./components/userDashboard/UserCart"
import UserChangePass from "./components/userDashboard/UserChangePass"
import UserOrders from "./components/userDashboard/UserOrders"
import UserAddress from "./components/userDashboard/UserAddress";


function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/favorites" element={<Favorites />} />

        <Route path="/account" element={<Private />}>
          <Route path="" element={<Account />}>
            <Route path="" element={<UserProfile />} />
            <Route path="address" element={<UserAddress />} />
            <Route path="orders" element={<UserOrders />} />
            <Route path="wishlist" element={<UserWishlist />} />
            <Route path="cart" element={<UserCart />} />
            <Route path="change-password" element={<UserChangePass />} />
          </Route>
        </Route>

        <Route path="/admin" element={<AdminRoute />}>
          <Route path="" element={<AdminDashboard />} >
            
          </Route>
        </Route>
        <Route path="/login" element={<Login />} />
      </Routes>
    </Layout>
  );
}

export default App;
