import React from "react";
import UserAuthenticateResponse from "../../models/user/UserAuthenticateResponse";

const AuthManager = {
  signInAsync: async (user: UserAuthenticateResponse) => {
    sessionStorage.setItem("user", JSON.stringify(user));
  },

  signOutAsync: async () => {
    sessionStorage.removeItem("user");
  },

  getUser: async () => {
    return sessionStorage.getItem("user");
  },
};

export default AuthManager;
