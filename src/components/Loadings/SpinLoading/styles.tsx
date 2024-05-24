import styled from "styled-components";
import { theme } from "../../../styles/theme";

export const SpinContainer = styled.div<{ $size: number }>`
  border: ${({ $size }) => `${$size / 5}px`} solid #f3f3f3;
  border-radius: 50%;
  border-top: ${({ $size }) => `${$size / 5}px`} solid ${theme.color.primary};
  width: ${({ $size }) => `${$size}px`};
  height: ${({ $size }) => `${$size}px`};
  -webkit-animation: spin 2s linear infinite; /* Safari */
  animation: spin 2s linear infinite;

  @-webkit-keyframes spin {
    0% {
      -webkit-transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(360deg);
    }
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
