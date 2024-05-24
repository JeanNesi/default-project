import { IRequestUsersListReponse } from "./types";

// #region GET
export async function requestUsersList(): Promise<IRequestUsersListReponse> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        users: [
          {
            id: "1",
            name: "Teste",
            email: "teste@gmail.com",
            image:
              "https://plus.unsplash.com/premium_photo-1712844381866-470ab52b934b?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            isBlocked: false,
            lastAccess: "2021-09-01T00:00:00.000Z",
          },
        ],
        count: 0,
      });
    }, 2000);
  });
}
