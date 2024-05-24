import { AxiosError, AxiosResponse } from "axios";
import { api } from "@/services/api";
import { catchHandler, thenHandler } from "@/utils/functions";

export const requestAdapter = async <T>({
  method,
  url,
  data,
  query,
  showSuccessToast = false,
}: IAxiosAdapter) => {
  let axiosResponse: AxiosResponse<T> | undefined;

  try {
    axiosResponse = await api.request({
      url: query ? `${url}?${new URLSearchParams(query)}` : url,
      method,
      data,
    });

    if (showSuccessToast)
      thenHandler(axiosResponse as AxiosResponse<{ message: string }>);
  } catch (error) {
    axiosResponse = undefined;
    const err = error as AxiosError<{ message: string }>;
    catchHandler(err);
    throw err;
  }

  return { response: axiosResponse?.data };
};
