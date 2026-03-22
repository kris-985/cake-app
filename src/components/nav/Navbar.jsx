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
  background-color: #FFFFFF;
  border-bottom: 1px solid rgba(45, 42, 38, 0.08);
  padding: 0 60px;
  height: 80px;
  position: sticky;
  top: 0;
  z-index: 1000;
  backdrop-filter: blur(20px);
  background-color: rgba(255, 255, 255, 0.95);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);

  @media (max-width: 1200px) {
    padding: 0 40px;
    height: 76px;
  }

  @media (max-width: 992px) {
    padding: 0 30px;
    height: 72px;
  }

  @media (max-width: 768px) {
    padding: 0 24px;
    height: 68px;
  }

  @media (max-width: 480px) {
    flex-direction: column;
    height: ${({ extendBar }) => (extendBar ? "auto" : "64px")};
    padding: ${({ extendBar }) => (extendBar ? "16px 20px 24px" : "0 20px")};
    justify-content: ${({ extendBar }) => (extendBar ? "flex-start" : "center")};
    align-items: ${({ extendBar }) => (extendBar ? "stretch" : "center")};
    gap: ${({ extendBar }) => (extendBar ? "16px" : "0")};
  }
`;

const LogoImage = styled.img`
  width: 56px;
  height: 56px;
  cursor: pointer;
  object-fit: contain;
  transition: transform 0.3s ease;
  
  &:hover {
    transform: scale(1.05);
  }

  @media (max-width: 768px) {
    width: 48px;
    height: 48px;
  }

  @media (max-width: 480px) {
    display: none;
  }
`;

const NavLinks = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  @media (max-width: 480px) {
    flex-direction: column;
    width: 100%;
    display: ${({ extendBar }) => (extendBar ? "flex" : "none")};
    gap: 4px;
    background: #FAF7F2;
    border-radius: 16px;
    padding: 8px;
  }
`;

const Navlink = styled(Link)`
  text-decoration: none;
  color: #2D2A26;
  text-transform: none;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
  font-size: 15px;
  font-weight: 500;
  letter-spacing: 0.02em;
  cursor: pointer;
  padding: 10px 20px;
  border-radius: 100px;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;

  &:hover {
    background-color: #FAF7F2;
    color: #C4A265;
  }

  @media (max-width: 768px) {
    font-size: 14px;
    padding: 8px 16px;
  }

  @media (max-width: 480px) {
    width: 100%;
    text-align: center;
    padding: 14px 20px;
    border-radius: 12px;
    
    &:hover {
      background-color: #FFFFFF;
    }
  }
`;

const MenuWrapper = styled.span`
  cursor: pointer;
  display: none;
  position: relative;
  padding: 10px;
  border-radius: 12px;
  color: #2D2A26;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: #FAF7F2;
    color: #C4A265;
  }

  @media (max-width: 480px) {
    display: flex;
    align-items: center;
    justify-content: center;
    align-self: flex-end;
  }
`;
