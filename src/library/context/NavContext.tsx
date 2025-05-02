import ToastManager from "@library/components/toast/ToastManager";
import React, { createContext, useContext, useState } from "react";

// Define the context shape
interface NavContextType {
  activeSection: string;
  setActiveSection: (section: string) => void;
  showToast: ({ message, type }: ToastProps) => void;
}
type ToastProps = {
  message: string;
  type: "success" | "info" | "error";
};

// Create context with default values
const NavContext = createContext<NavContextType | null>(null);

// Create provider component
export const NavProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [activeSection, setActiveSection] = useState("#home");
  const [toasts, setToasts] = useState<
    { id: number; message: string; type: "success" | "info" | "error" }[]
  >([]);
  const showToast = ({ message, type }: ToastProps) => {
    const id = Date.now();
    setToasts((prevToasts) => [...prevToasts, { id, message, type }]);
  };

  return (
    <NavContext.Provider value={{ activeSection, setActiveSection, showToast }}>
      {children}
      <ToastManager toasts={toasts} setToasts={setToasts} />
    </NavContext.Provider>
  );
};

// Custom hook to use NavContext
export const useNavContext = () => {
  const context = useContext(NavContext);
  if (!context) {
    throw new Error("useNavContext must be used within a ModalProvider");
  }
  return context;
};
