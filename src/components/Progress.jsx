import styled from "styled-components";

const ProgressStyle = styled.div`
  height: 20px;
  width: 0%;
  background-color: orange;
  position: sticky;
  top: 70px;

  animation: progress-grow auto linear;
  animation-timeline: scroll(root block);

  @keyframes progress-grow {
    from {
      width: 0%;
    }
    to {
      width: 100%;
    }
  }
`;

const Progress = () => {
  return <ProgressStyle></ProgressStyle>;
};

export default Progress;
