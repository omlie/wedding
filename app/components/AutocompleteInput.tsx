import Fuse from "fuse.js";
import { ChangeEvent, useEffect, useState } from "react";
import { TGuest } from "~/types/shared";

const AutoCompleteInput = ({
  label,
  id,
  guests,
  required = false,
  onChange,
}: {
  label: string;
  id: string;
  guests: TGuest[];
  required?: boolean;
  onChange?: (result?: TGuest) => void;
}) => {
  const [value, setValue] = useState<string>("");
  const [showSuggestions, setShowSuggestions] = useState<boolean>(false);
  const [filteredGuests, setFilteredGuests] = useState<TGuest[]>(guests);

  useEffect(() => {
    if (
      (filteredGuests.length === 1 && value !== filteredGuests[0].name) ||
      (filteredGuests.length < 4 &&
        filteredGuests.length > 1 &&
        value.length > 3)
    ) {
      setShowSuggestions(true);
    } else {
      setShowSuggestions(false);
    }
  }, [value, filteredGuests]);

  useEffect(() => {
    const fuzzy = new Fuse(guests, {
      keys: ["name"],
      threshold: 0.3,
    });

    const searched = fuzzy.search(value).map((x) => x.item);
    setFilteredGuests(searched);
  }, [value]);

  useEffect(() => {
    if (onChange) {
      if (value === filteredGuests?.[0]?.name) {
        onChange(filteredGuests[0]);
      } else {
        onChange(undefined);
      }
    }
  }, [value, filteredGuests]);

  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    setShowSuggestions(false);
  };

  return (
    <div className="flex flex-col">
      <label htmlFor={id} className="mb-2">
        {label}
      </label>
      <input
        autoComplete="off"
        className="p-2 text-black border-2 border-blue-dark rounded-5xl"
        type="text"
        id={id}
        name={id}
        required={required}
        onChange={handleInput}
        value={value}
      />
      {showSuggestions && (
        <div className="flex flex-col w-full bg-white rounded-b-5xl">
          {filteredGuests.map((x) => (
            <button
              key={x.name}
              type="button"
              onClick={() => setValue(x.name)}
              className="w-full p-2 hover:bg-pink-accent rounded-b-5xl"
            >
              {x.name}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default AutoCompleteInput;
