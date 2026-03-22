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
        <ImageRight
          src="https://w0.peakpx.com/wallpaper/43/1001/HD-wallpaper-piece-of-cake-cake-dessert-sweets-fruit-cake-thumbnail.jpg"
          alt=""
        />
      </ContainerSecond>
      <Button>
        <RecipeLink to="/recipes">Check out the recipes</RecipeLink>
      </Button>
    </div>
  );
};

export default AboutUs;

const Header = styled.h1`
  font-family: 'Playfair Display', Georgia, serif;
  font-size: 42px;
  font-weight: 600;
  text-align: center;
  color: #2D2A26;
  padding: 60px 40px 20px;
  line-height: 1.3;
  max-width: 900px;
  margin: 0 auto;

  @media (max-width: 768px) {
    font-size: 32px;
    padding: 40px 24px 16px;
  }

  @media (max-width: 480px) {
    font-size: 26px;
    padding: 32px 20px 12px;
  }
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 48px 60px;
  gap: 60px;
  max-width: 1200px;
  margin: 0 auto;

  @media (max-width: 768px) {
    padding: 32px 24px;
    flex-direction: column;
    gap: 32px;
  }
`;

const ImageSection = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const TextSection = styled.div`
  flex: 1;

  @media (max-width: 768px) {
    text-align: center;
  }
`;

const Image = styled.img`
  max-width: 100%;
  height: 400px;
  object-fit: cover;
  border-radius: 24px;
  box-shadow: 0 20px 50px rgba(45, 42, 38, 0.15);

  @media (max-width: 768px) {
    height: 300px;
    border-radius: 20px;
  }

  @media (max-width: 480px) {
    height: 250px;
    border-radius: 16px;
  }
`;

const Text = styled.p`
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
  font-size: 17px;
  line-height: 1.8;
  color: #6B6560;

  @media (max-width: 768px) {
    font-size: 16px;
  }

  @media (max-width: 480px) {
    font-size: 15px;
  }
`;

const ContainerSecond = styled.div`
  display: flex;
  align-items: center;
  gap: 60px;
  padding: 48px 60px;
  max-width: 1200px;
  margin: 0 auto;

  @media (max-width: 768px) {
    flex-direction: column-reverse;
    padding: 32px 24px;
    gap: 32px;
  }
`;

const TextSecond = styled.div`
  flex: 1;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
  font-size: 17px;
  line-height: 1.8;
  color: #6B6560;

  @media (max-width: 768px) {
    font-size: 16px;
    text-align: center;
  }

  @media (max-width: 480px) {
    font-size: 15px;
  }
`;

const ImageRight = styled.img`
  height: 400px;
  max-width: 100%;
  object-fit: cover;
  border-radius: 24px;
  box-shadow: 0 20px 50px rgba(45, 42, 38, 0.15);

  @media (max-width: 768px) {
    height: 300px;
    border-radius: 20px;
  }

  @media (max-width: 480px) {
    height: 250px;
    border-radius: 16px;
  }
`;

const Button = styled.button`
  display: block;
  margin: 20px auto 60px;
  padding: 18px 48px;
  background-color: #2D2A26;
  color: #FFFFFF;
  border: none;
  border-radius: 100px;
  cursor: pointer;
  font-size: 15px;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
  font-weight: 600;
  letter-spacing: 0.02em;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 4px 20px rgba(45, 42, 38, 0.15);

  &:hover {
    background-color: #C4A265;
    transform: translateY(-2px);
    box-shadow: 0 8px 30px rgba(196, 162, 101, 0.3);
  }

  @media (max-width: 480px) {
    padding: 16px 36px;
    font-size: 14px;
  }
`;

const RecipeLink = styled(Link)`
  color: inherit;
  text-decoration: none;
`;
