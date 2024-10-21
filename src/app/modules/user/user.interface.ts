export type TRegisterData = {
  name: string;
  email: string;
  password: string;
  role?: "ADMIN" | "LEARNER";
};

export type TUser = {
  email: string;
  password: string;
  role?: "ADMIN" | "LEARNER";
};

export type TProfile = {
  userId: string;
  name: string;

  role?: "ADMIN" | "LEARNER";
};
