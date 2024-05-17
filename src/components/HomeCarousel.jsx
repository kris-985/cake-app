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
        <CarouselImage src="https://images.pexels.com/photos/291528/pexels-photo-291528.jpeg?auto=compress&cs=tinysrgb&w=600" />
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
  border-radius: 2%;
  width: 1000px !important;
  height: 600px !important;
  background-size: cover;
  image-rendering: -webkit-optimize-contrast;
`;
