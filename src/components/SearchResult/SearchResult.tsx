import React, { ReactElement } from "react";
import "./SearchResult.scss";
import { IFilmsItemAPI, IFilmsItemsAPI } from "../Featured/Interfaces";
import Thumbnail from "../Thumbnail/Thumbnail";

export default function SearchResult(props: { films: IFilmsItemsAPI }) {
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
