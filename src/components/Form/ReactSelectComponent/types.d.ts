import { ActionMeta, Options } from "react-select";

export interface IReactSelectComponent {
  isDisabled?: boolean;
  label?: string;
  name: string;
  id?: string;
  placeholder: string;
  isClearable?: boolean;
  isMulti?: boolean;
  noOptionsMessage?: () => string;
  maxMenuHeight?: number;
  onChange?: ((newValue: any, actionMeta: ActionMeta<any>) => void) | undefined;
  isOptionDisabled?:
    | ((option: any, selectValue: Options<any>) => boolean)
    | undefined;
  value?: any;
  options: {
    label: any;
    value: any;
  }[];
  newCustomStyle?: any;
  isLoading?: boolean;
  errorColor?: string;
  error?: string;
}