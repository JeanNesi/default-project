export interface IIconButton {
  icon: React.ReactNode;
  gap?: string;
  color?: string;
  label?: string;
  opacity?: string;
  className?: string;
  labelPos?: "left" | "right" | "top" | "bottom";
  selected?: boolean;
  onClick: (evt: any) => void;
  hideLabelOnMedia?: boolean;
  fontWeight?: string;
  disabled?: boolean;
  title?: string;
  type?: "submit" | "button";
}
