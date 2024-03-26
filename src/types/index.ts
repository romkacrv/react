type TUserAddress = {
  city: string;
  geolocation: Record<string, string>;
  number: number;
  street: string;
  zipcode: string;
};

export type TUser = {
  email: string;
  id: string;
  name: Record<string, string>;
  phone: string;
  address: TUserAddress;
  username: string;
  password: string;
};

export type TUsers = TUser[];
