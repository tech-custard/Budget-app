import * as React from "react";
import { ModalContextType } from "@interfaces/modal";

const ModalContext = React.createContext<ModalContextType | null>(null);

export const ModalProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [openModal, setOpenModal] = React.useState(false);

  return (
    <ModalContext.Provider value={{ openModal, setOpenModal }}>
      {children}
    </ModalContext.Provider>
  );
};

export const useModalContext = (): ModalContextType => {
  const context = React.useContext(ModalContext);
  if (!context)
    throw new Error("Modal context can only be used within modal provider");
  return context;
};
