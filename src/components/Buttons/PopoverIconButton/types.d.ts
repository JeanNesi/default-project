export interface IPopoverButton {
  label: string;
  message: {
    title: string;
    content: string;
    contentColor?: string | undefined;
  };
  actionButtonBgColor?: string;
  actionButtonClick: () => void;
  loading?: boolean;
  disabled?: boolean;
  hiddenIconButtonLabel?: boolean;
  iconButtonColor?: string;
  buttonIcon: React.ReactNode;
  iconButtonClassName?: string;
  hideLabelOnMedia?: boolean;
  labelPos?: "left" | "right" | "top" | "bottom";
  fontWeight?: string;
}
