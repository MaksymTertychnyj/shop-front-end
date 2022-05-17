import { useContext } from "react";
import LoginService from "../../api-service/login-service/LoginService";
import AuthManager from "../auth/AuthManager";
import LoginProviderContext from "../login-provider/LoginProviderContext";

const Login = () => {
  const { setIsLoged } = useContext(LoginProviderContext);
  return (
    <div>
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
          onClick={() => {
            setIsLoged(false);
          }}
        >
          LogOut
        </button>
      </div>
    </div>
  );
};

export default Login;
