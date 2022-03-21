import { ArticleType } from "../constants/types";
import { TypeOfID } from "./enum";

export const ARTICLE: ArticleType[] = [
  {
    id: 0,
    title: "What is the Bridge?",
    type: "개념 / 이해",
    about: "Blockchain",
    desc: `<p>
     브릿지(Bridge)는 이종의 Blockchain을 연결하기 위한 기술 / 기능입니다. <br />
     브릿지(Bridge)는 이종의 Blockchain을 연결하기 위한 기술 / 기능입니다. <br />
     브릿지(Bridge)는 이종의 Blockchain을 연결하기 위한 기술 / 기능입니다. <br />
     브릿지(Bridge)는 이종의 Blockchain을 연결하기 위한 기술 / 기능입니다. <br />
     브릿지(Bridge)는 이종의 Blockchain을 연결하기 위한 기술 / 기능입니다. <br />
     브릿지(Bridge)는 이종의 Blockchain을 연결하기 위한 기술 / 기능입니다. <br />
     브릿지(Bridge)는 이종의 Blockchain을 연결하기 위한 기술 / 기능입니다. <br />
     브릿지(Bridge)는 이종의 Blockchain을 연결하기 위한 기술 / 기능입니다. <br />
     브릿지(Bridge)는 이종의 Blockchain을 연결하기 위한 기술 / 기능입니다. <br />
     브릿지(Bridge)는 이종의 Blockchain을 연결하기 위한 기술 / 기능입니다. <br />
     브릿지(Bridge)는 이종의 Blockchain을 연결하기 위한 기술 / 기능입니다. <br />
     브릿지(Bridge)는 이종의 Blockchain을 연결하기 위한 기술 / 기능입니다. <br />
     브릿지(Bridge)는 이종의 Blockchain을 연결하기 위한 기술 / 기능입니다. <br />
     브릿지(Bridge)는 이종의 Blockchain을 연결하기 위한 기술 / 기능입니다. <br />
     브릿지(Bridge)는 이종의 Blockchain을 연결하기 위한 기술 / 기능입니다. <br />
     브릿지(Bridge)는 이종의 Blockchain을 연결하기 위한 기술 / 기능입니다. <br />
     브릿지(Bridge)는 이종의 Blockchain을 연결하기 위한 기술 / 기능입니다. <br />
     브릿지(Bridge)는 이종의 Blockchain을 연결하기 위한 기술 / 기능입니다. <br />
     브릿지(Bridge)는 이종의 Blockchain을 연결하기 위한 기술 / 기능입니다. <br />
     브릿지(Bridge)는 이종의 Blockchain을 연결하기 위한 기술 / 기능입니다. <br />
     브릿지(Bridge)는 이종의 Blockchain을 연결하기 위한 기술 / 기능입니다. <br />
     브릿지(Bridge)는 이종의 Blockchain을 연결하기 위한 기술 / 기능입니다. <br />
     브릿지(Bridge)는 이종의 Blockchain을 연결하기 위한 기술 / 기능입니다. <br />
     브릿지(Bridge)는 이종의 Blockchain을 연결하기 위한 기술 / 기능입니다. <br />
     브릿지(Bridge)는 이종의 Blockchain을 연결하기 위한 기술 / 기능입니다. <br />
     브릿지(Bridge)는 이종의 Blockchain을 연결하기 위한 기술 / 기능입니다. <br />
     브릿지(Bridge)는 이종의 Blockchain을 연결하기 위한 기술 / 기능입니다. <br />
     브릿지(Bridge)는 이종의 Blockchain을 연결하기 위한 기술 / 기능입니다람쥐. <br />
    </p>`,
    fId: TypeOfID.BLOCKCHAIN,
    relation: ["Interchain", "Crosschain"],
    createdAt: new Date(2022, 3, 21).valueOf(),
  },
  {
    id: 1,
    title: "About IDO",
    type: "개념 / 이해",
    about: "Blockchain",
    desc: "",
    fId: TypeOfID.BLOCKCHAIN,
    relation: ["DEX"],
    createdAt: new Date(2022, 3, 21).valueOf(),
  },
  {
    id: 2,
    title: "What is the HOC?",
    type: "기술 / 개발",
    about: "React",
    desc: "",
    fId: TypeOfID.REACT,
    createdAt: new Date(2022, 3, 21).valueOf(),
  },
  {
    id: 3,
    title: "React Custom Hook에 대하여",
    type: "기술 / 개발",
    about: "React",
    desc: "",
    fId: TypeOfID.REACT,
    createdAt: new Date(2022, 3, 21).valueOf(),
  },
  {
    id: 4,
    title: "Git 프로젝트 별 사용자 이름 설정",
    type: "기술 / 개발",
    about: "Git",
    desc: `<p>
    회사에서 받은 내 Mac Book은 당연하게도 업무용 Git 계정이 설정되어있다.<br />
    하지만, 계정 문제로 종종 사이드 프로젝트를 준비하면서 개인 Github에 Commit을 올릴 때, Github Profile의 Contribution에 잔디가 심어지지 않는 이슈가 발생하곤 한다.<span class="murmur">(잔디를 심는 것도 하나의 재미인데, 개발자의 동기 부여도 되고... 그런데 잔디가 심어지지 않는다는 것은 굉장한 문제이다.)</span> <br />
    사실 해당 이슈는 프로젝트당 git config 설정만 해주면 해결된다. 그런데, 무슨 이유에서인지 몇 번을 검색해본 git config user.name & user.email 설정 방법을 계속 잊어버려서 메모를 남길겸 이 텍스트를 작성한다. </div><br />
    <pre>git config user.name "사용자 이름"</pre>
    <pre>git config user.email xxx@gmail.com</pre><br />
    위와 같이 작성 후에는 아래의 코드를 통해 설정을 확인할 수 있습니다.
    <pre>git config -l</pre>
    </p>`,
    fId: TypeOfID.GIT,
    createdAt: new Date(2022, 3, 21).valueOf(),
  }
]