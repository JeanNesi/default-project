// #region userList
export type IUser = {
  id: string;
  name: string;
  email: string;
  image: string;
  isBlocked: boolean;
  lastAccess: string;
};

export type IRequestUsersListReponse = {
  users: IUser[];
  count: number;
};
// #endregion
