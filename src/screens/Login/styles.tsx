import styled from "styled-components";
import { theme } from "../../styles/theme";

export const Background = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  padding: ${theme.size.sm} ${theme.size.md};
  gap: ${theme.size.xxxxlg};
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-size: cover;

  h1 {
    font-size: 64px;
    color: ${theme.color.primary};
  }
`;

export const Card = styled.div`
  background-color: ${theme.color.white};
  padding: ${theme.size.md};
  border-radius: ${theme.size.xxsm};
  max-width: 400px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: ${theme.size.sm};

  h2 {
    color: ${theme.color.primary};
  }
`;

export const Form = styled.form`
  display: grid;
  place-items: center;
`;
