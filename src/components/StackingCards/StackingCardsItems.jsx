import styled from "styled-components";
import PropTypes from "prop-types";

const StackingCardsItemsContainStyled = styled.main`
  width: 100%;
`;
const StackingCardsItemsStyled = styled.div`
  /* id: cards */
  /* para aumentar el padding bottom si se sobrepasa la animacion */
  margin-bottom: 4rem;
  padding: 0 1rem calc(4 * 1em);

  display: grid;
	grid-template-columns: 1fr;
  grid-template-rows: repeat(4, 40vw);
	gap: 4em;
  view-timeline-name: --cards-element-scrolls-in-body
`;

const StackingCardsItems = ({ children }) => {
  return (
    <StackingCardsItemsContainStyled>
      <StackingCardsItemsStyled >{children}</StackingCardsItemsStyled>
    </StackingCardsItemsContainStyled>
  );
};

StackingCardsItems.propTypes = {
  children: PropTypes.node.isRequired,
};

export default StackingCardsItems;
