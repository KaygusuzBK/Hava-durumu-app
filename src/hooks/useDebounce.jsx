import { useState, useEffect } from "react";

export const useDebounce = (value = "", delay = 500) => {
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
