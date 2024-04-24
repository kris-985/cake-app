import { Link } from "react-router-dom";
import styled from "styled-components";
import { AiOutlineMenu } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";
import { useState } from "react";

const Navbar = () => {
  const [extendBar, setExtendBar] = useState(false);
  const renderNavBar = () => {
    setExtendBar(!extendBar);
  };

  return (
    <Wraper extendBar={extendBar}>
      <LogoImage
        src="https://img.pikbest.com/png-images/cake-logo-vector-graphic-element_1773660.png!f305cw"
        alt=""
      />
      <Navlink to="/">Home</Navlink>

      <Navlink to="/aboutus">About us</Navlink>

      <Navlink to="/recipes">Recipes</Navlink>

      <Navlink to="/contacts">Contacts</Navlink>
      <MenuWrapper onClick={renderNavBar}>
        {extendBar ? <AiOutlineClose /> : <AiOutlineMenu />}
      </MenuWrapper>
    </Wraper>
  );
};

export default Navbar;

const Wraper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: pink;
  border-bottom: 2px solid black;
  height: ${({ extendBar }) => (extendBar ? "120px" : "80px")};
`;

const LogoImage = styled.img`
  margin-left: 50px;
  width: 100px;
  height: 80px;
  cursor: pointer;
`;

const Navlink = styled(Link)`
  text-decoration: none;
  color: black;
  text-transform: uppercase;
  font-family: cursive;
  font-size: 25px;
  cursor: pointer;
  margin-right: 40px;
  &:hover {
    background-color: pink;
    color: white;
  }
  @media only screen and (max-width: 400px) {
    display: none;
  }
`;

const MenuWrapper = styled.span`
  @media only screen and (min-width: 400px) {
    display: none;
  }
`;
