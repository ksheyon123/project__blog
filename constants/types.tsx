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
  createdAt: number;
}

export type NavigationType = {
  pId: number;
  name: string;
}

export type MenuType = {
  mId: number;
  name: string;
  subdirectory?: any[];
}

export type ComboBoxType = {
  value: string | number;
  name: string;
}