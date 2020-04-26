import React from "react";
import styled from "styled-components";

const Unit = ({ unit, onUnitClick }) => (
  <UnitContainer onClick={onUnitClick}>
    <label htmlFor="cel">°C</label>
    <input type="radio" />

    <UnitToggle />

    <label htmlFor="fah">°F</label>
    <input type="radio" />
  </UnitContainer>
);

const UnitContainer = styled.div`
  grid-column: 3 / 4;
  place-self: end;
  color: ${({ theme }) => theme.colors.light};
  display: flex;
  opacity: 0.7;
  transition: opacity 275ms linear;

  &:hover {
    opacity: 1;
  }

  & label {
    cursor: pointer;
  }

  & input {
    clip: rect(0 0 0 0);
    clip-path: inset(50%);
    height: 1px;
    overflow: hidden;
    position: absolute;
    white-space: nowrap;
    width: 1px;
  }
`;

const UnitToggle = styled.button`
  cursor: pointer;
  width: 4em;
  border: 2px solid ${({ theme }) => theme.colors.light};
  background: transparent;
  padding: 0;
  border-radius: 100vmax;
  margin: 0 1em;

  &::after {
    content: "";
    display: block;
    background: ${({ theme }) => theme.colors.light};
    border-radius: 50%;
    height: 1rem;
    margin: 3px;
    margin-left: auto;
    width: 1rem;
  }

  :checked ~ .unitToggle::after {
    margin-left: 3px;
  }
`;

export default Unit;
