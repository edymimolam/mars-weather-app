import React from "react";
import styled from "styled-components";
import Date from "./Date";
import Temperature from "./Temperature";
import Wind from "./Wind";
import Info from "./Info";
import Unit from "./Unit";

const CurrentWeather = ({
  isMetric,
  onUnitClick,
  currentSol: { solNum, date, temperature, wind },
}) => (
  <Container>
    <MainTitle>Latest weather at Elysium Plantitia</MainTitle>
    <Date solNum={solNum} date={date} />
    <Temperature temperature={temperature} isMetric={isMetric} />
    <Wind wind={wind} isMetric={isMetric} />
    <Info />
    <Unit isMetric={isMetric} onUnitClick={onUnitClick} />
  </Container>
);

const Container = styled.main`
  background: rgba(0, 0, 0, 0.7);
  padding: 2em;
  max-width: 1000px;
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
