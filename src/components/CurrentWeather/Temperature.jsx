import React from "react";
import styled from "styled-components";
import { SectionTitle, Reading } from "../common";

const Temperature = ({ temperature, isMetric }) => {
  let high = isMetric
    ? `${temperature.metricHigh}°C`
    : `${temperature.imperialHigh}°F`;
  let low = isMetric
    ? `${temperature.metricLow}°C`
    : `${temperature.imperialLow}°F`;
  return (
    <TemperatureContainer>
      <SectionTitle>Temperature</SectionTitle>
      <Reading>High: {high}</Reading>
      <Reading>Low: {low}</Reading>
    </TemperatureContainer>
  );
};

const TemperatureContainer = styled.div`
  --border: solid 0.25em ${({ theme }) => theme.colors.accentDark};
  grid-column: 2 / 3;
  border-left: var(--border);
  border-right: var(--border);
  padding: 0 2em;
`;

export default Temperature;
