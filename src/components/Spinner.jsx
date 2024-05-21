import styled from "styled-components";
import "./Spinner.css";

function Spinner() {
  return (
    <Wrapper>
      <div className="lds-ripple">
        <div></div>
        <div></div>
      </div>
    </Wrapper>
  );
}

export default Spinner;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
