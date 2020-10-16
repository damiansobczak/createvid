import React from "react";
import { IFilmsItemsAPI } from "./components/Featured/Interfaces";

export interface IAppContext {
  films: IFilmsItemsAPI;
  likes: [];
  favorites: [];
  search: {
    text: string;
    category: string;
  };
  updateSearch: (o: any) => void;
}

export const AppContext = React.createContext<IAppContext>({
  films: [],
  likes: [],
  favorites: [],
  search: {
    text: "",
    category: "",
  },
  updateSearch: ({ text, category }) => {},
});
