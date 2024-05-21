import { useEffect, useState } from "react";
import PhotoRyM from "./PhotoRyM";
import styled from "styled-components";
import TitleRyM from "./TitleRyM";

const GaleriaRyMStyle = styled.section`
  columns: 2;
  padding: 16px 32px;
  column-gap: 32px;
`;

const GaleriaRyMContainStyle = styled.div`
  background-color: black;
  
`;

const GaleriaRyM = () => {
  const [info, setInfo] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://rickandmortyapi.com/api/character"
        );
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await response.json();
        setInfo(data.results);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  console.log(info);
  return (
    <GaleriaRyMContainStyle>
      <TitleRyM />
      <GaleriaRyMStyle>
        {info &&
          info.map((item) => (
            <PhotoRyM
              key={item.name}
              url={item.image}
              alt={item.name}
            ></PhotoRyM>
          ))}
      </GaleriaRyMStyle>
    </GaleriaRyMContainStyle>
  );
};

export default GaleriaRyM;
