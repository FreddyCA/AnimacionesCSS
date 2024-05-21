import styled from "styled-components";

const PhotoRyMTargetStyle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 32px;
  animation: reveal linear both;
  animation-timeline: view();
  animation-range: entry 10% cover 30%;


  @keyframes reveal {
    from {
      opacity: 0;
      translate: 0 100px;
      scale: .5;
    }
    to {
      opacity: 1;
      translate: 0 0;
      scale: 1;
    }
  }
`;
const PhotoRyMStyle = styled.img`
  border-radius: 4px;
  width: 100%;
  height: auto;
`;

const PhotoRyM = ({ url, alt }) => {
  return (
    <PhotoRyMTargetStyle>
      <PhotoRyMStyle src={url} alt={alt}></PhotoRyMStyle>
      <h4>{alt}</h4>
    </PhotoRyMTargetStyle>
  );
};

export default PhotoRyM;
