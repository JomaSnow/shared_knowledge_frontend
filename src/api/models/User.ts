import { Saying } from "./Saying";

export enum Role {
  USER = "USER",
  ADMIN = "ADMIN",
}

export type User = {
  id?: String;
  email?: String;
  firstName?: String;
  lastName?: String;
  password?: String;
  role?: Role;
  created_at?: Date;
  sayings?: Saying[];
};
