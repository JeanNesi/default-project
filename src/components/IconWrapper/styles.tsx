import styled from "styled-components";
import { theme } from "@/styles/theme";

export const Wrapper = styled.div<{ $bgColor: string }>`
  padding: ${theme.size.xxsm};
  min-width: 24px;
  min-height: 24px;
  max-width: 24px;
  max-height: 24px;
  border-radius: 100%;
  background: ${({ $bgColor }) => $bgColor};
`;
