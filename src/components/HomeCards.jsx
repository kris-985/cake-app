import { Fragment } from "react";
import SingleRecipeCard from "./SingleRecipeCard";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const HomeCards = () => {
  const { homeRecipes } = useSelector((state) => state.recipesReducer);

  return (
    <Fragment>
      <Wrapper>
        <SingleRecipeCard recipes={homeRecipes} />
      </Wrapper>
      <Buttonlink>
        <RecipesLink to="/recipes">Check out the recipes</RecipesLink>
      </Buttonlink>
    </Fragment>
  );
};

export default HomeCards;

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 32px;
  padding: 60px 40px;
  max-width: 1400px;
  margin: 0 auto;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    padding: 40px 20px;
    gap: 24px;
  }
`;

const Buttonlink = styled.button`
  display: block;
  margin: 0 auto 60px;
  padding: 18px 48px;
  background-color: #2D2A26;
  color: #FFFFFF;
  border: none;
  border-radius: 100px;
  cursor: pointer;
  font-size: 15px;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
  font-weight: 600;
  text-align: center;
  text-decoration: none;
  letter-spacing: 0.02em;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 4px 20px rgba(45, 42, 38, 0.15);

  &:hover {
    background-color: #C4A265;
    transform: translateY(-2px);
    box-shadow: 0 8px 30px rgba(196, 162, 101, 0.3);
  }

  @media (max-width: 768px) {
    font-size: 14px;
    padding: 16px 36px;
    margin-bottom: 40px;
  }
`;

const RecipesLink = styled(Link)`
  color: inherit;
  text-decoration: none;
`;
