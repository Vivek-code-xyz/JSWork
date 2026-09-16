import {useState} from 'react';


/**
 * # useToggle
 * A generic hook to manage boolean **on/off** state.
 *
 * @param {boolean} [initialValue=false]
 * - **initialValue** - the starting value of the toggle (defaults to `false`)
 *
 * @returns {object}
 * - **isOn** - current boolean state of the toggle
 * - **toggle** - flips the current value (true → false, false → true)
 * - **setTrue** - forces the value to true, regardless of current state
 * - **setFalse** - forces the value to false, regardless of current state
 *
 * @example
 * How to use :
 * const { isOn, toggle, setTrue, setFalse } = useToggle();
 * const { isOn, toggle, setTrue, setFalse } = useToggle(initialValue = true/false);
 */
const useToggle = (initialValue = false) =>{

    const [value, setValue] = useState(initialValue);

    const toggle = () => setValue(prevValue => !prevValue);

    const setTrue = () => setValue(true);
    const setFalse = () => setValue(false);

    return{
        isOn : value,
        toggle,
        setTrue,
        setFalse
    }
}