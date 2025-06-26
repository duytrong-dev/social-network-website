import { GenderType } from "~/constants/type.constants";

export type NewUserType = {
  id?: number;
  email: string;
  password: string;
  name: string;
  birthDate: Date;
  gender: GenderType;
  phone?: string;
  avatarUrl?: string;
  coverUrl?: string;
  nickname?: string;
  bio?: string;
  emailVerifyToken?: string;
  isVerify?: boolean;
  forgotPasswordToken?: string;
  createdAt?: Date;
  updatedAt?: Date;
}

export type UpdateUserType = {
  id: number;
  email?: string;
  password?: string;
  name?: string;
  birthDate?: Date;
  gender?: GenderType;
  phone?: string;
  avatarUrl?: string;
  coverUrl?: string;
  nickname?: string;
  bio?: string;
  emailVerifyToken?: string;
  isVerify?: boolean;
  forgotPasswordToken?: string;
  createdAt?: Date;
  updatedAt?: Date;
}