export type InputType = {
  type: "Normal" | "Search"
}

export type DirectionType = {
  direction?: "column" | "row"
}

export type ArticleType = {
  title: string;
  subtitle: string;
  category: string;
  desc: string;
  fId: number;
}