import { atom } from "jotai";

interface UserRegState {
  regCode: number | null;
  email: string;
  passwordOne: string;
  passwordTwo: string;
}

export const regAtom = atom<UserRegState>({
  regCode: null,
  email: "",
  passwordOne: "",
  passwordTwo: "",
});

interface UserAuthState {
  emailAuth: string;
  password: string;
}

export const authAtom = atom<UserAuthState>({
  emailAuth: "",
  password: "",
});
