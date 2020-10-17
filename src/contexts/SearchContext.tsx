import React from "react";
import { IFilmsItemsAPI } from "../components/Featured/Interfaces";

export interface ISearchContext {
  state: {
    films: IFilmsItemsAPI;
    search: {
      text: string;
      category: string;
    };
  };
  dispatch?: any;
}

export const SearchContext = React.createContext<ISearchContext>({
  state: {
    films: [],
    search: {
      text: "",
      category: "",
    },
  },
});
