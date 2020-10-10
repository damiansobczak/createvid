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
      setTimeout(async () => {
        setMedia(Media.video);
        const vid = await el.current?.play();
      }, 600)
    );
  };

  const handleMouseLeave = async (e: React.MouseEvent<HTMLDivElement>) => {
    if (time) {
      setMedia(Media.thumbnail);
      const vid = await el.current?.pause();
      clearTimeout(time);
      setTime(null);
    }
  };

  return (
    <div className="featured-item" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      {media === Media.thumbnail ? (
        <img className="featured-item__media" src={props["im:image"][2].label} alt="" />
      ) : (
        <video className="featured-item__media" width="100" height="100" ref={el}>
          <source src={props.link[1].attributes.href} type={props.link[1].attributes.type} />
          Your browser does not support the video tag.
        </video>
      )}
    </div>
  );
}
