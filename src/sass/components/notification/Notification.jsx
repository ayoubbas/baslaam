import React from "react";

const Notification = ({notification}) => {
  console.log(notification.message);

  return <div className="notification">{notification.message}</div>;
};

export default Notification;
