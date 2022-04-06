import { atom } from "recoil";
import { TypeOfID, MenuID } from "../constants/enum";

export const navigationState = atom<boolean>({
  key: "navbar__navigationState",
  default: false,
});

export const navigationParamsState = atom<number>({
  key: "navbar__navigationParamsState",
  default: MenuID.PROJECT
});

export const subdirectoryParamsState = atom<number>({
  key: "navbar__subdirectoryParamsState",
  default: TypeOfID.ALL
})

export const searchParamsState = atom<string>({
  key: "navbar__searchParamsState",
  default: ""
});