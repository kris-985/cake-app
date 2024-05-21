import { useState } from "react";
import styled from "styled-components";

const Contacts = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  return (
    <Wrapper>
      <ImageText
        src="https://w0.peakpx.com/wallpaper/761/8/HD-wallpaper-cake-with-chocolate-cream-fruit-cheesecake-berries-sweets-cakes.jpg"
        alt=""
      />
      <Form
        target="_blank"
        action="https://formsubmit.co/kris.bakalov98@gmail.com"
        method="POST"
      >
        <Title>Send an inquiry</Title>
        <InputField
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <InputField
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <MessageField
          placeholder="Message..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <SubmitButton type="submit">SEND</SubmitButton>
      </Form>
    </Wrapper>
  );
};

export default Contacts;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh; 
  position: relative;
`;

const ImageText = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
`;

const Title = styled.h2`
  font-family: cursive;
  font-size: 24px;
  margin-bottom: 20px;
  z-index: 2;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  z-index: 2;
  background-color: rgba(255, 255, 255, 0.8);
  padding: 20px;
  border-radius: 3px;

  @media (max-width: 768px) {
    width: 90%;
    padding: 15px;
  }
`;

const InputField = styled.input`
  width: 600px;
  max-width: 900px;
  height: 40px;
  margin-bottom: 10px;
  padding: 5px;
  font-size: 16px;
  border-radius: 2px;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const MessageField = styled.textarea`
  width: 600px;
  max-width: 900px;
  height: 120px;
  margin-bottom: 10px;
  padding: 5px;
  font-size: 16px;
  border-radius: 2px;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const SubmitButton = styled.button`
  width: 200px;
  height: 40px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 18px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;