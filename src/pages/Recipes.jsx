import { useSelector } from "react-redux";
import styled from "styled-components";
import SingleRecipeCard from "../components/SingleRecipeCard";

const Recipes = () => {
  const { allRecipes } = useSelector((state) => state.recipesReducer);

  return (
    <Container>
      <SingleRecipeCard recipes={allRecipes} />
    </Container>
  );
};

export default Recipes;

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
`;
