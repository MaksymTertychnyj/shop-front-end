import UserAuthenticateResponse from "../../models/user/UserAuthenticateResponse";

const AuthManager = {
  signInAsync: async (response: UserAuthenticateResponse) => {
    let user = {
      firstName: response?.user?.firstName,
      lastName: response?.user?.lastName,
      email: response?.user?.email,
      login: response?.user?.login,
      password: response?.user?.password,
      role: response?.user?.role,
      token: response?.token,
    };
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
