import React from "react";
import { IFilmsItemsAPI } from "../components/Featured/Interfaces";

export interface IThumbnailContext {
  state: {
    like: IFilmsItemsAPI;
    dislike: IFilmsItemsAPI;
  };
  dispatch?: any;
}

export const ThumbnailContext = React.createContext<IThumbnailContext>({
  state: {
    like: [],
    dislike: [],
  },
});
