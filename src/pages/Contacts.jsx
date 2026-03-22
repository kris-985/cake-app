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
  min-height: calc(100vh - 80px);
  position: relative;
  padding: 60px 20px;
`;

const ImageText = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  filter: brightness(0.85);
`;

const Title = styled.h2`
  font-family: 'Playfair Display', Georgia, serif;
  font-size: 32px;
  font-weight: 600;
  margin-bottom: 32px;
  z-index: 2;
  color: #2D2A26;

  @media (max-width: 768px) {
    font-size: 26px;
    margin-bottom: 24px;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  z-index: 2;
  background-color: rgba(255, 255, 255, 0.97);
  backdrop-filter: blur(20px);
  padding: 48px 56px;
  border-radius: 28px;
  box-shadow: 0 20px 60px rgba(45, 42, 38, 0.15);
  max-width: 560px;
  width: 100%;

  @media (max-width: 768px) {
    padding: 36px 28px;
    border-radius: 24px;
  }
`;

const InputField = styled.input`
  width: 100%;
  height: 52px;
  margin-bottom: 16px;
  padding: 0 20px;
  font-size: 15px;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
  border-radius: 14px;
  border: 2px solid #E8D5D0;
  background-color: #FAF7F2;
  color: #2D2A26;
  transition: all 0.3s ease;
  
  &:focus {
    outline: none;
    border-color: #C4A265;
    background-color: #FFFFFF;
  }
  
  &::placeholder {
    color: #6B6560;
  }

  @media (max-width: 768px) {
    height: 48px;
    font-size: 14px;
  }
`;

const MessageField = styled.textarea`
  width: 100%;
  height: 140px;
  margin-bottom: 24px;
  padding: 16px 20px;
  font-size: 15px;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
  border-radius: 14px;
  border: 2px solid #E8D5D0;
  background-color: #FAF7F2;
  color: #2D2A26;
  resize: vertical;
  transition: all 0.3s ease;
  
  &:focus {
    outline: none;
    border-color: #C4A265;
    background-color: #FFFFFF;
  }
  
  &::placeholder {
    color: #6B6560;
  }

  @media (max-width: 768px) {
    height: 120px;
    font-size: 14px;
  }
`;

const SubmitButton = styled.button`
  width: 100%;
  height: 52px;
  background-color: #2D2A26;
  color: #FFFFFF;
  border: none;
  border-radius: 100px;
  font-size: 15px;
  font-weight: 600;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
  letter-spacing: 0.05em;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 4px 20px rgba(45, 42, 38, 0.15);

  &:hover {
    background-color: #C4A265;
    transform: translateY(-2px);
    box-shadow: 0 8px 30px rgba(196, 162, 101, 0.3);
  }

  @media (max-width: 768px) {
    height: 48px;
    font-size: 14px;
  }
`;
