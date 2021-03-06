import React from "react";
import styled from "styled-components";
import { ScreenReaders } from "../common";
import { useTranslation } from "react-i18next";

const Button = ({ onClick, isShow }) => {
  let { t } = useTranslation();
  return (
    <StylledButton htmlFor="weather-toggle" onClick={onClick} isShow={isShow}>
      <span>&#8593;</span>
      <ScreenReaders>{t("showPreviousWeather")}</ScreenReaders>
    </StylledButton>
  );
};

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

  @media ${({ theme }) => theme.mediaQueries.tablet} {
    transform: translate(-50%, calc(-100% - 2rem));
  }
`;

export default Button;
