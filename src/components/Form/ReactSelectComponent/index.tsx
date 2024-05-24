import Select, { components } from "react-select";
import { IReactSelectComponent } from "./types";
import * as Style from "./styles";
import { theme } from "../../../styles/theme";
import { ErrorMessage } from "./styles";

const customStyles = {
  control: (baseStyles: any, state: any) => ({
    ...baseStyles,
    cursor: "pointer",
    border: `1px solid ${theme.color.gray4}`,
    boxShadow: state.isFocused ? 0 : 0,
    "&:hover": {
      border: `1px solid ${theme.color.gray4}`,
    },
    minHeight: "32px",
    height: "32px",
    padding: 0,
    margin: 0,
  }),
  menu: (base: any) => ({
    ...base,
    marginTop: 2,
  }),

  option: (base: any, state: any) => ({
    ...base,
    background: state.isSelected ? theme.color.primary : theme.color.white,
    cursor: "pointer",
    paddingLeft: "16px",
  }),

  indicatorsContainer: (base: any) => ({
    ...base,
    minHeight: "32px",
    height: "32px",
  }),

  valueContainer: (base: any) => ({
    ...base,
    minHeight: "32px",
    height: "32px",
    padding: 0,
    paddingLeft: "13px",
  }),

  input: (base: any) => ({
    ...base,
    minHeight: "32px",
    height: "32px",
    padding: 0,
    margin: 0,
    paddingLeft: "3px",
  }),

  placeholder: (base: any) => ({
    ...base,
    padding: 0,
    margin: 0,
    paddingLeft: "3px",
  }),
};

const LoadingMessage = (props: any) => (
  <components.LoadingMessage {...props}>
    Carregando...
  </components.LoadingMessage>
);

export const FormReactSelectComponent = ({
  maxMenuHeight = 250,
  noOptionsMessage = () => "Sem resultados",
  isDisabled,
  label,
  onChange,
  options,
  placeholder,
  isClearable = true,
  isMulti = false,
  value,
  isOptionDisabled,
  newCustomStyle,
  isLoading = false,
  error,
  errorColor = theme.color.danger,
}: IReactSelectComponent) => (
  <Style.ReactSelectDiv $error={error}>
    {label && <h6>{label}</h6>}
    <Select
      isMulti={isMulti}
      value={value}
      isDisabled={isDisabled}
      placeholder={placeholder}
      isClearable={isClearable}
      styles={newCustomStyle || customStyles}
      noOptionsMessage={noOptionsMessage}
      maxMenuHeight={maxMenuHeight}
      options={options}
      onChange={onChange}
      isOptionDisabled={isOptionDisabled}
      isLoading={isLoading}
      components={{
        LoadingMessage,
      }}
    />
    <ErrorMessage $errorColor={errorColor}>
      {!!error && <p className="p4">{error}</p>}
    </ErrorMessage>
  </Style.ReactSelectDiv>
);
