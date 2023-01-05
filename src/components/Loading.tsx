import React from 'react';
import styled from 'styled-components';
import spinner from '../assets/spinner.gif';

const Loading = () => {
  return (
    <Background>
      <LoadingText>Loading...</LoadingText>
      <img src={spinner} alt="로딩중" width="5%" />
    </Background>
  );
};

export default Loading;

const Background = styled.div`
  position: absolute;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  background: #ffffffb7;
  z-index: 999;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const LoadingText = styled.div`
  text-align: center;
`;
