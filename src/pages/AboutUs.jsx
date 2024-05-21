import styled from "styled-components";
import { Link } from "react-router-dom";

const AboutUs = () => {
  return (
    <div>
      <Header>
        Welcome to Cake App, where taste and quality always come first!
      </Header>
      <Container>
        <ImageSection>
          <Image
            src="https://c4.wallpaperflare.com/wallpaper/102/746/353/berry-cake-delicious-sweet-birthday-cook-hd-wallpaper-preview.jpg"
            alt=""
          />
        </ImageSection>
        <TextSection>
          <Text>
            We are proud to offer our customers a variety of incredible desserts
            and cakes.We believe that food is more than just a sight– it's an
            experience of the senses and an expression of love for taste. That's
            why at Cake App, we strive to deliver only the best recipes, crafted
            with attention to every detail.Our recipes carefully select superior
            ingredients and combine technique with heart to create unique
            flavors and exquisite culinary temptations.
          </Text>
        </TextSection>
      </Container>
      <ContainerSecond>
        <TextSecond>
          When you choose Cake App, you trust us to turn your special occasions
          into unforgettable celebrations and to welcome you with the highest
          quality in every dish. Our years of experience and passion for pastry
          make us leaders in the industry and ensure that every bite you take
          from Cake App will be a true delight. So, if you want to enjoy unique
          flavors, tempting desserts, and exquisite cakes, we sincerely
          recommend trusting Cake App. We will take you on a journey through the
          world of refined taste and create moments that will make your occasion
          truly special.
        </TextSecond>
        <ImageRight src="https://w0.peakpx.com/wallpaper/43/1001/HD-wallpaper-piece-of-cake-cake-dessert-sweets-fruit-cake-thumbnail.jpg" alt="" />
      </ContainerSecond>
      <Button><RecipeLink to="/recipes">Check out the recipes</RecipeLink></Button>
    </div>
  );
};

export default AboutUs;

const Header = styled.h1`
  font-family: cursive;
  font-size: 30px;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 24px;
  }

  @media (max-width: 480px) {
    font-size: 20px;
  }
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 10px;
  }
`;

const ImageSection = styled.div`
  flex: 1;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const TextSection = styled.div`
  flex: 1;
  padding: 0 30px;

  @media (max-width: 768px) {
    padding: 10px 0;
  }
`;

const Image = styled.img`
  margin-left: 20px;
  max-width: 100%;
  height: 450px;
  border-radius: 2%;

  @media (max-width: 768px) {
    margin-left: 0;
    height: auto;
  }

  @media (max-width: 480px) {
    width: 100%;
    height: auto;
  }
`;

const Text = styled.p`
  font-family: cursive;
  font-size: 30px;
  line-height: 2;

  @media (max-width: 768px) {
    font-size: 24px;
  }

  @media (max-width: 480px) {
    font-size: 20px;
  }
`;

const ContainerSecond = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column-reverse;
  }
`;

const TextSecond = styled.div`
  flex: 1;
  font-family: cursive;
  font-size: 30px;
  padding: 0 20px;
  line-height: 2;

  @media (max-width: 768px) {
    font-size: 24px;
    padding: 10px 0;
  }

  @media (max-width: 480px) {
    font-size: 20px;
  }
`;

const ImageRight = styled.img`
  margin-right: 20px;
  height: 500px;
  max-width: 100%;
  border-radius: 2%;

  @media (max-width: 768px) {
    margin-right: 0;
    height: auto;
  }

  @media (max-width: 480px) {
    width: 100%;
    height: auto;
  }
`;

const Button = styled.button`
  margin-top: 10px;
  margin-left: 20px;
  margin-bottom: 20px;
  display: block;
  padding: 10px 20px;
  background-color: red;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  text-decoration: none;

  &:hover {
    background-color: #0056b3;
  }

  @media (max-width: 480px) {
    width: 100%;
    padding: 10px 0;
    margin-left: 0;
  }
`;

const RecipeLink = styled(Link)`
  color: white;
  text-decoration: none;
`;
