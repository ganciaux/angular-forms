export const USER_ROLE = ['admin', 'gest'] as const;

export type UserRole = typeof USER_ROLE[number];

export interface User {
  id: number;
  username: string;
  name: string;
  email: string;
  password: string
  role: UserRole;
}