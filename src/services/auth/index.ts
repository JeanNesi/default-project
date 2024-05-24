import { v4 as uuidv4 } from "uuid";
import { IRequestLoginResponse } from "./types";

export async function requestLogin(): Promise<IRequestLoginResponse> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        token: uuidv4(),
      });
    }, 2000);
  });
}
