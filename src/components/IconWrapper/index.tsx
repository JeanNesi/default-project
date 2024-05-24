import { theme } from "@/styles/theme";
import * as Style from "./styles";

interface IIconWrapper {
  children: React.ReactNode;
  bgColor?: string;
}

export const IconWrapper = ({
  children,
  bgColor = theme.color.primary,
}: IIconWrapper) => (
  <Style.Wrapper $bgColor={bgColor}>{children}</Style.Wrapper>
);
