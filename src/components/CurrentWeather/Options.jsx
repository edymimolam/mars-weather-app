import React from "react";
import styled from "styled-components";
import Toggle from "./Toggle";

const Options = ({ isMetric, lang, onLangClick, onUnitClick }) => {
  let isRussian = lang === "ru";
  return (
    <OptionsContainer>
      <Toggle
        isToggled={isRussian}
        callback={onLangClick}
        onText="RU"
        offText="EN"
      />
      <Toggle
        isToggled={isMetric}
        callback={onUnitClick}
        onText="°C"
        offText="°F"
      />
    </OptionsContainer>
  );
};

const OptionsContainer = styled.div`
  grid-column: 3 / 4;
  display: flex;
  align-items: flex-end;
  flex-flow: row-reverse;

  @media ${({ theme }) => theme.mediaQueries.phone} {
    grid-column: 1;
  }
`;

export default Options;
