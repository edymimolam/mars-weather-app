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

const dualRing = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

export const LoadingSpinner = styled.div`
  display: inline-block;
  width: 80px;
  height: 80px;
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  opacity: 0.6;

  &::after {
    content: " ";
    display: block;
    width: 64px;
    height: 64px;
    margin: 8px;
    border-radius: 50%;
    border: 6px solid #fff;
    border-color: #fff transparent #fff transparent;
    animation: ${dualRing} 1.2s linear infinite;
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
