/* eslint-disable react-hooks/exhaustive-deps */
import { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { viewSingleRecipe } from "../slices/recipesSlice";
import Spinner from "../components/Spinner";

const SingleRecipe = () => {
  const [ingredients, setIngredients] = useState();
  const { recipeId, singleRecipe } = useSelector(
    (state) => state.recipesReducer
  );
  const dispatch = useDispatch();
  const getIngredients = (recipe) => {
    const ingredients =
      recipe[0] &&
      Array.from({ length: 20 }, (_, i) => {
        const ingredient = recipe[0][`strIngredient${i + 1}`];
        const measure = recipe[0][`strMeasure${i + 1}`];
        return ingredient ? { ingredient: ingredient, measure: measure } : null;
      });
    console.log(recipe);
    console.log(ingredients);
    return ingredients;
  };

  useEffect(() => {
    if (recipeId) {
      fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${recipeId}`)
        .then((res) => res.json())
        .then((data) => dispatch(viewSingleRecipe(data)));
    }
  }, [recipeId]);
  useEffect(() => {
    setIngredients(() => getIngredients(singleRecipe));
  }, [singleRecipe]);

  console.log(ingredients);

  return (
    <Fragment>
      {singleRecipe.length ? (
        <div key={singleRecipe[0].strMeal}>
          <Title>{singleRecipe[0].strMeal}</Title>
          <Container>
            <Picture imageUrl={singleRecipe[0].strMealThumb} />
            <Ingredients>
              Ingredients:
              <li>
                {ingredients.ingredient} - {ingredients.measure}
              </li>
            </Ingredients>
            <Category>Category: {singleRecipe[0].strCategory}</Category>
            <Area>Area: {singleRecipe[0].strArea}</Area>
          </Container>
          <ContInstructions>
            Instructions:
            <Instructions> {singleRecipe[0].strInstructions}</Instructions>
          </ContInstructions>
        </div>
      ) : (
        <Spinner />
      )}
    </Fragment>
  );
};

export default SingleRecipe;

const Title = styled.h1`
  text-align: center;
  font-size: 2em;

  @media (max-width: 768px) {
    font-size: 1.5em;
  }

  @media (max-width: 480px) {
    font-size: 1.2em;
  }
`;

const Container = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const Picture = styled.div`
  background-image: ${({ imageUrl }) =>
    imageUrl
      ? `url(${imageUrl})`
      : "url(https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1665px-No-Image-Placeholder.svg.png)"};
  background-position: center;
  background-size: cover;
  height: 500px;
  width: 500px;

  @media (max-width: 768px) {
    height: 400px;
    width: 400px;
  }

  @media (max-width: 480px) {
    height: 300px;
    width: 300px;
  }
`;

const Text = styled.p`
  font-family: cursive;
  font-size: 20px;

  @media (max-width: 768px) {
    font-size: 18px;
  }

  @media (max-width: 480px) {
    font-size: 16px;
  }
`;

const Ingredients = styled(Text)``;
const Category = styled(Text)``;
const Area = styled(Text)``;

const ContInstructions = styled.div`
  font-family: cursive;
  font-size: 20px;
  margin-left: 10px;
  margin-top: 15px;

  @media (max-width: 768px) {
    font-size: 18px;
    margin-left: 5px;
    margin-top: 10px;
  }

  @media (max-width: 480px) {
    font-size: 16px;
    margin-left: 3px;
    margin-top: 8px;
  }
`;

const Instructions = styled(Text)``;

//IdMeal
// strMeal-Името
// StrCategory-Пиле
// strArea-Произход
// strInstructions-Инструкции
// "strMealThumb-Снимка
// "strIngredient1-Продукти
// "strMeasure1-Грамаж
