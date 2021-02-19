import React from 'react';
import styled, { keyframes } from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: center;
`;

const rotate = keyframes`
  0% {
    transform: rotate(0deg);
    background: #1f4287;
    border-radius: 12px;
  }

  50% {
    transform: rotate(360deg);
    background: #21e6c1;
    border-radius: 50%;
  }

  100% {
    transform: rotate(0deg);
    background: #1f4287;
    border-radius: 12px;
  }
`;

const Square = styled.div`
  width: 50px;
  height: 50px;
  animation: ${rotate} 4s linear infinite;
`;

const Animation = () => {
  return (
    <Container>
      <Square></Square>
    </Container>
  );
};

export default Animation;
