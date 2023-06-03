import React from "react";
import { Route, Routes } from "react-router-dom";
import Homepage from "./Pages/Homepage";
import Product from "./Pages/Product";
import Loader from "./Component/Loader";

const LazyProduct = React.lazy(() => import("./Pages/LazyProduct.jsx"));

function App() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/product" element={<Product />} />
      <Route
        path="/lazyproduct"
        element={
          <React.Suspense fallback={<Loader />}>
            <LazyProduct />
          </React.Suspense>
        }
      />
    </Routes>
  );
}

export default App;
