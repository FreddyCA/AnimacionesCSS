import GaleriaRyM from "./components/GaleriaRyM";
import InfoPeter from "./components/InfoPeter";
import NavBar from "./components/NavBar";
import Progress from "./components/Progress";
import StackingCards from "./components/StackingCards";
import StackingCardsV2 from "./components/StackingCardsV2";
import GlobalStyle from "./style/reset";

const App = () => {
  return (
    <>
      <GlobalStyle />
      {/* <NavBar /> */}
      {/* <Progress /> */}
      {/* <InfoPeter /> */}
      {/* <GaleriaRyM /> */}
      {/* <StackingCards /> */}
      <StackingCardsV2 />
    </>
  );
};

export default App;
