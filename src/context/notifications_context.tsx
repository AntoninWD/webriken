import React, { useState, useEffect } from "react";
type notificationsObj = {
  text: string;
  dueTime: string;
  from: string;
};

type mainContext = {
  notifications: notificationsObj[];
  setNotificationsHandler: (notification: any) => void;
};
const getLocalStorage = () => {
  let n = localStorage.getItem("notifications");

  if (n) {
    let storageNotifications: notificationsObj[] = JSON.parse(n);
    return storageNotifications;
  } else {
    return [];
  }
};

export const notificationsContext = React.createContext<mainContext>({
  notifications: [],
  setNotificationsHandler: () => {},
});

const NotificationsContextProvider: React.FC = ({ children }) => {
  const [notifications, setNotifications] = useState<notificationsObj[]>(
    getLocalStorage()
  );

  useEffect(() => {
    localStorage.setItem("notifications", JSON.stringify(notifications));
  }, [notifications]);

  const setNotificationsHandler = (n: notificationsObj[]) => {
    setNotifications(n);
  };

  const contextValue: mainContext = {
    notifications: notifications,
    setNotificationsHandler: setNotificationsHandler,
  };

  return (
    <notificationsContext.Provider value={contextValue}>
      {children}
    </notificationsContext.Provider>
  );
};
export default NotificationsContextProvider;
