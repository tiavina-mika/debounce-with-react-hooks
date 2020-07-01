import React, { useState, useEffect, useCallback } from 'react';
import "./styles.css";

export const useDebouncedEffect = (effect, delay , deps) => {
    const callback = useCallback(effect, deps);

    useEffect(() => {
        const handler = setTimeout(() => {
            callback();
        }, delay);

        return () => {
            clearTimeout(handler);
        };
    }, [callback, delay]);
}

const App = () => {
  const [value, setValue] = useState(0);

  useDebouncedEffect(() => console.log(value), 5000, [value]);

  return (
    <button onClick={() => setValue(value + 1)}>{value}</button>
  )
}
export default App;