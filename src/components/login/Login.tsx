import LoginService from "../../api-service/login-service/LoginService";
import AuthManager from "../auth/AuthManager";

const Login = () => {
  return (
    <div>
      <div>
        <button
          style={{ width: 80, height: 20, marginTop: 10 }}
          onClick={() =>
            LoginService.loginUser({ Login: "maxim", Password: "12345" }).then((resp) => {
              AuthManager.signInAsync(resp.data);
              console.log(resp.data);
            })
          }
        >
          LogIn
        </button>
      </div>
      <div>
        <button
          style={{ width: 80, height: 20, marginTop: 10 }}
          onClick={() => LoginService.getUser().then((resp) => console.log(resp.data))}
        >
          getStorage
        </button>
      </div>
      <div>
        <button
          style={{ width: 80, height: 20, marginTop: 10 }}
          onClick={() => AuthManager.signOutAsync()}
        >
          LogOut
        </button>
      </div>
    </div>
  );
};

export default Login;
