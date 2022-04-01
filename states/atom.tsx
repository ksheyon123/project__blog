import { atom } from "recoil";
import { TypeOfID } from "../constants/enum";
export const navigationState = atom<boolean>({
  key: "navbar__navigationState",
  default: false,
});

export const navigationParamsState = atom<number>({
  key: "navbar__navigationParamsState",
  default: TypeOfID.ALL
});

export const searchParamsState = atom<string>({
  key: "navbar__searchParamsState",
  default: ""
});