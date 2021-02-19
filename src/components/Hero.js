import React from 'react';
import styled from 'styled-components';

const HeroContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 24px;

  @media (max-width: 720px) {
    flex-direction: column;
    align-items: center;
  }
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  background-color: ${(props) => (props.inverted ? '#21e6c1' : '#071e3d')};
  color: ${(props) => (props.inverted ? 'black' : 'white')};
  padding: 24px ${({ defaultPadding }) => defaultPadding}px;
`;

const Button = styled.button`
  background-color: #1f4287;
  color: white;
  padding: 12px 48px;
  border: none;
  outline: none;
  margin-top: 24px;

  &:hover {
    opacity: 0.7;
  }
`;

const InvertedButton = styled(Button)`
  background-color: white;
  color: #1f4287;
`;

const RoundedInvertedButton = styled(InvertedButton)`
  border-radius: 24px;
`;

const Hero = () => {
  return (
    <HeroContainer>
      <Card defaultPadding={32}>
        <h2>Lorem Ipsum</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur nobis
          et doloremque, velit molestiae officia, laboriosam provident
          blanditiis nostrum maxime nam, totam rem voluptates amet accusantium
          est modi. Architecto vel quidem ab odio maiores consequuntur odit
          voluptatibus a, recusandae quam.
        </p>
        <a href='#'>Test</a>
        <Button>Click me</Button>
      </Card>
      <Card inverted defaultPadding={16}>
        <h2>Lorem Ipsum</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur nobis
          et doloremque, velit molestiae officia, laboriosam provident
          blanditiis nostrum maxime nam, totam rem voluptates amet accusantium
          est modi. Architecto vel quidem ab odio maiores consequuntur odit
          voluptatibus a, recusandae quam.
        </p>
        <InvertedButton>Click me</InvertedButton>
      </Card>
      <Card defaultPadding={32}>
        <h2>Lorem Ipsum</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur nobis
          et doloremque, velit molestiae officia, laboriosam provident
          blanditiis nostrum maxime nam, totam rem voluptates amet accusantium
          est modi. Architecto vel quidem ab odio maiores consequuntur odit
          voluptatibus a, recusandae quam.
        </p>
        <RoundedInvertedButton>Click me</RoundedInvertedButton>
      </Card>
    </HeroContainer>
  );
};

export default Hero;
