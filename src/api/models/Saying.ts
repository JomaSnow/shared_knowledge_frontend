import { User } from "./User";

export type Saying = {
  id?: String;
  message?: String;
  date?: Date;
  created_at?: Date;
  author?: User;
  authorId?: String;
};
