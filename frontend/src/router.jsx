import { Route, Routes } from "react-router-dom";
import { Home } from "./components/Home";
import { Products } from "./components/Products";
import { SingleProduct } from "./components/Single-product";

export const AppRouter = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/product" element={<Products />} />
    <Route path="/product/:id" element={<SingleProduct />} />
  </Routes>
);
