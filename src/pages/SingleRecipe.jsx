/* eslint-disable react-hooks/exhaustive-deps */
import { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { viewSingleRecipe } from "../slices/recipesSlice";
import Spinner from "../components/Spinner";
import { getIngredients } from '../services/recipesData';

const SingleRecipe = () => {
  const [ingredients, setIngredients] = useState([]);
  const { recipeId, singleRecipe } = useSelector(
    (state) => state.recipesReducer
  );
  const dispatch = useDispatch();

  useEffect(() => {
    if (recipeId) {
      fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${recipeId}`)
        .then((res) => res.json())
        .then((data) => {
          setIngredients(getIngredients(data.meals));
          dispatch(viewSingleRecipe(data))
        });
    }
  }, [recipeId]);

  return (
    <Fragment>
      {singleRecipe && ingredients.length ? (
        <Fragment>
          <Title>{singleRecipe[0].strMeal}</Title>
          <Container>
            <Picture imageUrl={singleRecipe[0].strMealThumb} />
            <Ingredients>
              Ingredients:
              {ingredients.map((e, i) => e && (
                <li key={i}>{e.ingredient} - {e.measure}</li>
              ))}
            </Ingredients>
            <Category>Category: {singleRecipe[0].strCategory}</Category>
            <Area>Area: {singleRecipe[0].strArea}</Area>
          </Container>
          <ContInstructions>
            Instructions:
            <Instructions> {singleRecipe[0].strInstructions}</Instructions>
          </ContInstructions>
        </Fragment>
      ) : (
        <Spinner />
      )}
    </Fragment>
  );
};

export default SingleRecipe;

const Title = styled.h1`
  text-align: center;
  font-family: 'Playfair Display', Georgia, serif;
  font-size: 2.5em;
  font-weight: 600;
  color: #2D2A26;
  margin: 40px 20px 32px;
  line-height: 1.2;

  @media (max-width: 768px) {
    font-size: 1.8em;
    margin: 32px 16px 24px;
  }

  @media (max-width: 480px) {
    font-size: 1.5em;
    margin: 24px 12px 20px;
  }
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 48px;
  padding: 0 60px 48px;
  max-width: 1200px;
  margin: 0 auto;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    padding: 0 24px 32px;
    gap: 32px;
  }
`;

const Picture = styled.div`
  background-image: ${({ imageUrl }) =>
    imageUrl
      ? `url(${imageUrl})`
      : "url(https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1665px-No-Image-Placeholder.svg.png)"};
  background-position: center;
  background-size: cover;
  height: 450px;
  width: 450px;
  border-radius: 24px;
  box-shadow: 0 20px 50px rgba(45, 42, 38, 0.15);

  @media (max-width: 768px) {
    height: 350px;
    width: 350px;
    border-radius: 20px;
  }

  @media (max-width: 480px) {
    height: 280px;
    width: 280px;
    border-radius: 16px;
  }
`;

const Text = styled.p`
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
  font-size: 16px;
  color: #2D2A26;
  line-height: 1.8;

  @media (max-width: 768px) {
    font-size: 15px;
  }

  @media (max-width: 480px) {
    font-size: 14px;
  }
`;

const Ingredients = styled(Text)`
  background-color: #FFFFFF;
  padding: 24px 32px;
  border-radius: 20px;
  box-shadow: 0 4px 20px rgba(45, 42, 38, 0.08);
  font-weight: 600;
  color: #C4A265;
  
  li {
    font-weight: 400;
    color: #2D2A26;
    margin: 8px 0;
    padding-left: 8px;
  }
`;

const Category = styled(Text)`
  background-color: #FFFFFF;
  padding: 16px 24px;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(45, 42, 38, 0.08);
  font-weight: 500;
`;

const Area = styled(Text)`
  background-color: #FFFFFF;
  padding: 16px 24px;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(45, 42, 38, 0.08);
  font-weight: 500;
`;

const ContInstructions = styled.div`
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
  font-size: 16px;
  max-width: 900px;
  margin: 0 auto 60px;
  padding: 32px 48px;
  background-color: #FFFFFF;
  border-radius: 24px;
  box-shadow: 0 4px 20px rgba(45, 42, 38, 0.08);
  color: #C4A265;
  font-weight: 600;

  @media (max-width: 768px) {
    font-size: 15px;
    padding: 24px 32px;
    margin: 0 24px 40px;
    border-radius: 20px;
  }

  @media (max-width: 480px) {
    font-size: 14px;
    padding: 20px 24px;
    margin: 0 16px 32px;
    border-radius: 16px;
  }
`;

const Instructions = styled(Text)`
  color: #6B6560;
  font-weight: 400;
  margin-top: 16px;
  white-space: pre-line;
`;
