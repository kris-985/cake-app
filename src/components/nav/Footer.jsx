import styled from "styled-components";
import {
  FaHome,
  FaInfoCircle,
  FaUtensils,
  FaPhone,
  FaFacebook,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
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
            <FaPhone />
            <FooterLink to="/contacts">Contacts</FooterLink>
          </Section>
          <SocialMedia>
            <Icon href="#">
              <FaFacebook />
            </Icon>
            <Icon href="#">
              <FaTwitter />
            </Icon>
            <Icon href="#">
              <FaInstagram />
            </Icon>
          </SocialMedia>
        </FooterContent>
        <AuthorInfo>All right reserved © 2024</AuthorInfo>
      </FooterContainer>
    </div>
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
`;

const Section = styled.div`
  display: flex;
  align-items: center;
`;

const FooterLink = styled(Link)`
  font-family: cursive;
  margin-left: 10px;
  font-size: 24px;
  color: white;
  text-decoration: none;
`;

const SocialMedia = styled.div`
  display: flex;
  align-items: center;
`;

const Icon = styled.a`
  color: #fff;
  font-size: 24px;
  margin-right: 10px;
  transition: color 0.3s ease;

  &:hover {
    color: #ffd700;
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
`;
