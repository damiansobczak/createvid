import React, { SetStateAction } from "react";

export interface IPopupProps {
  open: boolean;
  setOpen: React.Dispatch<SetStateAction<boolean>>;
  trigger: React.RefObject<HTMLSpanElement>;
  items: any[];
}
