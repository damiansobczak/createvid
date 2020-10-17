export interface IState {
  like: Array<string>;
  dislike: Array<string>;
}

export const thumbnailInitialState = {
  like: [],
  dislike: [],
};

type ACTIONTYPE = { type: "LIKE"; payload: string } | { type: "DISLIKE"; payload: string };

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
