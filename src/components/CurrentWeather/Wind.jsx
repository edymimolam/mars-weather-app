import React from "react";
import styled from "styled-components";
import { SectionTitle, Reading, ScreenReaders } from "../common";

const Wind = ({
  isMetric,
  wind: { compassDegrees, imperialSpeed, metricSpeed },
}) => {
  let speed = isMetric ? `${metricSpeed} kph` : `${imperialSpeed} mph`;
  let direction = `${compassDegrees}deg`;
  return (
    <WindContainer>
      <SectionTitle>Wind</SectionTitle>
      <Reading>{speed}</Reading>

      <Direction>
        <ScreenReaders>{direction}</ScreenReaders>
        <Arrow direction={direction} />
      </Direction>
    </WindContainer>
  );
};

const WindContainer = styled.div`
  grid-column: 3 / 4;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: min-content 1fr;
  align-self: start;

  @media ${({ theme }) => theme.mediaQueries.tablet} {
    grid-column: 1 / 3;
  }
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
  --direction: ${({ direction }) => direction};
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
