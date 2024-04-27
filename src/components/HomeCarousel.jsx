import { Carousel } from 'react-responsive-carousel';
import styled from "styled-components";
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
const HomeCarousel = () => {
    return (
        <Carousel
        showThumbs={false} 
        dynamicHeight={false} 
        interval={3000}
        autoPlay={true}
        infiniteLoop={true}>
            <div>
                <CarouselImage src="https://static.vecteezy.com/system/resources/previews/033/756/040/large_2x/happy-birthday-cake-hd-wallpaper-ai-generated-photo.jpg" />
                <p>Legend 1</p>
            </div>
            <div>
                <CarouselImage src="https://images.pexels.com/photos/291528/pexels-photo-291528.jpeg?auto=compress&cs=tinysrgb&w=600" />
                <p>Legend 2</p>
            </div>
            <div>
                <CarouselImage src="https://images6.alphacoders.com/434/434430.jpg" />
                <p>Legend 3</p>
            </div>
        </Carousel>
    );
}

export default HomeCarousel;

const CarouselImage = styled.img`
  border-radius: 2%;
  width: 1000px !important;
  height: 600px !important;
  background-size: cover;
  image-rendering: -webkit-optimize-contrast;
`;