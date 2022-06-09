import User from "./User";

type UserAuthenticateResponse = null | {
  user: User;
  token: string;
};

export default UserAuthenticateResponse;
