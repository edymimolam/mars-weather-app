import React from "react";
import styled from "styled-components";
import { SectionTitle } from "../common";

const Date = () => (
  <DateContainer>
    <SectionTitle xl>Sol 377</SectionTitle>
    <Day>September 31</Day>
  </DateContainer>
);

const DateContainer = styled.div`
  grid-column: 1 / 2;
`;

const Day = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.h2};
  margin: 0;
  color: ${({ theme }) => theme.colors.gray};
  font-weight: ${({ theme }) => theme.fontWeights.light};
`;

export default Date;
