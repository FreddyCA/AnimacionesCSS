import styled from "styled-components";

const TitleRyMStyle = styled.h1`
  color: white;
  text-align: center;
  background-color: black;
  padding: 16px;
  margin: 0;
  width: 100%;
  height: 70px;
  position: sticky;
  top: 0;
  z-index: 10;

  animation: enhance-header linear both;
  animation-timeline: scroll(root block);
  animation-range: 0 200px;

  @keyframes enhance-header {
    to {
      background-color: rgba(255, 255, 255, 0.4);
      backdrop-filter: blur(5px);
      font-size: 18px;
      color: black;
    }
  }
`;

const TitleRyM = () => {
  return <TitleRyMStyle>Galería Rick and Morti</TitleRyMStyle>;
};

export default TitleRyM;
