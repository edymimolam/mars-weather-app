import React from "react";
import styled from "styled-components";

const Toggle = ({ isToggled, callback, onText, offText }) => (
  <ToggleContainer onClick={callback}>
    <label>
      {onText}
      <input type="radio" />
    </label>

    <StyledToggle isToggled={isToggled} />

    <label>
      {offText}
      <input type="radio" />
    </label>
  </ToggleContainer>
);

const ToggleContainer = styled.div`
  color: ${({ theme }) => theme.colors.light};
  margin-left: 1rem;
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

const StyledToggle = styled.button`
  cursor: pointer;
  width: 4em;
  border: 2px solid ${({ theme }) => theme.colors.light};
  background: transparent;
  padding: 0;
  border-radius: 100vmax;
  margin: 0 1em;

  &:focus {
    outline: none;
  }

  &::after {
    content: "";
    display: block;
    background: ${({ theme }) => theme.colors.light};
    border-radius: 50%;
    height: 1rem;
    margin: 3px;
    margin-left: ${({ isToggled }) => (isToggled ? "3px" : "auto")};
    width: 1rem;
  }
`;

export default Toggle;
