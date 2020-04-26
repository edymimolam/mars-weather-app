import React from "react";
import styled from "styled-components";
import { SectionTitle, Reading } from "../common";

const Temperature = () => (
  <TemperatureContainer>
    <SectionTitle>Temperature</SectionTitle>
    <Reading>High: -20°C</Reading>
    <Reading>Low: -120°C</Reading>
  </TemperatureContainer>
);

const TemperatureContainer = styled.div`
  --border: solid 0.25em ${({ theme }) => theme.colors.accentDark};
  grid-column: 2 / 3;
  border-left: var(--border);
  border-right: var(--border);
  padding: 0 2em;
`;

export default Temperature;
