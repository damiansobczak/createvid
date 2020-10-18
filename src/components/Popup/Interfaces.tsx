import React, { SetStateAction } from "react";
import { IFilmsItemsAPI } from "../Featured/Interfaces";

export interface IPopupProps {
  open: boolean;
  setOpen: React.Dispatch<SetStateAction<boolean>>;
  trigger: React.RefObject<HTMLSpanElement>;
  items: IFilmsItemsAPI;
}
