import { IFilmsItemAPI } from "../components/Featured/Interfaces";

export interface IState {
  film: IFilmsItemAPI | null;
}

export const modalInitialState = {
  film: null,
};

type ACTIONTYPE = { type: "LOAD"; payload: IFilmsItemAPI } | { type: "CLOSE" };

export function modalReducer(state: IState, action: ACTIONTYPE) {
  switch (action.type) {
    case "LOAD":
      return {
        ...state,
        film: action.payload,
      };
    case "CLOSE":
      return {
        ...state,
        film: null,
      };
    default:
      return state;
  }
}
