import { IUser } from "@/utils/types";

export interface ILoginRequest {
  email: string;
  password: string;
}

export interface IRequireAuth {
  children: React.ReactNode;
}

interface ISignIn {
  token: string;
}

export interface IAuthContext {
  user: IUser | null;
  setUser: React.Dispatch<React.SetStateAction<IUser | null>>;
  signIn: (signInData: ISignIn) => void;
  signOut: () => void;
}