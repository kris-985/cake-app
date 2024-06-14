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
    <Wrapper extendBar={extendBar}>
      <LogoImage
        src="https://img.pikbest.com/png-images/cake-logo-vector-graphic-element_1773660.png!f305cw"
        alt=""
      />
      <MenuWrapper onClick={renderNavBar}>
        {extendBar ? <AiOutlineClose size={25} /> : <AiOutlineMenu />}
      </MenuWrapper>
      <NavLinks extendBar={extendBar}>
        <Navlink to="/">Home</Navlink>
        <Navlink to="/aboutus">About us</Navlink>
        <Navlink to="/recipes">Recipes</Navlink>
        <Navlink to="/contacts">Contacts</Navlink>
      </NavLinks>
    </Wrapper>
  );
};

export default Navbar;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: pink;
  border-bottom: 2px solid black;
  padding: 0 20px;
  height: 80px;
  position: relative;

  @media (max-width: 1200px) {
    padding: 0 15px;
    height: 70px;
  }

  @media (max-width: 992px) {
    padding: 0 10px;
    height: 60px;
  }

  @media (max-width: 768px) {
    padding: 0 5px;
    height: 50px;
  }

  @media (max-width: 480px) {
    flex-direction: column;
    height: ${({ extendBar }) => (extendBar ? "240px" : "40px")};
    ${({ extendBar }) => extendBar && "padding-top: 10px;"};
    justify-content: center;
    align-items: flex-end;
  }

  @media (max-width: 400px) {
    justify-content: center;
    align-items: flex-end;
    flex-direction: column;
    height: ${({ extendBar }) => (extendBar ? "240px" : "40px")};
    ${({ extendBar }) => extendBar && "padding-top: 10px;"};
  }
`;

const LogoImage = styled.img`
  width: 100px;
  height: 80px;
  cursor: pointer;

  @media (max-width: 1200px) {
    width: 90px;
    height: 70px;
  }

  @media (max-width: 992px) {
    width: 80px;
    height: 60px;
  }

  @media (max-width: 768px) {
    width: 70px;
    height: 50px;
  }

  @media (max-width: 480px) {
    display: none;
  }
`;

const NavLinks = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 1200px) {
    gap: 30px;
  }

  @media (max-width: 992px) {
    gap: 20px;
  }

  @media (max-width: 768px) {
    gap: 10px;
  }

  @media (max-width: 480px) {
    flex-direction: column;
    width: 100%;
    display: ${({ extendBar }) => (extendBar ? "flex" : "none")};
  }

  @media (max-width: 400px) {
    flex-direction: column;
    width: 100%;
    display: ${({ extendBar }) => (extendBar ? "flex" : "none")};
  }
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

  @media (max-width: 1200px) {
    font-size: 22px;
    margin-right: 30px;
  }

  @media (max-width: 992px) {
    font-size: 20px;
    margin-right: 20px;
  }

  @media (max-width: 768px) {
    font-size: 18px;
    margin-right: 10px;
  }

  @media (max-width: 480px) {
    margin: 10px 0;
  }

  @media (max-width: 400px) {
    margin: 10px 0;
  }
`;

const MenuWrapper = styled.span`
  cursor: pointer;
  display: none;
  position: relative;

  @media (max-width: 480px) {
    display: block;
  }

  @media (max-width: 400px) {
    display: block;
  }
`;
