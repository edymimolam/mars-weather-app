import React from "react";
import styled from "styled-components";
import { SectionTitle, Reading, ScreenReaders } from "../common";

const Wind = () => (
  <WindContainer>
    <SectionTitle>Wind</SectionTitle>
    <Reading>75 kph</Reading>

    <Direction>
      <ScreenReaders>45deg</ScreenReaders>
      <Arrow />
    </Direction>
  </WindContainer>
);

const WindContainer = styled.div`
  grid-column: 3 / 4;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: min-content 1fr;
  align-self: start;
`;

const Direction = styled.div`
  --size: 6rem;
  width: var(--size);
  height: var(--size);
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.5);
  display: grid;
  place-items: center;
  grid-row: 1 / span 2;
`;

const Arrow = styled.div`
  --direction: 110deg;
  --size: 1rem;
  height: calc(var(--size) * 3);
  width: var(--size);
  background: ${({ theme }) => theme.colors.accentDark};
  clip-path: polygon(50% 0, 0% 100%, 100% 100%);
  transform: translateY(-50%) rotate(var(--direction));
  transform-origin: bottom center;
  transition: transform 500ms ease;
`;

export default Wind;
