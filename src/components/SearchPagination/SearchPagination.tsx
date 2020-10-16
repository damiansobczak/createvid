import React from "react";
import { ISearchPagination } from "./Interfaces";
import "./SearchPagination.scss";

export default function SearchPagination(props: ISearchPagination) {
  const pages: Array<number> = [];
  for (let i = 1; i <= Math.ceil(props.totalFilmsNumber / props.filmsPerPage); i++) {
    pages.push(i);
  }

  return (
    <div className="search-pagination">
      <div className="search-pagination__total">
        Total results: <span>{props.totalFilmsNumber}</span>
      </div>
      <div className="search-pagination__nav">
        {pages.map((number: number) => (
          <button
            onClick={() => props.changePage(number)}
            className={`search-pagination__btn ${props.currentPage === number && `search-pagination__btn--active`}`}
            key={number}
          >
            {number}
          </button>
        ))}
      </div>
    </div>
  );
}
