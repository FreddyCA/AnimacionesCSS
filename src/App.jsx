import GaleriaRyM from "./components/GaleriaRyM";
import InfoPeter from "./components/InfoPeter";
// import Progress from "./components/Progress";
import GlobalStyle from "./style/reset";

const App = () => {
  return (
    <>
      <GlobalStyle />
      {/* <Progress /> */}
      <InfoPeter />
      <GaleriaRyM />
    </>
  );
};

export default App;
