import { ResponseUserApi, User } from '@/types/type';

export async function getAllUsers(): Promise<User[]> {
  const response = await fetch('https://reqres.in/api/users');
  const { data: users }: ResponseUserApi = await response.json();

  return users;
}

export async function getUser(id: number): Promise<User> {
  const response = await fetch(`https://reqres.in/api/users/${id}`);
  const { data: user } = await response.json();
  return user;
}
