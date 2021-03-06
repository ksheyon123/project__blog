import { ArticleType } from "../constants/types";
import { TypeOfID } from "./enum";

// pre-defines : span.murmur, span.str, a

export const ARTICLE: ArticleType[] = [
  {
    id: 0,
    title: "Interchain에서 브릿지(Bridge)란?",
    type: "개념 / 정의",
    about: "Blockchain",
    desc: `<p>
     브릿지(Bridge)는 이종의 Blockchain을 연결하기 위한 기술 / 기능?이라고 생각합니다. <br />
     최근 Blockchain Game Platform 개발을 위해 기술분석을 진행하면서 이해한 부분들을 정리하려고 합니다. <br />
     <a href="https://www.naver.com">Bridge 정보</a>
    </p>`,
    fId: TypeOfID.BLOCKCHAIN,
    relation: ["Interchain", "Crosschain"],
    createdAt: new Date(2022, 3, 21).valueOf(),
  },
  {
    id: 1,
    title: "IDO에 대하여",
    type: "개념 / 정의",
    about: "Blockchain",
    desc: "",
    fId: TypeOfID.BLOCKCHAIN,
    relation: ["DEX"],
    createdAt: new Date(2022, 3, 21).valueOf(),
  },
  {
    id: 2,
    title: "고차컴포넌트(HOC)란?",
    type: "개념 / 정의",
    about: "React",
    desc: "",
    fId: TypeOfID.REACT,
    createdAt: new Date(2022, 3, 21).valueOf(),
  },
  {
    id: 3,
    title: "React Custom Hook에 대하여",
    type: "개념 / 정의",
    about: "React",
    desc: "",
    fId: TypeOfID.REACT,
    createdAt: new Date(2022, 3, 21).valueOf(),
  },
  {
    id: 4,
    title: "Git 프로젝트 별 사용자 이름 설정",
    type: "개념 / 정의",
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
  },
  {
    id: 5,
    title: "Dispatch<SetStateAction<Type>>란?",
    type: "개념 / 정의",
    about: "React",
    desc: ``,
    fId: TypeOfID.REACT,
    createdAt: new Date(2022, 3, 22).valueOf(),
  },
  {
    id: 6,
    title: "Webpack사용법 (1)",
    type: "기술 / 개발",
    about: "Webpack",
    desc: `<p>
      이번 프로젝트를 하면서 Blockchain을 Chrome Extension을 통해 개발할 것 같아서, 미뤄왔던 Webpack에 대해서 공부하고자 합니다. <br /><span class="murmur">(Chrome Extension을 배포하려면 React Project를 Eject 해야하는 것 같습니다.)</span><br />
      기초가 되는 내용은 오른쪽의 Link와 Docs를 통해 공부했습니다. <a href="https://www.youtube.com/watch?v=IZGNcSuwBZs&t=888s">Basic Tutorials</a><br />
    </p>`,
    fId: TypeOfID.WEBPACK,
    createdAt: new Date(2022, 3, 23).valueOf(),
  },
  {
    id: 7,
    title: "IPFS란?(1)",
    type: "개념 / 정의",
    about: "Blockchain",
    desc: `<p>
      IPFS(InterPlanetary File System)는 Distributed File System을 통해 데이터를 저장하고 공유하는 프로토콜(Protocol)과 P2P 네트워크입니다. IPFSsms <span class="italic underline">Global-namespace</span>에 연결중인 모든 컴퓨팅 장비에서 <span class="italic underline">Content-addressing</span>을 사용하여 각 파일을 고유하게 확인합니다.<br />
     </p>
     <p>
     아래는 IPFS를 이해하기 위한 기본적인 구성 요소입니다.
     </P>
     <h3>Content-addressing & CIDs</h3>
     <p>
     CIDs(Content Identifiers)는 IPFS에서 Material을 가르키는데 사용되는 label(Address)입니다.<br />
      CIDs는 Content가 저장된 장소를 지시하는 것이 아닌 Content 자체에 기반한 일종의 주소를 형성합니다.<br />
     </p>
      <div class="img-box">
        <img src="/assets/7/7_1.png" alt="7_1" unsafe_url="https://www.freecodecamp.org/news/technical-guide-to-ipfs-decentralized-storage-of-web3/"/>
      </div>
     <h3>Merkle DAGs(Directed Acyclic Graphs)</h3>
     <p>
     Merkle DAG은 Merkle Tree와 방향성 비순환 그래프(DAGs)의 조합으로 머클트리는 P2P네트워크에서 전달되는 데이터 블록이 변경되지 않음을 증명하는데 사용됩니다. 일반적으로 Balance를 기록하는 Blockchain의 tx와 다르게 Merkle DAG은 Data를 암호화?합니다. 
     </p>
     <div class="img-box">
        <img src="/assets/7/7_2.png" alt="7_1" unsafe_url="https://www.freecodecamp.org/news/technical-guide-to-ipfs-decentralized-storage-of-web3/"/>
      </div>
      <h3>DHTs(Distributed Hash Tables)</h3>
      <p>
      분산 해시 테이블(DHTs)은 키를 값에 매핑할 수 있는 구조를 구현하는 데이터 구조입니다. IPFS는 어떤 Peer가 당신이 찾는 콘텐츠를 호스팅하고 있는지 찾기 위해  분산 해시 테이블(DHTs)을 사용하며, 분산 해시 테이블은 테이블이 분산 네트워크의 모든 Peer로 분할되는 테이블입니다. <br />
      </p>
      <h3>Pin</h3>
      <p>
      </p>
     `,
    fId: TypeOfID.BLOCKCHAIN,
    createdAt: new Date(2022, 3, 24).valueOf(),
  },
  {
    id: 8,
    title: "IPFS란?(2)",
    type: "개념 / 정의",
    about: "Blockchain",
    desc: `
      <p>
      IPFS File Sharing과 Delay
      </p>
      <p>
      IPFS 사용법을 조사하면서 bitswap, bootstrap, swarm 등의 커맨드와 사용법 등을 확인하려고 합니다. 최근 진행한 기술 조사에서 NFT를 저장할 Storage로 IPFS 활용을 위해 자료를 조사했습니다. 아직 활용에 대해서 의문인 부분은 많지만 우선 이해한 부분을 정리해보고자 합니다.
     </p>
     <p>
      IPFS는 Pinning한 컨텐츠를 다운받아 Caching한 사용자의 수가 많을 수록 해당 컨텐츠를 가져오는 속도가 빠르게 된다. 다만, 이 부분에서 내가 A File을 올렸을 때, 아무도 해당 컨텐츠를 다운받지 않았다면 다운로드가 오래걸릴 수 있습니다.
     </p>
     `,
    fId: TypeOfID.BLOCKCHAIN,
    createdAt: new Date(2022, 4, 5).valueOf(),
  }
]