import styled from "styled-components";

const NavBarContainStyle = styled.div`
  width: 100%;
  position: sticky;
  top: 0;
`;
const NavBarStyle = styled.div`
  height: 70px;
  background-color: green;
  z-index: 7;
`;

const NavBar = () => {
  return (
    <>
      <NavBarContainStyle>
        <NavBarStyle>NavBar</NavBarStyle>
      </NavBarContainStyle>
    </>
  );
};

export default NavBar;
