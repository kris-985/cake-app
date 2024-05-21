import { Fragment } from "react";
import { Link } from "react-router-dom";
import HomeCarousel from "../components/HomeCarousel";
import styled from "styled-components";
import HomeCards from "../components/HomeCards";

const Home = () => {
  
  return (
    <Fragment>
      <Title>Cake App - Where you eat with your eyes first</Title>
      <HomeCarousel />
      <EmptyDiv />
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

  @media (max-width: 768px) {
    font-size: 24px;
  }

  @media (max-width: 480px) {
    font-size: 20px;
  }
`;

const EmptyDiv = styled.div`
  height: 350px;
  background-image: url("https://t4.ftcdn.net/jpg/03/71/75/93/360_F_371759398_mwc6nYPLfDt0gihNkURp64vDhVQw1qUd.jpg");
  background-size: cover;
  width: 100%;

  @media (max-width: 768px) {
    height: 250px;
  }

  @media (max-width: 480px) {
    height: 200px;
  }
`;

const AboutUsWrapper = styled.div`
  display: flex;
  background-image: url("https://images7.alphacoders.com/956/956230.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center;
  width: 100%;
  flex-direction: column;
  align-items: center;

  @media (max-width: 768px) {
    background-attachment: scroll;
    padding: 20px;
  }
`;

const Image = styled.img`
  padding-top: 20px;
  width: 50%;
  height: auto;
  border-radius: 3%;

  @media (max-width: 768px) {
    width: 70%;
  }

  @media (max-width: 480px) {
    width: 90%;
  }
`;

const Text = styled.p`
  background-color: rgba(250, 250, 250, 1);
  font-family: cursive;
  font-size: 30px;
  color: #333;
  padding: 10px;
  margin: 20px;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 24px;
    padding: 8px;
    margin: 15px;
  }

  @media (max-width: 480px) {
    font-size: 20px;
    padding: 6px;
    margin: 10px;
  }
`;

const PopularRecipe = styled.p`
  text-align: center;
  font-family: cursive;
  font-size: 30px;
  color: black;
  margin: 20px;

  @media (max-width: 768px) {
    font-size: 24px;
  }

  @media (max-width: 480px) {
    font-size: 20px;
  }
`;
