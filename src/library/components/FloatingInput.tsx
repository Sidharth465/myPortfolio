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

  return (
    <div className="relative w-full ">
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
          className="w-full p-2 pt-6 bg-gray-800 text-white rounded-lg outline-none placeholder-transparent resize-none"
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
          className="w-full p-2 h-[50px] bg-gray-800 text-white rounded-lg outline-none placeholder-transparent"
        />
      )}
      <label
        htmlFor={name}
        className={`absolute left-3 top-2 text-base text-gray-400 transition-all duration-300 
        ${
          isFocus || isActive
            ? "-top-3 text-sm text-purple-400"
            : "top-3 text-base text-gray-white"
        }`}
      >
        {label}
      </label>

      {errorMessage && (
        <p className="text-red-500 text-xs mt-1">{errorMessage}</p>
      )}
    </div>
  );
};

export default FloatingInput;
