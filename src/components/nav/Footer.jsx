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
      <AuthorInfo>All rights reserved © 2026</AuthorInfo>
    </FooterContainer>
  );
};

export default Footer;

const FooterContainer = styled.footer`
  background-color: #2D2A26;
  color: #FFFFFF;
  padding: 40px 60px 24px;
  
  @media (max-width: 768px) {
    padding: 32px 24px 20px;
  }
`;

const FooterContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 12px;
  max-width: 1200px;
  margin: 0 auto;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    gap: 8px;
  }
`;

const Section = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 12px 20px;
  border-radius: 100px;
  transition: all 0.3s ease;
  color: rgba(255, 255, 255, 0.7);
  
  &:hover {
    background-color: rgba(255, 255, 255, 0.08);
    color: #C4A265;
  }

  @media (max-width: 768px) {
    justify-content: center;
    padding: 10px 16px;
  }
`;

const FooterLink = styled(Link)`
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
  font-size: 14px;
  font-weight: 500;
  color: inherit;
  text-decoration: none;
  cursor: pointer;
  letter-spacing: 0.02em;

  @media (max-width: 768px) {
    font-size: 13px;
  }
`;

const SocialMedia = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-left: 20px;
  padding-left: 20px;
  border-left: 1px solid rgba(255, 255, 255, 0.15);

  @media (max-width: 768px) {
    justify-content: center;
    margin-left: 0;
    padding-left: 0;
    border-left: none;
    margin-top: 16px;
    padding-top: 16px;
    border-top: 1px solid rgba(255, 255, 255, 0.15);
    width: 100%;
  }
`;

const Icon = styled(Link)`
  color: rgba(255, 255, 255, 0.6);
  font-size: 18px;
  padding: 10px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  background-color: rgba(255, 255, 255, 0.05);

  &:hover {
    color: #C4A265;
    background-color: rgba(255, 255, 255, 0.1);
    transform: translateY(-2px);
  }

  @media (max-width: 768px) {
    font-size: 16px;
    padding: 8px;
  }
`;

const AuthorInfo = styled.div`
  margin-top: 32px;
  padding-top: 24px;
  display: flex;
  justify-content: center;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
  font-size: 13px;
  color: rgba(255, 255, 255, 0.5);
  letter-spacing: 0.02em;

  @media (max-width: 768px) {
    font-size: 12px;
    margin-top: 24px;
    padding-top: 20px;
  }
`;
