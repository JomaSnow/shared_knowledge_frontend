import jwtDecode from "jwt-decode";
import { User } from "../api/models/User";

export function getUserFromStorage(): User | undefined {
  const localToken: string | null = localStorage.getItem("token");
  const decodedUser: User = {};

  try {
    if (!localToken) {
      throw new Error("Token não encontrado.");
    }

    const decoded = jwtDecode<User & { exp: number; iat: number; sub: string }>(
      localToken
    );

    if (!decoded) {
      throw new Error("Não é um token válido.");
    }

    decodedUser.id = decoded.sub;
    decodedUser.email = decoded.email;
    decodedUser.role = decoded.role;

    return decodedUser;
  } catch (error) {
    throw new Error(`${error}`);
  }
}
