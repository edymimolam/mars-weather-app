import React from "react";
import styled from "styled-components";
import { useTranslation } from "react-i18next";
import Date from "./Date";
import Temperature from "./Temperature";
import Wind from "./Wind";
import Info from "./Info";
import Options from "./Options";

const CurrentWeather = ({
  currentSol: { solNum, date, temperature, wind },
  isMetric,
  ...otherOptions
}) => {
  const { t } = useTranslation();
  return (
    <Container>
      <MainTitle>{t("mainTitle")}</MainTitle>
      <Date solNum={solNum} date={date} />
      <Temperature temperature={temperature} isMetric={isMetric} />
      <Wind wind={wind} isMetric={isMetric} />
      <Info />
      <Options isMetric={isMetric} {...otherOptions} />
    </Container>
  );
};

const Container = styled.main`
  background: rgba(0, 0, 0, 0.7);
  padding: 2em;
  max-width: 1100px;
  margin: 4em auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 2em;

  @media ${({ theme }) => theme.mediaQueries.phone} {
    margin: 0;
    grid-template-columns: 1fr;
  }
`;

const MainTitle = styled.h1`
  font-size: ${({ theme }) => theme.fontSizes.h1};
  font-weight: ${({ theme }) => theme.fontWeights.light};
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.accent};
  letter-spacing: 2px;
  grid-column: 1 / -1;
`;

export default CurrentWeather;
