import React, { useState } from "react";
import styled, { css } from "styled-components";
import { slideUpIn } from "../common";
import PreviousDay from "./PreviousDay";
import ButtonShow from "./ButtonShow";

const PreviousWeather = () => {
  let [isShow, setIsShow] = useState(false);
  let animationDelay = 75;

  return (
    <Container isShow={isShow}>
      <ButtonShow isShow={isShow} onClick={() => setIsShow((show) => !show)} />

      <Title isShow={isShow}>Previous 7 days</Title>

      <PreviousDaysContainer>
        {new Array(7).fill("something").map((_n, i) => (
          <PreviousDay
            key={i}
            isShow={isShow}
            animationDelay={(animationDelay += 25)}
          />
        ))}
      </PreviousDaysContainer>
    </Container>
  );
};

const Container = styled.div`
  background: ${({ theme }) => theme.colors.light};
  color: ${({ theme }) => theme.colors.dark};
  position: absolute;
  bottom: 0;
  width: 100%;
  transform: ${({ isShow }) => (isShow ? "translateY(0)" : "translateY(60%)")};
  transition: transform 350ms ease;
  padding: 3rem;
`;

const Title = styled.h2`
  font-size: ${({ theme }) => theme.fontSizes.h1};
  font-weight: ${({ theme }) => theme.fontWeights.light};
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.accent};
  letter-spacing: 2px;
  text-align: center;

  ${({ isShow }) =>
    isShow &&
    css`
      animation: ${slideUpIn} 750ms forwards;
      text-align: left;
    `}
`;

const PreviousDaysContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export default PreviousWeather;
