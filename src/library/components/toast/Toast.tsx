import React, { useEffect } from "react";

type ToastProps = {
  message: string;
  type: "success" | "info" | "error";
  duration?: number;
  onClose: () => void;
};

const Toast: React.FC<ToastProps> = ({
  message,
  type,
  duration = 1500,
  onClose,
}) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, duration);

    return () => clearTimeout(timer);
  }, [duration, onClose]);

  // Determine border color based on the type
  const borderColor = {
    success: "border-green-500",
    info: "border-blue-500",
    error: "border-red-500",
  }[type];

  return (
    <div
      onClick={onClose}
      className={`bg-white min-w-[25%] text-black px-4 py-2 rounded shadow-lg mb-2 animate-fade-in-out border-l-8 ${borderColor}`}
    >
      {message}
    </div>
  );
};

export default Toast;
