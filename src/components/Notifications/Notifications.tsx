import React, { useState, useEffect } from "react";
import "./Notifications.scss";
import { INotificationsAPI, INotificationsItemsAPI, NotificationsAPI } from "../../utils/db";
import { INotificationsProps } from "./Interfaces";

export default function Notifications(props: INotificationsProps) {
  const [notifications, setNotifications] = useState<INotificationsItemsAPI>([]);

  useEffect(() => {
    setNotifications(NotificationsAPI);
  }, []);

  return (
    <div className={`notifications ${props.isOpen ? "notifications--active" : ""}`}>
      {notifications.map((item: INotificationsAPI) => (
        <div className="notifications__item" key={item.id}>
          <img className="notifications__media" src={item.thumbnail} alt="" />
          <div className="notifications__info">
            <div className="notifications__title">{item.title}</div>
            <div className="notifications__desc">{item.desc}</div>
          </div>
        </div>
      ))}
    </div>
  );
}
