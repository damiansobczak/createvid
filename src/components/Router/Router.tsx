import React, { useReducer } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "../../pages/Home";
import Categories from "../../pages/Categories";
import Settings from "../../pages/Settings";
import { ThumbnailContext } from "../../contexts/ThumbnailContext";
import { thumbnailReducer, thumbnailInitialState } from "../../reducers/thumbnailReducer";
import { modalInitialState, modalReducer } from "../../reducers/modalReducer";
import { ModalContext } from "../../contexts/ModalContext";

export default function Router() {
  const [state, dispatch] = useReducer(thumbnailReducer, thumbnailInitialState);
  const [modalState, modalDispatch] = useReducer(modalReducer, modalInitialState);

  return (
    <ModalContext.Provider value={{ modalState, modalDispatch }}>
      <ThumbnailContext.Provider value={{ state, dispatch }}>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/categories" component={Categories} />
            <Route exact path="/settings" component={Settings} />
          </Switch>
        </BrowserRouter>
      </ThumbnailContext.Provider>
    </ModalContext.Provider>
  );
}
