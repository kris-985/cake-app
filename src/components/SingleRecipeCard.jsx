/* eslint-disable react/prop-types */
import styled from "styled-components";
import { Fragment } from "react";
import { useDispatch} from "react-redux";
import { changeId } from "../slices/recipesSlice";
import { Link } from "react-router-dom";

const SingleRecipeCard = ({ recipes }) => {
  const dispatch = useDispatch();

  const setId = (id) => {
    dispatch(changeId(id));
  };
  

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
  background-color: #FFFFFF;
  border-radius: 24px;
  border: none;
  padding: 20px;
  box-shadow: 0 4px 20px rgba(45, 42, 38, 0.08);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  
  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 20px 40px rgba(45, 42, 38, 0.12);
  }

  @media (max-width: 768px) {
    padding: 16px;
    border-radius: 20px;
  }
`;

const CardImage = styled.img`
  background-image: ${({ imageUrl }) =>
    imageUrl
      ? `url(${imageUrl})`
      : "url(https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1665px-No-Image-Placeholder.svg.png)"};
  background-position: center;
  background-size: cover;
  height: 280px;
  width: 280px;
  border-radius: 16px;
  border: none;
  transition: transform 0.4s ease;

  @media (max-width: 768px) {
    height: 220px;
    width: 220px;
    border-radius: 14px;
  }
`;

const CardTitle = styled.h2`
  font-family: 'Playfair Display', Georgia, serif;
  color: #2D2A26;
  font-size: 18px;
  font-weight: 600;
  margin: 16px 0 8px;
  line-height: 1.3;
  max-width: 260px;

  @media (max-width: 768px) {
    font-size: 16px;
    max-width: 200px;
  }
`;

const ButtonWrapperFirst = styled.div`
  margin-top: 12px;
`;

const CardButton = styled.button`
  border: 2px solid #2D2A26;
  padding: 12px 28px;
  border-radius: 100px;
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0.08em;
  cursor: pointer;
  background: transparent;
  color: #2D2A26;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    background-color: #2D2A26;
    color: #FFFFFF;
    transform: scale(1.02);
  }

  @media (max-width: 768px) {
    padding: 10px 24px;
    font-size: 11px;
  }
`;
