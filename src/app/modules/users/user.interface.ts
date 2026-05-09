export type UserRole = "user" | "librarian" | "admin";

export interface IUser {
  id: string;
  name: string;
  email: string;
  password: string;

  photoUrl?: string;
  age?: number;
  phone?: string;
  address?: string;

  role: UserRole;

  createdAt: Date;
  updatedAt: Date;
}