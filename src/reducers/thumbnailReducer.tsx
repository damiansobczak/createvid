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
      const disliked = state.dislike.find((element: IFilmsItemAPI) => element.id.attributes["im:id"] === action.payload.id.attributes["im:id"]);
      return !state.like.includes(action.payload)
        ? {
            ...state,
            like: [...state.like, action.payload],
            dislike: disliked ? [...state.dislike.filter((item) => !(item === disliked))] : [...state.dislike],
          }
        : { ...state };
    case "DISLIKE":
      const liked = state.like.find((element: IFilmsItemAPI) => element.id.attributes["im:id"] === action.payload.id.attributes["im:id"]);
      return !state.dislike.includes(action.payload)
        ? {
            ...state,
            like: liked ? [...state.like.filter((item) => !(item === liked))] : [...state.like],
            dislike: [...state.dislike, action.payload],
          }
        : { ...state };
    default:
      return state;
  }
}
