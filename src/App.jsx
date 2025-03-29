import React, { lazy, Suspense, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Card from "./components/Card";
import Layout from "./components/Layout";
import Cart from "./components/Cart";
import Loader from "./components/utils/Loader";
const LazyLoadOrders = lazy(() => import("./components/Orders"));

function App() {
  const [data, setData] = useState([]);
  return (
    <>
      <Router basename="/">
        <Routes>
          <Route path="/" element={<Layout setData={(values)=>setData(values)} />}>
            <Route path="/"  element={<Card data={data} />} />
            <Route
              path="/orders"
              element={
                <Suspense fallback={<Loader />}>
                  <LazyLoadOrders />
                </Suspense>
              }
            />
            <Route path="/cart" element={<Cart />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
