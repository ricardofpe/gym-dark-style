import NavBar from "./components/NavBar/NavBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Shop from "./pages/Shop/Shop";
import ShopCategory from "./pages/ShopCategory/ShopCategory";
import Product from "./pages/Product/Product";
import Cart from "./pages/Cart/Cart";
import LoginSignup from "./pages/LoginSignup/LoginSignup";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Shop />} />
          <Route
            path="/compression"
            element={<ShopCategory category="compression" />}
          />
          <Route
            path="/oversized"
            element={<ShopCategory category="oversized" />}
          />
          <Route
            path="/tank-top"
            element={<ShopCategory category="tank-top" />}
          />
          <Route path="/shorts" element={<ShopCategory category="shorts" />} />
          <Route path="/pants" element={<ShopCategory category="pants" />} />
          <Route path="/product" element={<Product />}>
            <Route path=":productId" element={<Product />} />
          </Route>
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<LoginSignup />} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  );
}

export default App;
