import SingleHomeCard from "./SingleHomeCard";
import styled from "styled-components";

const HomeCards = () => {
  return (
    <Wrapper>
      <SingleHomeCard />
    </Wrapper>
  );
};

export default HomeCards;

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
`;
