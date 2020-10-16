import React, { ReactElement } from "react";
import "./SearchResult.scss";
import { IFilmsItemAPI } from "../Featured/Interfaces";
import Thumbnail from "../Thumbnail/Thumbnail";
import { ISearchResult } from "./Interfaces";

export default function SearchResult(props: ISearchResult) {
  return (
    <div className="search-result">
      {props.films.map(
        (details: IFilmsItemAPI, index: number): ReactElement => (
          <Thumbnail isHover={false} key={details.id.label} {...details} />
        )
      )}
    </div>
  );
}
