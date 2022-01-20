import { ReactNode, useState } from "react";
import { useLocale } from "~/hooks";
import { labels } from "~/i18n";

type TRadioValue = "Yes" | "No";

const RadioButtons = ({
  label,
  id,
  onChange,
}: {
  label: ReactNode;
  id: string;
  onChange?: (value: string) => void;
}) => {
  const locale = useLocale();
  const [selected, setSelected] = useState<string | undefined>();

  const handleChange = (e: any) => {
    setSelected(e.target.value);

    if (onChange) {
      onChange(e.target.value);
    }
  };

  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <div id={id} className="flex items-center gap-4">
        <input
          id={`yes-${id}`}
          value="Yes"
          type="radio"
          onChange={handleChange}
          checked={selected === "Yes"}
          name={id}
          required
        />
        <label htmlFor={`yes-${id}`}>{labels[locale].yes}</label>

        <input
          id={`no-${id}`}
          value="No"
          type="radio"
          onChange={handleChange}
          checked={selected === "No"}
          name={id}
          required
        />
        <label htmlFor={`no-${id}`} onChange={handleChange}>
          {labels[locale].no}
        </label>
      </div>
    </div>
  );
};

export default RadioButtons;
