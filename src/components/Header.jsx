import React from 'react';
import styled from '@emotion/styled';
const Header = () => {
  return (
    <HeaderContainer>
      <h1>정현진 포트폴리오</h1>
    </HeaderContainer>
  );
};

export default Header;

const HeaderContainer = styled.div`
  position: sticky;
  top: 0;
  z-index: 100;
  padding: 10px;
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
  background-color: #fff;
  box-sizing: border-box;
  h1 {
    font-size: 16px;
    font-weight: 500;
  }
`;
