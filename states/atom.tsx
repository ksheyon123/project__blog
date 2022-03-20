import { atom } from "recoil";

export const navigationState = atom<boolean>({
  key: "Navbar__navigationState",
  default: false,
});