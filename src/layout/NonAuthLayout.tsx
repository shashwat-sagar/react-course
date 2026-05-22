import React from "react";
import { Footer, Header } from "../components";
import { Outlet } from "react-router-dom";

const NonAuthLayout = () => {
  return (
    <>
      <Header />
      <main className="min-h-[80vh]">
          <Outlet />
      </main>
      
      <Footer />
    </>
  );
};

export default NonAuthLayout;
