import { User } from "../types/userType";

export type LocalStrategyType = {
  auth: {
    token: String;
  };
  user: User;
};
