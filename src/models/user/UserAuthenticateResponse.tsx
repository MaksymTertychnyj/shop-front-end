type UserAuthenticateResponse = null | {
  firstName: string;
  lastName: string;
  email: string;
  login: string;
  password: string;
  role: string;
  token: string;
};

export default UserAuthenticateResponse;
