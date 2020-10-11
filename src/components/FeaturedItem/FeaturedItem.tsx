import React, { useState, useRef } from "react";
import { IFeaturedItem } from "./Interfaces";
import "./FeaturedItem.scss";

enum Media {
  thumbnail = "thumbnail",
  video = "video",
}

export default function FeaturedItem(props: IFeaturedItem) {
  const el = useRef<HTMLVideoElement>(null);
  const [media, setMedia] = useState<Media>(Media.thumbnail);
  const [time, setTime] = useState<any>(null);

  const handleMouseEnter = (e: React.MouseEvent<HTMLDivElement>) => {
    setTime(
      setTimeout(() => {
        setMedia(Media.video);
        el.current?.play();
      }, 600)
    );
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    if (time) {
      setMedia(Media.thumbnail);
      el.current?.pause();
      clearTimeout(time);
      setTime(null);
    }
  };

  return (
    <div className="featured-item" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      {media === Media.thumbnail ? (
        <img className="featured-item__media" src={props["im:image"][2].label} alt={props["im:name"].label} />
      ) : (
        <video className="featured-item__media" width="100" height="100" ref={el}>
          <source src={props.link[1].attributes.href} type={props.link[1].attributes.type} />
          Your browser does not support the video tag.
        </video>
      )}
      <div className="featured-item__header">
        <button className="featured-item__action">
          <span className="icon-thumbs-up"></span>
        </button>
        <button className="featured-item__action">
          <span className="icon-thumbs-down"></span>
        </button>
        {props["im:rentalPrice"]?.label && <div className="featured-item__price">{props["im:rentalPrice"].label}</div>}
      </div>
      <div className="featured-item__footer">
        <div className="featured-item__title">{props["im:name"].label}</div>
        <div className="featured-item__info">
          {props.category.attributes.label} / {props["im:releaseDate"].attributes.label}
        </div>
      </div>
    </div>
  );
}
