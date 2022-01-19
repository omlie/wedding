import { useState } from "react";

type TInputType = "text" | "textarea";

const Input = ({
  label,
  id,
  onChange,
  defaultValue,
  type = "text",
  required = false,
}: {
  label: string;
  id: string;
  onChange?: () => void;
  defaultValue?: string;
  type?: TInputType;
  required?: boolean;
}) => {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={id}>{label}</label>
      {type === "text" ? (
        <input
          className="p-2 text-black"
          type="text"
          id={id}
          name={id}
          onChange={onChange}
          defaultValue={defaultValue}
          required={required}
        />
      ) : (
        <textarea
          className="p-2 text-black"
          id={id}
          name={id}
          onChange={onChange}
          defaultValue={defaultValue}
          required={required}
        />
      )}
    </div>
  );
};

export default Input;
