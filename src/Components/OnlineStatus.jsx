// src/components/OnlineStatus.jsx
import React, { useEffect, useState } from "react";

export default function OnlineStatus() {
  const [isOnline, setIsOnline] = useState(navigator.onLine);

  useEffect(() => {
    function handleOnline() {
      setIsOnline(true);
    }
    function handleOffline() {
      setIsOnline(false);
    }

    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []);

  return (
    <div className="flex items-center gap-2 text-sm font-medium">
      <span
        className={`h-3 w-3 rounded-full ${
          isOnline ? "bg-green-500" : "bg-red-500"
        }`}
      />
      <span>{isOnline ? "Online" : "Offline"}</span>
    </div>
  );
}
