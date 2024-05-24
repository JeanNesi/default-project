export interface IUser {
  id: string;
  name: string;
  image: string;
}

export type ICatchHandler = {
  response?: { data: { message: string }; status: number };
};

export type IThenHandler = {
  data: { message: string };
};
