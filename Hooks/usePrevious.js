import { useRef, useEffect } from 'react';

/**
 * # usePrevious
 * A generic hook that remembers the **previous value** of a variable
 * across renders — useful for comparing old vs new props/state,
 * detecting changes, or displaying "previously: X" in a UI.
 *
 * @param {*} value
 * - **value** - the current value to track; can be any type
 *
 * @returns {*}
 * - returns the value from the **previous render**, or `undefined` on the first render
 *
 * @example
 * const prevCount = usePrevious(count);
 * // On first render: prevCount -> undefined
 * // After count changes from 0 to 5: prevCount -> 0
 */
const usePrevious = (value) => {
    
    const ref = useRef();

    
    useEffect(() => {
        ref.current = value
    }, [value])

    return ref.current
};

export default usePrevious;
