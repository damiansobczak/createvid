import React, { useState, useRef, useContext } from "react";
import { ModalContext } from "../../contexts/ModalContext";
import { ThumbnailContext } from "../../contexts/ThumbnailContext";
import { IThumbnailItem, EnumMedia } from "./Interfaces";
import "./Thumbnail.scss";

export default function Thumbnail(props: IThumbnailItem) {
  const videoElement = useRef<HTMLVideoElement>(null);
  const actionsElement = useRef<HTMLDivElement>(null);

  const [media, setMedia] = useState<EnumMedia>(EnumMedia.thumbnail);
  const [time, setTime] = useState<any>(null);
  const { state, dispatch } = useContext(ThumbnailContext);
  const { modalDispatch } = useContext(ModalContext);

  const handleMouseEnter = (e: React.MouseEvent<HTMLDivElement>) => {
    setTime(
      setTimeout(() => {
        setMedia(EnumMedia.video);
        videoElement.current?.play();
      }, 400)
    );
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    if (time) {
      setMedia(EnumMedia.thumbnail);
      videoElement.current?.pause();
      clearTimeout(time);
      setTime(null);
    }
  };

  const handleOpenModal = (e: any) => {
    if (!actionsElement.current?.contains(e.target)) {
      modalDispatch({ type: "LOAD", payload: props });
    }
  };

  const isLiked = state.like.filter((item) => item.id.attributes["im:id"] === props.id.attributes["im:id"]).length ? true : false;
  const isDisliked = state.dislike.filter((item) => item.id.attributes["im:id"] === props.id.attributes["im:id"]).length ? true : false;

  return (
    <div
      className={`thumbnail ${isDisliked && "thumbnail--dislike"} ${props.isHover && `thumbnail--hover`}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={(e) => handleOpenModal(e)}
    >
      {media === EnumMedia.thumbnail ? (
        <img className="thumbnail__media" src={props["im:image"][2].label} alt={props["im:name"].label} />
      ) : (
        <video className="thumbnail__media" width="100" height="100" ref={videoElement}>
          <source src={props.link[1].attributes.href} type={props.link[1].attributes.type} />
          Your browser does not support the video tag.
        </video>
      )}
      <div className="thumbnail__header" ref={actionsElement}>
        <button className={`thumbnail__action ${isLiked && "thumbnail__action--active"}`} onClick={() => dispatch({ type: "LIKE", payload: props })}>
          <span className="icon-thumbs-up"></span>
        </button>
        <button className={`thumbnail__action ${isDisliked && "thumbnail__action--active"}`} onClick={() => dispatch({ type: "DISLIKE", payload: props })}>
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
