import GaleriaRyM from "./components/GaleriaRyM";
import InfoPeter from "./components/InfoPeter";
import NavBar from "./components/NavBar";
import Progress from "./components/Progress";
import GlobalStyle from "./style/reset";

const App = () => {
  return (
    <>
      <GlobalStyle />
      <NavBar />
      <Progress />
      <InfoPeter />
      <GaleriaRyM />
    </>
  );
};

export default App;
