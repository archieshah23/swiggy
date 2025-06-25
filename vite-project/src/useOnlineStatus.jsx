import { useEffect, useState } from "react";

export const useOnlineStatus = () => {
  const [onlinestatus, setOnlinestatus] = useState(true);
  useEffect(() => {
    window.addEventListener("offline", () => {
      setOnlinestatus(false);
    });
    window.addEventListener("online", () => {
      setOnlinestatus(true);
    });
  }, []);
  return onlinestatus;
};
