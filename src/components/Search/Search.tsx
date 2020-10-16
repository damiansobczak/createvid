import React, { useContext, useState } from "react";
import "./Search.scss";
import SearchForm from "../SearchForm/SearchForm";
import SearchResult from "../SearchResult/SearchResult";
import SearchPagination from "../SearchPagination/SearchPagination";
import { AppContext } from "../../AppContext";

export default function Search() {
  const context = useContext(AppContext);
  const [currentPage, setCurrentPage] = useState(1);
  const [filmsPerPage] = useState(12);

  const indexOfLastFilm = currentPage * filmsPerPage;
  const indexOfFirstFilm = indexOfLastFilm - filmsPerPage;
  const filteredFilms = context.films.filter((film) => {
    return (
      film["im:name"].label.toLowerCase().includes(context.search.text.toLowerCase()) &&
      film.category.attributes.label.toLowerCase().includes(context.search.category.toLowerCase())
    );
  });
  const currentFilms = filteredFilms.slice(indexOfFirstFilm, indexOfLastFilm);

  return (
    <div className="search">
      <div className="search__header">
        <h2>Search Films</h2>
        <p>Ava (Jessica Chastain) is a deadly assassin who works for a black ops organization, traveling the globe.</p>
      </div>
      <SearchForm updatePagination={setCurrentPage} />
      <SearchResult films={currentFilms} />
      <SearchPagination
        filmsPerPage={filmsPerPage}
        totalFilmsNumber={filteredFilms.length}
        currentPage={currentPage}
        changePage={(number: number) => setCurrentPage(number)}
      />
    </div>
  );
}
