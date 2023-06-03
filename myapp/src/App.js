import React from "react";
import { Route, Routes } from "react-router-dom";
import Homepage from "./Pages/Homepage";
import Product from "./Pages/Product";
import LazyProduct from "./Pages/LazyProduct.jsx";

//const LazyProduct = React.lazy(() => import("./Pages/LazyProduct.jsx"));

function App() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/product" element={<Product />} />
      <Route path="/lazyproduct" element={<LazyProduct />} />
    </Routes>
  );
}

export default App;
