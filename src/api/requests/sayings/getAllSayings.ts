import axios from "axios";
import { apiURL } from "../..";
import { Saying } from "../../models/Saying";

export async function getAllSayings(): Promise<Saying[] | string> {
  try {
    const { data } = await axios.get(apiURL + "sayings");

    return data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      return error.message;
    } else {
      return "Ocorreu um erro inesperado.";
    }
  }
}
