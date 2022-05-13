import ApiService from "../ApiService";
import APIRoutes from "../APIRoutes";
import UserAuthenticateResponse from "../../models/user/UserAuthenticateResponse";
import UserAuthenticateRequest from "../../models/user/UserAuthenticateRequest";
import User from "../../models/user/User";

const route = APIRoutes.getLoginAuthenticateUrl();

const LoginService = {
  loginUser: async (userLoginRequest: UserAuthenticateRequest) =>
    ApiService.post<UserAuthenticateResponse>(route + "authenticate", userLoginRequest),

  registerUser: async (user: User) =>
    ApiService.post<UserAuthenticateResponse>(route + "register", user),

  getUser: async () => ApiService.get<UserAuthenticateResponse>(route + "getUser"),
};

export default LoginService;
