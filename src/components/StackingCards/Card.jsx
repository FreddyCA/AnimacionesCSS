import styled, { keyframes } from "styled-components";
import PropTypes from "prop-types";

import imagenApoyo from "../../img/img-1.jpg";

const CardStyle = styled.div`
  /* className: card, id: card_# */

  position: sticky;
  top: 0;
  /* buscar el metodo de extraer los indices para multiplicar el padding */
  padding-top: ${(props) => `calc(${props.$idCount} * 18px)`};
`;

const scale = keyframes`
  to {
    transform: scale(calc(1.1 - 0.1 * var(--reverse-index)));
  }
`;

const CardContentStyle = styled.div`
  /* className: card__content*/
  box-shadow: 0 0.2em 1em rgba(0, 0, 0, 0.1), 0 1em 2em rgba(0, 0, 0, 0.1);
  background: rgb(255, 255, 255);
  color: rgb(10, 5, 7);
  border-radius: 1em;
  overflow: hidden;

  display: grid;
  grid-template-areas: "text img";
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto;

  align-items: stretch;

  transform-origin: 50% 0%;
  will-change: transform;

  --start-range: calc(var(--index0) / 4 * 100%);
  --end-range: calc((var(--index)) / 4 * 100%);
  animation: linear ${scale} forwards;
  animation-timeline: --cards-element-scrolls-in-body;
	animation-range: exit-crossing var(--start-range) exit-crossing var(--end-range);
`;

const CardTextContentStyle = styled.div`
  grid-area: text;
  width: 80%;
  place-self: center;
  text-align: left;
  display: grid;
  gap: 1em;
  place-items: start;
`;

const CardTitleStyle = styled.h2`
  font-weight: 300;
  font-size: 2.5em;
`;
const CardDescStyle = styled.p`
  font-weight: 300;
  line-height: 1.42;
`;

const CardImgContentStyle = styled.figure`
  grid-area: img;
  overflow: hidden;
`;
const CardImgStyle = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Card = ({ idCount }) => {
  const index0 = idCount - 1;
  const reverse_index = 4 - index0;
  // const reverse_index0 = reverse_index - 1;

  return (
    <CardStyle $idCount={idCount}>
      <CardContentStyle
        style={{
          "--index": idCount,
          "--index0": index0,
          "--reverse-index": reverse_index,
        }}
      >
        <CardTextContentStyle>
          <CardTitleStyle>Titulo</CardTitleStyle>
          <CardDescStyle>Descripción n1</CardDescStyle>
          <CardDescStyle>Descripción n2</CardDescStyle>
        </CardTextContentStyle>
        <CardImgContentStyle>
          <CardImgStyle src={imagenApoyo} alt="imagen de apoyo" />
        </CardImgContentStyle>
      </CardContentStyle>
    </CardStyle>
  );
};

Card.propTypes = {
  idCount: PropTypes.number,
};

export default Card;
