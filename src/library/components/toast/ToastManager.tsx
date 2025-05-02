import React from "react";
import Toast from "./Toast";

type ToastProps = {
  toasts: { id: number; message: string; type: "success" | "info" | "error" }[];
  setToasts: (toasts: any[]) => void;
};

const ToastManager: React.FC<ToastProps> = ({ toasts, setToasts }) => {
  const removeToast = (id: number) => {
    setToasts(toasts.filter((toast) => toast.id !== id));
  };

  return (
    <div className="fixed top-5 left-1/2 transform -translate-x-1/2 z-50 w-full flex flex-col items-center pointer-events-none">
      <div className="flex flex-col items-center space-y-3 max-w-[90%] sm:max-w-[60%]">
        {toasts.map((toast) => (
          <div key={toast.id} className="pointer-events-auto w-full">
            <Toast
              message={toast.message}
              type={toast.type}
              onClose={() => removeToast(toast.id)}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ToastManager;
