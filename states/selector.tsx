import { selector } from "recoil";
import { searchParamsState, subdirectoryParamsState } from "./atom";
import {
  ARTICLE
} from "../constants/articles";
import { ArticleType } from "../constants/types";

export const filteredArticlesState = selector({
  key: 'filteredArticlesState',
  get: ({ get }) => {
    const _selectedNavParams = get(subdirectoryParamsState);
    const _searchParams = get(searchParamsState);
    if (_selectedNavParams === 0) {
      return ARTICLE;
    }

    if (!!_searchParams) {
      return ARTICLE;
    }
    const returnArticles = ARTICLE.filter((el: ArticleType) => el.fId === _selectedNavParams);
    return returnArticles;
  }
})