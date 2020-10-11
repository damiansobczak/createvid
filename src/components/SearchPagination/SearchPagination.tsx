import React from "react";
import "./SearchPagination.scss";

export default function SearchPagination() {
  return (
    <div className="search-pagination">
      <button className="search-pagination__btn">
        <span className="icon-chevron-left"></span>
      </button>
      <button className="search-pagination__btn search-pagination__btn--active">1</button>
      <button className="search-pagination__btn">2</button>
      <button className="search-pagination__btn">3</button>
      <button className="search-pagination__btn">
        <span className="icon-chevron-right"></span>
      </button>
    </div>
  );
}
