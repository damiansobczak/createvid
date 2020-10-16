import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "../../pages/Home";
import Categories from "../../pages/Categories";
import Settings from "../../pages/Settings";
import { AppContext, IAppContext } from "../../AppContext";
import axios, { AxiosResponse } from "axios";
import { IFilmsAPI, IFilmsItemsAPI } from "../Featured/Interfaces";

export default function Router() {
  const [films, setFilms] = useState<IFilmsItemsAPI>([]);
  const [search, setSearch] = useState({ text: "", category: "" });

  const InitialAppContext: IAppContext = {
    films: films,
    likes: [],
    favorites: [],
    search: search,
    updateSearch: ({ text, category }) => setSearch({ text, category }),
  };

  useEffect(() => {
    axios.get("https://itunes.apple.com/us/rss/topmovies/limit=100/json").then((res: AxiosResponse<IFilmsAPI>) => setFilms(res.data.feed.entry));
  }, []);

  return (
    <AppContext.Provider value={InitialAppContext}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/categories" component={Categories} />
          <Route exact path="/settings" component={Settings} />
        </Switch>
      </BrowserRouter>
    </AppContext.Provider>
  );
}
