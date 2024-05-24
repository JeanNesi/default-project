import styled from "styled-components";
import { theme } from "../../styles/theme";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${theme.size.md};
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${theme.size.sm};
  flex-wrap: wrap;
`;

export const HeaderLeftSide = styled.div`
  display: flex;
  align-items: center;
  gap: ${theme.size.sm};
`;

export const ButtonsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: ${theme.size.sm};
  justify-content: flex-end;
`;

export const PaginationFooter = styled.div`
  display: flex;
  justify-content: flex-end;
`;
