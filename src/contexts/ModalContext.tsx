import React from "react";
import { IFilmsItemAPI } from "../components/Featured/Interfaces";

export interface IModalContext {
  modalState: {
    film: IFilmsItemAPI | null;
  };
  modalDispatch?: any;
}

export const ModalContext = React.createContext<IModalContext>({
  modalState: {
    film: null,
  },
});
