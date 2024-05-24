import styled, { css } from "styled-components";
import { theme } from "../../../styles/theme";

export const SpinnerContent = styled.div`
  display: none;
  align-items: center;
  justify-content: center;
  border: 3px solid ${theme.color.white};
  border-top: 3px solid ${theme.color.primaryL};
  border-radius: 50%;
  width: ${theme.size.sm};
  height: ${theme.size.sm};
  animation: spin 0.75s linear infinite;
  display: flex;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

export const ContainerButton = styled.div<{
  $disabled?: boolean;
  $loading: number;
  $outlined: boolean;
  $bgColor: string;
  $borderless: boolean;
  $fullWidth: boolean;
  $color?: string;
  $justify?: "flex-start" | "center" | "flex-end";
}>`
  width: ${({ $justify, $fullWidth }) =>
    $justify || $fullWidth ? "100%" : "fit-content"};
  display: flex;
  align-items: center;
  justify-content: ${({ $justify }) => $justify};

  > button {
    transition: 0.5s;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: ${theme.size.xsm};

    ${({ $fullWidth }) =>
      $fullWidth &&
      css`
        width: 100%;
      `}

    ${({ $outlined, $bgColor }) =>
      $outlined &&
      css`
        :hover {
          opacity: 0.7;
          background-color: ${`${$bgColor}26`};
        }
      `}

    ${({ $bgColor }) => $bgColor && `  background-color: ${$bgColor};`}

    ${({ $outlined, $bgColor }) =>
      $outlined &&
      css`
        outline: 2px solid ${$bgColor} !important;
        outline-offset: -2px;
        background-color: transparent;
        color: ${$bgColor};
      `}

    ${({ $disabled }) =>
      $disabled && "opacity: 0.4; :hover {opacity: 0.4;} cursor: not-allowed; "}

    ${({ $borderless }) =>
      $borderless &&
      `
      background-color: transparent;
      border: none;
      outline: none;
      color: ${theme.color.danger};
      padding: 0;
    `}

    ${({ $color }) => $color && `color: ${$color};`}

    ${({ $loading }) =>
      $loading &&
      `border-radius: 100%; padding: ${theme.size.xsm}; opacity: 1; pointer-events: none;`}
  }
`;
