/* eslint-disable react/prop-types */
import styled from "styled-components";
import { Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeId } from "../slices/recipesSlice";
import { Link } from "react-router-dom";

const SingleRecipeCard = ({ recipes }) => {
  const { recipeId } = useSelector(
    (state) => state.recipesReducer
  );
  const dispatch = useDispatch();

  const setId = (id) => {
    dispatch(changeId(id));
  };
  
console.log(recipeId);
  return (
    <Fragment>
      {Object.keys(recipes).length &&
        recipes.map((recipe, i) => (
          <Card key={recipe[i].idMeal}>
            <CardImage imageUrl={recipe[i].strMealThumb} />
            <CardTitle>{recipe[i].strMeal}</CardTitle>
            <ButtonWrapperFirst>
              <Link to="/recipe">
                <CardButton onClick={() => setId(recipe[i].idMeal)}>
                  DETAILS
                </CardButton>
              </Link>
            </ButtonWrapperFirst>
          </Card>
        ))}
    </Fragment>
  );
};

export default SingleRecipeCard;

const Card = styled.div`
  margin: 20px;
  backdrop-filter: blur(16px) saturate(180%);
  background-color: rgba(17, 25, 40, 0.25);
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.125);
  padding: 38px;
  filter: drop-shadow(0 30px 10px rgba(0, 0, 0, 0.125));
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

const CardImage = styled.img`
  background-image: ${({ imageUrl }) =>
    imageUrl
      ? `url(${imageUrl})`
      : "url(https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1665px-No-Image-Placeholder.svg.png)"};
  background-position: center;
  background-size: cover;
  height: 300px;
  width: 300px;
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.255);
`;

const CardTitle = styled.h2`
  font-family: "Righteous", sans-serif;
  color: rgba(255, 255, 255, 0.98);

  font-size: 20px;
`;

const ButtonWrapperFirst = styled.div`
  margin-top: 18px;
  margin-left: 10px;
`;

const CardButton = styled.button`
border: none;
padding: 12px 24px;
border-radius: 24px;
font-size: 12px;
font-size: 0.8rem;
letter-spacing: 2px;
cursor: pointer;
background: transparent;
color: rgba(0, 212, 255, 0.9);
border: 1px solid rgba(0, 212, 255, 0.6);
transition: all 0.3s ease;
&:hover{
  transform: scale(1.125);
  color: rgba(255, 255, 255, 0.9);
  border-color: rgba(255, 255, 255, 0.9);
  transition: all .3s ease; `;
