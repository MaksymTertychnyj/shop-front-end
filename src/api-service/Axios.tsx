import axios, { AxiosError } from "axios";
import AuthManager from "../components/auth/AuthManager";
import { StatusCodes } from "../constants/StatusCodes";
import UserAuthenticateResponse from "../models/user/UserAuthenticateResponse";

const Axios = axios.create({ timeout: 20000 });

Axios.interceptors.request.use(
  async (req: any) => {
    let user: UserAuthenticateResponse;
    await AuthManager.getUser().then((resp) => {
      if (resp) {
        user = JSON.parse(resp);
        req.headers.Authorization = "Bearer " + user?.token;
      }
    });

    return req;
  },

  async (error: any) => {
    return Promise.reject(error);
  }
);

Axios.interceptors.response.use(
  async (response) => {
    return response;
  },

  async (error?: AxiosError) => {
    if (!axios.isCancel(error)) {
      if (axios.isAxiosError(error)) {
        error.response?.status === StatusCodes.UNAUTHORIZED &&
          (async () => {
            await AuthManager.signOutAsync();
          })().then(() => {
            console.log("FATAL ERROR !!!");
          });
      }
    }

    return Promise.reject(error);
  }
);

export default Axios;
