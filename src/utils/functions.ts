// #region imports
import { toast } from "react-toastify";
import { ICatchHandler, IThenHandler } from "./types";

// #endregion

// #region dates
export const dateFormatter = (date: string | Date) => {
  if (!date) return "";
  return new Date(date).toLocaleDateString("pt-BR", { timeZone: "UTC" });
};
export const dateTimeFormatter = (date: string | Date) => {
  if (!date) return "";

  return new Date(date).toLocaleString("pt-BR", {
    timeStyle: "short",
    dateStyle: "short",
  });
};

export const dateToISOFormatter = (date: string | Date) => {
  if (!date) return "";
  return new Date(date).toISOString().substring(0, 10);
};

export const setToUTCMidnight = (date: string) =>
  new Date(new Date(date).setUTCHours(3, 0, 0, 0));
// #endregion

// #region masks
export const mask = ({
  type,
  value,
}: {
  type: "CPF" | "CNPJ" | "TEL" | "CEP" | "BRL" | "NUM" | "DEC";
  value: string;
}) => {
  let formattedValue = "";

  switch (type) {
    case "CPF":
      formattedValue = value
        .substring(0, 14)
        .replace(/\D/g, "")
        .replace(/^(\d{9})(\d)/g, "$1-$2")
        .replace(/^(\d{6})(\d)/g, "$1.$2")
        .replace(/^(\d{3})(\d)/g, "$1.$2");
      break;

    case "CNPJ":
      formattedValue = value
        .substring(0, 18)
        .replace(/\D/g, "")
        .replace(/^(\d{12})(\d)/g, "$1-$2")
        .replace(/^(\d{8})(\d)/g, "$1/$2")
        .replace(/^(\d{5})(\d)/g, "$1.$2")
        .replace(/^(\d{2})(\d)/g, "$1.$2");
      break;

    case "CEP":
      formattedValue = value
        .substring(0, 9)
        .replace(/\D/g, "")
        .replace(/^(\d{5})(\d)/g, "$1-$2");
      break;

    case "TEL":
      formattedValue = value
        .substring(0, 15)
        .replace(/\D/g, "")
        .replace(/^(\d{2})(\d)/g, "($1) $2")
        .replace(/(\d)(\d{4})$/, "$1-$2");
      break;

    case "BRL":
      formattedValue = (Number(value.replace(/[^0-9]*/g, "")) / 100)
        .toLocaleString("pt-br", {
          style: "currency",
          currency: "BRL",
        })
        .substring(0, 30);

      break;

    case "NUM":
      formattedValue = value.substring(0, 30).replace(/[^0-9]*/g, "");
      break;

    case "DEC":
      formattedValue = (Number(value.replace(/[^0-9]*/g, "")) / 100)
        .toLocaleString("pt-br", {
          minimumFractionDigits: 2,
        })
        .substring(0, 30);
      break;

    default:
      break;
  }
  return formattedValue;
};

export const unMask = (value: string) => value.replace(/[^0-9]/g, "");
// #endregion

// #region requests
export const catchHandler = (err: ICatchHandler) => {
  toast.dismiss();
  if (err.response?.data) {
    if (err.response.data.message) toast.error(err.response.data.message);
    else toast.error(`Erro: ${err.response.status}`);

    if (err.response.status === 401 && window.location.pathname !== "/login")
      window.location.pathname = "/login";
  } else {
    toast.error("Erro de comunicação");
  }
};

export const thenHandler = (res: IThenHandler) => {
  toast.dismiss();
  if (res.data) {
    toast.success(res.data.message);
  } else {
    toast.success("Sucesso");
  }
};
// #endregion
