type TInputType = "text" | "textarea";

const Input = ({
  label,
  id,
  type = "text",
  required = false,
}: {
  label: string;
  id: string;
  type?: TInputType;
  required?: boolean;
}) => {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={id}>{label}</label>
      {type === "text" ? (
        <input
          className="p-2 text-black border-2 border-blue-dark rounded-5xl"
          type="text"
          id={id}
          name={id}
          required={required}
          autoComplete="off"
        />
      ) : (
        <textarea
          className="p-2 text-black border-2 border-blue-dark rounded-5xl"
          id={id}
          name={id}
          required={required}
          autoComplete="off"
        />
      )}
    </div>
  );
};

export default Input;
