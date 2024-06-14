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

  @media (max-width: 1200px) {
    justify-content: flex-start;
  }

  @media (max-width: 992px) {
    flex-direction: column;
    align-items: center;
  }

  @media (max-width: 768px) {
    justify-content: space-between;
  }

  @media (max-width: 576px) {
    justify-content: center;
  }
`;