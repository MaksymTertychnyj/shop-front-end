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
        width: window.innerWidth,
      }}
    >
      <Providers />
    </div>
  );
};

export default App;
