import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.div`
  background-color: ${({ theme }) => theme.darkColor};
  padding: 12px;
  display: flex;
  justify-content: center;
  margin-top: 24px;
`;

const FooterText = styled.h2`
  color: white;
  font-size: 32px;
  border: 1px solid red;

  ${FooterContainer}:hover & {
    color: ${({ theme }) => theme.lightColor};
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterText>Created by Raul</FooterText>
    </FooterContainer>
  );
};

export default Footer;
