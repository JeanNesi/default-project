import { createGlobalStyle } from "styled-components";
import { theme } from "./theme";
import { img } from "@/assets/img";

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&display=swap');
  
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: DM Sans;
  }

  html {
    -webkit-tap-highlight-color: transparent;
  }

  :root {
    font-synthesis: none;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-text-size-adjust: 100%;
  }

  a {
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 16px;
    text-decoration: none;
    transition: 0.25s;
  }

  a:hover {
    opacity: 0.7;
  }

  body {
    background-color: ${theme.color.gray1};
    color: ${theme.color.gray5};
  }

  h1 {
    font-style: normal;
    font-weight: 700;
    font-size: 40px;
    line-height: 42px;
  }

  h2 {
    font-style: normal;
    font-weight: 700;
    font-size: 22px;
    line-height: 24px;
  }

  h3 {
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 22px;
  }

  h4 {
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 20px;
  }

  h5 {
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 18px;
  }

  h6 {
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 16px;
  }

  .p1 {
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 18px;
  }

  .p2 {
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 16px;
  }

  .p3 {
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 14px;
  }

  .p4 {
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 14px;
  }

  .p5 {
    font-style: normal;
    font-weight: 500;
    font-size: 10px;
    line-height: 12px;
  }

  .p6 {
    font-style: normal;
    font-weight: 400;
    font-size: 10px;
    line-height: 12px;
  }

  .p7 {
    font-style: normal;
    font-weight: 500;
    font-size: 8px;
    line-height: 10px;
  }

  .p8 {
    font-style: normal;
    font-weight: 400;
    font-size: 8px;
    line-height: 10px;
  }

  input {
    font-weight: 400;
    font-size: 14px;
    line-height: 16px;
    font-style: normal;
    outline: none;
    width: 100%;
    color: ${theme.color.gray5};
    background-color: ${theme.color.white};
    border: 1px solid ${theme.color.gray4};
    height: 32px;
    border-radius: ${theme.size.xxsm};
    padding: ${theme.size.xsm} ${theme.size.sm};
  }

  input[type=checkbox] {
    width: 16px;
    height: 16px;
    cursor: pointer;
  }

  input[type=radio] {
    width: 16px;
    height: 16px;
    cursor: pointer;
  }

  input[type=date],
  input::-webkit-calendar-picker-indicator {
    cursor: pointer;

  }

  input[type=file],
  input[type=file]::-webkit-file-upload-button {
    cursor: pointer;
  }

  input[disabled],textarea[disabled],select[disabled] {
    cursor: not-allowed !important;
    background-color: ${theme.color.gray1} !important;
    color: ${theme.color.gray4} !important;
    opacity: 1 !important;
  }

  textarea {
    color: ${theme.color.gray5};
    font-weight: 400;
    font-size: 14px;
    line-height: 16px;
    font-style: normal;
    outline: none;
    width: 100%;
    background-color: ${theme.color.white};
    border: 1px solid ${theme.color.gray4};
    height: 100px;
    border-radius: ${theme.size.xxsm};
    padding: ${theme.size.xsm} ${theme.size.sm} ;
    resize: none;
  }

  select {
    color: ${theme.color.gray5};
    cursor: pointer;
    -moz-appearance: none;
    -webkit-appearance: none;
    appearance: none;
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;
    font-style: normal;
    outline: none;
    width: 100%;
    background-color: ${theme.color.white};
    border: 1px solid ${theme.color.gray4};
    height: 32px;
    border-radius: ${theme.size.xxsm};
    padding: 0 ${theme.size.sm};
    background-image: url(${img.grayArrow});
    background-repeat: no-repeat, repeat;
    background-position: right ${theme.size.sm} top 50%, 0 0;
    background-size: 16px;
  }

  option {
    color: ${theme.color.gray5};
  }

  option[disabled] {
    color: ${theme.color.gray4};
  }

  button[disabled] {
    cursor: not-allowed !important;
  }

  button {
    font-size: 14px;
    line-height: 16px;
    font-weight: 500;
    border-radius: ${theme.size.xxsm};
    padding: ${theme.size.xsm} ${theme.size.sm};
    outline: none !important;
    border: none;
    cursor: pointer;
    color: ${theme.color.white};
    background-color: ${theme.color.primary};
    transition: 0.25s;
  }

  button:hover {
    opacity: 0.7;
  }

  table {
    th {
      font-style: normal;
      font-weight: 500;
      font-size: 14px;
      line-height: 16px;
    }

   td {
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 16px;
   }
  }

  form {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: ${theme.size.sm};


    button[type='submit'] {
      margin-top: ${theme.size.xsm};
    }
  }

  ::-webkit-scrollbar {
    @media (max-width: 900px) {
     display: none;
    }
}
`;
