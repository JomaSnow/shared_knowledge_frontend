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

export function isLoggedIn(decodedUser?: User): boolean | string {
  try {
    const token = localStorage.getItem("token");

    if (!token) {
      throw new Error("Não logado.");
    }

    const decoded = jwtDecode<User & { exp: number; iat: number; sub: string }>(
      token
    );

    if (!decoded) {
      throw new Error("Não logado.");
    }

    if (decoded.exp < Date.now()) {
      logout();
      throw new Error("Não logado.");
    }

    if (decodedUser) {
      decodedUser = getUserFromStorage();
    }

    return true;
  } catch (error) {
    return `Ocorreu um erro. ${error}`;
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
    return `Ocorreu um erro. ${error}`;
  }
}
