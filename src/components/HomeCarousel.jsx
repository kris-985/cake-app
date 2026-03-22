import { Carousel } from "react-responsive-carousel";
import styled from "styled-components";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
const HomeCarousel = () => {
  return (
    <Carousel
      showArrows={false}
      centerMode={true}
      centerSlidePercentage={50}
      thumbWidth={100}
      showThumbs={false}
      dynamicHeight={false}
      interval={3000}
      autoPlay={true}
      infiniteLoop={true}
    >
      <div>
        <CarouselImage src="https://static.vecteezy.com/system/resources/previews/033/756/040/large_2x/happy-birthday-cake-hd-wallpaper-ai-generated-photo.jpg" />
      </div>
      <div>
        <CarouselImage src="https://w0.peakpx.com/wallpaper/226/456/HD-wallpaper-chocolate-cake-dessert-sweets-cake-chocolate.jpg" />
      </div>
      <div>
        <CarouselImage src="https://images6.alphacoders.com/434/434430.jpg" />
      </div>
      <div>
        <CarouselImage src="https://e0.pxfuel.com/wallpapers/590/701/desktop-wallpaper-chocolate-cup-cake-chocolate-cup-cake-food.jpg" />
      </div>
      <div>
        <CarouselImage src="https://as2.ftcdn.net/v2/jpg/03/08/40/43/1000_F_308404381_LqyMIXDPOR6Ut1TqE2cJRQdxomGsQegc.jpg" />
      </div>
      <div>
        <CarouselImage src="https://as1.ftcdn.net/v2/jpg/01/78/06/60/1000_F_178066058_NqCDYgyLobiLEI0qzpC2hd6bN4eKhYOv.jpg" />
      </div>
    </Carousel>
  );
};

export default HomeCarousel;

const CarouselImage = styled.img`
  border-radius: 20px;
  width: 100%;
  height: auto;
  max-width: 900px;
  max-height: 540px;
  object-fit: cover;
  image-rendering: -webkit-optimize-contrast;
  box-shadow: 0 20px 50px rgba(45, 42, 38, 0.15);

  @media (max-width: 1200px) {
    max-width: 700px;
    max-height: 420px;
    border-radius: 16px;
  }

  @media (max-width: 768px) {
    max-width: 500px;
    max-height: 300px;
    border-radius: 12px;
  }

  @media (max-width: 480px) {
    max-width: 100%;
    height: 180px;
    border-radius: 12px;
  }
`;
