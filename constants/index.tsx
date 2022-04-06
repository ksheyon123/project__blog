
import { NavigationType, MenuType } from "./types";
import { TypeOfID, MenuID } from "./enum";

export const PATH__NAME = {

}

export const NAV__NAME: NavigationType[] = [
  {
    pId: TypeOfID.ALL,
    name: "All"
  },
  {
    pId: TypeOfID.BLOCKCHAIN,
    name: "Blockchain"
  },
  {
    pId: TypeOfID.REACT,
    name: "React"
  },
  {
    pId: TypeOfID.VANILLAJS,
    name: "VanillaJS"
  },
  {
    pId: TypeOfID.NEXTJS,
    name: "NextJS"
  },
  {
    pId: TypeOfID.CSS,
    name: "CSS"
  },
  {
    pId: TypeOfID.GIT,
    name: "Git"
  },
  {
    pId: TypeOfID.WEBPACK,
    name: "Webpack"
  }
];

export const MENU__NAME: MenuType[] = [
  {
    mId: MenuID.PROJECT,
    name: "Projects",
    subdirectory: NAV__NAME
  },
  {
    mId: MenuID.CONTACT,
    name: "Contact",
  },
]
