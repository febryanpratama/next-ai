import { ConvertModelUser, ModelUser } from "@/src/model/modelUser";
import { post, postLogin } from "@/src/core/api/baseApi";

export const login = async (
  username: string,
  password: string,
): Promise<ModelUser | null> => {
  const resp = await postLogin("/auth/login", {
    username: username,
    password: password,
  });

  if (resp === null) {
    return null;
  }

  return ConvertModelUser.toModelUser(JSON.stringify(resp));
};

export const register = async (
  email: string,
  username: string,
  password: string,
): Promise<ModelUser | null> => {
  const resp = await post("/auth/register", {
    email: email,
    username: username,
    password: password,
  });

  if (resp === null) {
    return null;
  }

  return ConvertModelUser.toModelUser(JSON.stringify(resp));
};
