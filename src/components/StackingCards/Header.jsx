import styled from "styled-components";

const HeaderStyle = styled.header`
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const HeaderStyleItemsStyle = styled.div`
background-color: skyblue;
`

const Header = () => {
  return <HeaderStyle>
    <HeaderStyleItemsStyle>
        <h1>hola</h1>
        <p>como estas</p>
    </HeaderStyleItemsStyle>
  </HeaderStyle>;
};

export default Header;
