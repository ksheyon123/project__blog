
import { NavigationType } from "./types";
import { TypeOfID } from "./enum";

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
]