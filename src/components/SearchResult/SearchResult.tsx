import React, { ReactElement } from "react";
import "./SearchResult.scss";
import { IFilmsItemAPI } from "../Featured/Interfaces";
import Thumbnail from "../Thumbnail/Thumbnail";
import { ISearchResult } from "./Interfaces";

export default function SearchResult(props: ISearchResult) {
  if (props.films.length) {
    return (
      <div className="search-result">
        {props.films.map(
          (details: IFilmsItemAPI, index: number): ReactElement => (
            <Thumbnail isHover={false} key={details.id.label} {...details} />
          )
        )}
      </div>
    );
  } else {
    return (
      <div className="search-result">
        <div className="search-result__empty">
          <h2>There is no films matching your critieria.</h2>
          <p>Try to type different parameters.</p>
        </div>
      </div>
    );
  }
}
