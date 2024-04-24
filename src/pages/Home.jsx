import  { Fragment } from "react";
import { Link } from "react-router-dom";
import HomeCarousel from "../components/HomeCarousel";
import styled from "styled-components";
import HomeCards from "../components/HomeCards";

const Home = () => {
  return (
    <Fragment>
      <Title>Cake App - Where you eat with your eyes first</Title>
      <HomeCarousel />
      <AboutUsWrapper>
        <Image src="https://images.alphacoders.com/133/1338482.png" alt="" />
        <Text>
          We are a small boutique bakery specializing in high-quality cakes.You
          can learn more <Link to="/aboutus"> about us.</Link>
        </Text>
      </AboutUsWrapper>
      <PopularRecipe>
        We present to you our most populars recipe among our customers
      </PopularRecipe>
      <HomeCards />
    </Fragment>
  );
};

export default Home;

const Title = styled.h1`
  font-family: cursive;
  font-size: 30px;
  text-align: center;
`;

const AboutUsWrapper = styled.div`
  display: flex;
  background-image: url("https://images7.alphacoders.com/956/956230.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  backgroung-attachment: fixed;
  backgroung-position: center;
  width: 100%;
  flex-direction: column;
  align-items: center;
`;

const Image = styled.img`
  padding-top: 20px;
  width: 50%;
  height: 70%;
  border-radius: 3%;
`;

const Text = styled.p`
  background-color: rgba( 250, 250, 250, 1);
  font-family: cursive;
  font-size: 30px;
  color: #333; /* Променете го според вашите предпочитания */
`;

const PopularRecipe = styled.p`
  text-align: center;
  font-family: cursive;
  font-size: 30px;
  color: black;
`;
