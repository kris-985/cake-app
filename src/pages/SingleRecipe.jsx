import { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { addRecipes } from "../slices/recipesSlice";

const SingleRecipe = () => {
  const { recipeId, allRecipes } = useSelector((state) => state.recipesReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    if (recipeId) {
      fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${recipeId}`)
        .then((res) => res.json())
        .then((data) => dispatch(addRecipes(data)));
    }
  }, [recipeId, dispatch]);

  return (
    <Fragment>
      { allRecipes.length > 0 &&
        allRecipes.map((recipe, i) => (
          <div key={recipe[i].strMeal}>
            <Title>{recipe[i].strMeal}</Title>
            <Container>
              <Picture imageUrl={recipe[i].strMealThumb} />
              <Ingredients>
                {recipe[i].strIngredient1} - {recipe[i].strMeasure1}
              </Ingredients>
              <Category>{recipe[i].strCategory}</Category>
              <Area>{recipe[i].strArea}</Area>
            </Container>
            <Instructions>{recipe[i].strInstructions}</Instructions>
          </div>
        ))}
    </Fragment>
  );
};

export default SingleRecipe;

const Title = styled.h1`
  text-align: center;
`;
const Container = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Picture = styled.image`
  background-image: ${({ imageUrl }) =>
    imageUrl
      ? `url(${imageUrl})`
      : "url(https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1665px-No-Image-Placeholder.svg.png)"};
  background-position: center;
  background-size: cover;
  height: 500px;
  width: 500px;
`;
const Ingredients = styled.p``;
const Category = styled.p``;
const Area = styled.p``;
const Instructions = styled.div``;
//IdMeal
// strMeal-Името
// StrCategory-Пиле
// strArea-Произход
// strInstructions-Инструкции
// "strMealThumb-Снимка
// "strIngredient1-Продукти
// "strMeasure1-Грамаж
