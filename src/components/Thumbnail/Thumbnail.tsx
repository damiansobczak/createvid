import React, { useState, useRef, useContext } from "react";
import { ThumbnailContext } from "../../contexts/ThumbnailContext";
import { IThumbnailItem } from "./Interfaces";
import "./Thumbnail.scss";

enum Media {
  thumbnail = "thumbnail",
  video = "video",
}

export default function Thumbnail(props: IThumbnailItem) {
  const el = useRef<HTMLVideoElement>(null);
  const [media, setMedia] = useState<Media>(Media.thumbnail);
  const [time, setTime] = useState<any>(null);
  const { state, dispatch } = useContext(ThumbnailContext);

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
    <div
      className={`thumbnail ${state.dislike.includes(props) && "thumbnail--dislike"} ${props.isHover && `thumbnail--hover`}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {media === Media.thumbnail ? (
        <img className="thumbnail__media" src={props["im:image"][2].label} alt={props["im:name"].label} />
      ) : (
        <video className="thumbnail__media" width="100" height="100" ref={el}>
          <source src={props.link[1].attributes.href} type={props.link[1].attributes.type} />
          Your browser does not support the video tag.
        </video>
      )}
      <div className="thumbnail__header">
        <button
          className={`thumbnail__action ${state.like.includes(props) && "thumbnail__action--active"}`}
          onClick={() => dispatch({ type: "LIKE", payload: props })}
        >
          <span className="icon-thumbs-up"></span>
        </button>
        <button
          className={`thumbnail__action ${state.dislike.includes(props) && "thumbnail__action--active"}`}
          onClick={() => dispatch({ type: "DISLIKE", payload: props })}
        >
          <span className="icon-thumbs-down"></span>
        </button>
        {props["im:rentalPrice"]?.label && <div className="thumbnail__price">{props["im:rentalPrice"].label}</div>}
      </div>
      <div className="thumbnail__footer">
        <div className="thumbnail__title">{props["im:name"].label}</div>
        <div className="thumbnail__info">
          {props.category.attributes.label} / {props["im:releaseDate"].attributes.label}
        </div>
      </div>
    </div>
  );
}
