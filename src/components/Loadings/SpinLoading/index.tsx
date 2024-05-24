import { SpinContainer } from "./styles";
import { ISpinLoading } from "./utils/types";

export const SpinLoading = ({ size = 18, className }: ISpinLoading) => (
  <SpinContainer $size={size} className={className} />
);
