import React from "react";
import styled from "styled-components";
import { SectionTitle } from "../common";
import { useTranslation } from "react-i18next";

const Date = ({ solNum, date }) => {
  const { t } = useTranslation();
  return (
    <DateContainer>
      <SectionTitle xl>
        {t("sol")} {solNum}
      </SectionTitle>
      <Day>{date}</Day>
    </DateContainer>
  );
};

const DateContainer = styled.div`
  grid-column: 1 / 2;

  @media ${({ theme }) => theme.mediaQueries.phone} {
    grid-column: 1;
  }
`;

const Day = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.h2};
  margin: 0;
  color: ${({ theme }) => theme.colors.gray};
  font-weight: ${({ theme }) => theme.fontWeights.light};
`;

export default Date;
