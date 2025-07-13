import React, { useState } from "react";

interface FloatingInputProps {
  label: string;
  type?: string;
  name: string;
  value: string;
  onChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  isTextarea?: boolean;
  required?: boolean;
  errorMessage?: string;
  isActive?: boolean;
}

const FloatingInput: React.FC<FloatingInputProps> = ({
  label,
  type = "text",
  name,
  value,
  onChange,
  isTextarea = false,
  required = false,
  errorMessage,
  isActive,
}) => {
  const [isFocus, setIsFocus] = useState(false);

  const handleFocus = () => setIsFocus(true);
  const handleBlur = () => {
    if (value.length === 0) {
      setIsFocus(false);
    }
  };

  const isActiveOrFocused = isFocus || isActive;

  return (
    <div className="relative w-full group">
      {/* Input Container */}
      <div
        className={`relative overflow-hidden rounded-xl border transition-all duration-300 ${
          errorMessage
            ? "border-red-500/50 bg-red-500/5"
            : isActiveOrFocused
            ? "border-purple-500/50 bg-purple-500/5"
            : "border-gray-600/50 bg-gray-800/50 hover:border-gray-500/50"
        }`}
      >
        {/* Gradient Border Effect */}
        <div
          className={`absolute inset-0 rounded-xl transition-opacity duration-300 ${
            isActiveOrFocused ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-purple-500/20 to-pink-500/20"></div>
        </div>

        {/* Input/Textarea */}
        <div className="relative">
          {isTextarea ? (
            <textarea
              id={name}
              name={name}
              rows={5}
              value={value}
              onChange={onChange}
              required={required}
              placeholder=""
              onFocus={handleFocus}
              onBlur={handleBlur}
              className="w-full p-4 pt-8 bg-transparent text-white rounded-xl outline-none placeholder-transparent resize-none text-sm sm:text-base transition-colors duration-300"
            />
          ) : (
            <input
              id={name}
              type={type}
              name={name}
              value={value}
              onChange={onChange}
              required={required}
              placeholder=""
              onFocus={handleFocus}
              onBlur={handleBlur}
              className="w-full p-4 pt-8 h-14 sm:h-16 bg-transparent text-white rounded-xl outline-none placeholder-transparent text-sm sm:text-base transition-colors duration-300"
            />
          )}
        </div>

        {/* Floating Label */}
        <label
          htmlFor={name}
          className={`absolute left-4 transition-all duration-300 pointer-events-none ${
            isActiveOrFocused
              ? "top-2 text-xs sm:text-sm text-purple-400 font-medium"
              : "top-4 text-sm sm:text-base text-gray-400"
          }`}
        >
          {label}
          {required && <span className="text-red-500 ml-1">*</span>}
        </label>

        {/* Focus Indicator */}
        {isActiveOrFocused && (
          <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-purple-500 to-pink-500"></div>
        )}
      </div>

      {/* Error Message */}
      {errorMessage && (
        <div className="flex items-center gap-1 mt-2 text-red-400 text-xs sm:text-sm">
          <svg
            className="w-4 h-4 flex-shrink-0"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              fillRule="evenodd"
              d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
              clipRule="evenodd"
            />
          </svg>
          <span>{errorMessage}</span>
        </div>
      )}
    </div>
  );
};

export default FloatingInput;
