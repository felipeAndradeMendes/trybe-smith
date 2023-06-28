export type ServiceResponseSuccess<T> = {
  status: string,
  data: T,
};

type Token = { token: string };
type Message = { message: string };

export type ServiceResponseLogin = {
  status: number,
  data: Token | Message,
};