import React from "react";
import "./SearchForm.scss";

export default function SearchForm() {
  return (
    <form className="search-form">
      <input placeholder="Search..." className="search-form__input" />
      <select className="search-form__select">
        <option value="Genre">Genre</option>
        <option value="Adventure">Adventure</option>
        <option value="Sci-Fi">Sci-Fi</option>
        <option value="Else">Else</option>
      </select>
      <button className="search-form__submit">
        <span className="icon-search"></span>
        Search
      </button>
    </form>
  );
}
