import { useState, useEffect } from "react";
import { SpinnerGap } from "@phosphor-icons/react";

export const useDebounce = (value = "", delay = 1000) => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const id = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(id);
    };
  }, [value, delay]);
  return debouncedValue;
};
