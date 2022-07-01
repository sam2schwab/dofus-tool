import React, { useState } from "react";
import { useDebouncyEffect as useDebounce } from "use-debouncy";
import { HexColorInput, HexColorPicker } from "react-colorful";
import { TextInput } from "flowbite-react";

type Props = {
  color: string;
  onChange: (value: string) => void;
};

export const DebouncedPicker = ({ color, onChange }: Props) => {
  const [value, setValue] = useState(color);

  useDebounce(() => onChange(value), 200, [value]);

  return (
    <div className="flex flex-col gap-1 items-start">
      <HexColorPicker color={value} onChange={setValue}/>
      <TextInput value={value} onChange={(e) => setValue(e.target.value)}/>
    </div>
  );
};
