import { HttpRequest } from "../utils";

const httpRequest = new HttpRequest();

export const getHome = async ({ page, }: {page: number, }) => {
  const res = await httpRequest.get("/homescreens", { page,  });
  return res;
};
