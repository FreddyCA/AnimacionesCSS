import PropTypes from "prop-types";
import styled from "styled-components";

const StackingCardsBodyStyle = styled.div`
  width: 100%;
  background: rgb(58 29 43);
  color: rgb(255, 255, 255);
  /* definimos un tamano de letra adecuado responsive para todo el documento */
  font-size: calc(1em + 0.5vw);
`;
const StackingCardsContainStyle = styled.div`
  max-width: 990px;
  margin: 0 auto;
`;

const StackingCardsContain = ({ children }) => {
  return (
    <StackingCardsBodyStyle>
      <StackingCardsContainStyle>{children}</StackingCardsContainStyle>
    </StackingCardsBodyStyle>
  );
};

StackingCardsContain.propTypes = {
  children: PropTypes.node.isRequired,
};

export default StackingCardsContain;
