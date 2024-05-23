import Aside from "./Aside";
import Card from "./Card";
import Header from "./Header";
import StackingCardsContain from "./StackingCardsContain";
import StackingCardsItems from "./StackingCardsItems";

const StackingCardsApp = () => {
  return (
    <StackingCardsContain>
      <Header />
      <StackingCardsItems>
        <Card idCount={1} ></Card>
        <Card idCount={2} ></Card>
        <Card idCount={3} ></Card>
        <Card idCount={4} ></Card>
      </StackingCardsItems>
      <Aside />
    </StackingCardsContain>
  );
};

export default StackingCardsApp;
