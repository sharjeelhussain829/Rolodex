import React from "react";

function ProductTextFeild({
  value,
  name,
  placeholder,
  inputType,
  error,
  label,
  maxLength,
  minLength,
  validate,
  className,
  styleInput,
  styleLabel,
  required,
  pattern,
  onChange,
}: any) {
  return (
    <div className={`w-full ${className}`}>
      <label
        htmlFor={name}
        className={`block text-sm font-semibold ${styleLabel}`}
      >
        {label}
      </label>
      <input
        pattern={pattern}
        name={name}
        type={inputType}
        value={value}
        placeholder={placeholder}
        className={`w-full border-2 border-gray-200 focus:ring-0 mt-1 p-3 !py-2.5 focus:ring-primary !outline-none focus:border-primary block shadow-sm sm:text-sm rounded-lg ${styleInput} ${
          error?.length ? "!border-[8px] outline-2 !border-red-700" : ""
        }`}
        onChange={onChange}
      />
      <span className="text-red-400 block text-[12px] mt-1 font-poppin font-normal">
        {error}
      </span>
    </div>
  );
}

export default ProductTextFeild;
