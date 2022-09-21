import axios from "axios";
import { apiURL } from "../..";
import { User } from "../../models/User";

export async function createUser(user: User): Promise<User | string> {
  try {
    const { data } = await axios.post(apiURL + "users", {
      email: user.email,
      firstName: user.firstName,
      lastName: user.lastName,
      password: user.password,
    });

    return data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      return error.message;
    } else {
      return "Ocorreu um erro inesperado.";
    }
  }
}
