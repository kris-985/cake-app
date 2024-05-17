import { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { viewSingleRecipe } from "../slices/recipesSlice";

const SingleRecipe = () => {
  const { recipeId, singleRecipe } = useSelector(
    (state) => state.recipesReducer
  );
  const dispatch = useDispatch();

  useEffect(() => {
    if (recipeId) {
      fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${recipeId}`)
        .then((res) => res.json())
        .then((data) => dispatch(viewSingleRecipe(data)));
    }
  }, [recipeId, dispatch]);

  console.log(singleRecipe);

  return (
    <Fragment>
      {singleRecipe && (
        <div key={singleRecipe[0].strMeal}>
          <Title>{singleRecipe[0].strMeal}</Title>
          <Container>
            <Picture imageUrl={singleRecipe[0].strMealThumb} />
            <Ingredients>
              {singleRecipe[0].strIngredient1} - {singleRecipe[0].strMeasure1}
            </Ingredients>
            <Category>{singleRecipe[0].strCategory}</Category>
            <Area>{singleRecipe[0].strArea}</Area>
          </Container>
          <Instructions>{singleRecipe[0].strInstructions}</Instructions>
        </div>
      )}
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
