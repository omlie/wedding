import Fuse from "fuse.js";
import { ChangeEvent, KeyboardEvent, useEffect, useRef, useState } from "react";
import { TGuest } from "~/types/shared";
import ArrowRight from "remixicon-react/ArrowRightLineIcon";

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
  const topInListRef = useRef<HTMLButtonElement>(null);

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

  const handleEnter = (e: KeyboardEvent<HTMLInputElement>) => {
    if (showSuggestions && e.key === "Enter") {
      e.preventDefault();
      setValue(filteredGuests[0].name);
    }
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
        onKeyDown={handleEnter}
      />
      {showSuggestions && (
        <div className="flex flex-col w-full bg-white rounded-b-5xl">
          {filteredGuests.map((x, index) => (
            <button
              key={x.name}
              ref={index === 0 ? topInListRef : null}
              type="button"
              onClick={() => setValue(x.name)}
              className="relative w-full p-2 hover:bg-pink-accent rounded-b-5xl"
            >
              {x.name}
              <ArrowRight className="absolute top-2 right-4" />
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default AutoCompleteInput;
