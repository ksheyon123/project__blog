export type InputType = {
  type: "Normal" | "Search"
}

export type DirectionType = {
  direction?: "column" | "row"
}

export type ArticleType = {
  id: number;
  title: string;
  type?: string;
  about?: string;
  desc: string;
  fId: number;
  relation?: string[];
}

export type NavigationType = {
  pId: number;
  name: string;
}