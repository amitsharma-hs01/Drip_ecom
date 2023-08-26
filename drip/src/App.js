import { Routes,Route } from "react-router-dom";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Favorites from "./pages/Favorites";
import Account from "./pages/Account";
import Layout from "./components/Layout"


function App() {
  return (
    <Layout>
     
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/favorites" element={<Favorites/>}/>
        <Route path="/account" element={<Account/>}/>
      </Routes>
    </Layout>
  );
}

export default App;
