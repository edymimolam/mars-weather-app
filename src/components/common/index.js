import styled, { keyframes } from "styled-components";

export const slideUpIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(50%);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const SectionTitle = styled.h2`
  font-size: ${({ theme: { fontSizes }, xl }) =>
    xl ? fontSizes.xl : fontSizes.h2};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  margin: 0;
`;

export const Reading = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.h1};
  margin: 0;
  color: ${({ theme }) => theme.colors.gray};
`;

export const ScreenReaders = styled.p`
  &:not(:focus):not(:active) {
    clip: rect(0 0 0 0);
    -webkit-clip-path: inset(50%);
    clip-path: inset(50%);
    height: 1px;
    overflow: hidden;
    position: absolute;
    white-space: nowrap;
    width: 1px;
  }
`;
