"use client";

import { createContext, useContext } from "react";
import { UseFormReturn, FieldValues } from "react-hook-form";

const FormContext = createContext<UseFormReturn<any> | null>(null);

export function FormProvider({
  children,
  form,
}: {
  children: React.ReactNode;
  form: UseFormReturn<any>;
}) {
  return <FormContext.Provider value={form}>{children}</FormContext.Provider>;
}

export function useFormContextSafe<TFieldValues extends FieldValues = any>() {
  const ctx = useContext(FormContext);
  if (!ctx) throw new Error("FormContext used outside provider");
  return ctx as UseFormReturn<TFieldValues>;
}
