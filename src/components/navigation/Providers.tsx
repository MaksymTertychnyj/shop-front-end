import React from "react";
import { Routes } from "react-router-dom";
import LoginProvider from "../login-provider/LoginProvider";
import AppCard from "./AppCard/AppCard";

const Providers = () => {
  return (
    <LoginProvider>
      <AppCard />
    </LoginProvider>
  );
};

export default Providers;
