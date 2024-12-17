import { useState, useEffect } from "react";
import type { CharacterLimitedTextareaProps } from "@/types/summary";

import { Textarea } from "@/components/ui/textarea";

export function CharacterLimitedTextarea({
  maxChars,
  placeholder,
  name,
  id,
  value,
  onChange,
}: CharacterLimitedTextareaProps) {
  const [charCount, setCharCount] = useState(0);

  useEffect(() => {
    setCharCount(value.length);
  }, [value]);

  const handleInput = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newValue = e.target.value;
    if (newValue.length <= maxChars) {
      onChange(newValue);
      setCharCount(newValue.length);
    }
  };

  return (
    <div className="space-y-2">
      <Textarea
        placeholder={placeholder}
        className="min-h-[150px] resize-none"
        required
        name={name}
        id={id}
        value={value}
        onChange={handleInput}
      />
      <div className="text-sm text-gray-500 text-right">
        {maxChars - charCount} characters left
      </div>
    </div>
  );
}
