import { PaperPlane } from "@phosphor-icons/react";
import * as Style from "./styles";
import { INotFoundRegisters } from "./types";

export const NotFoundRegisters = ({
  label,
  height = "80dvh",
}: INotFoundRegisters) => (
  <Style.Container height={height}>
    <PaperPlane />
    <h6>{label}</h6>
  </Style.Container>
);
