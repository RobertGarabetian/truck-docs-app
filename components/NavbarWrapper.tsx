// /components/NavbarWrapper.tsx

"use client";

import React from "react";
import { usePathname } from "next/navigation";
import Navbar from "./Navbar";

const NavbarWrapper: React.FC = () => {
  const pathname = usePathname();

  // Define routes where the navbar should not appear
  const noNavbarRoutes = ["/dashboard"];

  // Determine if the current route is in the list
  const showNavbar = !noNavbarRoutes.some((route) =>
    pathname.startsWith(route)
  );

  return showNavbar ? <Navbar /> : null;
};

export default NavbarWrapper;
