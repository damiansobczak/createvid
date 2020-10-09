import React, { useEffect, useState } from "react";
import "./Slider.scss";
import { ISliderItemsAPI, ISliderItemAPI, SliderAPI } from "../../utils/db";
import { durationFormat } from "../../utils/helpers";

export default function Slider() {
  const [sliders, setSliders] = useState<ISliderItemsAPI>([]);
  const [slide, setSlide] = useState(0);

  const slideLeft = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (slide > 0) {
      setSlide(() => slide - 1);
    }
  };

  const slideRight = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (slide < sliders.length - 1) {
      setSlide(() => slide + 1);
    }
  };

  useEffect(() => {
    setSliders(SliderAPI);
  }, []);

  return (
    <div className="slider" style={{ backgroundImage: `url(${sliders[slide]?.image})` }}>
      <div className="slider__items" style={{ transform: `translateX(${slide * 100 * -1}%)` }}>
        {sliders.map(({ id, title, desc, image, duration, genre, year }: ISliderItemAPI) => (
          <div className="slider__item" key={id}>
            <div className="slider__container">
              <div className="slider__tags">
                <div className="slider__tag">{genre}</div>
                <div className="slider__tag">{durationFormat(duration)}</div>
              </div>
              <h1 className="slider__title">
                {title}
                {year}
              </h1>
              <p className="slider__desc">{desc}</p>
              <div className="slider__actions">
                <button className="slider__action">
                  <span className="icon-play"></span>
                  <span>Play Now</span>
                </button>
                <button className="slider__action slider__action--secondary">
                  <span className="icon-info"></span>
                  <span>More Information</span>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="slider__navs">
        <button className={`slider__nav slide__nav--left ${slide === 0 && "slider__nav--disable"}`} onClick={slideLeft}>
          <span className="icon-chevron-left"></span>
        </button>
        <button className={`slider__nav slide__nav--left ${slide === sliders.length - 1 && "slider__nav--disable"}`} onClick={slideRight}>
          <span className="icon-chevron-right"></span>
        </button>
      </div>
    </div>
  );
}
