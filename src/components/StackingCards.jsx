import { useEffect, useRef } from "react";
import "../style/stachingCards.css";

const StackingCards = () => {
  const cardsScrollRef = useRef(null);
  const headerHeigth = 70;
  useEffect(() => {
    if (cardsScrollRef.current) {
      const allCards = cardsScrollRef.current.querySelectorAll(
        ".cards-scroll .card"
      );
      if (allCards.length) {
        allCards.forEach((card, i) => {
          const incValue = i * headerHeigth;
          card.setAttribute("style", `top: ${incValue}px`);
        });
      }
    }
  }, []);

  return (
    <>
      <h1>Start Cards</h1>

      {/* cards scroll section */}
      <section className="cards-scroll" ref={cardsScrollRef}>
        <div className="card">
          <div className="card__header">
            <h3>Web Development</h3>
          </div>
        </div>

        <div className="card">
          <div className="card__header">
            <h3>Software Development</h3>
          </div>
        </div>

        <div className="card">
          <div className="card__header">
            <h3>Digital Marketing</h3>
          </div>
        </div>

        <div className="card">
          <div className="card__header">
            <h3>Events Planing</h3>
          </div>
        </div>
      </section>

      <h2>End Cards</h2>
    </>
  );
};

export default StackingCards;
