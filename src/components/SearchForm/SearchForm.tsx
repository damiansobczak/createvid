import React, { useEffect, useContext, useState } from "react";
import "./SearchForm.scss";
import { IFilmsItemAPI } from "../Featured/Interfaces";
import { ISearchForm } from "./Interfaces";
import { SearchContext } from "../../contexts/SearchContext";

export default function SearchForm(props: ISearchForm) {
  const [text, setText] = useState("");
  const [category, setCategory] = useState("");
  const [categories, setCategories] = useState<Array<string>>([]);
  const { state, dispatch } = useContext(SearchContext);

  useEffect(() => {
    let cat: Array<string> = [];
    state.films.map((item: IFilmsItemAPI) => !cat.includes(item.category.attributes.label) && cat.push(item.category.attributes.label));
    setCategories(cat);
  }, [state.films]);

  const submit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    dispatch({ type: "SEARCH", payload: { text, category } });
    props.updatePagination(1);
  };

  return (
    <form className="search-form" onSubmit={(e) => submit(e)}>
      <input
        placeholder="Search..."
        className="search-form__input"
        defaultValue=""
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setText(e.target.value)}
      />
      <select className="search-form__select" onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setCategory(e.target.value)}>
        <option value="">Categories</option>
        {categories.map((category) => (
          <option value={category} key={category}>
            {category}
          </option>
        ))}
      </select>
      <button className="search-form__submit">
        <span className="icon-search"></span>
        <span>Search</span>
      </button>
    </form>
  );
}
