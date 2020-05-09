import React from "react";
import styled from "styled-components";
import { Trans, useTranslation } from "react-i18next";

const Info = () => {
  let { t } = useTranslation();
  return (
    <InfoContainer>
      <p>{t("info.p1")}</p>
      <p>
        <Trans i18nKey="info.p2">
          This is only a part of InSight’s mission.
          <a href="https://mars.nasa.gov/insight/mission/overview/">
            Click here
          </a>
          to find out more.
        </Trans>
      </p>
    </InfoContainer>
  );
};

const InfoContainer = styled.div`
  grid-column: 1 / 3;

  @media ${({ theme }) => theme.mediaQueries.tablet} {
    grid-column: 1 / 4;
    grid-row: 2;
  }

  @media ${({ theme }) => theme.mediaQueries.phone} {
    display: none;
  }
`;

export default Info;
