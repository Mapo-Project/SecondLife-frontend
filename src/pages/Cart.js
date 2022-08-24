import Navbar from "../components/Navbar";
import CartList from "../components/CartList";
import Footer from "../components/Footer";
import { Routes, Route } from "react-router-dom";

const Cart = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="cartlist" element={<CartList />} />
      </Routes>
      <Footer />
    </>
  );
};

export default Cart;
