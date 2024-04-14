import { useState, useEffect } from "react";
import { SpinnerGap } from "@phosphor-icons/react";

export const useDebounce = (value = "", delay = 1000) => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const id = setTimeout(() => {
      console.log("setting");
      setDebouncedValue(value);
    }, delay);

    return () => {
      console.log("clearing");
      clearTimeout(id);
    };
  }, [value, delay]);
  return debouncedValue;
};
