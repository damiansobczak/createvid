import React, { useEffect, useState } from "react";
import "./SearchResult.scss";
import axios, { AxiosResponse } from "axios";
import { IFilmsAPI, IFilmsItemAPI, IFilmsItemsAPI } from "../Featured/Interfaces";
import Thumbnail from "../Thumbnail/Thumbnail";

export default function SearchResult() {
  const [films, setFilms] = useState<IFilmsItemsAPI>([]);

  useEffect(() => {
    axios.get("https://itunes.apple.com/us/rss/topmovies/limit=100/json").then((res: AxiosResponse<IFilmsAPI>) => setFilms(res.data.feed.entry));
  }, []);

  return (
    <div className="search-result">
      {films.map((details: IFilmsItemAPI, index: number) => index < 9 && <Thumbnail isHover={false} key={details.id.label} {...details} />)}
    </div>
  );
}
