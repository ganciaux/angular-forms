export const USER_ROLE = ['admin', 'client'] as const;

export type UserRole = typeof USER_ROLE[number];

export interface User {
  id: string;
  username: string;
  email: string;
  password: string
  role: UserRole;
}