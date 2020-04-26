import React from "react";
import styled from "styled-components";
import Date from "./Date";
import Temperature from "./Temperature";
import Wind from "./Wind";
import Info from "./Info";
import Unit from "./Unit";

const CurrentWeather = ({ unit, onUnitClick }) => (
  <Container>
    <MainTitle>Latest weather at Elysium Plantitia</MainTitle>
    <Date />
    <Temperature />
    <Wind />
    <Info />
    <Unit unit={unit} onUnitClick={onUnitClick} />
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
