import React, { useContext, useEffect, useState } from "react";
import "./Featured.scss";
import { Link } from "react-router-dom";
import { IFilmsItemAPI, IFilmsItemsAPI } from "./Interfaces";
import Thumbnail from "../Thumbnail/Thumbnail";
import { AppContext } from "../../AppContext";

export default function Featured() {
  const [films, setFilms] = useState<IFilmsItemsAPI>([]);
  const [slide, setSlide] = useState(0);
  const context = useContext(AppContext);

  const limit = 10;

  useEffect(() => {
    setFilms(context.films);
  }, [context]);

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

  return (
    <div className="featured">
      <div className="featured__header">
        <div className="featured__title">Proposed to you</div>
        <Link to="/categories" className="featured__more">
          More
          <span className="icon-arrow-right"></span>
        </Link>
      </div>
      <div className="featured__items" style={{ transform: `translateX(calc(${slide * 28 * -1}% - ${16 * slide}px)` }}>
        {films.map((details: IFilmsItemAPI, index: number) => index < limit && <Thumbnail key={details.id.label} isHover={true} {...details} />)}
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
