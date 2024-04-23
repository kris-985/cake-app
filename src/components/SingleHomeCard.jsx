import styled from "styled-components";
import { recipesobject } from "../services/recipesobject";

const SingleHomeCard = () => {
  console.log(Object.keys(recipesobject));

  return (
    <ContainerOne>
      <WrapperOne>
        <BannerImage></BannerImage>
        <HeaderOne>{Object.keys(recipesobject)}</HeaderOne>
        <ParagraphOne>
          Lorem ipsum dolor sit amet, <br />
          consectetur adipiscing elit.
        </ParagraphOne>
      </WrapperOne>
      <ButtonWrapper>
        <ButtonOutline>DETAILS</ButtonOutline>
        <ButtonFill>BUY NOW</ButtonFill>
      </ButtonWrapper>
    </ContainerOne>
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
  background-image: url(https://images.unsplash.com/photo-1641326201918-3cafc641038e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80);
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
