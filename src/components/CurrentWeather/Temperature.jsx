import React from "react";
import styled from "styled-components";
import { SectionTitle, Reading } from "../common";

const Temperature = ({
  temperature: { metricHigh, imperialHigh, metricLow, imperialLow },
  isMetric,
}) => {
  let high = isMetric ? `${metricHigh}°C` : `${imperialHigh}°F`;
  let low = isMetric ? `${metricLow}°C` : `${imperialLow}°F`;
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

  @media ${({ theme }) => theme.mediaQueries.tablet} {
    grid-column: 2 / 4;
    border-right: none;
    word-break: break-all;
  }

  @media ${({ theme }) => theme.mediaQueries.phone} {
    grid-column: 1;
  }
`;

export default Temperature;
