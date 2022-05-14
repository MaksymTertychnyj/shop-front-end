import { url } from "inspector";
import Login from "./components/login/Login";
import Providers from "./components/navigation/Providers";

const App = () => {
  return (
    <div
      style={{
        flex: 1,
        backgroundImage: `url(${require("./public/images/background.png")})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        height: window.innerHeight,
      }}
    >
      <Providers />
    </div>
  );
};

export default App;
