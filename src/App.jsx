import GaleriaRyM from "./components/GaleriaRyM";
import InfoPeter from "./components/InfoPeter";
import NavBar from "./components/NavBar";
import Progress from "./components/Progress";
import StackingCardsApp from "./components/StackingCards/StackingCardsApp";
import StackingCardsV2 from "./components/StackingCardsV2";
import GlobalStyle from "./style/reset";

const App = () => {
  return (
    <>
      <GlobalStyle />
      <NavBar />
      <Progress />
      <InfoPeter />
      <GaleriaRyM />
      <StackingCardsV2 />
      <StackingCardsApp />
    </>
  );
};

export default App;
