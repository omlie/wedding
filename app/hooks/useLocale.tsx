import React, { useContext, useState } from "react";
import { TLocale } from "~/types/shared";

interface TLocaleContextProps {
  locale: TLocale;
  children: React.ReactNode;
}

const LocaleContext = React.createContext<TLocale>("en-AU");

export const LocaleProvider = ({ locale, children }: TLocaleContextProps) => {
  return (
    <LocaleContext.Provider value={locale}>{children}</LocaleContext.Provider>
  );
};

export const useLocale = () => useContext(LocaleContext);
