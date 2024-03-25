import * as types from '../types';

export const fetchUsers = async (): Promise<[types.TUser]> => {
  return await fetch('https://fakestoreapi.com/users').then((res) =>
    res.json()
  );
};

export const fetchUser = async (id: string): Promise<types.TUser> => {
  return await fetch(`https://fakestoreapi.com/users/${id}`).then((res) =>
    res.json()
  );
};
