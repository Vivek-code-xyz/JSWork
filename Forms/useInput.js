import { useState } from 'react';

/**
 * # useInput
 * A hook that manages a single controlled input's value, change handling,
 * and reset-to-initial behavior — removes the need to hand-write
 * `useState` + `onChange` boilerplate for every text field.
 *
 * @param {string} [initialValue='']
 * - **initialValue** - the starting value of the input (defaults to an empty string)
 *
 * @returns {object}
 * - **value** - the current string value of the input
 * - **onChange** - `(e) => void` — pass directly to an `<input>`'s `onChange` prop
 * - **reset** - `() => void` — resets the value back to `initialValue`
 *
 * @example
 * const { value, onChange, reset } = useInput('');
 * <input value={value} onChange={onChange} />
 * <button onClick={reset}>Clear</button>
 */
const useInput = (initialValue = '') => {
    const [value, setValue] = useState(initialValue);

    const onChange = (e) => {
        // update value using what the user typed
        setValue(e.target.value)
    };

    const reset = () => {
        // reset value back to initialValue
        setValue(initialValue)
    };

    return { value, onChange, reset };
};

export default useInput;