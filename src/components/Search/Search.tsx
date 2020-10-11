import React, { useEffect, useState } from "react";
import "./Search.scss";
import SearchForm from "../SearchForm/SearchForm";
import SearchResult from "../SearchResult/SearchResult";
import SearchPagination from "../SearchPagination/SearchPagination";
import { IFilmsItemsAPI, IFilmsAPI } from "../Featured/Interfaces";
import axios, { AxiosResponse } from "axios";

export default function Search() {
  const [films, setFilms] = useState<IFilmsItemsAPI>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [filmsPerPage] = useState(12);

  const indexOfLastFilm = currentPage * filmsPerPage;
  const indexOfFirstFilm = indexOfLastFilm - filmsPerPage;
  const currentFilms = films.slice(indexOfFirstFilm, indexOfLastFilm);

  const changePage = (number: number) => {
    setCurrentPage(number);
  };

  useEffect(() => {
    axios.get("https://itunes.apple.com/us/rss/topmovies/limit=100/json").then((res: AxiosResponse<IFilmsAPI>) => setFilms(res.data.feed.entry));
  }, []);

  return (
    <div className="search">
      <div className="search__header">
        <h2>Search Films</h2>
        <p>Ava (Jessica Chastain) is a deadly assassin who works for a black ops organization, traveling the globe.</p>
      </div>
      <SearchForm />
      <SearchResult films={currentFilms} />
      <SearchPagination filmsPerPage={filmsPerPage} totalFilmsNumber={films.length} currentPage={currentPage} changePage={changePage} />
    </div>
  );
}
