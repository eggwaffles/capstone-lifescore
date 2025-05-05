"use client";

import React, { createContext, useContext, useState } from "react";

interface PageCompletionContextProps {
  pageCompletion: Record<string, boolean>;
  setPageCompletion: (page: string, isComplete: boolean) => void;
}

const PageCompletionContext = createContext<PageCompletionContextProps | undefined>(undefined);

export const PageCompletionProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [pageCompletion, setPageCompletionState] = useState<Record<string, boolean>>({});

  const setPageCompletion = (page: string, isComplete: boolean) => {
    setPageCompletionState((prev) => ({ ...prev, [page]: isComplete }));
  };

  return (
    <PageCompletionContext.Provider value={{ pageCompletion, setPageCompletion }}>
      {children}
    </PageCompletionContext.Provider>
  );
};

export const usePageCompletion = (): PageCompletionContextProps => {
  const context = useContext(PageCompletionContext);
  if (!context) {
    throw new Error("usePageCompletion must be used within a PageCompletionProvider");
  }
  return context;
};
