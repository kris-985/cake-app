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
  font-size: 20px;
  text-align: center;

  @media (min-width: 481px) {
    font-size: 24px;
  }

  @media (min-width: 769px) {
    font-size: 30px;
  }
`;

const EmptyDiv = styled.div`
  height: 200px;
  background-image: url("https://t4.ftcdn.net/jpg/03/71/75/93/360_F_371759398_mwc6nYPLfDt0gihNkURp64vDhVQw1qUd.jpg");
  background-size: cover;
  width: 100%;

  @media (min-width: 481px) {
    height: 250px;
  }

  @media (min-width: 769px) {
    height: 350px;
  }
`;

const AboutUsWrapper = styled.div`
  display: flex;
  background-image: url("https://images7.alphacoders.com/956/956230.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: scroll;
  background-position: center;
  width: 100%;
  flex-direction: column;
  align-items: center;
  padding: 20px;

  @media (min-width: 769px) {
    background-attachment: fixed;
    padding: 0;
  }
`;

const Image = styled.img`
  padding-top: 20px;
  width: 90%;
  height: auto;
  border-radius: 3%;

  @media (min-width: 481px) {
    width: 70%;
  }

  @media (min-width: 769px) {
    width: 50%;
  }
`;

const Text = styled.p`
  background-color: rgba(250, 250, 250, 1);
  font-family: cursive;
  font-size: 20px;
  color: #333;
  padding: 6px;
  margin: 10px;
  text-align: center;

  @media (min-width: 481px) {
    font-size: 24px;
    padding: 8px;
    margin: 15px;
  }

  @media (min-width: 769px) {
    font-size: 30px;
    padding: 10px;
    margin: 20px;
  }
`;

const PopularRecipe = styled.p`
  text-align: center;
  font-family: cursive;
  font-size: 20px;
  color: black;
  margin: 20px;

  @media (min-width: 481px) {
    font-size: 24px;
  }

  @media (min-width: 769px) {
    font-size: 30px;
  }
`;
