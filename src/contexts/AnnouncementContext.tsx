import React, { createContext, useContext, useState } from "react";

interface AnnouncementContextType {
  isVisible: boolean;
  setIsVisible: (visible: boolean) => void;
}

const AnnouncementContext = createContext<AnnouncementContextType>({
  isVisible: true,
  setIsVisible: () => {},
});

export const useAnnouncement = () => useContext(AnnouncementContext);

export function AnnouncementProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isVisible, setIsVisible] = useState(true);

  return (
    <AnnouncementContext.Provider value={{ isVisible, setIsVisible }}>
      {children}
    </AnnouncementContext.Provider>
  );
}
