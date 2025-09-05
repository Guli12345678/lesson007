import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./home";
import Login from "./login";
import MainLayout from "./layout";
import User from "./users";
import Product from "./products";
import ProductDetail from "./product-detail";
import UserDetail from "./user-detail";

const AppRouter = () => {
  return (
    <React.Fragment>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/users" element={<User />} />
          <Route path="/user/:id" element={<UserDetail />} />
          <Route path="/products" element={<Product />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/*" element={<div>404</div>} />
        </Route>

        <Route path="/login" element={<Login />} />
      </Routes>
    </React.Fragment>
  );
};

export default AppRouter;
