// COMPONENTS
import { theme } from "../../../styles/theme";
import { ContainerButton } from "./styles";

// TYPES
import { IIconButton } from "./types";

export const IconButton = ({
  labelPos = "left",
  opacity,
  label,
  icon,
  gap = theme.size.xxsm,
  color = theme.color.gray4,
  selected,
  onClick,
  className = "p2",
  hideLabelOnMedia,
  fontWeight = "500",
  disabled = false,
  title = "",
  type = "button",
}: IIconButton) => (
  <ContainerButton
    title={title}
    disabled={disabled}
    onClick={onClick}
    type={type}
    $hideLabelOnMedia={hideLabelOnMedia}
    $labelPos={labelPos}
    $selected={selected}
    $opacity={opacity}
    $gap={gap}
    $color={color}
    $fontWeight={fontWeight}
  >
    {icon}
    {label && <p className={className}>{label}</p>}
  </ContainerButton>
);
