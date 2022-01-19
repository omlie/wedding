import { ReactNode, useState } from "react";

type TRadioValue = "Yes" | "No";

const RadioButtons = ({
  label,
  id,
  defaultValue,
}: {
  label: ReactNode;
  id: string;
  defaultValue?: TRadioValue;
}) => {
  const [selected, setSelected] = useState<string | undefined>(defaultValue);

  const handleChange = (e: any) => {
    setSelected(e.target.value);
  };

  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <div id={id} className="flex items-center gap-4">
        <input
          id="yes"
          value="Yes"
          type="radio"
          onChange={handleChange}
          checked={selected === "Yes"}
          name={id}
          required
        />
        <label htmlFor="yes">Yes</label>

        <input
          id="no"
          value="No"
          type="radio"
          onChange={handleChange}
          checked={selected === "No"}
          name={id}
          required
        />
        <label htmlFor="no" onChange={handleChange}>
          No
        </label>
      </div>
    </div>
  );
};

export default RadioButtons;
