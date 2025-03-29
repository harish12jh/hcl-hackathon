import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Card from "./components/Card";
import Layout from "./components/Layout";
import Cart from "./components/Cart";
import Loader from "./components/utils/Loader";
const LazyLoadOrders = lazy(() => import("./components/Orders"));

function App() {
  return (
    <>
      <Router basename="/">
        <Routes>
          <Route path="/" Component={Layout}>
            <Route index element={<Card />} />
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
      {/* <NavBar />
      <Footer /> */}
    </>
  );
}

export default App;
