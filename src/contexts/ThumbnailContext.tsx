import React from "react";

export interface IThumbnailContext {
  state: {
    like: Array<string>;
    dislike: Array<string>;
  };
  dispatch?: any;
}

export const ThumbnailContext = React.createContext<IThumbnailContext>({
  state: {
    like: [],
    dislike: [],
  },
});
