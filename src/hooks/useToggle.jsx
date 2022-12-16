import { useState, useCallback } from 'react';

const useToggle = (initValue = false) => {
  const [value, setValue] = useState(initValue);

  const toggle = useCallback(() => setValue((v) => !v), []);
  const toggleOn = useCallback(() => setValue(true), []);
  const toggleOff = useCallback(() => setValue(false), []);
  return { value, toggleOn, toggleOff, toggle };
};

export default useToggle;
