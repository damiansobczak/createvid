import React from "react";
import "./Search.scss";
import SearchForm from "../SearchForm/SearchForm";
import SearchResult from "../SearchResult/SearchResult";
import SearchPagination from "../SearchPagination/SearchPagination";

export default function Search() {
  return (
    <div className="search">
      <div className="search__header">
        <h2>Search Films</h2>
        <p>Ava (Jessica Chastain) is a deadly assassin who works for a black ops organization, traveling the globe.</p>
      </div>
      <SearchForm />
      <SearchResult />
      <SearchPagination />
    </div>
  );
}
