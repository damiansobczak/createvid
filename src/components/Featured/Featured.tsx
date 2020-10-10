import React, { useEffect, useState } from "react";
import "./Featured.scss";
import { Link } from "react-router-dom";
import axios, { AxiosResponse } from "axios";
import { IFilmsAPI, IFilmsItemAPI, IFilmsItemsAPI } from "./Interfaces";
import FeaturedItem from "../FeaturedItem/FeaturedItem";

export default function Featured() {
  const [films, setFilms] = useState<IFilmsItemsAPI>([]);
  const [slide, setSlide] = useState(0);

  useEffect(() => {
    axios.get("https://itunes.apple.com/us/rss/topmovies/limit=100/json").then((res: AxiosResponse<IFilmsAPI>) => setFilms(res.data.feed.entry));
  }, []);

  const slideLeft = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (slide > 0) {
      setSlide(() => slide - 1);
    }
  };

  const slideRight = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (slide < limit) {
      setSlide(() => slide + 1);
    }
  };

  const limit = 10;

  return (
    <div className="featured">
      <div className="featured__header">
        <div className="featured__title">Proposed to you</div>
        <Link to="/categories" className="featured__more">
          More
          <span className="icon-arrow-right"></span>
        </Link>
      </div>
      <div className="featured__items" style={{ transform: `translateX(calc(${slide * 26 * -1}% - ${16 * slide}px)` }}>
        {films.map((details: IFilmsItemAPI, index: number) => {
          if (index < limit) {
            return <FeaturedItem key={details.id.label} {...details} />;
          }
        })}
      </div>
      <button className="featured__nav" onClick={slideLeft}>
        <span className="icon-chevron-left"></span>
      </button>
      <button className="featured__nav featured__nav--right" onClick={slideRight}>
        <span className="icon-chevron-right"></span>
      </button>
    </div>
  );
}
