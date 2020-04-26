import React from "react";
import styled from "styled-components";
import { ScreenReaders } from "../common";

const Button = ({ onClick, isShow }) => (
  <StylledButton htmlFor="weather-toggle" onClick={onClick} isShow={isShow}>
    <span>&#8593;</span>
    <ScreenReaders>Show previous weather</ScreenReaders>
  </StylledButton>
);

const StylledButton = styled.button`
  position: absolute;
  background: ${({ theme }) => theme.colors.light};
  left: 50%;
  width: 10rem;
  transform: translate(-50%, calc(-100% - 3rem));
  text-align: center;
  font-size: ${({ theme }) => theme.fontSizes.h2};
  line-height: 1;
  clip-path: polygon(50% 0, 0 100%, 100% 100%);
  cursor: pointer;
  color: ${({ theme }) => theme.colors.gray};
  border: 0;
  font-family: inherit;

  &:hover,
  &:focus {
    color: ${({ theme }) => theme.colors.dark};
  }

  & span {
    display: block;
    transform: rotate(0);
    transition: transform 300ms ease;

    ${({ isShow }) => isShow && "transform: rotate(180deg) translateY(-6px);"}
  }
`;

export default Button;
