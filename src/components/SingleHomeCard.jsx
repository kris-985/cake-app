import styled from "styled-components";
import { Fragment, useState } from "react";
import { getRecipes } from "../services/recipesData";
import { useEffect } from "react";

const SingleHomeCard = () => {
  const [recipes, setRecipes] = useState();

  useEffect(() => {
    fetch("https://www.themealdb.com/api/json/v1/1/filter.php?i=vanilla")
      .then((res) => res.json())
      .then(setRecipes);
  }, []);
 recipes && console.log(recipes.meals);
  return (
    <Fragment>
      {recipes &&
       recipes.meals.map((recipe) => (
          <ContainerOne key={recipe.idMeal}>
            <WrapperOne>
              <BannerImage imageUrl={recipe.strMealThumb}/>
              <HeaderOne>{recipe.strMeal}</HeaderOne>
            </WrapperOne>
            <ButtonWrapper>
              <ButtonOutline>DETAILS</ButtonOutline>
            </ButtonWrapper>
          </ContainerOne>
        ))}
    </Fragment>
  );
};

export default SingleHomeCard;

const ContainerOne = styled.div`
  margin: 10px;
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

const WrapperOne = styled.div`
  width: 100%;
  height: 100%;
`;

const BannerImage = styled.div`
  background-image: ${({imageUrl}) => (imageUrl ? `url(${imageUrl})` : 'url('https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1665px-No-Image-Placeholder.svg.png')};
  background-position: center;
  background-size: cover;
  height: 300px;
  width: 100%;
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.255);
`;

const HeaderOne = styled.h1`
  font-family: "Righteous", sans-serif;
  color: rgba(255, 255, 255, 0.98);
  text-transform: uppercase;
  font-size: 2.4rem;
`;

const ParagraphOne = styled.p`
  color: #fff;
  font-family: "Lato", sans-serif;
  text-align: center;
  font-size: 0.8rem;
  line-height: 150%;
  letter-spacing: 2px;
  text-transform: uppercase;
`;

const ButtonWrapper = styled.div`
  margin-top: 18px;
  margin-left: 10px;
`;

const ButtonOutline = styled.button`
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
    transition: all .3s ease; 
`;

const ButtonFill = styled.button`
background: rgba(0, 212, 255, 0.9);
color: rgba(255,255,255,0.95);
filter: drop-shadow(0);
font-weight: bold;
transition: all .3s ease; 
&:hover{
  transform: scale(1.125);  
  border-color: rgba(255, 255, 255, 0.9);
  filter: drop-shadow(0 10px 5px rgba(0,0,0,0.125));
  transition: all .3s ease;   
`;
