import styled from "styled-components";
import {
  FaHome,
  FaInfoCircle,
  FaUtensils,
  FaPhoneAlt,
  FaFacebook,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {

  return (
    <FooterContainer>
      <FooterContent>
        <Section>
          <FaHome />
          <FooterLink to="/">Home</FooterLink>
        </Section>
        <Section>
          <FaInfoCircle />
          <FooterLink to="/aboutus">AboutUs</FooterLink>
        </Section>
        <Section>
          <FaUtensils />
          <FooterLink to="/recipes">Recipes</FooterLink>
        </Section>
        <Section>
          <FaPhoneAlt />
          <FooterLink to="/contacts">Contacts</FooterLink>
        </Section>
        <SocialMedia>
          <Icon>
            <FaFacebook />
          </Icon>
          <Icon>
            <FaTwitter />
          </Icon>
          <Icon>
            <FaInstagram />
          </Icon>
        </SocialMedia>
      </FooterContent>
      <AuthorInfo>All right reserved © 2024</AuthorInfo>
    </FooterContainer>
  );
};

export default Footer;

const FooterContainer = styled.footer`
  background-color: #333;
  color: #fff;
  padding: 10px;
`;

const FooterContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap; 

  @media (max-width: 768px) {
    flex-direction: column; 
    align-items: center; 
  }
`;

const Section = styled.div`
  display: flex;
  align-items: center;
  margin: 10px 0; 

  @media (max-width: 768px) {
    justify-content: center; 
  }
`;

const FooterLink = styled(Link)`
  font-family: cursive;
  margin-left: 10px;
  font-size: 24px;
  color: white;
  text-decoration: none;
  cursor: pointer;

  @media (max-width: 768px) {
    font-size: 20px; 
  }
`;

const SocialMedia = styled.div`
  display: flex;
  align-items: center;
  margin: 10px 0; 

  @media (max-width: 768px) {
    justify-content: center;
  }
`;

const Icon = styled(Link)`
  color: #fff;
  font-size: 24px;
  margin-right: 10px;
  transition: color 0.3s ease;

  &:hover {
    color: #ffd700;
  }

  @media (max-width: 768px) {
    font-size: 20px; 
    margin-right: 5px; 
  }
`;

const AuthorInfo = styled.div`
  margin-top: 10px;
  padding-top: 8px;
  display: flex;
  justify-content: center;
  border-top: 1px solid white;
  font-family: cursive;
  font-size: 24px;

  @media (max-width: 768px) {
    font-size: 20px; 
`;