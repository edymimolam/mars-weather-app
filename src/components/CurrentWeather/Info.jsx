import React from "react";
import styled from "styled-components";

const Info = () => (
  <InfoContainer>
    <p>
      InSight is taking daily weather measurements (temperature, wind, pressure)
      on the surface of Mars at Elysium Planitia, a flat, smooth plain near
      Mars’ equator.
    </p>
    <p>
      This is only a part of InSight’s mission.{" "}
      <a href="https://mars.nasa.gov/insight/mission/overview/">Click here</a>{" "}
      to find out more.
    </p>
  </InfoContainer>
);

const InfoContainer = styled.div`
  grid-column: 1 / 3;
`;

export default Info;
