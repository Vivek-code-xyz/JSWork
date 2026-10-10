import { useState, useEffect } from 'react';

/**
 * # useDebounce
 * A generic hook that returns a **delayed copy** of a fast-changing value,
 * updating only after the value has stopped changing for `delay` ms.
 * Useful for search boxes, live validation, resize handlers, or anywhere
 * you want to avoid reacting to every single keystroke or change.
 *
 * @param {*} value
 * - **value** - the fast-changing value to debounce; can be any type
 * @param {number} [delay=500]
 * - **delay** - how long (in ms) the value must stay unchanged before the debounced copy updates
 *
 * @returns {*}
 * - the debounced value: same as `value`, but lagging behind until changes pause for `delay` ms
 *
 * @example
 * const { value, onChange } = useInput('');
 * const debouncedSearch = useDebounce(value, 300);
 * // typing "react" quickly -> debouncedSearch updates once, 300ms after the last keystroke
 */
const useDebounce = (value, delay = 500) => {
  // TODO: create a state called debouncedValue, starting as `value`
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    // TODO: start a setTimeout that updates debouncedValue to `value` after `delay` ms
    const timerId = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    // TODO: return a cleanup function that cancels that timeout
    return () => {
      clearTimeout(timerId);
    };
  }, [value, delay]);

  // TODO: return debouncedValue
  return debouncedValue;
};

export default useDebounce;