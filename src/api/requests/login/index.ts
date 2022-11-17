import axios from "axios";
import jwtDecode from "jwt-decode";
import { apiURL } from "../..";
import { getUserFromStorage } from "../../../helper/getUserFromStorage";
import { Role, User } from "../../models/User";

type LoginResponse = {
  token: string;
};

export async function login(user: User): Promise<string | undefined> {
  try {
    const { data } = await axios.post<LoginResponse>(apiURL + "auth/login", {
      email: user.email,
      password: user.password,
    });

    const token = data.token;

    localStorage.setItem("token", token);
  } catch (error) {
    if (axios.isAxiosError(error)) {
      return error.message;
    } else {
      return "Ocorreu um erro inesperado.";
    }
  }
}

export function logout(): string | undefined {
  try {
    localStorage.removeItem("token");
  } catch (error) {
    return "Ocorreu um erro inesperado.";
  }
}

export function isLoggedIn(decodedUser?: User): boolean {
  try {
    const token = localStorage.getItem("token");

    if (!token) {
      throw new Error("Você precisa estar logado para acessar esta página.");
    }

    const decoded = jwtDecode<User & { exp: number; iat: number; sub: string }>(
      token
    );

    if (!decoded) {
      throw new Error("Não é um token válido.");
    }

    if (decoded.exp * 1000 < Date.now()) {
      logout();
      throw new Error("Sessão expirada.");
    }

    if (decodedUser) {
      decodedUser = getUserFromStorage();
    }

    return true;
  } catch (error) {
    throw new Error(`${error}`);
  }
}

export function isAdmin(): boolean | string {
  let user: User = {
    role: Role.USER,
  };

  try {
    if (isLoggedIn(user)) {
      if (user.role === Role.ADMIN) {
        return true;
      }
    }
    return false;
  } catch (error) {
    throw new Error(`${error}`);
  }
}
