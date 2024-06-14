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
  flex-direction: row;
  justify-content: center;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const Buttonlink = styled.button`
  display: block;
  margin: 0 auto;
  margin-bottom: 10px;
  padding: 10px 20px;
  background-color: #333;
  color: #ffffff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 20px;
  font-family: cursive;
  text-align: center;
  text-decoration: none;
  transition: background-color 0.3s ease;

  @media (max-width: 768px) {
    font-size: 16px;
    padding: 8px 16px;
  }
`;

const RecipesLink = styled(Link)`
  color: white;
  text-decoration: none;

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;
