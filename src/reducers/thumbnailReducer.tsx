import { IFilmsItemAPI, IFilmsItemsAPI } from "../components/Featured/Interfaces";

export interface IState {
  like: IFilmsItemsAPI;
  dislike: IFilmsItemsAPI;
}

export const thumbnailInitialState = {
  like: [],
  dislike: [],
};

type ACTIONTYPE = { type: "LIKE"; payload: IFilmsItemAPI } | { type: "DISLIKE"; payload: IFilmsItemAPI };

export function thumbnailReducer(state: IState, action: ACTIONTYPE) {
  switch (action.type) {
    case "LIKE":
      return !state.like.includes(action.payload)
        ? {
            ...state,
            like: [...state.like, action.payload],
          }
        : { ...state };
    case "DISLIKE":
      return !state.dislike.includes(action.payload)
        ? {
            ...state,
            dislike: [...state.dislike, action.payload],
          }
        : { ...state };
    default:
      return state;
  }
}
