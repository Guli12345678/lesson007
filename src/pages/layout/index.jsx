import React from "react";
import Header from "../../components/header/Header";
import { Outlet } from "react-router-dom";
import Footer from "../../components/footer/Footer";

const MainLayout = () => {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-slate-200">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default MainLayout;
