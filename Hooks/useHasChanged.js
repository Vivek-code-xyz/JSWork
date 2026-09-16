import usePrevious from './usePrevious';


/**
 * # useHasChanged
 * A generic hook that returns whether a value has **changed**
 * since the last render — built on top of `usePrevious`.
 * Useful for triggering effects, animations, or logs only when
 * a specific value actually differs from before.
 *
 * @param {*} value
 * - **value** - the current value to watch for changes; can be any type
 *
 * @returns {boolean}
 * - **true** if the value differs from the previous render's value
 * - **false** if the value is unchanged (or this is the first render)
 *
 * @example
 * const hasChanged = useHasChanged(isOpen);
 * // hasChanged -> true only on the render right after isOpen flips
 */
const useHasChanged = (value) => {

    const prev = usePrevious(value)

    return prev!==value

};

export default useHasChanged;