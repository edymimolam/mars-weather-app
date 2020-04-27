import React from "react";
import styled, { css } from "styled-components";
import { slideUpIn } from "../common";

const PreviousDay = ({
  isShow,
  animationDelay,
  onMoreInfoClick,
  sol: {
    date,
    solNum,
    temperature: { metricHigh, imperialHigh, metricLow, imperialLow },
  },
  isMetric,
}) => {
  let high = isMetric ? `${metricHigh}°C` : `${imperialHigh}°F`;
  let low = isMetric ? `${metricLow}°C` : `${imperialLow}°F`;

  return (
    <Day isShow={isShow} animationDelay={animationDelay}>
      <Sol> Sol {solNum}</Sol>
      <Date>{date}</Date>
      <Temperature>High: {high}</Temperature>
      <Temperature>Low: {low}</Temperature>
      <Info onClick={() => onMoreInfoClick(solNum)}>more info</Info>
    </Day>
  );
};

const Day = styled.div`
  opacity: 0;
  ${({ isShow }) =>
    isShow &&
    css`
      animation: ${slideUpIn} 750ms forwards;
    `};
  animation-delay: ${({ animationDelay }) => `${animationDelay}ms`};

  & > * {
    margin: 0;
  }
`;

const Sol = styled.h3``;

const Date = styled.p`
  font-size: 0.9rem;
  color: ${({ theme }) => theme.colors.gray};
`;

const Temperature = styled.p``;

const Info = styled.button`
  cursor: pointer;
  border: 0;
  border-radius: 100vmax;
  background: ${({ theme }) => theme.colors.dark};
  color: ${({ theme }) => theme.colors.light};
  text-transform: uppercase;
  padding: 0.3em 1em;
  margin-top: 1em;

  &:hover {
    background: ${({ theme }) => theme.colors.gray};
  }
`;

export default PreviousDay;
