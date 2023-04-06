import { ComponentProps, FC } from "react";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { Outlet } from "react-router-dom";

export interface LayoutProps extends ComponentProps<"div"> {};

export const Layouts  = ({ ...props }) => {
  return (
    <div>
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  )
};