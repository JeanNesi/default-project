// LIBS
import { forwardRef, ForwardRefRenderFunction } from "react";
import { ErrorMessage, SelectContainer } from "./styles";
import { SelectProps } from "./types";

const FormSelectBase: ForwardRefRenderFunction<
  HTMLSelectElement,
  SelectProps
> = ({ label, name, error, watchValue = "", ...rest }, ref) => (
  <SelectContainer $error={!!error} $watchValue={watchValue}>
    {label && <h6>{label}</h6>}
    <select id={name} name={name} ref={ref} {...rest} />
    <ErrorMessage>{!!error && <p className="p4">{error}</p>}</ErrorMessage>
  </SelectContainer>
);
export const FormSelect = forwardRef(FormSelectBase);
