import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Componants/Navbar";
import Shop from "./Componants/Shop";
import Home from "./Componants/Home";
import Cart from "./Componants/Cart";
import { CartProvider } from "./context/CartContext";

function App() {
  return (
      <CartProvider>
        <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/shop" element={<Shop />} />
        </Routes>
      </BrowserRouter>
      </CartProvider>
  );
}

export default App;

