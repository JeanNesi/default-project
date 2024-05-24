// COMPONENTS
import { theme } from "../../../styles/theme";
import { ContainerButton, SpinnerContent } from "./styles";

// TYPES
import { IButton } from "./types";

export const Button = ({
  children,
  loading = false,
  outlined = false,
  bgColor = theme.color.primary,
  color,
  borderless = false,
  fullWidth = false,
  justify,
  disabled,
  type,
  ...rest
}: IButton) => (
  <ContainerButton
    $bgColor={bgColor}
    $loading={+loading}
    $disabled={disabled}
    $outlined={outlined}
    $borderless={borderless}
    $justify={justify}
    $fullWidth={fullWidth}
    $color={color}
  >
    <button {...rest} type={type} disabled={disabled || loading}>
      {loading ? <SpinnerContent /> : children}
    </button>
  </ContainerButton>
);
