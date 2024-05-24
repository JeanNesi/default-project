// LIBS
import { forwardRef, ForwardRefRenderFunction } from "react";

// TYPES
import { IInput } from "./types";

// COMPONENTS
import { ErrorMessage, InputContainer } from "./styles";
import { theme } from "../../../styles/theme";

const FormInputBase: ForwardRefRenderFunction<HTMLInputElement, IInput> = (
  {
    label,
    labelColor = theme.color.gray5,
    errorColor = theme.color.danger,
    name,
    error,
    passwordPlaceholder,
    removeStyles = false,
    step = "any",
    max,
    type,
    ...rest
  },
  ref
) => {
  let maxDate;

  switch (type) {
    case "date":
      maxDate = "9999-12-31";
      break;

    case "datetime-local":
      maxDate = "9999-12-31T22:22:22";
      break;

    default:
      break;
  }

  return (
    <InputContainer
      $error={!!error}
      $passwordPlaceholder={passwordPlaceholder}
      $labelColor={labelColor}
      $removeStyles={removeStyles}
    >
      {label && <h6>{label}</h6>}
      <input
        id={name}
        name={name}
        ref={ref}
        step={step}
        type={type}
        max={max ?? maxDate}
        {...rest}
      />
      <ErrorMessage $errorColor={errorColor}>
        {!!error && <p className="p4">{error}</p>}
      </ErrorMessage>
    </InputContainer>
  );
};
export const FormInput = forwardRef(FormInputBase);
