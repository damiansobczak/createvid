import React, { useReducer, useState, useEffect } from "react";
import "./Search.scss";
import SearchForm from "../SearchForm/SearchForm";
import SearchResult from "../SearchResult/SearchResult";
import SearchPagination from "../SearchPagination/SearchPagination";
import SearchHeader from "../SearchHeader/SearchHeader";
import { SearchContext } from "../../contexts/SearchContext";
import axios, { AxiosResponse } from "axios";
import { IFilmsAPI } from "../Featured/Interfaces";
import { searchReducer, searchInitialState } from "../../reducers/searchReducer";

export default function Search() {
  const [currentPage, setCurrentPage] = useState(1);
  const [filmsPerPage] = useState(12);
  const [state, dispatch] = useReducer(searchReducer, searchInitialState);

  useEffect(() => {
    axios
      .get("https://itunes.apple.com/us/rss/topmovies/limit=100/json")
      .then((res: AxiosResponse<IFilmsAPI>) => dispatch({ type: "FEED", payload: res.data.feed.entry }));
  }, []);

  const indexOfLastFilm = currentPage * filmsPerPage;
  const indexOfFirstFilm = indexOfLastFilm - filmsPerPage;
  const filteredFilms = state.films.filter((film) => {
    return (
      film["im:name"].label.toLowerCase().includes(state.search.text.toLowerCase()) &&
      film.category.attributes.label.toLowerCase().includes(state.search.category.toLowerCase())
    );
  });
  const currentFilms = filteredFilms.slice(indexOfFirstFilm, indexOfLastFilm);
  return (
    <SearchContext.Provider value={{ state, dispatch }}>
      <div className="search">
        <SearchHeader />
        <SearchForm updatePagination={setCurrentPage} />
        <SearchResult films={currentFilms} />
        <SearchPagination
          filmsPerPage={filmsPerPage}
          totalFilmsNumber={filteredFilms.length}
          currentPage={currentPage}
          changePage={(number: number) => setCurrentPage(number)}
        />
      </div>
    </SearchContext.Provider>
  );
}
