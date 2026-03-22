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
  justify-content: center;
  gap: 32px;
  padding: 60px 40px;
  max-width: 1400px;
  margin: 0 auto;
  min-height: calc(100vh - 200px);

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    padding: 40px 20px;
    gap: 24px;
  }
`;
