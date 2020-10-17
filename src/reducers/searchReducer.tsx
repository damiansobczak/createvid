import { IFilmsItemsAPI } from "../components/Featured/Interfaces";

export interface IState {
  films: IFilmsItemsAPI;
  search: {
    text: string;
    category: string;
  };
}

export const searchInitialState = {
  films: [],
  search: {
    text: "",
    category: "",
  },
};

type ACTIONTYPE = { type: "FEED"; payload: IFilmsItemsAPI } | { type: "SEARCH"; payload: { text: string; category: string } };

export function searchReducer(state: IState, action: ACTIONTYPE) {
  switch (action.type) {
    case "FEED":
      return {
        ...state,
        films: [...action.payload],
      };
    case "SEARCH":
      return {
        ...state,
        search: action.payload,
      };
    default:
      return state;
  }
}
