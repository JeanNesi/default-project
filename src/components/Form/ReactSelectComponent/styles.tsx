import styled, { css } from "styled-components";
import { theme } from "../../../styles/theme";

export const ReactSelectDiv = styled.div<{ $error?: string }>`
  width: 100%;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  font-style: normal;

  .css-w9q2zk-Input2 {
    height: 32px;
    max-height: 32px;
    padding: 0;
    margin: 0;
  }

  .css-4k6iqa-control {
    ${({ $error }) =>
      $error &&
      css`
        border: 1px solid ${theme.color.danger} !important;
      `}
  }

  > h6 {
    margin-bottom: 3px;
  }
`;

export const ErrorMessage = styled.div<{ $errorColor: string }>`
  display: flex;
  color: ${({ $errorColor }) => $errorColor};
  margin-top: 2px;

  > p {
    animation: scale-in-left 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
    @keyframes scale-in-left {
      0% {
        transform: scale(0);
        transform-origin: 0% 50%;
        opacity: 1;
      }
      100% {
        transform: scale(1);
        transform-origin: 0% 50%;
        opacity: 1;
      }
    }
  }
`;
