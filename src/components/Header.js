import React from 'react';
import styled from 'styled-components';

const StyledHeader = styled.div`
  background-color: ${(props) => props.theme.lightColor};
  color: ${({ theme }) => theme.darkColor};
  padding: 12px;

  h1 {
    text-align: center;
  }
`;

const Header = () => {
  return (
    <StyledHeader>
      <h1>Styled-components Crash Course</h1>
    </StyledHeader>
  );
};

export default Header;
