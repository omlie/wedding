import { ReactNode, useState } from "react";
import { useLocale } from "~/hooks";
import { labels } from "~/i18n";

type TRadioValue = "Yes" | "No";

const RadioButtons = ({
  label,
  id,
  onChange,
  required,
  yesLabel,
  noLabel,
}: {
  label: ReactNode;
  id: string;
  onChange?: (value: string) => void;
  required: boolean;
  yesLabel?: string;
  noLabel?: string;
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
          required={required}
        />
        <label htmlFor={`yes-${id}`}>{yesLabel ?? labels[locale].yes}</label>

        <input
          id={`no-${id}`}
          value="No"
          type="radio"
          onChange={handleChange}
          checked={selected === "No"}
          name={id}
          required={required}
        />
        <label htmlFor={`no-${id}`} onChange={handleChange}>
          {noLabel ?? labels[locale].no}
        </label>
      </div>
    </div>
  );
};

export default RadioButtons;
